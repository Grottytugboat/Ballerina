import { generateMetadata, defaultKeywords } from "@/lib/metadata";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Luxury Wedding & Event Planning | Macedon Ranges & Melbourne",
  description:
    "Melbourne's most trusted event coordinator, now crafting private celebrations in the Macedon Ranges. 15+ years executing high-profile events. Venue-agnostic precision for 20 to 220 guests.",
  keywords: defaultKeywords,
  path: "/",
});

export default function Home() {
  const differentiators = [
    {
      title: "15+ years executing Melbourne's highest-profile events",
      description:
        "A decade and a half of precision behind the scenes of Melbourne's most demanding celebrations.",
    },
    {
      title: "Venue-agnostic — we transform any space",
      description:
        "Not tied to any single venue. We find the space, then make it yours. Private properties, wineries, warehouses, restaurants.",
    },
    {
      title: "From 20 guests to 220, same precision",
      description:
        "Whether it's an intimate dinner or a full-scale celebration, the standard never drops.",
    },
  ];

  return (
    <>
      <Hero
        videoSrc="/hero-video.mp4"
        tagline="Precision in celebration"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-primary/90">
              Melbourne&apos;s most trusted event coordinator, now crafting private
              celebrations in the Macedon Ranges.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {differentiators.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="space-y-4">
                <h2 className="text-lg md:text-xl font-medium tracking-wide uppercase">
                  {item.title}
                </h2>
                <p className="text-sm md:text-base text-primary/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <SocialProof />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <ScrollReveal>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-background text-sm tracking-wide uppercase hover:opacity-90 transition-opacity"
          >
            Start a conversation
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
