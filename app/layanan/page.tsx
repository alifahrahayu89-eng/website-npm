export default function Layanan() {
  return (
    <main className="py-32 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Layanan Kami
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="p-8 border rounded-xl">
          <h3 className="font-semibold mb-4">General Trading</h3>
          <p className="text-gray-600">
            Pengadaan barang industri dan kebutuhan proyek secara profesional.
          </p>
        </div>

        <div className="p-8 border rounded-xl">
          <h3 className="font-semibold mb-4">Supplier</h3>
          <p className="text-gray-600">
            Penyediaan material, spare part, dan equipment terpercaya.
          </p>
        </div>

        <div className="p-8 border rounded-xl">
          <h3 className="font-semibold mb-4">Technical Service</h3>
          <p className="text-gray-600">
            Instalasi, maintenance, dan dukungan teknis berpengalaman.
          </p>
        </div>
      </div>
    </main>
  );
}