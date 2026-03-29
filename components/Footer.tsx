"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {

  const { lang } = useLanguage();

  const text = {
    id: {
      companyDesc:
        "Mitra terpercaya dalam menyediakan solusi General Trading, Supplier, dan Technical Service untuk mendukung pertumbuhan bisnis Anda.",
      quickLinks: "Tautan Cepat",
      followUs: "Ikuti Kami",
      profil: "Profil",
      produk: "Produk",
      layanan: "Layanan",
      legalitas: "Legalitas",
      kontak: "Kontak",
      privacy: "Kebijakan Privasi",
      terms: "Syarat & Ketentuan",
      rights: "Seluruh hak cipta dilindungi.",
    },
    en: {
      companyDesc:
        "A trusted partner in delivering General Trading, Supplier, and Technical Service solutions to support your business growth.",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      profil: "Profile",
      produk: "Products",
      layanan: "Services",
      legalitas: "Legal",
      kontak: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      rights: "All rights reserved.",
    },
  };

  const t = text[lang];

  // ✅ TAMBAHKAN DI SINI
  const socials = [
   
    {
      icon: Linkedin,
      url: "https://linkedin.com/company/nusantara-mitra-persada",
    },
  ];

  return (
    <footer className="relative text-white overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500"></div>

      {/* GLOW EFFECT */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/20 blur-[140px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-300/20 blur-[140px] rounded-full"></div>


      {/* MAIN FOOTER */}
      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-3 gap-10 items-stretch">

          {/* COMPANY */}
          <div className="w-full h-full text-center bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">

  <h3 className="font-semibold text-yellow-400 tracking-wider uppercase text-sm">
  CV NUSANTARA MITRA PERSADA
</h3>

  <p className="text-[11px] text-white/90 tracking-wide mb-2">
    General Trading • Supplier • Technical Service
  </p>

  <p className="text-sm text-white leading-relaxed max-w-[360px] text-justify">
    {t.companyDesc}
  </p>

</div>


          {/* QUICK LINKS */}
          <div className="w-full h-full flex flex-col space-y-6 text-center bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">

            <h4 className="font-semibold text-yellow-400 tracking-wider uppercase text-sm">
              {t.quickLinks}
            </h4>

            <ul className="grid grid-cols-2 gap-3 text-sm text-white">

              {[
                { href: "/", label: "Home" },
                { href: "/profil", label: t.profil },
                { href: "/produk", label: t.produk },
                { href: "/layanan", label: t.layanan },
                { href: "/legalitas", label: t.legalitas },
                { href: "/kontak", label: t.kontak },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="block border border-transparent rounded-md px-4 py-2 hover:border-yellow-400 hover:bg-white/10 hover:text-yellow-400 hover:translate-x-1 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>

          </div>


          {/* SOCIAL */}
          <div className="w-full h-full flex flex-col justify-between text-center bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">

            <h4 className="font-semibold text-yellow-400 tracking-wider uppercase text-sm">
              {t.followUs}
            </h4>

            <div className="flex flex-1 items-center justify-center gap-12">
  {socials.map((item, i) => {
    const Icon = item.icon;
    return (
      <a
        key={i}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-yellow-400 hover:text-black transition duration-300 shadow-lg"
      >
        <Icon size={18} />
      </a>
    );
  })}
</div>

          </div>

        </div>

      </div>


      {/* SUB FOOTER */}
<div className="relative z-10 bg-blue-900 border-t border-white/20">

  <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-white">

    <p className="text-white">
      © {new Date().getFullYear()} CV Nusantara Mitra Persada. {t.rights}
    </p>

    <div className="flex gap-6 mt-3 md:mt-0">
      <Link href="/privacy-policy" className="hover:text-yellow-400 transition">
        {t.privacy}
      </Link>

      <Link href="/terms" className="hover:text-yellow-400 transition">
        {t.terms}
      </Link>
    </div>

  </div>

</div>

    </footer>
  );
}