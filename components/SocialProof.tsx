export default function SocialProof() {
  const brands = [
    "Christian Dior",
    "Hermes",
    "Visy",
    "Zagame Automotive",
    "Ferrari",
    "Jellis Craig",
    "VRC",
    "Lamborghini",
    "Porsche",
    "Bentleigh",
    "Lexus",
    "Furphy",
    "Chemist Warehouse",
    "Loreal",
    "BMW",
    "AFL",
    "REA",
    "Ducati",
    "Goldman Sachs",
    "Tourism Australia",
    "Mecca",
    "Maybeline",
    "Nine",
    "Honda",
    "NAB",
    "Allens",
    "Tik Tok",
    "Buxton",
    "Aime",
    "Brandbank",
    "Lulu Lemon",
    "Frontier Touring",
    "Kookai",
    "Prada",
    "Team Event",
    "Foxtel",
    "Toyota",
    "CSL",
    "Shell",
    "BHP",
    "Hays",
    "YPO",
    "Frank Body",
    "University of Melbourne",
  ];

  return (
    <section className="py-16 md:py-24 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm tracking-wider uppercase text-primary/60 mb-12 md:mb-16 text-center">
          Brands we&apos;ve worked with
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-8 md:gap-y-6">
          {brands.map((brand, index) => (
            <span
              key={index}
              className="text-sm md:text-base font-light tracking-wide text-primary/70"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
