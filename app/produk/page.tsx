export default function ProdukPage() {
  return (
    <section className="section container">

      <h2 className="text-center mb-12">
        Produk Kami
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="card card-hover">
          <h3>General Trading</h3>
          <p>
            Pengadaan barang industri skala nasional dengan
            standar kualitas dan ketepatan waktu.
          </p>
        </div>

        <div className="card card-hover">
          <h3>Supplier</h3>
          <p>
            Distribusi material & peralatan teknik terpercaya
            untuk berbagai sektor industri.
          </p>
        </div>

        <div className="card card-hover">
          <h3>Technical Service</h3>
          <p>
            Maintenance dan engineering support profesional
            dengan tenaga ahli berpengalaman.
          </p>
        </div>

      </div>

    </section>
  );
}