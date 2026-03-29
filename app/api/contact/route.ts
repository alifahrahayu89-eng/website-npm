import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ratelimit } from "@/lib/rateLimit";
import { adminTemplate, autoReplyTemplate } from "@/lib/emailTemplate";

// ===============================
// CONFIGURATION
// ===============================
const ADMIN_EMAIL = "info@nusantaramitrapersada.co.id";
const DEV_MODE = false;

const FROM_EMAIL =
  "Nusantara Mitra Persada <info@nusantaramitrapersada.co.id>";

// ===============================
// SPAM KEYWORDS
// ===============================
const SPAM_KEYWORDS = [
  "viagra",
  "casino",
  "slot",
  "bitcoin",
  "crypto",
  "loan cepat",
  "pinjaman cepat",
  "sex",
  "porn",
];

// ===============================
// BLOCK TEMP EMAIL
// ===============================
const BLOCKED_EMAIL_DOMAINS = [
  "tempmail.com",
  "10minutemail.com",
  "mailinator.com",
  "guerrillamail.com",
  "trashmail.com",
];

// ===============================
// MAIN HANDLER
// ===============================
export async function POST(req: Request) {
  try {
    // ===============================
    // ENV SAFETY
    // ===============================
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY belum diset");
    }

    if (!process.env.RECAPTCHA_SECRET_KEY) {
      throw new Error("RECAPTCHA_SECRET_KEY belum diset");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // ===============================
    // GET BODY
    // ===============================
    const body = await req.json();

    const {
      nama,
      email,
      telepon,
      perusahaan,
      inquiry,
      pesan,
      token,
      lang,
    } = body;

    const language = lang || "id";

    // ===============================
    // VALIDATION
    // ===============================
    if (!nama || !email || !pesan) {
      return NextResponse.json(
        { error: "Data tidak lengkap." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Email tidak valid." },
        { status: 400 }
      );
    }

    if (!token) {
      return NextResponse.json(
        { error: "Token tidak ditemukan." },
        { status: 400 }
      );
    }

    // ===============================
    // BLOCK TEMP EMAIL
    // ===============================
    const emailDomain = email.split("@")[1]?.toLowerCase();

    if (BLOCKED_EMAIL_DOMAINS.includes(emailDomain)) {
      return NextResponse.json(
        { error: "Email tidak diperbolehkan." },
        { status: 400 }
      );
    }

    // ===============================
    // GET IP
    // ===============================
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    // ===============================
    // RATE LIMIT (IP + EMAIL)
    // ===============================
    try {
      const ipCheck = await ratelimit.limit(ip);
      const emailCheck = await ratelimit.limit(email);

      if (!ipCheck.success || !emailCheck.success) {
        return NextResponse.json(
          { error: "Terlalu banyak request." },
          { status: 429 }
        );
      }
    } catch (err) {
      console.warn("Rate limit bypass (Redis belum aktif)");
    }

    // ===============================
    // NORMALIZE MESSAGE
    // ===============================
    const normalizedMessage = pesan
      .toLowerCase()
      .replace(/\s+/g, " ");

    // ===============================
    // SPAM FILTER
    // ===============================
    const isSpam = SPAM_KEYWORDS.some((word) =>
      normalizedMessage.includes(word)
    );

    if (isSpam) {
      return NextResponse.json(
        { error: "Pesan terdeteksi sebagai spam." },
        { status: 400 }
      );
    }

    // ===============================
    // DETECT LINK SPAM
    // ===============================
    const hasLink = /https?:\/\/|www\./i.test(pesan);

    if (hasLink) {
      return NextResponse.json(
        { error: "Link tidak diperbolehkan." },
        { status: 400 }
      );
    }

    // ===============================
    // MESSAGE LENGTH CHECK
    // ===============================
    if (pesan.length < 10) {
      return NextResponse.json(
        { error: "Pesan terlalu singkat." },
        { status: 400 }
      );
    }

    if (pesan.length > 1000) {
      return NextResponse.json(
        { error: "Pesan terlalu panjang." },
        { status: 400 }
      );
    }

    // ===============================
    // LOG ACTIVITY
    // ===============================
    console.log("CONTACT FORM:", {
      ip,
      email,
      nama,
      waktu: new Date().toISOString(),
    });

    // ===============================
    // VERIFY RECAPTCHA
    // ===============================
    const verify = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const captchaData = await verify.json();

    if (!captchaData.success || captchaData.score < 0.5) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // ===============================
    // SEND EMAIL TO ADMIN
    // ===============================
    const adminResponse = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject:
        language === "id"
          ? `Inquiry Baru - ${inquiry || "Website Contact"}`
          : `New Inquiry - ${inquiry || "Website Contact"}`,
      html: adminTemplate(body, language),
    });

    if (adminResponse.error) {
      throw new Error(adminResponse.error.message);
    }

    // ===============================
    // AUTO REPLY
    // ===============================
    const autoReplyTo = DEV_MODE ? ADMIN_EMAIL : email;

    const autoReplyResponse = await resend.emails.send({
      from: FROM_EMAIL,
      to: autoReplyTo,
      subject:
        language === "id"
          ? "Terima Kasih atas Inquiry Anda"
          : "Thank You for Your Inquiry",
      html: autoReplyTemplate(body, language),
    });

    if (autoReplyResponse.error) {
      console.error("AUTO REPLY ERROR:", autoReplyResponse.error);
    }

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        error:
          error.message ||
          "Terjadi kesalahan pada server. Silakan coba lagi.",
      },
      { status: 500 }
    );
  }
}