"use client";

import Image from "next/image";
import { useState } from "react";

interface ClientLogo {
  name: string;
  logoPath?: string;
  alt: string;
}

export default function SocialProof() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const clients: ClientLogo[] = [
    {
      name: "Rolls Royce",
      logoPath: "/images/logos/rolls-royce.png",
      alt: "Rolls Royce logo",
    },
    {
      name: "Jaguar",
      logoPath: "/images/logos/jaguar.png",
      alt: "Jaguar logo",
    },
    {
      name: "Formula 1",
      logoPath: "/images/logos/formula1.png",
      alt: "Formula 1 logo",
    },
    {
      name: "Pharmaceutical Companies",
      logoPath: "/images/logos/pharmaceutical.png",
      alt: "Pharmaceutical companies logo",
    },
  ];

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

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
              className="flex items-center justify-center h-12 md:h-16 opacity-60 hover:opacity-100 transition-opacity"
            >
              {client.logoPath && !imageErrors[index] ? (
                <Image
                  src={client.logoPath}
                  alt={client.alt}
                  width={120}
                  height={60}
                  className="h-full w-auto object-contain"
                  style={{ filter: "grayscale(100%)" }}
                  onError={() => handleImageError(index)}
                />
              ) : (
                <span className="text-lg md:text-xl font-light tracking-wide text-primary/80">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
