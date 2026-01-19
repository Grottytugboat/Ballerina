import { generateMetadata, defaultKeywords } from "@/lib/metadata";
import ContactForm from "@/components/ContactForm";

export const metadata = generateMetadata({
  title: "Contact | Wedding & Event Planning Inquiry",
  description:
    "Get in touch to discuss your wedding or event. Based in Kyneton, serving Macedon Ranges, Melbourne & Regional Victoria.",
  keywords: [
    "contact wedding planner",
    "event planning inquiry",
    "wedding planner Kyneton",
    ...defaultKeywords,
  ],
  path: "/contact",
});

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-medium tracking-wider uppercase mb-4">
        Contact
      </h1>
      <p className="text-lg text-primary/70 mb-12 max-w-2xl">
        Start a conversation about your celebration. Based in Kyneton, serving
        Macedon Ranges, Melbourne & Regional Victoria.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-medium tracking-wide uppercase mb-4">
              Direct Contact
            </h2>
            <div className="space-y-3 text-sm text-primary/80">
              <p>
                <a
                  href="mailto:nicole@ballerina.com.au"
                  className="hover:text-primary transition-colors underline"
                >
                  nicole@ballerina.com.au
                </a>
              </p>
              <p>
                <a
                  href="tel:[PHONE NUMBER]"
                  className="hover:text-primary transition-colors underline"
                >
                  [PHONE NUMBER]
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium tracking-wide uppercase mb-4">
              Location
            </h2>
            <p className="text-sm text-primary/80 leading-relaxed">
              Based in Kyneton, serving Macedon Ranges, Melbourne & Regional
              Victoria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
