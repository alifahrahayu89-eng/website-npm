"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/lib/dictionary";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLanguage } = useLanguage();
  const t = dictionary[lang];
  const [open, setOpen] = useState(false);

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
            src="/logo-cv.png"
            alt="Logo CV Nusantara Mitra Persada"
            width={160}
            height={80}
            priority
            className="w-[120px] md:w-[160px] h-auto object-contain"
          />
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-2 rounded-xl text-[16px] font-semibold transition-all duration-300
                    ${active ? "text-white" : "text-gray-700"}`}
                  >
                    {active && (
                      <motion.div
                        layoutId="navActive"
                        className="absolute inset-0 rounded-xl bg-black -z-10"
                      />
                    )}
                    {link.name}
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* LANGUAGE SWITCH */}
          <motion.button
            onClick={toggleLanguage}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 shrink-0"
          >
            <span className={`hidden md:block text-sm ${lang === "id" ? "text-black" : "text-gray-400"}`}>
              ID
            </span>

            <div className="relative w-[50px] h-[26px] md:w-[60px] md:h-[30px] rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-70"></div>

              <motion.div
                className="absolute top-[3px] left-[3px] w-[20px] h-[20px] md:w-[24px] md:h-[24px] rounded-full bg-white"
                animate={{ x: lang === "en" ? 24 : 0 }}
              />
            </div>

            <span className={`hidden md:block text-sm ${lang === "en" ? "text-black" : "text-gray-400"}`}>
              EN
            </span>
          </motion.button>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-4 pb-4"
          >
            <div className="flex flex-col gap-3 mt-4 bg-white rounded-xl shadow p-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  <div className="py-2 text-gray-700 font-semibold">
                    {link.name}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}