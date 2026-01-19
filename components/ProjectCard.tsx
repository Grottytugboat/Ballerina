"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  title: string;
  location: string;
  guestCount: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function ProjectCard({
  title,
  location,
  guestCount,
  description,
  imageSrc,
  imageAlt,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="cursor-pointer group"
        onClick={() => setIsOpen(true)}
        whileHover={{ opacity: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden bg-accent/20">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-accent/20 flex items-center justify-center text-primary/40 text-sm">
              [PLACEHOLDER IMAGE]
            </div>
          )}
        </div>
        <h3 className="text-lg font-medium tracking-wide uppercase mb-1">
          {title}
        </h3>
        <p className="text-sm text-primary/60 mb-2">
          {location} • {guestCount}
        </p>
        <p className="text-sm text-primary/70 line-clamp-2">{description}</p>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="max-w-4xl w-full bg-background border border-primary/10 p-8 md:p-12 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-primary/60 hover:text-primary transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="relative w-full aspect-video mb-8 bg-accent/20">
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={imageAlt || title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-accent/20 flex items-center justify-center text-primary/40">
                    [PLACEHOLDER IMAGE]
                  </div>
                )}
              </div>

              <h2 className="text-3xl md:text-4xl font-medium tracking-wider uppercase mb-4">
                {title}
              </h2>
              <p className="text-sm text-primary/60 mb-6">
                {location} • {guestCount}
              </p>
              <p className="text-base text-primary/80 leading-relaxed">
                {description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
