"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

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
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current && videoSrc) {
      videoRef.current.play().catch((error) => {
        // Autoplay was prevented, which is fine
        console.log("Video autoplay prevented:", error);
      });
    }
  }, [videoSrc]);

  const handleVideoError = () => {
    setVideoError(true);
    console.error("Video failed to load");
  };

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden bg-accent/20">
      {videoSrc && !videoError ? (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          onError={handleVideoError}
        />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover z-0"
          priority
        />
      ) : (
        <div className="w-full h-full bg-accent/20 z-0" />
      )}
      {overlay && (
        <div className="absolute inset-0 bg-primary/50 z-10" />
      )}
      <div className="absolute inset-0 flex items-center justify-start px-6 lg:px-16 z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wider text-background uppercase mb-4 drop-shadow-2xl [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
            {tagline}
          </h1>
        </div>
      </div>
    </div>
  );
}
