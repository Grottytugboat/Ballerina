import Script from "next/script";

export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EventPlanningService"],
    name: "Ballerina",
    description:
      "Luxury wedding and event planning services in Kyneton, Macedon Ranges, and Melbourne. Precision in celebration.",
    url: "https://ballerina.com.au",
    telephone: "+61413851171",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kyneton",
      addressRegion: "Victoria",
      addressCountry: "AU",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Kyneton",
      },
      {
        "@type": "City",
        name: "Melbourne",
      },
      {
        "@type": "Region",
        name: "Macedon Ranges",
      },
    ],
    serviceType: [
      "Wedding Planning",
      "Event Coordination",
      "Corporate Event Planning",
      "Venue Sourcing",
    ],
  };

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
