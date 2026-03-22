"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/lib/dictionary";

export default function ContactForm() {
  const { lang } = useLanguage();
  const t = dictionary[lang].contact;

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    email: "",
    telepon: "",
    perusahaan: "",
    inquiry: "Vendor Inquiry",
    pesan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => {
  (window as any).grecaptcha.ready(resolve);
});

const token = await (window as any).grecaptcha.execute(
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  { action: "submit" }
);

// ✅ TAMBAHIN DI SINI
if (!token) {
  alert("reCAPTCHA gagal, refresh halaman.");
  setLoading(false);
  return;
}

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, token }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Terjadi kesalahan.");
      } else {
        alert("Pesan berhasil dikirim!");
        setForm({
          nama: "",
          email: "",
          telepon: "",
          perusahaan: "",
          inquiry: "Vendor Inquiry",
          pesan: "",
        });
      }
    } catch (err) {
      alert("Terjadi kesalahan sistem.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        {t.sendMessage}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Nama */}
        <div>
          <label className="block mb-1 font-medium">
            {t.fullName}
          </label>
          <input
            type="text"
            name="nama"
            required
            value={form.nama}
            onChange={handleChange}
            placeholder={t.placeholderName}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email + Telepon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">
              {t.emailLabel}
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              {t.phoneLabel}
            </label>
            <input
              type="text"
              name="telepon"
              required
              value={form.telepon}
              onChange={handleChange}
              placeholder="+62 812 3456 7890"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Nama Perusahaan */}
        <div>
          <label className="block mb-1 font-medium">
            {t.company}
          </label>
          <input
            type="text"
            name="perusahaan"
            value={form.perusahaan}
            onChange={handleChange}
            placeholder={t.placeholderCompany}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Jenis Inquiry */}
        <div>
          <label className="block mb-1 font-medium">
            {t.inquiryType}
          </label>
          <select
            name="inquiry"
            value={form.inquiry}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Vendor Inquiry</option>
            <option>Tender/RFQ</option>
            <option>Partnership</option>
            <option>Product Inquiry</option>
            <option>{t.other}</option>
          </select>
        </div>

        {/* Pesan */}
        <div>
          <label className="block mb-1 font-medium">
            {t.message}
          </label>
          <textarea
            name="pesan"
            required
            rows={4}
            value={form.pesan}
            onChange={handleChange}
            placeholder={t.placeholderMessage}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-700 to-green-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          {loading ? "Mengirim..." : "✈ Kirim Pesan"}
        </button>
      </form>
    </div>
  );
}