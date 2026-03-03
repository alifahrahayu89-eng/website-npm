export default function Legalitas() {
  return (
    <section className="section container text-center">
      <h1 className="mb-12">Legalitas Perusahaan</h1>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="card">
          <h3>NIB</h3>
          <p>Nomor Induk Berusaha: 0000000000000</p>
        </div>

        <div className="card">
          <h3>NPWP</h3>
          <p>00.000.000.0-000.000</p>
        </div>

        <div className="card">
          <h3>PKP</h3>
          <p>Pengusaha Kena Pajak</p>
        </div>

        <div className="card">
          <h3>SIUP / Izin Usaha</h3>
          <p>Terdaftar dan Aktif</p>
        </div>

      </div>
    </section>
  );
}