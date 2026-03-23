// lib/emailTemplate.ts

import { dictionary } from "@/lib/dictionary";

const primary = "#0f172a";
const accent = "#d4af37";
const accentSoft = "#f6e7b2";
const light = "#f8fafc";

const BASE_URL = "https://www.nusantaramitrapersada.co.id/";
const LOGO_URL = `${BASE_URL}/logo.png`;

function layout(content: string, lang: "id" | "en" = "id") {
  return `
  <div style="background:${light};padding:40px 20px;font-family:Arial,Helvetica,sans-serif;">

    <div style="
      max-width:640px;
      margin:0 auto;
      background:#ffffff;
      border-radius:16px;
      overflow:hidden;
      border:1px solid #e5e7eb;
    ">

      <!-- GRADIENT GOLD BAR -->
      <div style="
        height:6px;
        background:linear-gradient(90deg,#d4af37,#f6e7b2,#d4af37);
      "></div>

      <!-- HEADER -->
      <div style="padding:28px 30px;border-bottom:2px solid ${accent};">

        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>

            <td width="100">
              <img src="${LOGO_URL}" width="92" style="display:block;">
            </td>

            <td width="6">
              <div style="width:2px;height:60px;background:${accent};margin:auto;"></div>
            </td>

            <td style="padding-left:18px;">

              <div style="
                font-size:20px;
                font-weight:700;
                color:${primary};
                letter-spacing:0.3px;
              ">
                CV Nusantara Mitra Persada
              </div>

              <div style="
                font-size:12px;
                margin-top:6px;
                color:#64748b;
                letter-spacing:1px;
                text-transform:uppercase;
              ">
                GENERAL TRADING • SUPPLIER • TECHNICAL SERVICE
              </div>

            </td>

          </tr>
        </table>

      </div>

      <!-- CONTENT -->
      <div style="padding:32px;">
        ${content}
      </div>

      <!-- GOLD DIVIDER -->
      <div style="height:2px;background:${accent};margin:0 30px;"></div>

      <!-- SIGNATURE CARD -->
      <div style="padding:28px 30px;background:#ffffff;">

        <div style="
          font-size:15px;
          font-weight:bold;
          color:${primary};
        ">
          Alifah Rahayu
        </div>

        <div style="
          font-size:12px;
          color:#64748b;
          margin-top:4px;
          letter-spacing:0.4px;
        ">
          CHIEF EXECUTIVE OFFICER
        </div>

        <div style="margin-top:18px;">

          <table cellpadding="0" cellspacing="0" style="font-size:13px;color:#334155;line-height:1.8;">

            <tr>
              <td colspan="2" style="font-weight:bold;padding-bottom:6px;">
                CV Nusantara Mitra Persada
              </td>
            </tr>

            <tr>
              <td width="22">📍</td>
              <td>
                Jl. Raya Serang KM 13.8, Pasir Jaya Cikupa<br/>
                Tangerang, Banten, Indonesia
              </td>
            </tr>

            <tr>
              <td>☎</td>
              <td>0812-8787-0356</td>
            </tr>

            <tr>
              <td>✉</td>
              <td>
                <a href="mailto:info@nusantaramitrapersada.co.id"
                style="color:${accent};text-decoration:none;">
                info@nusantaramitrapersada.co.id
                </a>
              </td>
            </tr>

            <tr>
              <td>🌐</td>
              <td>
                <a href="https://www.nusantaramitrapersada.co.id"
                style="color:${accent};text-decoration:none;">
                www.nusantaramitrapersada.co.id
                </a>
              </td>
            </tr>

          </table>

        </div>

      </div>

      <!-- FOOTER -->
      <div style="
        background:${primary};
        color:white;
        padding:30px;
      ">

       <div style="
  font-weight:bold;
  letter-spacing:1px;
">
  ${
    lang === "id"
      ? "KOMUNIKASI RESMI PERUSAHAAN"
      : "OFFICIAL CORPORATE COMMUNICATION"
  }
</div>

<div style="
  height:2px;
  background:${accent};
  margin:16px 0 18px 0;
"></div>

<div style="
  font-size:12px;
  line-height:1.6;
  opacity:0.85;
">
  ${
    lang === "id"
      ? `
      Email ini dan lampirannya mungkin mengandung informasi rahasia dan dilindungi hukum.
      Jika Anda bukan penerima yang dituju, harap segera beri tahu pengirim dan hapus email ini.
      Penggunaan, penyebaran, atau penyalinan tanpa izin dilarang.
      `
      : `
      This email and any attachments may contain confidential and legally privileged information.
      If you are not the intended recipient, please notify the sender immediately and delete this message.
      Unauthorized use, disclosure, or copying is strictly prohibited.
      `
  }
</div>

<div style="
  margin-top:14px;
  font-size:11px;
  opacity:0.6;
">
  ${
    lang === "id"
      ? "© 2026 CV Nusantara Mitra Persada. Seluruh hak dilindungi."
      : "© 2026 CV Nusantara Mitra Persada. All rights reserved."
  }
</div>

      </div>

    </div>
  </div>
  `;
}

// ================= ADMIN EMAIL =================
export function adminTemplate(
  data: any,
  lang: "id" | "en" = "id"
) {
  const t = dictionary[lang].contact;

  const content = `

  <div style="
    font-size:18px;
    font-weight:600;
    color:${primary};
    margin-bottom:20px;
  ">
    ${lang === "id" ? "Permintaan Informasi Baru" : "New Information Request"}
  </div>

  <!-- INQUIRY TABLE -->
  <table width="100%" cellpadding="8" cellspacing="0" style="
    border:1px solid #e5e7eb;
    border-radius:8px;
    font-size:13px;
    color:#334155;
  ">

    <tr style="background:#f8fafc;">
      <td width="150"><strong>${t.fullName}</strong></td>
      <td>${data.nama}</td>
    </tr>

    <tr>
      <td><strong>${t.emailLabel}</strong></td>
      <td>${data.email}</td>
    </tr>

    <tr style="background:#f8fafc;">
      <td><strong>${t.phoneLabel}</strong></td>
      <td>${data.telepon || "-"}</td>
    </tr>

    <tr>
      <td><strong>${t.company}</strong></td>
      <td>${data.perusahaan || "-"}</td>
    </tr>

    <tr style="background:#f8fafc;">
      <td><strong>${t.inquiryType}</strong></td>
      <td>${data.inquiry || "-"}</td>
    </tr>

  </table>

  <!-- MESSAGE BOX -->
  <div style="
    margin-top:20px;
    padding:18px;
    border-radius:8px;
    background:#f1f5f9;
    border:1px solid #e2e8f0;
    font-size:13px;
    line-height:1.6;
  ">
    ${data.pesan}
  </div>

  `;

  return layout(content, lang);
}

// ================= AUTO REPLY =================
export function autoReplyTemplate(
  data: any,
  lang: "id" | "en" = "id"
) {

  const content = `
  <div style="
    font-size:18px;
    font-weight:600;
    color:${primary};
    margin-bottom:12px;
  ">
    ${
      lang === "id"
        ? `Terima Kasih, ${data.nama}`
        : `Thank You, ${data.nama}`
    }
  </div>

  <div style="
    font-size:14px;
    color:#334155;
    line-height:1.7;
  ">
    ${
      lang === "id"
        ? `
        Kami telah menerima pesan Anda melalui website resmi kami.

        Tim kami akan segera meninjau inquiry Anda dan menghubungi Anda
        dalam waktu dekat.

        Terima kasih atas kepercayaan Anda kepada
        <strong>CV Nusantara Mitra Persada</strong>.
        `
        : `
        We have received your message through our official website.

        Our team will review your inquiry and contact you shortly.

        Thank you for trusting
        <strong>CV Nusantara Mitra Persada</strong>.
        `
    }
  </div>
  `;

  return layout(content, lang);
}