import { generateMetadata, defaultKeywords } from "@/lib/metadata";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Portfolio | Wedding & Event Planning Work",
  description:
    "View our portfolio of weddings and events across the Macedon Ranges, Melbourne, and regional Victoria. Private properties, warehouses, wineries, and corporate venues.",
  keywords: [
    "wedding portfolio",
    "event planning examples",
    "Macedon Ranges weddings",
    "Melbourne weddings",
    ...defaultKeywords,
  ],
  path: "/work",
});

export default function Work() {
  const projects = [
    {
      title: "Private Property Wedding",
      location: "Macedon Ranges",
      guestCount: "120 guests",
      description:
        "A celebration on a private property transformed into a seamless event space. Every detail curated to reflect the couple's vision, from ceremony to last dance.",
      imageSrc: undefined,
      imageAlt: "[PLACEHOLDER IMAGE] Private property wedding in Macedon Ranges",
    },
    {
      title: "Warehouse Wedding",
      location: "Melbourne",
      guestCount: "180 guests",
      description:
        "An industrial warehouse space reimagined for a modern celebration. Raw architecture meets refined details, creating an atmosphere that was both edgy and elegant.",
      imageSrc: undefined,
      imageAlt: "[PLACEHOLDER IMAGE] Warehouse wedding in Melbourne",
    },
    {
      title: "Corporate Launch",
      location: "South Wharf",
      guestCount: "200 guests",
      description:
        "A product launch event executed with precision. High-profile corporate clients, zero margin for error, flawless execution from arrival to departure.",
      imageSrc: undefined,
      imageAlt: "[PLACEHOLDER IMAGE] Corporate launch event at South Wharf",
    },
    {
      title: "Intimate Winery Celebration",
      location: "Kyneton",
      guestCount: "60 guests",
      description:
        "An intimate celebration at a local winery. The natural setting enhanced with minimal, thoughtful design. Every moment felt intentional.",
      imageSrc: undefined,
      imageAlt: "[PLACEHOLDER IMAGE] Winery celebration in Kyneton",
    },
    {
      title: "Milestone Dinner",
      location: "Albert Park",
      guestCount: "80 guests",
      description:
        "A milestone celebration at a lakeside venue. The event balanced formality with warmth, creating an evening that honored both the occasion and the guests.",
      imageSrc: undefined,
      imageAlt: "[PLACEHOLDER IMAGE] Milestone dinner at Albert Park",
    },
    {
      title: "Backyard Wedding",
      location: "Woodend",
      guestCount: "40 guests",
      description:
        "A backyard transformed into a celebration space. The intimate setting allowed for personal touches and a relaxed atmosphere, without compromising on execution.",
      imageSrc: undefined,
      imageAlt: "[PLACEHOLDER IMAGE] Backyard wedding in Woodend",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-medium tracking-wider uppercase mb-4">
        Work
      </h1>
      <p className="text-lg text-primary/70 mb-16 max-w-2xl">
        A selection of celebrations across the Macedon Ranges, Melbourne, and
        regional Victoria.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <ProjectCard
              title={project.title}
              location={project.location}
              guestCount={project.guestCount}
              description={project.description}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
            />
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-20 pt-12 border-t border-primary/10">
        <p className="text-sm text-primary/60 mb-4">
          Explore our services
        </p>
        <Link
          href="/services"
          className="text-sm tracking-wide uppercase hover:opacity-70 transition-opacity"
        >
          View Services →
        </Link>
      </div>
    </div>
  );
}
