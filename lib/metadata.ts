import { Metadata } from "next";

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  path,
}: PageMetadata): Metadata {
  const siteName = "Ballerina";
  const fullTitle = `${title} | ${siteName}`;
  const url = `https://ballerina.com.au${path}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export const defaultKeywords = [
  "wedding planner Kyneton",
  "wedding planner Macedon Ranges",
  "luxury wedding planner Melbourne",
  "high end event coordinator Victoria",
  "private property wedding planner",
  "warehouse wedding planner Melbourne",
  "corporate event planner Melbourne",
  "venue styling Macedon Ranges",
  "wedding coordination Daylesford",
  "event planner Woodend",
  "backyard wedding coordinator",
];
