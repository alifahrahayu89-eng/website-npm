import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generateCompanyProfilePDF = async () => {
  const pdf = new jsPDF("p", "mm", "a4");

  const createPage = async (html: string, isFirst = false) => {
    const container = document.createElement("div");
    container.style.width = "794px";
    container.style.height = "1123px";
    container.style.position = "fixed";
    container.style.left = "-9999px";
    container.innerHTML = html;

    document.body.appendChild(container);

    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    if (!isFirst) pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, 0, 210, 297);

    document.body.removeChild(container);
  };


  // ================= COVER =================

  await createPage(`
  <div style="
    width:100%;
    height:100%;
    position:relative;
    font-family:sans-serif;
    overflow:hidden;
  ">

    <!-- BACKGROUND IMAGE -->
    <img src="/profile/cover-pdf.png"
      style="
        position:absolute;
        width:100%;
        height:100%;
        object-fit:cover;
      "
    />

    <!-- LIGHT OVERLAY (BIAR TERANG) -->
    <div style="
      position:absolute;
      inset:0;
      background:linear-gradient(
        to bottom,
        rgba(255,255,255,0.45) 0%,
        rgba(59,130,246,0.15) 50%,
        rgba(15,23,42,0.6) 100%
      );
    "></div>

    <!-- LOGO (KIRI ATAS) -->
    <img src="/logo-cv.png"
      style="
        position:absolute;
        top:40px;
        left:40px;
        width:120px;
        height:auto;
        object-fit:contain;
        filter: drop-shadow(0 4px 10px rgba(0,0,0,0.4));
      "
    />

    <!-- GLOW EFFECT -->
    <div style="
      position:absolute;
      bottom:-100px;
      left:-200px;
      width:800px;
      height:800px;
      background:radial-gradient(circle, rgba(255,200,0,0.25), transparent 70%);
      filter:blur(120px);
    "></div>

    <!-- TEXT CONTENT -->
    <div style="
      position:absolute;
      bottom:80px;
      left:60px;
      color:white;
    ">

      <h1 style="
        font-size:64px;
        font-weight:800;
        margin:0;
      ">
        COMPANY
      </h1>

      <h1 style="
        font-size:64px;
        font-weight:800;
        color:#facc15;
        margin:0;
      ">
        PROFILE
      </h1>

      <p style="
  margin-top:24px;
  font-size:26px;
  font-weight:600;
  letter-spacing:2px;
  color:#ffffff;
  text-transform:uppercase;
">
  CV Nusantara Mitra Persada
</p>

      <!-- ACCENT BOX -->
      <div style="
        width:18px;
        height:18px;
        background:#facc15;
        margin-top:20px;
      "></div>

    </div>

  </div>
`, true);


// ================= ABOUT =================

 await createPage(`
  <div style="
    width:100%;
    height:100%;
    font-family:sans-serif;
    background:#f5f6f7;
    position:relative;
    overflow:hidden;
  ">

    <!-- LABEL -->
    <div style="
  position:absolute;
  top:0;
  left:60px;
  background:#2d5c63;
  color:white;

  padding:8px 36px 0 36px;
  height:54px;

  font-size:18px;
  letter-spacing:4px;
  font-weight:600;

  text-align:center;
">
  COMPANY PROFILE
</div>

    <!-- LOGO -->
    <img src="/logo-cv.png"
      style="
        position:absolute;
        top:35px;
        right:60px;
        width:120px;
      "
    />

    <!-- TITLE -->
    <div style="
      position:absolute;
      top:120px;
      left:60px;
    ">
      <h1 style="
        font-size:52px;
        font-weight:800;
        margin:0;
        color:#1e3a8a;
      ">
        TENTANG
      </h1>

      <h1 style="
        font-size:52px;
        font-weight:800;
        margin:0;
        color:#facc15;
      ">
        KAMI
      </h1>

      <p style="
        margin-top:12px;
        font-size:20px;
        color:#374151;
        font-weight:600;
      ">
        Solusi Terpercaya Untuk Kebutuhan Bisnis Anda
      </p>
    </div>

    <!-- BOX (SUDAH DI FIX POSISI & WARNA) -->
    <div style="
  position:absolute;
  top:300px;
  left:60px;
  right:60px;

  background:#2e6368;
  color:white;

  padding:28px 32px;
  line-height:1.4;
  font-size:14px;
  text-align: justify;

  z-index:2;
  box-shadow: 0 12px 30px rgba(0,0,0,0.18);
">
  CV Nusantara Mitra Persada merupakan perusahaan yang bergerak di bidang general trading, supplier, dan technical service untuk memenuhi berbagai kebutuhan industri dan proyek.

  <br/><br/>

  Kami berkomitmen menyediakan produk berkualitas, layanan profesional, serta solusi yang tepat dan efisien sesuai kebutuhan pelanggan.

<br/><br/>

Dengan mengutamakan integritas, kecepatan layanan, dan komunikasi yang baik, kami siap menjadi mitra terpercaya dalam mendukung kelancaran operasional dan pertumbuhan bisnis pelanggan.

 </div>

    <!-- IMAGE (SUDAH DINAIKKAN) -->
    <div style="
      position:absolute;
      bottom:0;
      width:100%;
      height:65%;
    ">
      <img src="/profile/halaman1-pdf.png"
        style="
          width:100%;
          height:100%;
          object-fit:cover;
        "
      />
    </div>

    <!-- FOOTER -->
    <div style="
      position:absolute;
      bottom:60px;
      left:60px;
      font-size:14px;
      font-weight:700;
      color:#facc15;
    ">
      CV NUSANTARA MITRA PERSADA
    </div>

    <div style="
    position:absolute;
      bottom:50px;
      left:60px;
      font-size:10px;
      font-weight:600;
      color:white;
  ">
    General Trading • Supplier • Technical Service
  </div>

    <!-- PAGE NUMBER -->
    <div style="
  position:absolute;
  bottom:36px;
  right:60px;

  width:48px;
  height:48px;

  background:#2d5c63;
  color:white;

  border-radius:12px;
  font-weight:bold;
  font-size:18px;

  display:flex;
  align-items:center;
  justify-content:center;

  padding-bottom:15px;
">
  01
</div>

<!-- FOOTER BAR -->
  <div style="
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:22px;
    background:#2d5c63;
  "></div>

  <!-- ACCENT KUNING -->
  <div style="
    position:absolute;
    bottom:0;
    left:65%;
  width:300px;
    height:22px;
    background:#facc15;
  "></div>

</div>
`);


  // ================= VISI MISI =================

await createPage(`
  <div style="
    width:100%;
    height:100%;
    font-family:sans-serif;
    background:#f5f6f7;
    position:relative;
    overflow:hidden;
  ">

    <!-- LABEL -->
    <div style="
      position:absolute;
      top:0;
      left:60px;
      background:#2d5c63;
      color:white;
      padding:8px 36px 0 36px;
      height:54px;
      font-size:18px;
      letter-spacing:4px;
      font-weight:600;
      text-align:center;
    ">
      COMPANY PROFILE
    </div>

    <!-- LOGO -->
    <img src="/logo-cv.png"
      style="
        position:absolute;
        top:35px;
        right:60px;
        width:120px;
      "
    />

    <!-- TITLE -->
    <div style="
      position:absolute;
      top:120px;
      left:60px;
    ">
      <h1 style="
        font-size:52px;
        font-weight:800;
        margin:0;
        color:#1e3a8a;
      ">
        VISI &
      </h1>

      <h1 style="
        font-size:52px;
        font-weight:800;
        margin:0;
        color:#facc15;
      ">
        MISI
      </h1>
    </div>

    <!-- BOX -->
    <div style="
  position:absolute;
  top:250px;
  left:280px;
  right:60px;

  background:#2e6368;
  color:white;

  padding:28px 32px;
  line-height:1.4;
  font-size:15px;
  text-align:justify;

  z-index:2;
  box-shadow: 0 12px 30px rgba(0,0,0,0.18);

">

  <!-- AKSEN SEGITIGA KUNING -->
  <div style="
    position:absolute;
    top:0;
    right:0;
    width:0;
    height:0;
    border-top:70px solid #facc15;
    border-left:70px solid transparent;
  "></div>

  <!-- VISI -->
  <div style="margin-bottom:28px;">
    <div style="
      font-size:20px;
      font-weight:700;
      color:#facc15;
      margin-bottom:10px;
    ">
      VISI
    </div>

    Menjadi perusahaan general trading dan supplier yang terpercaya dan profesional di Indonesia, yang dikenal melalui kualitas produk, keandalan layanan, serta komitmen dalam memberikan solusi terbaik bagi kebutuhan industri.
  </div>

  <!-- MISI -->
  
    <div style="
      font-size:20px;
      font-weight:700;
      color:#facc15;
      margin-bottom:10px;
    ">
      MISI
    </div>
<div style="position:relative; padding-left:18px; margin-bottom:10px;">
    <span style="position:absolute; left:0; color:#facc15; font-size:20px;">▪</span>
    Menyediakan produk berkualitas tinggi dengan harga yang kompetitif dan terjangkau.
  </div>

  <div style="position:relative; padding-left:18px; margin-bottom:10px;">
    <span style="position:absolute; left:0; color:#facc15; font-size:20px;">▪</span>
    Memberikan pelayanan yang cepat, responsif, dan profesional kepada setiap pelanggan.
  </div>

  <div style="position:relative; padding-left:18px; margin-bottom:10px;">
    <span style="position:absolute; left:0; color:#facc15; font-size:20px;">▪</span>
    Membangun kemitraan jangka panjang yang saling menguntungkan dengan pelanggan dan mitra bisnis.
  </div>

  <div style="position:relative; padding-left:18px; margin-bottom:10px;">
    <span style="position:absolute; left:0;color:#facc15; font-size:20px;">▪</span>
    Mengembangkan perusahaan secara berkelanjutan melalui inovasi dan peningkatan kualitas layanan.
  </div>

</div>

    <!-- IMAGE -->
    <div style="
      position:absolute;
      bottom:0;
      width:100%;
      height:65%;
    ">
      <img src="/profile/halaman1-pdf.png"
        style="
          width:100%;
          height:100%;
          object-fit:cover;
        "
      />
    </div>

    <!-- FOOTER -->
    <div style="
      position:absolute;
      bottom:60px;
      left:60px;
      font-size:14px;
      font-weight:700;
      color:#facc15;
    ">
      CV NUSANTARA MITRA PERSADA
    </div>

    <div style="
      position:absolute;
      bottom:50px;
      left:60px;
      font-size:10px;
      font-weight:600;
      color:white;
    ">
      General Trading • Supplier • Technical Service
    </div>

    <!-- PAGE NUMBER -->
    <div style="
      position:absolute;
      bottom:36px;
      right:60px;
      width:48px;
      height:48px;
      background:#2d5c63;
      color:white;
      border-radius:12px;
      font-weight:bold;
      font-size:18px;
      display:flex;
      align-items:center;
      justify-content:center;
      padding-bottom:15px;
    ">
      02
    </div>

    <!-- FOOTER BAR -->
    <div style="
      position:absolute;
      bottom:0;
      left:0;
      width:100%;
      height:22px;
      background:#2d5c63;
    "></div>

    <!-- ACCENT KUNING -->
    <div style="
      position:absolute;
      bottom:0;
      left:65%;
      width:300px;
      height:22px;
      background:#facc15;
    "></div>

  </div>
`);

  // ================= NILAI PERUSAHAAN =================

await createPage(`
  <div style="
    width:100%;
    height:100%;
    font-family:sans-serif;
    background:#f5f6f7;
    position:relative;
    overflow:hidden;
  ">

    <!-- LABEL -->
    <div style="
      position:absolute;
      top:0;
      left:60px;
      background:#2d5c63;
      color:white;
      padding:8px 36px 0 36px;
      height:54px;
      font-size:18px;
      letter-spacing:4px;
      font-weight:600;
      text-align:center;
    ">
      COMPANY PROFILE
    </div>

    <!-- LOGO -->
    <img src="/logo-cv.png"
      style="
        position:absolute;
        top:35px;
        right:60px;
        width:120px;
      "
    />

    <!-- TITLE -->
    <div style="
      position:absolute;
      top:120px;
      left:60px;
    ">
      <h1 style="
        font-size:52px;
        font-weight:800;
        margin:0;
        color:#1e3a8a;
      ">
        NILAI - NILAI
      </h1>

      <h1 style="
        font-size:52px;
        font-weight:800;
        margin:0;
        color:#facc15;
      ">
        PERUSAHAAN
      </h1>
    </div>

    <!-- LABEL NILAI PERUSAHAAN -->
    <div style="
      position:absolute;
      top:270px;
      left:60px;
      background:#facc15;
  color:#1e3a8a;
      padding:8px 36px 0 36px;
      height:54px;
      font-size:18px;
      letter-spacing:4px;
      font-weight:600;
      text-align:center;
       z-index:3;
    ">
      NILAI UTAMA KAMI
    </div>

    <!-- BOX -->
<div style="
  position:absolute;
  top:300px;
  left:60px;
  right:60px;
  bottom:160px;

  background:#2e6368;
  color:white;

  padding:40px 50px;
  font-size:14px;

  border-radius:20px; /* INI KUNCINYA */
  z-index:2;

  box-shadow:0 15px 35px rgba(0,0,0,0.15);

  display:flex;
align-items:center;
justify-content:center;
">

  <!-- GRID -->
<div style="
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:24px;
">

  <!-- ITEM 1 -->
  <div style="
  background:#3f7c81; /* WARNA BARU */
  border:1px solid rgba(255,255,255,0.08);
  border-radius:14px;
  padding:20px;

  box-shadow:0 6px 15px rgba(0,0,0,0.2);
">
    <div style="font-size:32px; margin-bottom:10px;">🛡️</div>
    <div style="color:#facc15; font-weight:700; font-size:16px; margin-bottom:6px;">
      Integritas
    </div>
    <div style="color:#e5e7eb; font-size:13px;">
      Menjalankan bisnis dengan kejujuran dan transparansi dalam setiap transaksi.
    </div>
  </div>

  <!-- ITEM 2 -->
  <div style="
  background:#3f7c81; /* WARNA BARU */
  border:1px solid rgba(255,255,255,0.08);
  border-radius:14px;
  padding:20px;

  box-shadow:0 6px 15px rgba(0,0,0,0.2);
">
    <div style="font-size:32px; margin-bottom:10px;">🏅</div>
    <div style="color:#facc15; font-weight:700; font-size:16px; margin-bottom:6px;">
      Kualitas
    </div>
    <div style="color:#e5e7eb; font-size:13px;">
      Berkomitmen memberikan produk dan layanan berkualitas tinggi.
    </div>
  </div>

  <!-- ITEM 3 -->
  <div style="
  background:#3f7c81; /* WARNA BARU */
  border:1px solid rgba(255,255,255,0.08);
  border-radius:14px;
  padding:20px;

  box-shadow:0 6px 15px rgba(0,0,0,0.2);
">
    <div style="font-size:32px; margin-bottom:10px;">🤝</div>
    <div style="color:#facc15; font-weight:700; font-size:16px; margin-bottom:6px;">
      Kemitraan
    </div>
    <div style="color:#e5e7eb; font-size:13px;">
      Membangun hubungan jangka panjang yang saling menguntungkan
    </div>
  </div>

  <!-- ITEM 4 -->
  <div style="
  background:#3f7c81; /* WARNA BARU */
  border:1px solid rgba(255,255,255,0.08);
  border-radius:14px;
  padding:20px;

  box-shadow:0 6px 15px rgba(0,0,0,0.2);
">
    <div style="font-size:32px; margin-bottom:10px;">💡</div>
    <div style="color:#facc15; font-weight:700; font-size:16px; margin-bottom:6px;">
      Inovasi
    </div>
    <div style="color:#e5e7eb; font-size:13px;">
      Terus berinovasi untuk memenuhi kebutuhan pasar yang dinamis.
    </div>
  </div>

</div>

</div>

    <!-- FOOTER -->
    <div style="
      position:absolute;
      bottom:60px;
      left:60px;
      font-size:14px;
      font-weight:700;
      color:#facc15;
    ">
      CV NUSANTARA MITRA PERSADA
    </div>

    <div style="
      position:absolute;
      bottom:50px;
      left:60px;
      font-size:10px;
      font-weight:600;
      color:#374151;
    ">
      General Trading • Supplier • Technical Service
    </div>

    <!-- PAGE NUMBER -->
    <div style="
      position:absolute;
      bottom:36px;
      right:60px;
      width:48px;
      height:48px;
      background:#2d5c63;
      color:white;
      border-radius:12px;
      font-weight:bold;
      font-size:18px;
      display:flex;
      align-items:center;
      justify-content:center;
      padding-bottom:15px;
    ">
      03
    </div>

    <!-- FOOTER BAR -->
    <div style="
      position:absolute;
      bottom:0;
      left:0;
      width:100%;
      height:22px;
      background:#2d5c63;
    "></div>

    <!-- ACCENT KUNING -->
    <div style="
      position:absolute;
      bottom:0;
      left:65%;
      width:300px;
      height:22px;
      background:#facc15;
    "></div>

  </div>
`);


// ================= LAYANAN =================

await createPage(`
  <div style="
    width:100%;
    height:100%;
    font-family:sans-serif;
    background:#f5f6f7;
    position:relative;
    overflow:hidden;
  ">

    <!-- LABEL -->
    <div style="
      position:absolute;
      top:0;
      left:60px;
      background:#2d5c63;
      color:white;
      padding:8px 36px 0 36px;
      height:54px;
      font-size:18px;
      letter-spacing:4px;
      font-weight:600;
      text-align:center;
    ">
      COMPANY PROFILE
    </div>

    <!-- LOGO -->
    <img src="/logo-cv.png"
      style="
        position:absolute;
        top:35px;
        right:60px;
        width:120px;
      "
    />

    <!-- TITLE -->
    <div style="
      position:absolute;
      top:120px;
      left:60px;
    ">
      <h1 style="
        font-size:52px;
        font-weight:800;
        margin:0;
        color:#1e3a8a;
      ">
        LAYANAN
      </h1>

      <h1 style="
        font-size:52px;
        font-weight:800;
        margin:0;
        color:#facc15;
      ">
        KAMI
      </h1>

      <p style="
        margin-top:12px;
        font-size:20px;
        color:#374151;
        font-weight:600;
      ">
        Solusi Lengkap Untuk Kebutuhan Bisnis & Industri Anda
      </p>
    </div>

    <!-- BOX -->
<div style="
  position:absolute;
  top:300px;
  left:60px;
  right:60px;
  bottom:100px;

  display:flex;
  flex-direction:column;
  gap:16px;

  z-index:2;
">

  <!-- GENERAL TRADING -->
  <div style="
    display:flex;
    background:#2e6368;
    overflow:hidden;
  ">
    <img src="/profile/layanan1.png" style="width:40%; object-fit:cover;" />

    <div style="
      width:60%;
      color:white;
      padding:15px;
      font-size:13px;
      line-height:1.5;
      text-align:justify;
    ">
     <div style="color:#facc15; font-size:18px; font-weight:700; margin-bottom:7px;">
  General Trading
</div>

Kami menyediakan layanan pengadaan berbagai kebutuhan produk dan perlengkapan industri secara cepat, tepat, dan terpercaya.

<br/><br/>

<b>Keunggulan Layanan:</b><br/>
• Produk sesuai kebutuhan industri<br/>
• Mitra pengadaan terpercaya<br/>
• Distribusi tepat waktu<br/>
• Pelayanan profesional & responsif
    </div>
  </div>

  <!-- SUPPLIER -->
  <div style="
    display:flex;
    background:#2e6368;
    overflow:hidden;
  ">
    <img src="/profile/layanan2.png" style="width:40%; object-fit:cover;" />

    <div style="
      width:60%;
      color:white;
      padding:15px;
      font-size:13px;
      line-height:1.5;
      text-align:justify;
    ">
      <div style="color:#facc15; font-size:18px; font-weight:700; margin-bottom:7px;">
  Supplier
</div>

Kami menyediakan berbagai produk untuk mendukung kebutuhan operasional industri dengan kualitas terjamin dan proses pengadaan yang efisien.

<br/><br/>

<b>Keunggulan Layanan:</b><br/>
• Produk sesuai kebutuhan pelanggan<br/>
• Sumber pengadaan terpercaya<br/>
• Pengiriman cepat & aman<br/>
• Harga kompetitif
    </div>
  </div>

  <!-- TECHNICAL SERVICE -->
  <div style="
    display:flex;
    background:#2e6368;
    overflow:hidden;
  ">
    <img src="/profile/layanan3.png" style="width:40%; object-fit:cover;" />

    <div style="
      width:60%;
      color:white;
      padding:15px;
      font-size:13px;
      line-height:1.5;
      text-align:justify;
    ">
      <div style="color:#facc15; font-size:18px; font-weight:700; margin-bottom:7px;">
  Technical Service
</div>

Kami menyediakan layanan teknis profesional untuk mendukung kebutuhan operasional industri secara efektif dan tepat.

<br/><br/>

<b>Keunggulan Layanan:</b><br/>
• Tenaga profesional berpengalaman<br/>
• Solusi cepat & tepat<br/>
• Dukungan teknis terpercaya<br/>
• Pengerjaan efisien
    </div>
  </div>

</div>

    <!-- FOOTER -->
    <div style="
      position:absolute;
      bottom:60px;
      left:60px;
      font-size:14px;
      font-weight:600;
      color:#facc15;
    ">
      CV NUSANTARA MITRA PERSADA
    </div>

    <div style="
      position:absolute;
      bottom:50px;
      left:60px;
      font-size:10px;
      font-weight:600;
      color:#374151;
    ">
      General Trading • Supplier • Technical Service
    </div>

    <!-- PAGE NUMBER -->
    <div style="
      position:absolute;
      bottom:36px;
      right:60px;
      width:48px;
      height:48px;
      background:#2d5c63;
      color:white;
      border-radius:12px;
      font-weight:bold;
      font-size:18px;
      display:flex;
      align-items:center;
      justify-content:center;
      padding-bottom:15px;
    ">
      04
    </div>

    <!-- FOOTER BAR -->
    <div style="
      position:absolute;
      bottom:0;
      left:0;
      width:100%;
      height:22px;
      background:#2d5c63;
    "></div>

    <!-- ACCENT KUNING -->
    <div style="
      position:absolute;
      bottom:0;
      left:65%;
      width:300px;
      height:22px;
      background:#facc15;
    "></div>

  </div>
`);


// ================= LEGALITAS ================= 

await createPage(`
  <div style="
    width:100%;
    height:100%;
    font-family:sans-serif;
    background:#f5f6f7;
    position:relative;
    overflow:hidden;
  ">

    <!-- LABEL -->
    <div style="
      position:absolute;
      top:0;
      left:60px;
      background:#2d5c63;
      color:white;
      padding:8px 36px 0 36px;
      height:54px;
      font-size:18px;
      letter-spacing:4px;
      font-weight:600;
      text-align:center;
    ">
      COMPANY PROFILE
    </div>

    <!-- LOGO -->
    <img src="/logo-cv.png"
      style="
        position:absolute;
        top:35px;
        right:60px;
        width:120px;
      "
    />

    <!-- TITLE -->
    <div style="
      position:absolute;
      top:120px;
      left:60px;
    ">
      <h1 style="
        font-size:52px;
        font-weight:800;
        margin:0;
        color:#1e3a8a;
      ">
        LEGALITAS
      </h1>

      <h1 style="
        font-size:52px;
        font-weight:800;
        margin:0;
        color:#facc15;
      ">
        PERUSAHAAN
      </h1>

      <p style="
        margin-top:12px;
        font-size:20px;
        color:#374151;
        font-weight:600;
      ">
        Informasi Legal dan Administrasi Perusahaan
      </p>
    </div>

   <!-- WRAPPER -->
<div style="
  position:absolute;
  top:300px;
  left:60px;
  right:60px;
  bottom:110px;

  display:flex;
  flex-direction:column;
  gap:30px;

  z-index:2;
">

  <!-- GRID EMAS -->
  <div style="
    flex:1;

    background:#facc15;
    border-radius:12px;
    padding:20px;

    display:grid;
    grid-template-columns:1fr 1fr;
    gap:16px;
  ">

    <div style="background:white; border-radius:10px; padding:15px;">
      <b>Nomor Induk Berusaha</b><br/>
      <small>Terdaftar OSS</small><br/><br/>
      <b>No. NIB:</b> 0903260124759
    </div>

    <div style="background:white; border-radius:10px; padding:15px;">
      <b>NPWP Perusahaan</b><br/>
      <small>NPWP Badan Usaha</small><br/><br/>
      <b>No. NPWP:</b> 1000-0000-0868-3916
    </div>

    <div style="background:white; border-radius:10px; padding:15px;">
      <b>Akta Pendirian</b><br/>
      <small>Dokumen Notaris</small><br/><br/>
      <b>No. Akta:</b> 02 | 02 Maret 2026
    </div>

    <div style="background:white; border-radius:10px; padding:15px;">
      <b>Surat Keterangan AHU</b><br/>
      <small>Sistem Administrasi</small><br/><br/>
      <b>No. SKT:</b> AHU-0017580-AH.01.14 Tahun 2026
    </div>

  </div>

  <!-- BOX KREDIBILITAS -->
<div style="
  flex:1;

  background:#2d5c63;
  border-radius:16px;
  padding:30px 24px;

  position:relative;

  display:flex;
flex-direction:column;
align-items:stretch;

  box-shadow:0 15px 35px rgba(0,0,0,0.12);
">

  <!-- ICON BULAT -->
<div style="
  position:absolute;
  top:12px;
  left:50%;
  transform:translateX(-50%);

  width:50px;
  height:50px;

  background:#facc15;
  border-radius:50%;

  display:flex;
  align-items:center;
  justify-content:center;
">
  <span style="
    font-size:30px;
    line-height:1;
    transform:translateY(-14px);
    display:flex;
    align-items:center;
    justify-content:center;
  ">
    🛡️
  </span>
</div>

  <!-- TITLE -->
  <div style="
    text-align:center;
    font-weight:700;
    font-size:20px;
    color:#facc15;
    
    margin-top:27px;
  ">
    Kredibilitas Perusahaan
  </div>

  <!-- DESC -->
  <div style="
    text-align:center;
    font-size:14px;
    color:white;
    margin-bottom:22px;
    max-width:420px;

    margin-left:auto;
  margin-right:auto;
  margin-top:18px;
  ">
    Komitmen kami dalam menjalankan bisnis secara transparan, profesional, dan sesuai dengan ketentuan hukum yang berlaku.
  </div>

  <!-- LIST -->
  <div style="
    width:100%;
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
margin-top:auto; /* INI KUNCINYA */
  ">

    <div style="
    background:#f9fafb;
    border:1px solid #e5e7eb;
    border-radius:10px;
    padding:10px 12px;
    font-size:14px;
    color:#111827;
    display:flex;
    align-items:flex-start;
    gap:8px;
  ">
    <span style="color:#22c55e;">✔</span>
    <span>Terdaftar resmi di Kementerian</span>
  </div>


    <div style="
    background:#f9fafb;
    border:1px solid #e5e7eb;
    border-radius:10px;
    padding:10px 12px;
    font-size:14px;
    color:#111827;
    display:flex;
    align-items:flex-start;
    gap:8px;
  ">
    <span style="color:#22c55e;">✔</span>
    <span>Memiliki legalitas usaha sah</span>
  </div>


    <div style="
    background:#f9fafb;
    border:1px solid #e5e7eb;
    border-radius:10px;
    padding:10px 12px;
    font-size:14px;
    color:#111827;
    display:flex;
    align-items:flex-start;
    gap:8px;
  ">
    <span style="color:#22c55e;">✔</span>
    <span>Terbuka untuk kemitraan bisnis</span>
  </div>


    <div style="
    background:#f9fafb;
    border:1px solid #e5e7eb;
    border-radius:10px;
    padding:10px 12px;
    font-size:14px;
    color:#111827;
    display:flex;
    align-items:flex-start;
    gap:8px;
  ">
    <span style="color:#22c55e;">✔</span>
    <span>Mematuhi regulasi yang berlaku</span>
  </div>


    <div style="
    grid-column:span 2;
    background:#f9fafb;
    border:1px solid #e5e7eb;
    border-radius:10px;
    padding:10px 12px;
    font-size:14px;
    color:#111827;
    display:flex;
    align-items:flex-start;
    gap:8px;
  ">
    <span style="color:#22c55e;">✔</span>
    <span>Menjalankan bisnis secara profesional & transparan</span>
  </div>

  </div>

</div>

</div>

    <!-- FOOTER -->
    <div style="
      position:absolute;
      bottom:60px;
      left:60px;
      font-size:14px;
      font-weight:600;
      color:#facc15;
    ">
      CV NUSANTARA MITRA PERSADA
    </div>

    <div style="
      position:absolute;
      bottom:50px;
      left:60px;
      font-size:10px;
      font-weight:600;
      color:#374151;
    ">
      General Trading • Supplier • Technical Service
    </div>

    <!-- PAGE NUMBER -->
    <div style="
      position:absolute;
      bottom:36px;
      right:60px;
      width:48px;
      height:48px;
      background:#2d5c63;
      color:white;
      border-radius:12px;
      font-weight:bold;
      font-size:18px;
      display:flex;
      align-items:center;
      justify-content:center;
      padding-bottom:15px;
    ">
      05
    </div>

    <!-- FOOTER BAR -->
    <div style="
      position:absolute;
      bottom:0;
      left:0;
      width:100%;
      height:22px;
      background:#2d5c63;
    "></div>

    <!-- ACCENT KUNING -->
    <div style="
      position:absolute;
      bottom:0;
      left:65%;
      width:300px;
      height:22px;
      background:#facc15;
    "></div>

  </div>
`);



// ================= KATALOG PRODUK (HORIZONTAL 0) =================

await createPage(`
<div style="
  width:100%;
  height:100%;
  font-family:sans-serif;
  background:#f5f6f7;
  position:relative;
  overflow:hidden;
">

  <!-- LABEL -->
  <div style="
    position:absolute;
    top:0;
    left:60px;
    background:#2d5c63;
    color:white;
    padding:8px 36px 0 36px;
    height:54px;
    font-size:18px;
    letter-spacing:4px;
    font-weight:600;
  ">
    COMPANY PROFILE
  </div>

  <!-- LOGO -->
  <img src="/logo-cv.png"
    style="
      position:absolute;
      top:35px;
      right:60px;
      width:120px;
    "
  />

  <!-- TITLE -->
  <div style="
    position:absolute;
    top:120px;
    left:60px;
  ">
    <h1 style="
      font-size:48px;
      font-weight:800;
      margin:0;
      color:#1e3a8a;
    ">
      KATALOG PRODUK
    </h1>
  </div>

  <!-- LIST PRODUK -->
  <div style="
    position:absolute;
    top:210px;
    left:60px;
    right:60px;
    bottom:120px;

    display:flex;
    flex-direction:column;
    gap:18px;
  ">

    ${[
  {
    nama: "Kebutuhan Kantor",
    desc: "Menyediakan berbagai perlengkapan kantor seperti ATK, komputer, printer, meja, kursi, lemari arsip, serta peralatan kerja lainnya untuk mendukung aktivitas operasional, administrasi, dan produktivitas di lingkungan kerja.",
    img: "/katalog/kebutuhan-kantor.png"
  },
  {
    nama: "Sparepart Mesin Konveyor",
    desc: "Menyediakan berbagai komponen conveyor seperti roller, belt, pulley, motor, serta sparepart pendukung lainnya yang digunakan untuk sistem pemindahan barang di industri manufaktur dan logistik.",
    img: "/katalog/sparepart-konveyor.png"
  },
  {
    nama: "Safety Equipment",
    desc: "Peralatan keselamatan kerja seperti helm, sarung tangan, masker, sepatu safety, dan APD lainnya yang dirancang untuk melindungi tenaga kerja serta meningkatkan keamanan di lingkungan industri dan proyek.",
    img: "/katalog/safety.png"
  }
].map(p => `
      
      <div style="
        display:flex;
        background:white;
        border-radius:16px;
        overflow:hidden;

        border:1px solid #e5e7eb;

        box-shadow:
          0 4px 10px rgba(0,0,0,0.06),
          0 12px 30px rgba(0,0,0,0.12);
      ">

        <!-- IMAGE -->
<div style="
  width:450px;
  min-width:300px;
  height:250px;

  overflow:hidden;
  border-right:1px solid #eee;
">
  <img src="${p.img}"
    style="
      width:100%;
      height:100%;
      object-fit:cover;
      display:block;
    "
  />
</div>

        <!-- TEXT -->
        <div style="
          padding:18px 20px;
          display:flex;
          flex-direction:column;
           justify-content:flex-start; /* INI KUNCINYA */
  gap:6px;
        ">
          <div style="
            font-size:18px;
            font-weight:700;
            color:#1e3a8a;
          
          ">
            ${p.nama}
          </div>

          <div style="
            font-size:14px;
            color:#6b7280;
            line-height:1.5;
            max-width:420px;
          ">
            ${p.desc}
          </div>
        </div>

      </div>

    `).join("")}

  </div>

  <!-- FOOTER -->
  <div style="
    position:absolute;
    bottom:60px;
    left:60px;
    font-size:14px;
    font-weight:700;
    color:#facc15;
  ">
    CV NUSANTARA MITRA PERSADA
  </div>

  <div style="
    position:absolute;
    bottom:50px;
    left:60px;
    font-size:10px;
    font-weight:600;
    color:#374151;
  ">
    General Trading • Supplier • Technical Service
  </div>

  <!-- PAGE NUMBER -->
  <div style="
    position:absolute;
    bottom:36px;
    right:60px;
    width:48px;
    height:48px;
    background:#2d5c63;
    color:white;
    border-radius:12px;
    font-weight:bold;
    font-size:18px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-bottom:15px;
  ">
    06
  </div>

  <!-- FOOTER BAR -->
  <div style="
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:22px;
    background:#2d5c63;
  "></div>

  <!-- ACCENT -->
  <div style="
    position:absolute;
    bottom:0;
    left:65%;
    width:300px;
    height:22px;
    background:#facc15;
  "></div>

</div>
`);


// ================= KATALOG PRODUK (HORIZONTAL1) =================

await createPage(`
<div style="
  width:100%;
  height:100%;
  font-family:sans-serif;
  background:#f5f6f7;
  position:relative;
  overflow:hidden;
">

  <!-- LABEL -->
  <div style="
    position:absolute;
    top:0;
    left:60px;
    background:#2d5c63;
    color:white;
    padding:8px 36px 0 36px;
    height:54px;
    font-size:18px;
    letter-spacing:4px;
    font-weight:600;
  ">
    COMPANY PROFILE
  </div>

  <!-- LOGO -->
  <img src="/logo-cv.png"
    style="
      position:absolute;
      top:35px;
      right:60px;
      width:120px;
    "
  />

  <!-- TITLE -->
  <div style="
    position:absolute;
    top:120px;
    left:60px;
  ">
    <h1 style="
      font-size:48px;
      font-weight:800;
      margin:0;
      color:#1e3a8a;
    ">
      KATALOG PRODUK
    </h1>
  </div>

  <!-- LIST PRODUK -->
  <div style="
    position:absolute;
    top:210px;
    left:60px;
    right:60px;
    bottom:120px;

    display:flex;
    flex-direction:column;
    gap:18px;
  ">

    ${[
  {
    nama: "Pallet & Keranjang Industri",
    desc: "Menyediakan berbagai jenis pallet kayu dan pallet plastik HDPE, hand pallet, serta jolly box atau keranjang plastik untuk mendukung aktivitas penyimpanan, pemindahan, dan distribusi barang di gudang, logistik, maupun area produksi.",
    img: "/katalog/pallet-keranjang.png"
  },
  {
    nama: "Packaging Makanan",
    desc: "Berbagai jenis kemasan makanan seperti kotak plastik/mika, food box kraft, cup dan botol, serta plastik kemasan food grade yang aman digunakan untuk kebutuhan makanan dan minuman.",
    img: "/katalog/packaging-makanan.png"
  },
  {
    nama: "Packaging Industri Logistik",
    desc: "Menyediakan material kemasan industri seperti karung, plastik packing, stretch film, bubble wrap, dan berbagai perlengkapan lainnya untuk kebutuhan pengemasan, perlindungan, dan pengiriman barang.",
    img: "/katalog/packaging-industri.png"
  }
].map(p => `
      
      <div style="
        display:flex;
        background:white;
        border-radius:16px;
        overflow:hidden;

        border:1px solid #e5e7eb;

        box-shadow:
          0 4px 10px rgba(0,0,0,0.06),
          0 12px 30px rgba(0,0,0,0.12);
      ">

        <!-- IMAGE -->
<div style="
  width:450px;
  min-width:300px;
  height:250px;

  overflow:hidden;
  border-right:1px solid #eee;
">
  <img src="${p.img}"
    style="
      width:100%;
      height:100%;
      object-fit:cover;
      display:block;
    "
  />
</div>

        <!-- TEXT -->
        <div style="
          padding:18px 20px;
          display:flex;
          flex-direction:column;
           justify-content:flex-start; /* INI KUNCINYA */
  gap:6px;
        ">
          <div style="
            font-size:18px;
            font-weight:700;
            color:#1e3a8a;
          
          ">
            ${p.nama}
          </div>

          <div style="
            font-size:14px;
            color:#6b7280;
            line-height:1.5;
            max-width:420px;
          ">
            ${p.desc}
          </div>
        </div>

      </div>

    `).join("")}

  </div>

  <!-- FOOTER -->
  <div style="
    position:absolute;
    bottom:60px;
    left:60px;
    font-size:14px;
    font-weight:700;
    color:#facc15;
  ">
    CV NUSANTARA MITRA PERSADA
  </div>

  <div style="
    position:absolute;
    bottom:50px;
    left:60px;
    font-size:10px;
    font-weight:600;
    color:#374151;
  ">
    General Trading • Supplier • Technical Service
  </div>

  <!-- PAGE NUMBER -->
  <div style="
    position:absolute;
    bottom:36px;
    right:60px;
    width:48px;
    height:48px;
    background:#2d5c63;
    color:white;
    border-radius:12px;
    font-weight:bold;
    font-size:18px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-bottom:15px;
  ">
    07
  </div>

  <!-- FOOTER BAR -->
  <div style="
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:22px;
    background:#2d5c63;
  "></div>

  <!-- ACCENT -->
  <div style="
    position:absolute;
    bottom:0;
    left:65%;
    width:300px;
    height:22px;
    background:#facc15;
  "></div>

</div>
`);



// ================= KATALOG PRODUK (HORIZONTAL 2) =================

await createPage(`
<div style="
  width:100%;
  height:100%;
  font-family:sans-serif;
  background:#f5f6f7;
  position:relative;
  overflow:hidden;
">

  <!-- LABEL -->
  <div style="
    position:absolute;
    top:0;
    left:60px;
    background:#2d5c63;
    color:white;
    padding:8px 36px 0 36px;
    height:54px;
    font-size:18px;
    letter-spacing:4px;
    font-weight:600;
  ">
    COMPANY PROFILE
  </div>

  <!-- LOGO -->
  <img src="/logo-cv.png"
    style="
      position:absolute;
      top:35px;
      right:60px;
      width:120px;
    "
  />

  <!-- TITLE -->
  <div style="
    position:absolute;
    top:120px;
    left:60px;
  ">
    <h1 style="
      font-size:48px;
      font-weight:800;
      margin:0;
      color:#1e3a8a;
    ">
      KATALOG PRODUK
    </h1>
  </div>

  <!-- LIST PRODUK -->
  <div style="
    position:absolute;
    top:210px;
    left:60px;
    right:60px;
    bottom:120px;

    display:flex;
    flex-direction:column;
    gap:18px;
  ">

   ${[
  {
    nama: "Motor Listrik Industri",
    desc: "Menyediakan berbagai jenis motor listrik seperti single phase, three phase, roller motor, dan double side motor linear yang digunakan sebagai penggerak utama pada mesin industri dan sistem conveyor.",
    img: "/katalog/motor-listrik.png"
  },
  {
    nama: "Komponen Elektrikal",
    desc: "Berbagai komponen listrik seperti relay, kontaktor, MCB, inverter (VFD), servo drive, switching power supply, serta kabel listrik untuk mendukung sistem kontrol dan distribusi tenaga pada mesin industri.",
    img: "/katalog/komponen-elektrikal.png"
  },
  {
    nama: "Komponen Mekanikal",
    desc: "Menyediakan komponen mekanikal seperti bearing, pillow block, pulley, sprocket, V-belt, chain, dan berbagai sparepart lainnya yang digunakan dalam sistem transmisi dan pergerakan mesin industri.",
    img: "/katalog/komponen-mekanikal.png"
  }
].map(p => `
      
      <div style="
        display:flex;
        background:white;
        border-radius:16px;
        overflow:hidden;

        border:1px solid #e5e7eb;

        box-shadow:
          0 4px 10px rgba(0,0,0,0.06),
          0 12px 30px rgba(0,0,0,0.12);
      ">

        <!-- IMAGE -->
<div style="
  width:450px;
  min-width:300px;
  height:250px;

  overflow:hidden;
  border-right:1px solid #eee;
">
  <img src="${p.img}"
    style="
      width:100%;
      height:100%;
      object-fit:cover;
      display:block;
    "
  />
</div>

        <!-- TEXT -->
        <div style="
          padding:18px 20px;
          display:flex;
          flex-direction:column;
           justify-content:flex-start; /* INI KUNCINYA */
  gap:6px;
        ">
          <div style="
            font-size:18px;
            font-weight:700;
            color:#1e3a8a;
          
          ">
            ${p.nama}
          </div>

          <div style="
            font-size:14px;
            color:#6b7280;
            line-height:1.5;
            max-width:420px;
          ">
            ${p.desc}
          </div>
        </div>

      </div>

    `).join("")}

  </div>

  <!-- FOOTER -->
  <div style="
    position:absolute;
    bottom:60px;
    left:60px;
    font-size:14px;
    font-weight:700;
    color:#facc15;
  ">
    CV NUSANTARA MITRA PERSADA
  </div>

  <div style="
    position:absolute;
    bottom:50px;
    left:60px;
    font-size:10px;
    font-weight:600;
    color:#374151;
  ">
    General Trading • Supplier • Technical Service
  </div>

  <!-- PAGE NUMBER -->
  <div style="
    position:absolute;
    bottom:36px;
    right:60px;
    width:48px;
    height:48px;
    background:#2d5c63;
    color:white;
    border-radius:12px;
    font-weight:bold;
    font-size:18px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-bottom:15px;
  ">
    08
  </div>

  <!-- FOOTER BAR -->
  <div style="
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:22px;
    background:#2d5c63;
  "></div>

  <!-- ACCENT -->
  <div style="
    position:absolute;
    bottom:0;
    left:65%;
    width:300px;
    height:22px;
    background:#facc15;
  "></div>

</div>
`);


// ================= KATALOG PRODUK (HORIZONTAL 3) =================

await createPage(`
<div style="
  width:100%;
  height:100%;
  font-family:sans-serif;
  background:#f5f6f7;
  position:relative;
  overflow:hidden;
">

  <!-- LABEL -->
  <div style="
    position:absolute;
    top:0;
    left:60px;
    background:#2d5c63;
    color:white;
    padding:8px 36px 0 36px;
    height:54px;
    font-size:18px;
    letter-spacing:4px;
    font-weight:600;
  ">
    COMPANY PROFILE
  </div>

  <!-- LOGO -->
  <img src="/logo-cv.png"
    style="
      position:absolute;
      top:35px;
      right:60px;
      width:120px;
    "
  />

  <!-- TITLE -->
  <div style="
    position:absolute;
    top:120px;
    left:60px;
  ">
    <h1 style="
      font-size:48px;
      font-weight:800;
      margin:0;
      color:#1e3a8a;
    ">
      KATALOG PRODUK
    </h1>
  </div>

  <!-- LIST PRODUK -->
  <div style="
    position:absolute;
    top:210px;
    left:60px;
    right:60px;
    bottom:120px;

    display:flex;
    flex-direction:column;
    gap:18px;
  ">

   ${[
  {
    nama: "Raw Material Steel",
    desc: "Menyediakan berbagai material baja seperti plat, sheet, dan material konstruksi lainnya yang digunakan untuk kebutuhan fabrikasi, manufaktur, serta proyek industri dengan kualitas yang kuat dan tahan lama.",
    img: "/katalog/raw material.png"
  },
  {
    nama: "Alumunium Profile",
    desc: "Profil alumunium berkualitas seperti aluminium extrusion dan frame system yang digunakan untuk konstruksi mesin, rangka conveyor, partisi, dan berbagai kebutuhan industri yang ringan namun kuat dan presisi.",
    img: "/katalog/alumunium.png"
  },
  {
    nama: "Industrial Hardware",
    desc: "Berbagai komponen hardware seperti baut, mur, washer, dan fastener lainnya yang digunakan sebagai pengikat dan pendukung dalam perakitan mesin, konstruksi, serta kebutuhan industri lainnya.",
    img: "/katalog/hardware.png"
  }
].map(p => `
      
      <div style="
        display:flex;
        background:white;
        border-radius:16px;
        overflow:hidden;

        border:1px solid #e5e7eb;

        box-shadow:
          0 4px 10px rgba(0,0,0,0.06),
          0 12px 30px rgba(0,0,0,0.12);
      ">

        <!-- IMAGE -->
<div style="
  width:450px;
  min-width:300px;
  height:250px;

  overflow:hidden;
  border-right:1px solid #eee;
">
  <img src="${p.img}"
    style="
      width:100%;
      height:100%;
      object-fit:cover;
      display:block;
    "
  />
</div>

        <!-- TEXT -->
        <div style="
          padding:18px 20px;
          display:flex;
          flex-direction:column;
           justify-content:flex-start; /* INI KUNCINYA */
  gap:6px;
        ">
          <div style="
            font-size:18px;
            font-weight:700;
            color:#1e3a8a;
          
          ">
            ${p.nama}
          </div>

          <div style="
            font-size:14px;
            color:#6b7280;
            line-height:1.5;
            max-width:420px;
          ">
            ${p.desc}
          </div>
        </div>

      </div>

    `).join("")}

  </div>

  <!-- FOOTER -->
  <div style="
    position:absolute;
    bottom:60px;
    left:60px;
    font-size:14px;
    font-weight:700;
    color:#facc15;
  ">
    CV NUSANTARA MITRA PERSADA
  </div>

  <div style="
    position:absolute;
    bottom:50px;
    left:60px;
    font-size:10px;
    font-weight:600;
    color:#374151;
  ">
    General Trading • Supplier • Technical Service
  </div>

  <!-- PAGE NUMBER -->
  <div style="
    position:absolute;
    bottom:36px;
    right:60px;
    width:48px;
    height:48px;
    background:#2d5c63;
    color:white;
    border-radius:12px;
    font-weight:bold;
    font-size:18px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-bottom:15px;
  ">
    09
  </div>

  <!-- FOOTER BAR -->
  <div style="
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:22px;
    background:#2d5c63;
  "></div>

  <!-- ACCENT -->
  <div style="
    position:absolute;
    bottom:0;
    left:65%;
    width:300px;
    height:22px;
    background:#facc15;
  "></div>

</div>
`);


// ================= KATALOG PRODUK (HORIZONTAL 4) =================

await createPage(`
<div style="
  width:100%;
  height:100%;
  font-family:sans-serif;
  background:#f5f6f7;
  position:relative;
  overflow:hidden;
">

  <!-- LABEL -->
  <div style="
    position:absolute;
    top:0;
    left:60px;
    background:#2d5c63;
    color:white;
    padding:8px 36px 0 36px;
    height:54px;
    font-size:18px;
    letter-spacing:4px;
    font-weight:600;
  ">
    COMPANY PROFILE
  </div>

  <!-- LOGO -->
  <img src="/logo-cv.png"
    style="
      position:absolute;
      top:35px;
      right:60px;
      width:120px;
    "
  />

  <!-- TITLE -->
  <div style="
    position:absolute;
    top:120px;
    left:60px;
  ">
    <h1 style="
      font-size:48px;
      font-weight:800;
      margin:0;
      color:#1e3a8a;
    ">
      KATALOG PRODUK
    </h1>
  </div>

  <!-- LIST PRODUK -->
  <div style="
    position:absolute;
    top:210px;
    left:60px;
    right:60px;
    bottom:120px;

    display:flex;
    flex-direction:column;
    gap:18px;
  ">

   ${[
  {
    nama: "Equipment Refrigerant",
    desc: "Menyediakan berbagai peralatan refrigerasi seperti AC, chiller, dan unit pendingin lainnya yang digunakan untuk menjaga suhu pada ruangan, mesin, maupun proses industri agar tetap stabil dan optimal.",
    img: "/katalog/refrigrant.png"
  },
  {
    nama: "Equipment Hidrolik & Pneumatik",
    desc: "Berbagai komponen dan sistem hidrolik serta pneumatik seperti cylinder, valve, regulator, dan unit control yang digunakan untuk sistem tekanan, otomasi, dan penggerak mesin industri.",
    img: "/katalog/hidrolik & pneumatik.png"
  },
  {
    nama: "Equipment Valve",
    desc: "Menyediakan berbagai jenis valve seperti ball valve, gate valve, dan control valve yang digunakan untuk mengatur aliran fluida (air, gas, maupun cairan) dalam sistem perpipaan industri.",
    img: "/katalog/valve.png"
  }
].map(p => `
      
      <div style="
        display:flex;
        background:white;
        border-radius:16px;
        overflow:hidden;

        border:1px solid #e5e7eb;

        box-shadow:
          0 4px 10px rgba(0,0,0,0.06),
          0 12px 30px rgba(0,0,0,0.12);
      ">

        <!-- IMAGE -->
<div style="
  width:450px;
  min-width:300px;
  height:250px;

  overflow:hidden;
  border-right:1px solid #eee;
">
  <img src="${p.img}"
    style="
      width:100%;
      height:100%;
      object-fit:cover;
      display:block;
    "
  />
</div>

        <!-- TEXT -->
        <div style="
          padding:18px 20px;
          display:flex;
          flex-direction:column;
           justify-content:flex-start; /* INI KUNCINYA */
  gap:6px;
        ">
          <div style="
            font-size:18px;
            font-weight:700;
            color:#1e3a8a;
          
          ">
            ${p.nama}
          </div>

          <div style="
            font-size:14px;
            color:#6b7280;
            line-height:1.5;
            max-width:420px;
          ">
            ${p.desc}
          </div>
        </div>

      </div>

    `).join("")}

  </div>

  <!-- FOOTER -->
  <div style="
    position:absolute;
    bottom:60px;
    left:60px;
    font-size:14px;
    font-weight:700;
    color:#facc15;
  ">
    CV NUSANTARA MITRA PERSADA
  </div>

  <div style="
    position:absolute;
    bottom:50px;
    left:60px;
    font-size:10px;
    font-weight:600;
    color:#374151;
  ">
    General Trading • Supplier • Technical Service
  </div>

  <!-- PAGE NUMBER -->
  <div style="
    position:absolute;
    bottom:36px;
    right:60px;
    width:48px;
    height:48px;
    background:#2d5c63;
    color:white;
    border-radius:12px;
    font-weight:bold;
    font-size:18px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-bottom:15px;
  ">
    10
  </div>

  <!-- FOOTER BAR -->
  <div style="
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:22px;
    background:#2d5c63;
  "></div>

  <!-- ACCENT -->
  <div style="
    position:absolute;
    bottom:0;
    left:65%;
    width:300px;
    height:22px;
    background:#facc15;
  "></div>

</div>
`);


// ================= KATALOG PRODUK (HORIZONTAL 5) =================

await createPage(`
<div style="
  width:100%;
  height:100%;
  font-family:sans-serif;
  background:#f5f6f7;
  position:relative;
  overflow:hidden;
">

  <!-- LABEL -->
  <div style="
    position:absolute;
    top:0;
    left:60px;
    background:#2d5c63;
    color:white;
    padding:8px 36px 0 36px;
    height:54px;
    font-size:18px;
    letter-spacing:4px;
    font-weight:600;
  ">
    COMPANY PROFILE
  </div>

  <!-- LOGO -->
  <img src="/logo-cv.png"
    style="
      position:absolute;
      top:35px;
      right:60px;
      width:120px;
    "
  />

  <!-- TITLE -->
  <div style="
    position:absolute;
    top:120px;
    left:60px;
  ">
    <h1 style="
      font-size:48px;
      font-weight:800;
      margin:0;
      color:#1e3a8a;
    ">
      KATALOG PRODUK
    </h1>
  </div>

  <!-- LIST PRODUK -->
  <div style="
    position:absolute;
    top:210px;
    left:60px;
    right:60px;
    bottom:120px;

    display:flex;
    flex-direction:column;
    gap:18px;
  ">

   ${[
  {
    nama: "Equipment Otomotive",
    desc: "Menyediakan berbagai komponen dan perlengkapan otomotif seperti brake system, velg, serta sparepart kendaraan lainnya yang digunakan untuk perawatan, perbaikan, dan peningkatan performa kendaraan.",
    img: "/katalog/automotive.png"
  },
  {
    nama: "Technical Service Industri",
    desc: "Melayani pembuatan produk custom sesuai kebutuhan industri seperti rangka mesin, panel, dan komponen khusus lainnya yang dirancang berdasarkan spesifikasi dan permintaan pelanggan.",
    img: "/katalog/custom.png"
  },
  {
    nama: "FOOD Supply",
    desc: "Menyediakan berbagai kebutuhan bahan makanan seperti buah, sayur, dan produk konsumsi lainnya untuk mendukung kebutuhan operasional perusahaan, catering, maupun industri makanan.",
    img: "/katalog/food.png"
  }
].map(p => `
      
      <div style="
        display:flex;
        background:white;
        border-radius:16px;
        overflow:hidden;

        border:1px solid #e5e7eb;

        box-shadow:
          0 4px 10px rgba(0,0,0,0.06),
          0 12px 30px rgba(0,0,0,0.12);
      ">

        <!-- IMAGE -->
<div style="
  width:450px;
  min-width:300px;
  height:250px;

  overflow:hidden;
  border-right:1px solid #eee;
">
  <img src="${p.img}"
    style="
      width:100%;
      height:100%;
      object-fit:cover;
      display:block;
    "
  />
</div>

        <!-- TEXT -->
        <div style="
          padding:18px 20px;
          display:flex;
          flex-direction:column;
           justify-content:flex-start; /* INI KUNCINYA */
  gap:6px;
        ">
          <div style="
            font-size:18px;
            font-weight:700;
            color:#1e3a8a;
          
          ">
            ${p.nama}
          </div>

          <div style="
            font-size:14px;
            color:#6b7280;
            line-height:1.5;
            max-width:420px;
          ">
            ${p.desc}
          </div>
        </div>

      </div>

    `).join("")}

  </div>

  <!-- FOOTER -->
  <div style="
    position:absolute;
    bottom:60px;
    left:60px;
    font-size:14px;
    font-weight:700;
    color:#facc15;
  ">
    CV NUSANTARA MITRA PERSADA
  </div>

  <div style="
    position:absolute;
    bottom:50px;
    left:60px;
    font-size:10px;
    font-weight:600;
    color:#374151;
  ">
    General Trading • Supplier • Technical Service
  </div>

  <!-- PAGE NUMBER -->
  <div style="
    position:absolute;
    bottom:36px;
    right:60px;
    width:48px;
    height:48px;
    background:#2d5c63;
    color:white;
    border-radius:12px;
    font-weight:bold;
    font-size:18px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-bottom:15px;
  ">
    11
  </div>

  <!-- FOOTER BAR -->
  <div style="
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:22px;
    background:#2d5c63;
  "></div>

  <!-- ACCENT -->
  <div style="
    position:absolute;
    bottom:0;
    left:65%;
    width:300px;
    height:22px;
    background:#facc15;
  "></div>

</div>
`);


// ================= KONTAK =================

await createPage(`
<div style="
  width:100%;
  height:100%;
  position:relative;
  font-family:sans-serif;
  overflow:hidden;
">

  <!-- BACKGROUND IMAGE -->
  <img src="/profile/cover-pdf.png"
    style="
      position:absolute;
      width:100%;
      height:100%;
      object-fit:cover;
    "
  />

  <!-- LIGHT OVERLAY (BIAR TERANG) -->
    <div style="
      position:absolute;
      inset:0;
      background:linear-gradient(
        to bottom,
        rgba(255,255,255,0.45) 0%,
        rgba(59,130,246,0.15) 50%,
        rgba(15,23,42,0.6) 100%
      );
    "></div>


  <!-- LOGO -->
  <img src="/logo-cv.png"
    style="
      position:absolute;
      top:40px;
      right:60px;
      width:120px;
      filter: drop-shadow(0 4px 10px rgba(0,0,0,0.4));
    "
  />

  <!-- GLOW EFFECT -->
    <div style="
      position:absolute;
      bottom:-100px;
      left:-200px;
      width:800px;
      height:800px;
      background:radial-gradient(circle, rgba(255,200,0,0.25), transparent 70%);
      filter:blur(120px);
    "></div>


  <!-- TEXT -->
  <div style="
    position:absolute;
    bottom:80px;
    left:60px;
    color:white;
    max-width:520px;
  ">

    <!-- TITLE -->
    <h1 style="
      font-size:64px;
      font-weight:800;
      margin:0;
    ">
      KONTAK
    </h1>

    <h1 style="
      font-size:64px;
      font-weight:800;
      color:#facc15;
      margin:0;
    ">
      KAMI
    </h1>

    <!-- NAMA -->
    <div style="
      margin-top:20px;
      font-size:22px;
      font-weight:700;
    ">
      CV NUSANTARA MITRA PERSADA
    </div>

    <!-- ALAMAT -->
    <div style="
      margin-top:10px;
      font-size:14px;
      line-height:1.6;
      color:#e5e7eb;
    ">
      Jl. Raya Serang KM 13.8 - Kp. Pengkolan<br/>
      Cikupa, Tangerang - Banten 15710
    </div>

   <!-- KONTAK -->
<div style="
  margin-top:24px;
  display:flex;
  flex-direction:column;
  gap:12px;
  font-size:14px;
">

  <!-- ITEM -->
  <div style="display:flex; align-items:center; gap:12px;">
    
    <div style="
      width:36px;
      height:36px;
      background:#facc15;
      border-radius:8px;

      display:flex;
      align-items:center;
      justify-content:center;

      flex-shrink:0;
    ">
      <span style="
        font-size:20px;
        line-height:1;
        position:relative;
        top:-9px;
      ">
        📞
      </span>
    </div>

    <div style="color:#e5e7eb;">
      +62 858 8803 1335
    </div>

  </div>

  <!-- ITEM -->
  <div style="display:flex; align-items:center; gap:12px;">
    
    <div style="
      width:36px;
      height:36px;
      background:#facc15;
      border-radius:8px;

      display:flex;
      align-items:center;
      justify-content:center;

      flex-shrink:0;
    ">
      <span style="
        font-size:20px;
        line-height:1;
        position:relative;
        top:-9px;
      ">
        ✉️
      </span>
    </div>

    <div style="color:#e5e7eb;">
      info@nusantaramitrapersada.co.id
    </div>

  </div>

  <!-- ITEM -->
  <div style="display:flex; align-items:center; gap:12px;">
    
    <div style="
      width:36px;
      height:36px;
      background:#facc15;
      border-radius:8px;

      display:flex;
      align-items:center;
      justify-content:center;

      flex-shrink:0;
    ">
      <span style="
        font-size:20px;
        line-height:1;
        position:relative;
        top:-9px;
      ">
        🌐
      </span>
    </div>

    <div style="color:#e5e7eb;">
      www.nusantaramitrapersada.co.id
    </div>

  </div>
   </div>

</div>

    <!-- FOOTER BAR -->
    <div style="
      position:absolute;
      bottom:0;
      left:0;
      width:100%;
      height:22px;
      background:#2d5c63;
    "></div>

    <!-- ACCENT KUNING -->
    <div style="
      position:absolute;
      bottom:0;
      left:65%;
      width:300px;
      height:22px;
      background:#facc15;
    "></div>

</div>
`);

  pdf.save("Company-Profile.pdf");
};