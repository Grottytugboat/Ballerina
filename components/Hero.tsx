"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

interface HeroProps {
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  tagline?: string;
  overlay?: boolean;
}

export default function Hero({
  imageSrc,
  videoSrc,
  imageAlt = "Hero image",
  tagline = "Precision in celebration",
  overlay = true,
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Autoplay was prevented, which is fine
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : imageSrc ? (
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
