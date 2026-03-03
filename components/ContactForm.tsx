"use client";

import { useState } from "react";

export default function ContactForm() {
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
      const token = await (window as any).grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "submit" }
      );

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
        Kirim Pesan
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Nama */}
        <div>
          <label className="block mb-1 font-medium">
            Nama Lengkap *
          </label>
          <input
            type="text"
            name="nama"
            required
            value={form.nama}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap Anda"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email + Telepon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">
              Email *
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
              Telepon *
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
            Nama Perusahaan
          </label>
          <input
            type="text"
            name="perusahaan"
            value={form.perusahaan}
            onChange={handleChange}
            placeholder="Nama perusahaan Anda"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Jenis Inquiry */}
        <div>
          <label className="block mb-1 font-medium">
            Jenis Inquiry *
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
            <option>Lainnya</option>
          </select>
        </div>

        {/* Pesan */}
        <div>
          <label className="block mb-1 font-medium">
            Pesan *
          </label>
          <textarea
            name="pesan"
            required
            rows={4}
            value={form.pesan}
            onChange={handleChange}
            placeholder="Tulis pesan Anda..."
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