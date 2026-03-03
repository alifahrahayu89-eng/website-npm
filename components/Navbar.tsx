"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Profil", href: "/profil" },
    { name: "Produk", href: "/produk" },
    { name: "Layanan", href: "/layanan" },
    { name: "Legalitas", href: "/legalitas" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/85 border-b border-gray-200/70">
      <div className="max-w-7xl mx-auto px-8 h-[110px] flex items-center justify-between">

        <Link href="/" className="flex items-center gap-6">
          <Image
            src="/logo.png"
            alt="Logo CV Nusantara Mitra Persada"
            width={60}
            height={60}
            priority
          />

          <div className="w-px h-12 bg-gray-300"></div>

          <h1 className="text-[17px] font-medium tracking-[0.08em] text-gray-900">
            CV NUSANTARA MITRA PERSADA
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-12 relative">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[15px] font-medium text-gray-600 hover:text-black transition-colors duration-300"
              >
                {link.name}

                {active && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute -bottom-3 left-0 right-0 h-[2px] bg-black"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}