import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ballerina | Precision in celebration",
  description:
    "Melbourne's most trusted event coordinator, now crafting private celebrations in the Macedon Ranges. Luxury wedding planning and high-end event coordination.",
  keywords: [
    "wedding planner Kyneton",
    "wedding planner Macedon Ranges",
    "luxury wedding planner Melbourne",
    "high end event coordinator Victoria",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <SchemaMarkup />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
