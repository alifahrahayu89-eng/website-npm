import { Phone } from "lucide-react";

export default function CTA() {
  const phone = "+622112345678";
  const whatsappNumber = "6281234567890";
  const whatsappMessage = encodeURIComponent(
    "Halo CV Nusantara Mitra Persada, saya ingin menanyakan informasi lebih lanjut."
  );

  return (
    <section className="py-16 bg-gradient-to-r from-blue-800 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Butuh Respons Cepat?
        </h2>

        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Untuk inquiry mendesak, hubungi kami langsung melalui telepon atau WhatsApp.
          Tim kami siap membantu Anda.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* Telepon */}
          <a
            href={`tel:${phone}`}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow-md hover:scale-105 transition"
          >
            <Phone size={18} />
            +62 21 1234 5678
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold shadow-md transition hover:scale-105"
          >
            WhatsApp Sekarang
          </a>

        </div>

      </div>
    </section>
  );
}