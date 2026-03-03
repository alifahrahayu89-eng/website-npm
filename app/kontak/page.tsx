"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  Loader2,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Download,
} from "lucide-react";

const ContactMap = dynamic(() => import("@/components/ContactMap"), {
  ssr: false,
});

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function KontakPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    nama: "",
    email: "",
    telepon: "",
    perusahaan: "",
    inquiry: "Vendor Inquiry",
    pesan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccess(false);

    try {
      if (!window.grecaptcha) {
        throw new Error("reCAPTCHA belum siap.");
      }

      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: "submit" }
      );

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, token }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gagal kirim.");
      }

      setSuccess(true);

      setForm({
        nama: "",
        email: "",
        telepon: "",
        perusahaan: "",
        inquiry: "Vendor Inquiry",
        pesan: "",
      });
    } catch (err: any) {
      setErrorMsg(err.message || "Terjadi kesalahan.");
    }

    setLoading(false);
  };

  return (
    <div className="relative overflow-hidden">

      {/* ================= ENTERPRISE HERO ================= */}
      <section className="relative min-h-[480px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/30 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-teal-400/30 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-4xl px-6">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Hubungi Kami
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Kami siap membantu kebutuhan bisnis Anda
            </p>
            <button className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300">
              <Download size={18} />
              Download Contact Information
            </button>
          </div>
        </div>
      </section>

      {/* ================= INFO CARDS ================= */}
      <section className="bg-gray-100 dark:bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <InfoCard icon={<Phone />} title="Telepon">
            +62 21 1234 5678 <br />
            +62 812 3456 7890
          </InfoCard>

          <InfoCard icon={<Mail />} title="Email">
            info@nusantaramitra.co.id <br />
            sales@nusantaramitra.co.id
          </InfoCard>

          <InfoCard icon={<MapPin />} title="Alamat">
            Jl. Raya Industri No. 123 <br />
            Jakarta Selatan, DKI Jakarta 12345 <br />
            Indonesia
          </InfoCard>

          <InfoCard icon={<Clock />} title="Jam Operasional">
            Senin - Jumat: 08:00 - 17:00 WIB <br />
            Sabtu: 08:00 - 13:00 WIB <br />
            Minggu: Tutup
          </InfoCard>
        </div>
      </section>

      {/* ================= FORM + MAP ================= */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10"
          >
            <h2 className="text-3xl font-semibold text-blue-900 dark:text-white mb-8">
              Kirim Pesan
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input label="Nama Lengkap *" name="nama" value={form.nama} onChange={handleChange} />

              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Email *" type="email" name="email" value={form.email} onChange={handleChange} />
                <Input label="Telepon *" name="telepon" value={form.telepon} onChange={handleChange} />
              </div>

              <Input label="Nama Perusahaan" name="perusahaan" value={form.perusahaan} onChange={handleChange} />

              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Jenis Inquiry *
                </label>
                <select
                  name="inquiry"
                  value={form.inquiry}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                >
                  <option>Vendor Inquiry</option>
                  <option>Tender/RFQ</option>
                  <option>Partnership</option>
                  <option>Product Inquiry</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Pesan *
                </label>
                <textarea
                  required
                  rows={5}
                  name="pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-900 to-teal-600 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Kirim Pesan
                  </>
                )}
              </button>

              {success && (
                <div className="flex items-center gap-2 text-green-600 mt-4">
                  <CheckCircle size={20} />
                  Pesan berhasil dikirim.
                </div>
              )}

              {errorMsg && (
                <div className="text-red-600 mt-4">
                  {errorMsg}
                </div>
              )}
            </form>
          </motion.div>

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
          >
            <ContactMap />
          </motion.div>
        </div>
      </section>

      {/* ================= QUICK RESPONSE CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Butuh Respons Cepat?
          </h2>

          <p className="text-white/90 mb-10">
            Untuk inquiry mendesak, hubungi kami langsung melalui telepon atau WhatsApp
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:+622112345678"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <Phone size={18} />
              +62 21 1234 5678
            </a>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <Phone size={18} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= ENTERPRISE CSS ================= */}
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
    </div>
  );
}

/* ================= COMPONENTS ================= */

function InfoCard({ icon, title, children }: any) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
      <div className="bg-gradient-to-r from-blue-900 to-teal-600 w-12 h-12 flex items-center justify-center rounded-lg text-white mb-6">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-3 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 dark:text-gray-300">
        {label}
      </label>
      <input
        required
        {...props}
        className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 focus:ring-2 focus:ring-blue-900 focus:outline-none"
      />
    </div>
  );
}