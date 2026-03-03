// lib/emailTemplate.ts

const primary = "#0f172a";
const accent = "#d4af37";
const light = "#f8fafc";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const LOGO_URL = `${BASE_URL}/logo.png`;

function layout(content: string) {
  return `
  <div style="background:${light};padding:40px 20px;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 15px 40px rgba(0,0,0,0.08);">

      <!-- HEADER -->
      <div style="padding:25px 30px;border-bottom:1px solid #e5e7eb;background:#ffffff;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="width:90px;vertical-align:middle;">
              <img 
                src="${LOGO_URL}"
                alt="Company Logo" 
                width="80"
                style="display:block;height:auto;"
              />
            </td>
            <td style="vertical-align:middle;">
              <h2 style="margin:0;font-size:18px;color:${primary};">
                CV Nusantara Mitra Persada
              </h2>
              <div style="font-size:12px;color:#64748b;margin-top:4px;">
                GENERAL TRADING • SUPPLIER • TECHNICAL SERVICE
              </div>
            </td>
          </tr>
        </table>
      </div>

      <!-- CONTENT -->
      <div style="padding:30px;">
        ${content}
      </div>

      <!-- EMAIL SIGNATURE -->
      <div style="padding:30px;border-top:1px solid #e5e7eb;background:#ffffff;">
        <div style="font-weight:bold;color:${primary};font-size:15px;">
          Alifah Rahayu
        </div>
        <div style="font-size:12px;color:#475569;margin-top:4px;">
          CHIEF EXECUTIVE OFFICER
        </div>

        <div style="margin-top:15px;font-size:13px;color:#334155;line-height:1.6;">
          <strong>CV Nusantara Mitra Persada</strong><br/>
          Jl. Raya Serang KM 13.8, Pasir Jaya Cikupa, Tangerang, Banten, Indonesia<br/>
          Phone: 0812-8787-0356<br/>
          Email: <a href="mailto:info@nusantaramitrapersada.co.id" style="color:${accent};text-decoration:none;">
            info@nusantaramitrapersada.co.id
          </a><br/>
          Web: <a href="https://www.nusantaramitrapersada.co.id" style="color:${accent};text-decoration:none;">
            www.nusantaramitrapersada.co.id
          </a>
        </div>
      </div>

      <!-- FOOTER -->
      <div style="background:${primary};color:white;padding:30px;">
        <div style="font-weight:bold;letter-spacing:1px;">
          OFFICIAL CORPORATE COMMUNICATION
        </div>

        <div style="height:2px;background:${accent};margin:15px 0 20px 0;"></div>

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