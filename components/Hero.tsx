import Image from "next/image";

interface HeroProps {
  imageSrc?: string;
  imageAlt?: string;
  tagline?: string;
  overlay?: boolean;
}

export default function Hero({
  imageSrc,
  imageAlt = "Hero image",
  tagline = "Precision in celebration",
  overlay = true,
}: HeroProps) {
  return (
    <div className="relative w-full h-[70vh] min-h-[500px] max-h-[800px]">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="w-full h-full bg-accent/20" />
      )}
      {overlay && (
        <div className="absolute inset-0 bg-primary/20" />
      )}
      <div className="absolute inset-0 flex items-center justify-start px-6 lg:px-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wider text-background uppercase mb-4">
            {tagline}
          </h1>
        </div>
      </div>
    </div>
  );
}
