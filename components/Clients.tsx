import AnimatedSection from "./AnimatedSection";

export default function Clients() {
  const logos = ["Client A", "Client B", "Client C", "Client D"];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12">Klien Kami</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-8 text-gray-500">
          {logos.map((logo, i) => (
            <AnimatedSection key={i}>
              <div className="border rounded-xl py-10 font-semibold">
                {logo}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}