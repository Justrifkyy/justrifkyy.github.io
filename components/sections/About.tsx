"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio-data";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-paper border-b-4 border-ink">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest bg-primary px-3 py-1 border-3 border-ink shadow-brutal-sm inline-block mb-3">
            {portfolioData.about.heading.label}
          </span>
          <h2 className="font-display font-extrabold uppercase text-clamp-h2 tracking-tight text-ink">
            {portfolioData.about.heading.text}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: Photo (Columns 1-5) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[400px] select-none">
              
              {/* Photo Box rotated -2deg */}
              <div className="relative border-4 border-ink bg-paper shadow-brutal-md -rotate-2 transition-transform duration-300 group-hover:rotate-0">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <Image
                    src={portfolioData.about.photo.src}
                    alt={portfolioData.about.photo.alt}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 90vw, 450px"
                  />
                  {/* Duotone tint layer on hover */}
                  <div className="absolute inset-0 bg-primary/20 mix-blend-color pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
                </div>
              </div>

              {/* Sticky Note Fun Fact rotated 5deg bottom right */}
              <div className="absolute -bottom-6 -right-4 md:-right-6 z-20 max-w-[220px]">
                <div className="bg-primary text-ink border-3 border-ink shadow-brutal-sm p-3.5 rotate-6 font-mono font-bold text-xs uppercase leading-snug">
                  <span className="block text-base mb-1">📌 FUN FACT</span>
                  {portfolioData.about.photo.stickyNote}
                </div>
              </div>

            </div>
          </div>

          {/* Right: Text & Stats (Columns 6-12) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-4 font-body text-base md:text-lg leading-relaxed text-ink/90 font-medium">
              <p>
                Saya adalah seorang{" "}
                <span className="bg-primary px-1.5 py-0.5 border-2 border-ink font-bold text-ink inline-block">
                  Fullstack Developer
                </span>{" "}
                yang berdedikasi membangun aplikasi web interaktif, performa tinggi, dan scalable. Dengan fondasi kuat pada arsitektur{" "}
                <span className="bg-accent-pink/40 px-1.5 py-0.5 border-2 border-ink font-bold inline-block">
                  Next.js, TypeScript, & Tailwind CSS
                </span>
                , saya menghubungkan estetika visual yang radikal dengan sistem backend yang tangguh.
              </p>
              <p>
                Bagi saya, web bukan sekadar deretan baris instruksi logika, melainkan sebuah kerajinan digital. Saya menaruh perhatian mendalam pada{" "}
                <span className="bg-primary px-1.5 py-0.5 border-2 border-ink font-bold inline-block">
                  Core Web Vitals
                </span>
                , responsivitas mikro, struktur semantik SEO, dan estetika neo-brutalisme yang lugas dan fungsional.
              </p>
            </div>

            {/* 3 Stats Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {portfolioData.about.stats.map((stat, idx) => (
                <StatCard
                  key={idx}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  color={stat.color}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  color: "primary" | "accentPink" | "accentBlue";
}

const StatCard: React.FC<StatCardProps> = ({ value, suffix, label, color }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  const bgStyles = {
    primary: "bg-primary",
    accentPink: "bg-accent-pink",
    accentBlue: "bg-accent-blue text-paper",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const duration = 1400;
          const steps = 30;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const current = Math.round(value * progress);
            setDisplayValue(current);

            if (currentStep >= steps) {
              clearInterval(timer);
              setDisplayValue(value);
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={cardRef}
      className={`border-4 border-ink shadow-brutal-sm p-5 flex flex-col justify-center ${bgStyles[color]} transition-transform hover:-translate-y-1 hover:shadow-brutal-md`}
    >
      <div className="font-display font-black text-4xl md:text-5xl tracking-tight leading-none mb-2">
        <span>{displayValue}</span>
        <span>{suffix}</span>
      </div>
      <div className="font-mono font-bold text-xs md:text-sm uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
};
