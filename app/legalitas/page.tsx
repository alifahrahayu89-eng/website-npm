"use client";

import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/lib/dictionary";
import { Download, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import LegalDocumentCard from "@/components/LegalDocumentCard";

export default function Legalitas() {

  const { lang } = useLanguage();
  const t = dictionary[lang].legalitas;
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
              {t.title}
            </h1>

            <p className="text-lg text-white/90 mb-8">
              {t.subtitle}
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


      {/* ================= LEGAL DOCUMENTS ================= */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-1">

          <div className="text-center mb-16">

            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {t.documentsTitle}
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.documentsSubtitle}
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-8">

            <LegalDocumentCard
              title={t.nib}
              desc={t.nibDesc}
              number={t.noNib}
              image="/legal/nib-preview.png"
            />

            <LegalDocumentCard
              title={t.npwp}
              desc={t.npwpDesc}
              number={t.noNpwp}
              image="/legal/npwp-preview.png"
            />

            <LegalDocumentCard
              title={t.akta}
              desc={t.aktaDesc}
              number={t.noAkta}
              image="/legal/akta-preview.png"
            />

            <LegalDocumentCard
              title={t.sk}
              desc={t.skDesc}
              number={t.noSk}
              image="/legal/sk-preview.png"
            />

          </div>

        </div>

      </section>



      {/* ================= CREDIBILITY CTA ================= */}
      <section className="py-24 bg-gray-100 text-center">

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 py-16 px-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >

            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-400 text-gray-900 shadow-md">
                <Shield size={30} />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t.quickTitle}
            </h2>

            <p className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.quickText}
            </p>

          </motion.div>


          {/* ================= TRUST INDICATORS ================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

            <div className="group flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-yellow-400">
              <CheckCircle className="text-green-600 mt-1 transition-transform duration-300 group-hover:scale-110" size={20} />
              <p className="text-sm text-gray-700">
                {t.trust1}
              </p>
            </div>

            <div className="group flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-yellow-400">
              <CheckCircle className="text-green-600 mt-1 transition-transform duration-300 group-hover:scale-110" size={20} />
              <p className="text-sm text-gray-700">
                {t.trust2}
              </p>
            </div>

            <div className="group flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-yellow-400">
              <CheckCircle className="text-green-600 mt-1 transition-transform duration-300 group-hover:scale-110" size={20} />
              <p className="text-sm text-gray-700">
                {t.trust3}
              </p>
            </div>

            <div className="group flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-yellow-400">
              <CheckCircle className="text-green-600 mt-1 transition-transform duration-300 group-hover:scale-110" size={20} />
              <p className="text-sm text-gray-700">
                {t.trust4}
              </p>
            </div>

            <div className="group flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-yellow-400 md:col-span-2 lg:col-span-2">
              <CheckCircle className="text-green-600 mt-1 transition-transform duration-300 group-hover:scale-110" size={20} />
              <p className="text-sm text-gray-700">
                {t.trust5}
              </p>
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