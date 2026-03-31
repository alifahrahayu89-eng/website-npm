import { profile } from "console";
import { button } from "framer-motion/client";
import { Download, Subtitles } from "lucide-react";

export const dictionary = {
  id: {
    nav: {
      home: "Beranda",
      profil: "Profil",
      produk: "Produk",
      layanan: "Layanan",
      legalitas: "Legalitas",
      kontak: "Kontak",
    },

    hero: {
  title: "Solusi Terpercaya Untuk Kebutuhan Bisnis Anda",
  subtitle:
    "Kami menyediakan layanan general trading, supplier, dan solusi industri yang profesional dengan komitmen terhadap kualitas dan kepuasan pelanggan.",
  button: "Hubungi Kami",
  learn: "Pelajari Lebih Lanjut",
  downloadProfile: "Download Profile",
},

    home: {
  whyTitle: "Mengapa Memilih Kami?",
  whySubtitle:
    "Kami berkomitmen memberikan layanan profesional dengan standar kualitas tinggi serta integritas yang dapat dipercaya.",

  integrity: "Integritas",
  integrityDesc:
    "Perusahaan dibangun dengan komitmen tinggi untuk menjalankan bisnis dengan kejujuran, transparansi dan tanggung jawab kepada setiap klien.",

  quality: "Berkualitas",
  qualityDesc:
    "Produk dan layanan yang dirancang dengan standar kualitas tinggi untuk memberikan hasil terbaik dan kepuasan klien.",

  professional: "Profesional",
  professionalDesc:
    "Didukung oleh tim yang kompeten dan berdedikasi dalam memberikan solusi terbaik bagi kebutuhan anda.",

  certified: "Bersertifikat",
  certifiedDesc:
    "Perusahaan terdaftar resmi dengan legalitas lengkap dan kredibilitas yang terjamin.",

  quickTitle: "Siap Berkolaborasi dengan Kami?",
  quickText: "Hubungi kami sekarang untuk mendiskusikan kebutuhan bisnis Anda dan temukan solusi terbaik bersama CV Nusantara Mitra Persada",
  button: "Mulai Sekarang",
},
    profil: {
  title: "Profil Perusahaan",

  heroTitle: "Profil Perusahaan",
  heroSubtitle: "Mengenal lebih dekat CV Nusantara Mitra Persada",
  download: "Download Profile",

  aboutTitle: "Tentang Kami",

about1: "CV Nusantara Mitra Persada adalah perusahaan yang bergerak di bidang general trading, supplier, dan technical service yang menyediakan berbagai kebutuhan industri dan proyek. Kami hadir untuk memenuhi kebutuhan berbagai sektor industri dengan menyediakan produk berkualitas serta layanan yang profesional dan responsif.",
about2: "Sebagai perusahaan yang terus berkembang, kami berkomitmen untuk memberikan pelayanan terbaik kepada setiap pelanggan dengan mengedepankan integritas, kualitas, dan kepercayaan dalam setiap kerja sama yang kami bangun.",
about3: "Melalui layanan pengadaan barang (general trading), penyediaan kebutuhan industri (supplier), serta dukungan technical service, kami berupaya memberikan solusi yang tepat, efisien, dan sesuai dengan kebutuhan pelanggan.",
about4: "Kami percaya bahwa hubungan bisnis yang baik dimulai dari komunikasi yang jelas, pelayanan yang cepat, serta solusi yang tepat. Oleh karena itu, CV Nusantara Mitra Persada siap menjadi mitra yang dapat diandalkan dalam memenuhi kebutuhan pengadaan barang maupun layanan teknis untuk mendukung kelancaran operasional dan pertumbuhan bisnis pelanggan.",
about5: "Komitmen kami adalah memberikan produk berkualitas, harga yang kompetitif, serta pelayanan yang profesional guna menciptakan kerja sama yang berkelanjutan dan saling menguntungkan.",

historyTitle: "Sejarah Perusahaan",

history1: "CV Nusantara Mitra Persada didirikan dengan tujuan untuk menjadi perusahaan yang bergerak di bidang general trading, supplier, dan technical service yang mampu memenuhi berbagai kebutuhan industri di Indonesia. Perusahaan ini hadir sebagai bentuk komitmen untuk menyediakan produk dan layanan yang berkualitas, profesional, serta dapat diandalkan.",
history2: "Sejak awal berdiri, CV Nusantara Mitra Persada berfokus pada penyediaan berbagai kebutuhan industri melalui layanan pengadaan barang dan dukungan teknis yang efisien. Dengan semangat untuk terus berkembang, perusahaan berupaya membangun kepercayaan dan menjalin hubungan kerja sama yang baik dengan berbagai pihak.",
history3: "CV Nusantara Mitra Persada berkomitmen untuk terus meningkatkan kualitas layanan, memperluas jaringan kerja sama, serta memberikan solusi terbaik guna mendukung kebutuhan dan pertumbuhan bisnis para pelanggan.",

visionTitle: "Visi",
visionText: "Menjadi perusahaan general trading dan supplier yang terpercaya dan profesional di Indonesia, yang dikenal melalui kualitas produk, keandalan layanan, serta komitmen dalam memberikan solusi terbaik bagi kebutuhan industri.",

missionTitle: "Misi",
mission1: "Menyediakan produk berkualitas tinggi dengan harga yang kompetitif dan terjangkau",
mission2: "Memberikan pelayanan yang cepat, responsif, dan profesional kepada setiap pelanggan",
mission3: "Membangun kemitraan jangka panjang yang saling menguntungkan dengan pelanggan dan mitra bisnis",
mission4: "Mengembangkan perusahaan secara berkelanjutan melalui inovasi dan peningkatan kualitas layanan",

valueTitle: "Nilai-Nilai Perusahaan",
valueSubtitle: "Prinsip-prinsip yang menjadi fondasi dalam setiap langkah kami",

integrityTitle: "Integritas",
integrityText: "Menjalankan bisnis dengan kejujuran dan transparansi dalam setiap transaksi.",

qualityTitle: "Kualitas",
qualityText: "Berkomitmen memberikan produk dan layanan berkualitas tinggi",

partnershipTitle: "Kemitraan",
partnershipText: "Membangun hubungan jangka panjang yang saling menguntungkan",

innovationTitle: "Inovasi",
innovationText: "Terus berinovasi untuk memenuhi kebutuhan pasar yang dinamis"
},

    produk: {
  title: "Produk & Katalog",

  heroTitle: "Produk & Katalog",
  heroSubtitle: "Jelajahi katalog lengkap produk berkualitas untuk kebutuhan industri Anda",
  download: "Download Profile",

  industrialTitle: "Produk & Solusi Industri",
industrialDesc:
"CV Nusantara Mitra Persada menyediakan berbagai kebutuhan produk industri melalui jaringan supplier terpercaya untuk mendukung operasional perusahaan dan proyek pelanggan secara profesional.",

detail: "Lihat Detail",

whyTitle: "Mengapa Memilih Kami",
whyDesc: "CV Nusantara Mitra Persada menghadirkan solusi pengadaan industri dengan dukungan supplier terpercaya, proses pengadaan efisien, serta layanan profesional untuk memenuhi kebutuhan operasional perusahaan dan proyek pelanggan.",

    title1: "Jaringan Supplier",
    desc1: "Didukung jaringan supplier terpercaya untuk memastikan ketersediaan berbagai produk industri.",

    title2: "Pengadaan Efisien",
    desc2: "Proses pengadaan yang cepat dan efisien untuk mendukung kebutuhan operasional pelanggan.",

    title3: "Distribusi Tepat Waktu",
    desc3: "Sistem logistik yang memastikan produk sampai kepada pelanggan secara tepat waktu.",

    title4: "Layanan Profesional",
    desc4: "Tim profesional yang siap membantu kebutuhan pengadaan industri pelanggan.",

processTitle: "Proses Pengadaan Produk",
processDesc: "Kami menjalankan sistem pengadaan yang terstruktur dan profesional untuk memastikan setiap produk memiliki kualitas terbaik dan pengiriman tepat waktu.",

step1Title: "Analisis Kebutuhan",
step1Desc: "Memahami kebutuhan pelanggan secara detail untuk menentukan spesifikasi produk yang sesuai dengan kebutuhan proyek.",

step2Title: "Seleksi Supplier",
step2Desc: "Melakukan proses pencarian dan seleksi supplier terpercaya yang mampu menyediakan produk berkualitas tinggi.",

step3Title: "Pengadaan Produk",
step3Desc: "Melaksanakan proses pengadaan produk sesuai standar kualitas dan kebutuhan operasional pelanggan.",

step4Title: "Distribusi Produk",
step4Desc: "Produk dikirimkan kepada pelanggan melalui sistem logistik yang efisien dan tepat waktu.",

  quickTitle: "Tidak Menemukan Produk yang Anda Cari?",
  quickText: "Hubungi kami untuk konsultasi dan informasi lebih lanjut mengenai ketersediaan produk",
  button: "Hubungi Kami",
},

  layanan: {

      heroTitle: "Layanan Kami",
      heroSubtitle: "Solusi lengkap untuk kebutuhan bisnis dan industri Anda",
      download: "Download Profile",

      generalTradingTitle: "General Trading",
      generalTradingText1:
        "Kami menyediakan layanan general trading untuk berbagai kebutuhan produk dan perlengkapan industri. CV Nusantara Mitra Persada berkomitmen membantu pelanggan memperoleh produk yang dibutuhkan dengan proses pengadaan yang efektif, tepat waktu, dan terpercaya.",
      generalTradingText2:
        "Melalui kerja sama dengan berbagai mitra penyedia produk, kami berupaya memberikan solusi perdagangan yang fleksibel serta mendukung kelancaran operasional bisnis pelanggan.",

      supplierTitle: "Supplier",
      supplierText:
        "Kami menyediakan berbagai produk untuk mendukung kebutuhan operasional bisnis dan industri. Mulai dari bahan baku hingga komponen industri, kami berupaya menghadirkan produk berkualitas dengan proses pengadaan yang efisien dan pelayanan yang profesional.",

      technicalServiceTitle: "Layanan Teknis",
      technicalServiceText:
        "Selain pengadaan produk, kami juga menyediakan dukungan layanan teknis untuk membantu kebutuhan operasional dan teknis pelanggan. Layanan ini bertujuan memberikan solusi yang tepat serta memastikan penggunaan produk dapat berjalan dengan optimal.",

      serviceAdvantages: "Keunggulan Layanan:",

      generalTradingList1: "Penyediaan berbagai produk sesuai kebutuhan industri",
      generalTradingList2: "Dukungan pengadaan melalui mitra terpercaya",
      generalTradingList3: "Distribusi produk secara efektif dan tepat waktu",
      generalTradingList4: "Pelayanan profesional, responsif, dan komunikatif",
      generalTradingList5: "Penawaran harga kompetitif dengan kualitas terbaik",

      supplierList1: "Penyediaan produk sesuai kebutuhan pelanggan",
      supplierList2: "Dukungan pengadaan dari berbagai sumber terpercaya",
      supplierList3: "Pelayanan profesional, responsif, dan komunikatif",
      supplierList4: "Pengiriman cepat dan aman",
      supplierList5: "Harga kompetitif dengan kualitas terbaik",

      technicalList1: "Dukungan layanan teknis sesuai kebutuhan pelanggan",
      technicalList2: "Penanganan pekerjaan teknis secara profesional",
      technicalList3: "Pendekatan solusi yang efektif dan tepat guna",
      technicalList4: "Komunikasi responsif dalam setiap proses pekerjaan",
      technicalList5: "Komitmen terhadap kualitas layanan"
},

  legalitas: {
      title: "Legalitas & Kredibilitas",
  subtitle: "Perusahaan terdaftar resmi dengan legalitas lengkap dan kredibilitas terpercaya",

  documentsTitle: "Dokumen Legalitas Perusahaan",
  documentsSubtitle: "CV Nusantara Mitra Persada berkomitmen menjalankan kegiatan usaha secara profesional serta mematuhi seluruh regulasi yang berlaku. Seluruh dokumen legalitas perusahaan tersedia dan terdaftar secara resmi.",

  nib: "Nomor Induk Berusaha",
  nibDesc: "Terdaftar Secara Resmi Pada Sistem OSS",
  noNib: "No.NIB: 0903260124759",
  npwp: "NPWP Perusahaan",
  npwpDesc: "Nomor Pokok Wajib Pajak Badan Usaha",
  noNpwp: "No.NPWP: 1000-0000-XXXX-XXXX",
  siup: "Surat Izin Usaha Perdagangan",
  siupDesc: "Surat Izin Usaha Perdagangan",
  noSiup: "No.SIUP: 123456",
  akta: "Akta Pendirian",
  aktaDesc: "Dokumen Pendirian Perusahaan Oleh Notaris",
  noAkta: "No.Akta: 02  |  Tanggal: 02 Maret 2026 ",
  sk: "Surat Keterangan Terdaftar AHU",
  skDesc: "CV Telah Terdaftar di Sistem Administrasi Badan Usaha",
  noSk: "No. SKT: AHU-0017580-AH.01.14 Tahun 2026",

  trust1: "Terdaftar secara resmi di Kementerian Hukum dan HAM",
  trust2: "Memiliki legalitas usaha yang sah",
  trust3: "Terbuka untuk membangun kemitraan bisnis",
  trust4: "Berkomitmen mematuhi regulasi yang berlaku",
  trust5: "Berkomitmen menjalankan bisnis secara profesional dan transparan",

  download: "Download Profile",

  quickTitle: "Kredibilitas Perusahaan",
  quickText: "Komitmen kami dalam menjalankan bisnis secara transparan, profesional, dan sesuai dengan ketentuan hukum yang berlaku.",
    },

  contact: {
     heroTitle: "Hubungi Kami",
     heroSubtitle: "Kami siap membantu kebutuhan bisnis Anda",
     download: "Download Profile",

     phone: "Telepon",
     email: "Email",
     address: "Alamat",
     hours: "Jam Operasional",

    sendMessage: "Kirim Pesan",

    fullName: "Nama Lengkap *",
    emailLabel: "Email *",
    phoneLabel: "Telepon *",
    company: "Nama Perusahaan",
  inquiryType: "Kategori Permintaan *",
  inquiryVendor: "Pendaftaran Vendor",
inquiryTender: "Tender & RFQ",
inquiryPartnership: "Kerjasama Kemitraan",
inquiryProduct: "Permintaan Data Produk",
  message: "Pesan *",

  sending: "Mengirim...",
  send: "Kirim Pesan",
  success: "Pesan berhasil dikirim.",

  quickTitle: "Butuh Respons Cepat?",
  quickText: "Untuk inquiry mendesak, hubungi kami langsung melalui telepon atau WhatsApp",

  monday: "Senin - Jumat: 08:00 - 17:00 WIB",
  saturday: "Sabtu: 08:00 - 13:00 WIB",
  sunday: "Minggu: Tutup",

  other: "Lainnya",

  placeholderName: "Masukkan nama lengkap Anda",
  placeholderCompany: "Nama perusahaan Anda",
  placeholderMessage: "Tulis pesan Anda...",

  whatsappNow: "WhatsApp Sekarang",
},
  },

  en: {
    nav: {
      home: "Home",
      profil: "Profile",
      produk: "Products",
      layanan: "Services",
      legalitas: "Legal",
      kontak: "Contact",
    },

    hero: {
  title: "Trusted Solutions for Your Business Needs",
  subtitle:
    "We provide professional general trading, supplier, and industrial solutions with a strong commitment to quality and customer satisfaction.",
  button: "Contact Us",
  learn: "Learn More",
  downloadProfile: "Download Profile",
},

    home: {
  whyTitle: "Why Choose Us?",
  whySubtitle:
    "We are committed to delivering professional services with high quality standards and trusted integrity.",

  integrity: "Integrity",
  integrityDesc:
    "Our company is built with a strong commitment to honesty, transparency, and responsibility towards every client.",

  quality: "High Quality",
  qualityDesc:
    "Products and services designed with high quality standards to deliver the best results and client satisfaction.",

  professional: "Professional",
  professionalDesc:
    "Supported by a competent and dedicated team to provide the best solutions for your business needs.",

  certified: "Certified",
  certifiedDesc:
    "Officially registered company with complete legal compliance and trusted credibility.",

  quickTitle: "Ready to Collaborate with Us?",
  quickText: "Contact us today to discuss your business needs and discover the best solutions with CV Nusantara Mitra Persada",
  button: "Get Started",
},

    profil: {

heroTitle: "Company Profile",
heroSubtitle: "Get to know CV Nusantara Mitra Persada better",
download: "Download Profile",

aboutTitle: "About Us",

about1:
"CV Nusantara Mitra Persada is a company engaged in general trading, supplier services, and technical services that provide various industrial and project needs. We are here to support various industrial sectors by delivering quality products along with professional and responsive services.",

about2:
"As a growing company, we are committed to delivering the best service to every customer by prioritizing integrity, quality, and trust in every partnership we build.",

about3:
"Through procurement services (general trading), industrial supply services (supplier), and technical support services, we strive to provide solutions that are precise, efficient, and aligned with our customers’ needs.",

about4:
"We believe that strong business relationships begin with clear communication, fast service, and the right solutions. Therefore, CV Nusantara Mitra Persada is ready to become a reliable partner in fulfilling procurement and technical service needs to support the operational continuity and business growth of our clients.",

about5:
"Our commitment is to deliver quality products, competitive pricing, and professional service to create sustainable and mutually beneficial partnerships.",


historyTitle: "Company History",

history1:
"CV Nusantara Mitra Persada was established with the goal of becoming a company engaged in general trading, supplier services, and technical services capable of fulfilling various industrial needs in Indonesia. The company was founded with a commitment to provide quality products and professional services that can be relied upon.",

history2:
"Since its establishment, CV Nusantara Mitra Persada has focused on supplying industrial needs through efficient procurement services and technical support. With a strong spirit of growth, the company strives to build trust and develop strong partnerships with various stakeholders.",

history3:
"CV Nusantara Mitra Persada is committed to continuously improving service quality, expanding its partnership network, and providing the best solutions to support the needs and business growth of its customers.",


visionTitle: "Vision",

visionText:
"To become a trusted and professional general trading and supplier company in Indonesia, recognized for product quality, reliable services, and commitment to delivering the best solutions for industrial needs.",


missionTitle: "Mission",

mission1:
"Providing high-quality products at competitive and affordable prices",

mission2:
"Delivering fast, responsive, and professional service to every customer",

mission3:
"Building long-term and mutually beneficial partnerships with customers and business partners",

mission4:
"Developing the company sustainably through innovation and continuous service improvement",


valueTitle: "Company Values",

valueSubtitle:
"The principles that form the foundation of every step we take",


integrityTitle: "Integrity",

integrityText:
"Conducting business with honesty and transparency in every transaction.",


qualityTitle: "Quality",

qualityText:
"Committed to delivering high-quality products and services.",


partnershipTitle: "Partnership",

partnershipText:
"Building long-term and mutually beneficial relationships.",


innovationTitle: "Innovation",

innovationText:
"Continuously innovating to meet dynamic market needs."
},


produk: {
  title: "Products & Catalog",

  heroTitle: "Products & Catalog",
  heroSubtitle: "Explore our complete catalog of high-quality industrial products",
  download: "Download Profile",

  industrialTitle: "Industrial Products & Solutions",
industrialDesc:
"CV Nusantara Mitra Persada provides various industrial product needs through trusted supplier networks to support company operations and customer projects professionally.",

detail: "View Details",

whyTitle: "Why Choose Us",
whyDesc:
"CV Nusantara Mitra Persada delivers industrial procurement solutions supported by trusted suppliers, efficient processes, and professional services.",

title1: "Supplier Network",
desc1: "Supported by a trusted supplier network to ensure the availability of various industrial products.",

title2: "Efficient Procurement",
desc2: "A fast and efficient procurement process to support customers' operational needs.",

title3: "On-Time Distribution",
desc3: "A reliable logistics system that ensures products are delivered to customers on schedule.",

title4: "Professional Service",
desc4: "A professional team ready to assist with customers' industrial procurement needs.",

processTitle: "Product Procurement Process",
processDesc: "We implement a structured and professional procurement system to ensure every product meets high quality standards and is delivered on time.",

step1Title: "Needs Analysis",
step1Desc: "Understanding customer requirements in detail to determine product specifications suitable for the project.",

step2Title: "Supplier Selection",
step2Desc: "Conducting a search and evaluation process to select trusted suppliers capable of providing high-quality products.",

step3Title: "Product Procurement",
step3Desc: "Carrying out product procurement according to quality standards and customer operational requirements.",

step4Title: "Product Distribution",
step4Desc: "Products are delivered to customers through an efficient and reliable logistics system.",

  quickTitle: "Can't Find the Product You're Looking For?",
  quickText: "Contact us for consultation and further information regarding product availability.",
  button: "Contact Us",
},

layanan: {

    heroTitle: "Our Services",
    heroSubtitle: "Reliable solutions for your industrial needs",
    download: "Download Profile",

    generalTradingTitle: "General Trading",
    generalTradingText1:
      "We provide general trading services for a wide range of industrial products and equipment. CV Nusantara Mitra Persada is committed to helping customers obtain the products they need through an effective, timely, and reliable procurement process.",
    generalTradingText2:
      "Through collaboration with various trusted suppliers and partners, we strive to deliver flexible trading solutions that support the smooth operation of our clients’ businesses.",

    supplierTitle: "Supplier",
    supplierText:
      "We supply a wide range of products to support business and industrial operations. From raw materials to industrial components, we aim to provide quality products through efficient procurement processes and professional service.",

    technicalServiceTitle: "Technical Services",
    technicalServiceText:
      "In addition to product procurement, we also provide technical support services to assist our clients' operational and technical requirements. Our goal is to deliver appropriate solutions and ensure that products are utilized effectively and optimally.",

    serviceAdvantages: "Service Advantages:",

    generalTradingList1:
      "Provision of various products according to industrial requirements",
    generalTradingList2:
      "Procurement support through trusted partners and suppliers",
    generalTradingList3:
      "Efficient and timely product distribution",
    generalTradingList4:
      "Professional, responsive, and communicative service",
    generalTradingList5:
      "Competitive pricing with high product quality",

    supplierList1:
      "Supply of products tailored to customer needs",
    supplierList2:
      "Procurement support from reliable sources",
    supplierList3:
      "Professional, responsive, and communicative service",
    supplierList4:
      "Fast and secure delivery",
    supplierList5:
      "Competitive pricing with reliable product quality",

    technicalList1:
      "Technical support services tailored to customer requirements",
    technicalList2:
      "Professional handling of technical tasks",
    technicalList3:
      "Effective and practical solution approaches",
    technicalList4:
      "Responsive communication throughout the work process",
    technicalList5:
      "Strong commitment to service quality",
},

legalitas: {
      title: "Legal & Credibility",
  subtitle: "Officially registered company with complete legal compliance and trusted credibility",

  documentsTitle: "Company Legal Documents",
  documentsSubtitle: "CV Nusantara Mitra Persada is committed to conducting business professionally and in compliance with all applicable regulations. All company legal documents are officially registered and available.",

nib: "Business Identification Number (NIB)",
nibDesc: "Officially registered in the OSS system",
noNib: "NIB No.: 0903260124759",

npwp: "Corporate Tax Identification Number (NPWP)",
npwpDesc: "Registered corporate taxpayer identification number",
noNpwp: "NPWP No.: 1000-0000-XXXX-XXXX",

siup: "Trading Business License (SIUP)",
siupDesc: "Official license for trading business activities",
noSiup: "SIUP No.: 123456",

akta: "Deed of Establishment",
aktaDesc: "Company establishment document issued by a notary",
noAkta: "Deed No.: 02 | Date: March 2, 2026",

sk: "Certificate of Registration (AHU)",
skDesc: "Officially registered in the Business Administration System",
noSk: "Registration No.: AHU-0017580-AH.01.14 Year 2026",

  trust1: "Officially registered with the Ministry of Law and Human Rights",
  trust2: "Possesses valid business legality",
  trust3: "Open to building business partnerships",
  trust4: "Committed to complying with applicable regulations",
  trust5: "Committed to running business professionally and transparently",

  download: "Download Profile",

  quickTitle: "Company Credibility",
  quickText:
    "Our commitment to conducting business transparently, professionally, and in accordance with applicable laws."
    },

    contact: {
  heroTitle: "Contact Us",
  heroSubtitle: "We are ready to support your business needs",
  download: "Download Profile",

  phone: "Phone",
  email: "Email",
  address: "Address",
  hours: "Operating Hours",

  sendMessage: "Send Message",

  fullName: "Full Name *",
  emailLabel: "Email *",
  phoneLabel: "Phone *",
  company: "Company Name",
  inquiryType: "Inquiry Category *",
  inquiryVendor: "Vendor Registration",
inquiryTender: "Tender & RFQ",
inquiryPartnership: "Partnership Inquiry",
inquiryProduct: "Product Information Request",
  message: "Message *",

  sending: "Sending...",
  send: "Send Message",
  success: "Message sent successfully.",

  quickTitle: "Need a Quick Response?",
  quickText: "For urgent inquiries, contact us directly via phone or WhatsApp",

  monday: "Monday - Friday: 08:00 - 17:00 WIB",
  saturday: "Saturday: 08:00 - 13:00 WIB",
  sunday: "Sunday: Closed",

  other: "Other",

  placeholderName: "Enter your full name",
  placeholderCompany: "Your company name",
  placeholderMessage: "Write your message...",

  whatsappNow: "WhatsApp Now",
},
  },
};