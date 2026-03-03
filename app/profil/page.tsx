export default function Profil() {
  return (
    <section className="section container">
      <h1 className="mb-10 text-center">Profil Perusahaan</h1>

      <div className="space-y-12">

        <div>
          <h2 className="mb-4">Visi</h2>
          <p>
            Menjadi perusahaan terpercaya dalam bidang
            General Trading dan Technical Service
            yang berstandar nasional.
          </p>
        </div>

        <div>
          <h2 className="mb-4">Misi</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Menyediakan produk dan layanan berkualitas.</li>
            <li>Menjaga ketepatan waktu dalam setiap proyek.</li>
            <li>Mengutamakan keselamatan dan profesionalisme.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4">Struktur Organisasi</h2>
          <p>
            Perusahaan dipimpin oleh Direktur dan didukung oleh
            tim operasional, teknis, dan administrasi
            yang berpengalaman di bidangnya.
          </p>
        </div>

      </div>
    </section>
  );
}