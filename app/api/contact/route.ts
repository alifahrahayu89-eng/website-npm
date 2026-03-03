import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ratelimit } from "@/lib/rateLimit";
import { adminTemplate, autoReplyTemplate } from "@/lib/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

// ===============================
// CONFIGURATION
// ===============================
const ADMIN_EMAIL = "alifahrahayu89@gmail.com";

// DEV MODE:
// true  = semua email dikirim ke ADMIN saja (hindari 403 resend)
// false = auto reply dikirim ke user asli (setelah domain verified)
const DEV_MODE = true;

// Ganti ini nanti setelah domain verified
const FROM_EMAIL = "CV Nusantara <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    // ===============================
    // RATE LIMIT
    // ===============================
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { error: "Terlalu banyak request." },
        { status: 429 }
      );
    }

    // ===============================
    // GET BODY
    // ===============================
    const body = await req.json();
    const { nama, email, telepon, perusahaan, inquiry, pesan, token } = body;

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
      subject: `Inquiry Baru - ${inquiry || "Website Contact"}`,
      html: adminTemplate(body),
    });

    if (adminResponse.error) {
      throw new Error(adminResponse.error.message);
    }

    // ===============================
    // AUTO REPLY (SAFE DEV MODE)
    // ===============================
    const autoReplyTo = DEV_MODE ? ADMIN_EMAIL : email;

    const autoReplyResponse = await resend.emails.send({
      from: FROM_EMAIL,
      to: autoReplyTo,
      subject: DEV_MODE
        ? "AUTO REPLY PREVIEW (DEV MODE)"
        : "Terima Kasih atas Inquiry Anda",
      html: autoReplyTemplate(body),
    });

    if (autoReplyResponse.error) {
      console.error("AUTO REPLY ERROR:", autoReplyResponse.error);
    }

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      { error: error.message || "Server error" },
      { status: 500 }
    );
  }
}