export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="mb-4">CV Nusantara Mitra Persada</h3>
          <p>
            General Trading, Supplier & Technical Service
            terpercaya untuk kebutuhan industri nasional.
          </p>
        </div>

        <div>
          <h4 className="mb-4">Kontak</h4>
          <p>Email: info@nusantaramitrapersada.co.id</p>
          <p>Telp: +62 000 0000 0000</p>
        </div>

        <div>
          <h4 className="mb-4">Alamat</h4>
          <p>Indonesia</p>
        </div>

      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CV Nusantara Mitra Persada
      </div>
    </footer>
  );
}