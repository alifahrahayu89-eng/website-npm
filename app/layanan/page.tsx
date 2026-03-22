"use client";

import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/lib/dictionary";
import { Download } from "lucide-react";

export default function Layanan() {

  const { lang } = useLanguage();
  const t = dictionary[lang].layanan;
  const showDownload = false;

  return (
    <>

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
            <button className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300">
              <Download size={18} />
              {t.download}
            </button>
            )}

          </div>
        </div>
      </section>



{/* ================= LAYANAN CONTENT ================= */}
<section className="bg-gray-100 py-20">

  < div className="max-w-7xl mx-auto px-2 space-y-24">

    {/* GENERAL TRADING */}
<div className="grid md:grid-cols-2 gap-12 items-center">

  {/* CARD TEXT */}
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">

    <h2 className="text-3xl font-bold text-blue-900 mb-4">
      {t.generalTradingTitle}
    </h2>

    <p className="text-gray-700 text-justify leading-relaxed mb-6">
      {t.generalTradingText1}
    </p>

    <p className="text-gray-700 text-justify leading-relaxed mb-6">
      {t.generalTradingText2}
    </p>

    <p className="font-semibold text-gray-800 mb-3">
      {t.serviceAdvantages}
    </p>

    <ul className="space-y-2 text-gray-700 list-disc pl-5 text-justify leading-relaxed">
      <li>{t.generalTradingList1}</li>
      <li>{t.generalTradingList2}</li>
      <li>{t.generalTradingList3}</li>
      <li>{t.generalTradingList4}</li>
      <li>{t.generalTradingList5}</li>
    </ul>

  </div>

  {/* IMAGE */}
  <div>
    <img
      src="/services/trading.png"
      alt="General Trading"
      className="rounded-2xl shadow-lg w-full"
    />
  </div>

</div>

    


    {/* SUPPLIER */}
<div className="grid md:grid-cols-2 gap-12 items-center">

  {/* IMAGE */}
  <div>
    <img
      src="/services/supplier.png"
      alt="Supplier"
      className="rounded-2xl shadow-lg w-full"
    />
  </div>

  {/* CARD TEXT */}
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">

    <h2 className="text-3xl font-bold text-blue-900 mb-4">
      {t.supplierTitle}
    </h2>

    <p className="text-gray-700 text-justify leading-relaxed mb-6">
      {t.supplierText}
    </p>

    <p className="font-semibold text-gray-800 mb-3">
      {t.serviceAdvantages}
    </p>

    <ul className="space-y-2 text-gray-700 list-disc pl-5 text-justify leading-relaxed">
      <li>{t.supplierList1}</li>
      <li>{t.supplierList2}</li>
      <li>{t.supplierList3}</li>
      <li>{t.supplierList4}</li>
      <li>{t.supplierList5}</li>
    </ul>

  </div>

</div>


    {/* SOLUSI INDUSTRI */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* CARD TEXT */}
     <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">

        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          {t.technicalServiceTitle}
        </h2>

        <p className="text-gray-700 text-justify leading-relaxed mb-6">
          {t.technicalServiceText}
        </p>

        <p className="text-gray-700 text-justify leading-relaxed mb-6">
          {t.technicalServiceText}
        </p>

        <p className="font-semibold text-gray-800 mb-3">
        {t.serviceAdvantages}
        </p>

        <ul className="space-y-2 text-gray-700 list-disc pl-5 text-justify leading-relaxed">
          <li>{t.technicalList1}</li>
          <li>{t.technicalList2}</li>
          <li>{t.technicalList3}</li>
          <li>{t.technicalList4}</li>
          <li>{t.technicalList5}</li>
        </ul>
      </div>

      <div>
        <img
          src="/services/industry.png"
          alt="Industrial Solutions"
          className="rounded-2xl shadow-lg w-full"
        />
      </div>

    </div>

  </div>

</section>


      {/* ================= HERO CSS ================= */}
      <style jsx global>{`
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