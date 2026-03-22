"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/lib/dictionary";
import { Download, Eye, Target, Shield, Award, Users, TrendingUp } from "lucide-react";

// 👉 IMPORT PDF
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Profil() {
  const { lang } = useLanguage();
  const t = dictionary[lang].profil;
  const showDownload = false;


// 👉 FUNCTION DOWNLOAD PDF
  const handleDownload = async () => {
    const element = document.getElementById("pdf-content");
    if (!element) return;

    // 🔥 SEMBUNYIKAN BUTTON
  const noPrintElements = document.querySelectorAll(".no-print");
  noPrintElements.forEach((el) => {
    (el as HTMLElement).style.display = "none";
  });

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("Company-Profile.pdf");
     // 🔥 TAMPILKAN LAGI BUTTON
  noPrintElements.forEach((el) => {
    (el as HTMLElement).style.display = "";
  });
  };


  return (
    <>
     {/* 👉 WRAPPER PDF (PENTING) */}
      <div id="pdf-content" className="bg-white">

      {/* ================= ENTERPRISE HERO ================= */}
      <section className="relative min-h-[480px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/30 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-teal-400/30 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-4xl px-6">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-lg text-white/90 mb-8">
              {t.heroSubtitle}
            </p>
            {showDownload && (
            <button
                onClick={handleDownload}
                className="no-print inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300"
              >
              <Download size={18} />
              {t.download}
            </button>
            )}
          </div>
        </div>
      </section>


            {/* ================= TENTANG KAMI ================= */}
      <section className="bg-gray-100 py-20">
  <div className="max-w-7xl mx-auto px-1 grid md:grid-cols-2 gap-12 items-center">

    {/* TEXT CARD */}
    <div className="group bg-white dark:bg-gray-900 p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4">

      <h2 className="text-3xl font-bold text-blue-900 mb-6">
              {t.aboutTitle}
            </h2>

            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              {t.about1}
            </p>

            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              {t.about2}
            </p>

            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              {t.about3}
            </p>

            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              {t.about4}
            </p>

            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              {t.about5}
            </p>

          </div>

          {/* IMAGE */}
          <div className="h-full flex items-center">
            <img
              src="/profile/about-company.png"
              alt="About Company"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
         
        </div>
      </section>


      {/* ================= SEJARAH PERUSAHAAN ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-1">
          <div className="group bg-gray-100 dark:bg-gray-800 p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4">

      <h2 className="text-3xl font-bold text-blue-900 mb-6">
              {t.historyTitle}
            </h2>

            <p className="mb-4 text-gray-700 text-justify leading-relaxed">
              {t.history1}
            </p>

            <p className="mb-4 text-gray-700 text-justify leading-relaxed">
              {t.history2}
            </p>

            <p className="mb-4 text-gray-700 text-justify leading-relaxed">
              {t.history3}
            </p>

          </div>
        </div>
      </section>


            {/* ================= VISI MISI ================= */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-2 grid md:grid-cols-2 gap-8">

         {/* VISI */}
<div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4 text-left">

  <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-white bg-gradient-to-r from-blue-800 to-teal-600 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
  <Eye size={28} />
</div>

  <h3 className="text-3xl font-bold text-blue-900 mb-4">
    {t.visionTitle}
  </h3>

  <p className="text-gray-700 text-justify leading-relaxed">
    {t.visionText}
  </p>

</div>

          {/* MISI */}
          <div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4 text-left">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-white bg-gradient-to-r from-blue-800 to-teal-600 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
  <Target size={28} />
</div>

            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              {t.missionTitle}
            </h3>

            <ul className="text-gray-700 space-y-2 list-disc pl-5 text-justify leading-relaxed">
              <li>{t.mission1}</li>
              <li>{t.mission2}</li>
              <li>{t.mission3}</li>
              <li>{t.mission4}</li>
            </ul>
          </div>

        </div>
      </section>


      {/* ================= NILAI PERUSAHAAN ================= */}
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-3 text-center">

    <h2 className="text-3xl font-bold text-blue-900 mb-3">
      {t.valueTitle}
    </h2>

    <p className="text-gray-600 mb-12">
      {t.valueSubtitle}
    </p>

    <div className="grid md:grid-cols-4 gap-6">

      {/* Integritas */}
      <div className="group bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4 text-left">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-white bg-gradient-to-r from-blue-800 to-teal-600 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
          <Shield size={26} />
        </div>
        <h4 className="font-semibold text-blue-900 mb-2">{t.integrityTitle}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-justify leading-relaxed">
          {t.integrityText}
        </p>
      </div>

      {/* Kualitas */}
      <div className="group bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4 text-left">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-white bg-gradient-to-r from-blue-800 to-teal-600 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
          <Award size={26} />
        </div>
        <h4 className="font-semibold text-blue-900 mb-2">{t.qualityTitle}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-justify leading-relaxed">
          {t.qualityText}
        </p>
      </div>

      {/* Kemitraan */}
      <div className="group bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4 text-left">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-white bg-gradient-to-r from-blue-800 to-teal-600 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
          <Users size={26} />
        </div>
        <h4 className="font-semibold text-blue-900 mb-2">{t.partnershipTitle}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-justify leading-relaxed">
          {t.partnershipText}
        </p>
      </div>

      {/* Inovasi */}
      <div className="group bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4 text-left">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-white bg-gradient-to-r from-blue-800 to-teal-600 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
          <TrendingUp size={26} />
        </div>
        <h4 className="font-semibold text-blue-900 mb-2">{t.innovationTitle}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-justify leading-relaxed">
          {t.innovationText}
        </p>
      </div>

    </div>

  </div>
</section>
</div>

{/* 👉 FIX BIAR PDF RAPI */}
      <style jsx global>{`
        .no-print {
          display: inline-flex;
        }

        @media print {
          .no-print {
            display: none !important;
          }
        }


      {/* ================= HERO CSS ================= */}
        .animated-gradient {
          background: linear-gradient(-45deg,#0f172a,#1e3a8a,#0ea5e9,#14b8a6);
          background-size: 400% 400%;
          animation: gradientMove 12s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
</>
  );
}