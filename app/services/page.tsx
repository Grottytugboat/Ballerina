import { generateMetadata, defaultKeywords } from "@/lib/metadata";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Services | Wedding Planning & Event Coordination",
  description:
    "Full wedding planning, partial planning & design, day-of coordination, corporate events, and venue sourcing. Serving Kyneton, Macedon Ranges, and Melbourne.",
  keywords: [
    "wedding planning services",
    "event coordination",
    "day of wedding coordinator",
    "corporate event planning",
    "venue sourcing",
    ...defaultKeywords,
  ],
  path: "/services",
});

export default function Services() {
  const services = [
    {
      title: "Full Wedding Planning",
      description:
        "End-to-end coordination from venue sourcing to last dance. We handle every detail, so you don't have to. Perfect for couples who want to enjoy the process, not manage it.",
      number: 1,
    },
    {
      title: "Partial Planning & Design",
      description:
        "For couples with a vision who need expert execution. You've chosen the direction; we'll bring it to life with precision and attention to detail.",
      number: 2,
    },
    {
      title: "Day-of Coordination",
      description:
        "You've planned it, we'll run it flawlessly. On-site coordination ensures your celebration unfolds exactly as envisioned, without you managing the logistics.",
      number: 3,
    },
    {
      title: "Corporate & Private Events",
      description:
        "Product launches, milestone dinners, brand activations. The same precision that executes Formula 1 events applies to your corporate celebration.",
      number: 4,
    },
    {
      title: "Venue Sourcing & Transformation",
      description:
        "We find the space, then make it yours. Private properties, wineries, warehouses, restaurants — we transform any space into a seamless event environment.",
      number: 5,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-wider uppercase mb-4">
        Services
      </h1>
      <p className="text-base sm:text-lg text-primary/70 mb-12 md:mb-16 max-w-2xl">
        From full wedding planning to day-of coordination, we bring precision to
        every celebration.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        {services.map((service) => (
          <ScrollReveal key={service.number} delay={service.number * 0.1}>
            <ServiceCard
              title={service.title}
              description={service.description}
              number={service.number}
            />
          </ScrollReveal>
        ))}
      </div>

    </div>
  );
}
