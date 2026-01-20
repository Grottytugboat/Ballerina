import { generateMetadata, defaultKeywords } from "@/lib/metadata";
import Image from "next/image";

export const metadata = generateMetadata({
  title: "About Nicole | Wedding Planner Kyneton & Macedon Ranges",
  description:
    "Nicole spent half a decade behind the scenes of Melbourne's most demanding events. Now bringing that same obsessive precision to private celebrations in the Macedon Ranges.",
  keywords: [
    "wedding planner Kyneton",
    "event coordinator Victoria",
    "Melbourne event planner",
    ...defaultKeywords,
  ],
  path: "/about",
});

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-wider uppercase mb-8 md:mb-12">
        About Nicole
      </h1>

      <div className="mb-12 md:mb-16">
        <div className="relative w-full aspect-[4/3] md:aspect-[16/10] max-w-2xl mx-auto">
          <Image
            src="/images/nicole.jpg"
            alt="Nicole - Wedding and Event Planner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="max-w-none space-y-8 text-primary/90 leading-relaxed">
        <p className="text-xl font-light">
          Nicole spent half a decade behind the scenes of Melbourne&apos;s most
          demanding events — the kind where the champagne is Dom Pérignon and
          the margin for error is zero. Now she brings that same obsessive
          precision to private celebrations, minus the corporate red tape.
        </p>

        <section className="space-y-6 mt-16">
          <h2 className="text-2xl font-medium tracking-wide uppercase">
            The Foundation
          </h2>
          <p>
            Nicole&apos;s career in event coordination began at Fenix Events in
            Richmond, where she spent two years orchestrating weddings and
            corporate events. The scope was broad: intimate dinners for 20,
            full-scale weddings for 220, pharmaceutical seminars, product
            launches. Every event demanded the same level of precision.
          </p>
        </section>

        <section className="space-y-6 mt-16">
          <h2 className="text-2xl font-medium tracking-wide uppercase">
            food&desire
          </h2>
          <p>
            From Fenix, Nicole joined food&desire, one of Melbourne&apos;s most
            prestigious event companies. She worked across their venue portfolio,
            each space presenting its own set of challenges and opportunities.
          </p>

          <div className="space-y-4 mt-8">
            <div>
              <h3 className="text-lg font-medium tracking-wide uppercase mb-2">
                Aerial, South Wharf
              </h3>
              <p className="text-sm text-primary/70">
                Skyline views, premium corporate events. Nicole coordinated the
                selection and opening of the space, establishing operational
                procedures from day one.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium tracking-wide uppercase mb-2">
                Carousel, Albert Park Lake
              </h3>
              <p className="text-sm text-primary/70">
                Lakeside weddings and events. The venue&apos;s natural setting
                required seamless integration of indoor and outdoor elements.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium tracking-wide uppercase mb-2">
                Harbour Room, RMYS
              </h3>
              <p className="text-sm text-primary/70">
                Exclusive waterfront venue at the Royal Melbourne Yacht Squadron.
                High-stakes events where every detail mattered.
              </p>
            </div>
          </div>

          <p className="mt-6">
            Nicole&apos;s progression at food&desire was methodical: Venue Event
            Coordinator → Catering Sales Executive → Venues Event Procedures &
            Administration. Each role deepened her understanding of what it
            takes to execute flawlessly at scale.
          </p>
        </section>

        <section className="space-y-6 mt-16">
          <h2 className="text-2xl font-medium tracking-wide uppercase">
            The Clients
          </h2>
          <p>
            Over five years, Nicole delivered events for clients including Rolls
            Royce, Jaguar, Formula 1 Australian Grand Prix, pharmaceutical
            companies, and Melbourne&apos;s corporate elite. These weren&apos;t just
            events; they were brand experiences where precision was non-negotiable.
          </p>
        </section>

        <section className="space-y-6 mt-16">
          <h2 className="text-2xl font-medium tracking-wide uppercase">
            The Pivot
          </h2>
          <p>
            Now based in Kyneton, Nicole brings big-city production standards to
            the Macedon Ranges. Ballerina specializes in transforming
            non-traditional venues — private properties, wineries, warehouses,
            restaurants — into seamless event spaces.
          </p>
          <p>
            Not tied to any single venue, Nicole works wherever the client&apos;s
            vision takes her. The same precision that executed Formula 1 events
            now transforms a private property into a celebration space. The
            margin for error remains zero.
          </p>
        </section>
      </div>
    </div>
  );
}
