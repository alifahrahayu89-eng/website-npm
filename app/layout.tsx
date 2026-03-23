import "./globals.css";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "CV Nusantara Mitra Persada",
  description:
    "General Trading & Technical Service untuk Proyek Nasional & BUMN.",
  keywords: ["General Trading", "Supplier Industri", "Tender BUMN"],
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900">

        <LanguageProvider>

          {/* Scroll Helper */}
          <ScrollToTop />

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="pt-[125px] min-h-screen">
            {children}
          </main>

          {/* Footer */}
          <Footer />

        </LanguageProvider>

        {/* GOOGLE reCAPTCHA */}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}