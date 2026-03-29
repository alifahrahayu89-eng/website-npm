"use client";

import Hero from "@/components/Hero";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/lib/dictionary";
import { ArrowRight, Shield, TrendingUp, Users, Award, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {

  const { lang } = useLanguage();
  const t = dictionary[lang];

  return (
    <>
      <Hero />

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-100 dark:bg-gray-900 py-20">

        <div className="max-w-7xl mx-auto px-1 text-center">

          <h2 className="text-4xl font-bold mb-4 text-blue-900 dark:text-white">
            {t.home.whyTitle}
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-16 leading-relaxed">
            {t.home.whySubtitle}
          </p>

          <div className="grid md:grid-cols-4 gap-8 mt-12">

            {/* Card 1 */}
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4 text-left">
              
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-800 to-teal-600 text-white mb-6 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <Shield size={22}/>
              </div>

              <h3 className="text-lg font-semibold text-blue-900 dark:text-white mb-3">
                {t.home.integrity}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm text-justify leading-relaxed">
                {t.home.integrityDesc}
              </p>

            </div>


            {/* Card 2 */}
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4 text-left">
              
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-800 to-teal-600 text-white mb-6 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <TrendingUp size={22}/>
              </div>

              <h3 className="text-lg font-semibold text-blue-900 dark:text-white mb-3">
                {t.home.quality}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm text-justify leading-relaxed">
                {t.home.integrityDesc}
              </p>

            </div>


            {/* Card 3 */}
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4 text-left">
              
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-800 to-teal-600 text-white mb-6 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <Users size={22}/>
              </div>

              <h3 className="text-lg font-semibold text-blue-900 dark:text-white mb-3">
                {t.home.professional}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm text-justify leading-relaxed">
                {t.home.professionalDesc}
              </p>

            </div>


            {/* Card 4 */}
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4 text-left">
              
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-800 to-teal-600 text-white mb-6 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <Award size={22}/>
              </div>

              <h3 className="text-lg font-semibold text-blue-900 dark:text-white mb-3">
                {t.home.certified}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm text-justify leading-relaxed">
                {t.home.certifiedDesc}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= QUICK RESPONSE CTA ================= */}
<section className="py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white text-center">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto px-6"
  >

    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      {t.home.quickTitle}
    </h2>

    <p className="text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
  {t.home.quickText}
</p>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-4">

      <Link
        href="/kontak"
        className="inline-flex items-center justify-center gap-2 bg-green-400 hover:bg-green-300 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300"
        
      >
        {t.home.button}
        <ArrowRight size={18} />
      </Link>

    </div>

  </motion.div>

</section>

    </>
  );
}