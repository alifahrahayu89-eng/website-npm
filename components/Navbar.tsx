"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/lib/dictionary";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLanguage } = useLanguage();
  const t = dictionary[lang];

  const links = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.profil, href: "/profil" },
    { name: t.nav.produk, href: "/produk" },
    { name: t.nav.layanan, href: "/layanan" },
    { name: t.nav.legalitas, href: "/legalitas" },
    { name: t.nav.kontak, href: "/kontak" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-7xl backdrop-blur-xl bg-white/90 border border-gray-200/70 shadow-xl rounded-2xl">

      <div className="px-4 md:px-12 h-[80px] md:h-[125px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/LOGO CV.png"
            alt="Logo CV Nusantara Mitra Persada"
            width={160}
            height={80}
            priority
            className="w-[120px] md:w-[160px] h-auto object-contain shrink-0"
          />
        </Link>

        {/* MENU + LANGUAGE */}
        <div className="flex items-center gap-2 md:gap-20 max-w-full overflow-hidden">

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-10">

            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                    relative px-4 py-2 rounded-xl text-[18px] font-semibold
                    transition-all duration-300 group
                    ${active ? "text-white" : "text-gray-700"}
                    `}
                  >

                    {active && (
                      <motion.div
                        layoutId="navActive"
                        className="absolute inset-0 rounded-xl bg-black shadow-md -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30
                        }}
                      />
                    )}

                    <div className="
                    absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                    bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20
                    transition -z-10
                    " />

                    {link.name}

                  </motion.div>
                </Link>
              );
            })}

          </div>

          {/* LANGUAGE SWITCH */}
          <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 md:gap-3 shrink-0"
          >

            <span className={`hidden md:block text-sm font-semibold ${lang === "id" ? "text-black" : "text-gray-400"}`}>ID</span>

            <div className="relative w-[60px] h-[30px] rounded-full overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-70"></div>

              <div className="absolute inset-0 backdrop-blur-md bg-white/30 border border-white/40 rounded-full"></div>

              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                className="absolute top-[3px] left-[3px] w-[24px] h-[24px] rounded-full bg-white shadow-lg"
                animate={{ x: lang === "en" ? 30 : 0 }}
              />

            </div>

            <span className={`hidden md:block text-sm font-semibold ${lang === "en" ? "text-black" : "text-gray-400"}`}>
  EN
</span>

          </motion.button>

        </div>

      </div>

    </nav>
  );
}