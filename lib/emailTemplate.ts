// lib/emailTemplate.ts

const primary = "#0f172a";
const accent = "#d4af37"; // gold
const light = "#f8fafc";

const BASE_URL = "https://website-npm-v1jp.vercel.app";
const LOGO_URL = `${BASE_URL}/logo.png`;

function layout(content: string) {
  return `
  <div style="background:${light};padding:40px 20px;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">

      <!-- GOLD TOP BAR -->
      <div style="height:6px;background:${accent};"></div>

      <!-- HEADER -->
<div style="padding:28px 30px;border-bottom:2px solid ${accent};background:#ffffff;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>

      <td style="width:100px;vertical-align:middle;">
        <img 
          src="${LOGO_URL}"
          alt="Company Logo" 
          width="90"
          style="display:block;height:auto;"
        />
      </td>

      <!-- GOLD VERTICAL LINE -->
      <td style="width:6px;">
        <div style="width:2px;height:60px;background:${accent};margin:0 auto;"></div>
      </td>

      <td style="padding-left:18px;vertical-align:middle;">

        <!-- COMPANY NAME -->
        <div style="
          font-size:20px;
          font-weight:700;
          color:${primary};
          letter-spacing:0.3px;
        ">
          CV Nusantara Mitra Persada
        </div>

        <!-- TAGLINE -->
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

      <!-- GOLD LINE BEFORE SIGNATURE -->
      <div style="height:2px;background:${accent};margin:0 30px;"></div>

      <!-- SIGNATURE -->
<div style="padding:27px;background:#ffffff;">

  <div style="font-weight:bold;color:${primary};font-size:15px;">
    Alifah Rahayu
  </div>

  <div style="font-size:12px;color:#475569;margin-top:4px;">
    CHIEF EXECUTIVE OFFICER
  </div>

  <div style="margin-top:15px;font-size:13px;color:#334155;">

    <table cellpadding="0" cellspacing="0" style="line-height:1.8;">
      
      <tr>
        <td colspan="2" style="padding-bottom:3px;font-weight:bold;">
          CV Nusantara Mitra Persada
        </td>
      </tr>

      <tr>
        <td width="22" valign="top">📍</td>
        <td>
          Jl. Raya Serang KM 13.8, Pasir Jaya Cikupa,<br/>
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
      <div style="background:${primary};color:white;padding:32px;">
        <div style="font-weight:bold;letter-spacing:1px;">
          OFFICIAL CORPORATE COMMUNICATION
        </div>

        <div style="height:2px;background:${accent};margin:18px 0 22px 0;"></div>

        <div style="font-size:12px;line-height:1.6;opacity:0.85;">
          This email and any attachments may contain confidential and legally privileged information.
          If you are not the intended recipient, please notify the sender immediately and delete this message.
          Unauthorized use, disclosure, or copying is strictly prohibited.
        </div>

        <div style="margin-top:15px;font-size:11px;opacity:0.6;">
          © 2026 CV Nusantara Mitra Persada. All rights reserved.
        </div>
      </div>

    </div>
  </div>
  `;
}

export function adminTemplate(data: any) {

  const content = `
    <h3 style="margin-top:0;color:${primary};">
      New Official Website Inquiry
    </h3>

    <p><strong>Full Name:</strong> ${data.nama}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.telepon || "-"}</p>
    <p><strong>Company:</strong> ${data.perusahaan || "-"}</p>
    <p><strong>Inquiry Type:</strong> ${data.inquiry || "-"}</p>

    <div style="margin-top:20px;padding:20px;border-radius:10px;background:#f1f5f9;border:1px solid #e2e8f0;">
      ${data.pesan}
    </div>
  `;

  return layout(content);
}

export function autoReplyTemplate(data: any) {

  const content = `
    <h3 style="margin-top:0;color:${primary};">
      Terima Kasih, ${data.nama}
    </h3>

    <p>
      Kami telah menerima pesan Anda dan akan segera menghubungi Anda.
      Tim kami akan meninjau inquiry Anda dalam waktu dekat.
    </p>
  `;

  return layout(content);
}