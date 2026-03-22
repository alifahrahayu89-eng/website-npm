"use client";

import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/lib/dictionary";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {

  const { lang } = useLanguage();
  const t = dictionary[lang].hero;
  const showDownload = false;

  return (
    <section className="relative min-h-[520px] flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/building.jpg')",
        }}
      />

      {/* Gradient */}
      <div className="absolute inset-0 animated-gradient" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Blur */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/30 blur-[140px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-teal-400/30 blur-[140px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 flex justify-center">

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl px-16 py-8 shadow-2xl max-w-7xl w-full text-white">

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            {t.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            {t.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 bg-green-400 hover:bg-green-300 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              {t.button}
              <ArrowRight size={18} />
            </a>

            <a
              href="/profil"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              {lang === "id" ? "Pelajari Lebih Lanjut" : "Learn More"}
            </a>

          </div>

          {/* Download */}
          {showDownload && (
          <div className="mt-6 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              <Download size={16} />
              {lang === "id"
                ? "Download Company Profile"
                : "Download Company Profile"}
            </a>
          </div>
         )}
        </div>

      </div>

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

    </section>
  );
}