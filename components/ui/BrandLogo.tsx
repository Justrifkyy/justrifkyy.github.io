"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  withText?: boolean;
  withTag?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  withText = true,
  withTag = true,
  className = "",
}) => {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 select-none ${className}`}
      data-cursor="link"
      aria-label="Kembali ke Beranda"
    >
      {/* Neo-Brutalist Logomark Badge */}
      <div className={`relative ${iconSizes[size]} shrink-0 transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105`}>
        {/* Drop Shadow */}
        <div className="absolute inset-0 translate-x-1 translate-y-1 bg-ink" />
        
        {/* Main Yellow Block */}
        <div className="relative w-full h-full bg-primary border-3 border-ink flex items-center justify-center overflow-hidden">
          {/* Top-Left Pink Accent Fold */}
          <div className="absolute top-0 left-0 w-3 h-3 bg-accent-pink border-r-2 border-b-2 border-ink" />

          {/* Letter R */}
          <span className="font-display font-black text-ink text-base md:text-lg leading-none pt-0.5 pl-0.5">
            R
          </span>

          {/* Bottom-Right Accent Dot */}
          <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-accent-pink border border-ink" />
        </div>
      </div>

      {/* Wordmark & Tag */}
      {withText && (
        <div className="flex items-center gap-2">
          <span className={`font-display font-black tracking-tight uppercase text-ink ${textSizes[size]}`}>
            RIFKY<span className="text-accent-pink">.</span>
          </span>

          {withTag && (
            <span className="hidden sm:inline-block font-mono font-bold text-[10px] uppercase px-1.5 py-0.5 bg-muted text-ink border-2 border-ink shadow-[2px_2px_0_#0A0A0A]">
              DEV
            </span>
          )}
        </div>
      )}
    </Link>
  );
};
