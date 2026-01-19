export default function SocialProof() {
  const clients = [
    "Rolls Royce",
    "Jaguar",
    "Formula 1",
    "Pharmaceutical Companies",
  ];

  return (
    <section className="py-16 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-sm tracking-wide uppercase text-primary/60 mb-8 text-center">
          Past clients include
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-lg md:text-xl font-light tracking-wide text-primary/80"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
