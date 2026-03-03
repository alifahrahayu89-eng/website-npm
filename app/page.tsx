import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Tentang Singkat */}
      <section className="section container text-center">
        <h2 className="mb-8">Tentang Perusahaan</h2>
        <p className="max-w-3xl mx-auto">
          CV Nusantara Mitra Persada adalah perusahaan yang bergerak
          di bidang General Trading, Supplier, dan Technical Service
          dengan komitmen terhadap kualitas, ketepatan waktu,
          serta profesionalisme dalam setiap proyek.
        </p>
      </section>

      {/* Bidang Usaha */}
      <section className="section bg-gray-100 dark:bg-gray-900">
        <div className="container text-center">
          <h2 className="mb-12">Bidang Usaha</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3>General Trading</h3>
              <p>Pengadaan barang industri skala nasional.</p>
            </div>

            <div className="card">
              <h3>Supplier</h3>
              <p>Distribusi material & peralatan teknik.</p>
            </div>

            <div className="card">
              <h3>Technical Service</h3>
              <p>Maintenance & engineering support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Komitmen */}
      <section className="section container text-center">
        <h2 className="mb-8">Komitmen Kami</h2>
        <p className="max-w-3xl mx-auto">
          Kami berkomitmen untuk memberikan layanan terbaik,
          menjaga standar mutu dan keselamatan kerja,
          serta membangun kemitraan jangka panjang
          dengan seluruh klien dan mitra usaha.
        </p>
      </section>
    </>
  );
}