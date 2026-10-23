"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Quote, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { TechIconsFor } from "@/components/ui/TechIcon";

export const About: React.FC = () => {
  const { t } = useLanguage();
  const [repoCount, setRepoCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Justrifkyy")
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((data) => {
        if (typeof data.public_repos === "number" && data.public_repos > 0) {
          setRepoCount(data.public_repos);
        }
      })
      .catch(() => {
        // Fallback silently to static data
      });
  }, []);

  return (
    <section id="about" className="relative py-20 md:py-28 bg-paper border-b-4 border-ink">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest bg-primary px-3 py-1 border-3 border-ink shadow-brutal-sm inline-block mb-3">
            {t.about.heading.label}
          </span>
          <h2 className="font-display font-extrabold uppercase text-clamp-h2 tracking-tight text-ink">
            {t.about.heading.text}
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
                    src={t.about.photo.src}
                    alt={t.about.photo.alt}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 90vw, 450px"
                  />
                  {/* Duotone tint layer on hover */}
                  <div className="absolute inset-0 bg-primary/20 mix-blend-color pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
                </div>
              </div>

              {/* Sticky Note Quote rotated 6deg bottom right */}
              <div className="absolute -bottom-8 -right-4 md:-right-6 z-20 max-w-[260px]">
                <div className="bg-primary text-ink dark:text-[#0A0A0A] border-3 border-ink shadow-brutal-md p-3.5 rotate-6 font-mono font-bold text-xs leading-snug hover:rotate-0 transition-transform">
                  <p className="font-mono font-black text-xs md:text-sm leading-snug tracking-tight">
                    {t.about.photo.quoteText}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Text & Stats (Columns 6-12) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Identity Badges Strip */}
            <div className="flex flex-wrap items-center gap-2">
              {t.about.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[11px] md:text-xs font-black uppercase tracking-wider px-2.5 py-1 bg-paper dark:bg-[#12141D] border-2 border-ink shadow-[2px_2px_0_#0A0A0A] dark:shadow-[2px_2px_0_#00A3E0] hover:-translate-y-0.5 transition-transform inline-flex items-center gap-1.5"
                >
                  <TechIconsFor text={badge} className="w-3.5 h-3.5 shrink-0" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>

            {/* Revamped Non-Boring Paragraphs */}
            <div className="space-y-4 font-body text-base md:text-lg leading-relaxed text-ink/90 font-medium">
              {t.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* 3 Stats Boxes (Clickable to GitHub) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {t.about.stats.map((stat, idx) => (
                <StatCard
                  key={idx}
                  value={idx === 0 && repoCount ? repoCount : stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  color={stat.color}
                  href={stat.href || "https://github.com/Justrifkyy"}
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
  href?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, suffix, label, color, href }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const animatedRef = useRef(false);

  const bgStyles = {
    primary: "bg-primary text-ink dark:text-[#0A0A0A]",
    accentPink: "bg-accent-pink text-ink dark:text-[#0A0A0A]",
    accentBlue: "bg-accent-blue text-paper dark:text-[#0A0A0A]",
  };

  useEffect(() => {
    animatedRef.current = false;
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
    <a
      ref={cardRef}
      href={href || "https://github.com/Justrifkyy"}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative border-4 border-ink shadow-brutal-sm p-5 flex flex-col justify-center ${bgStyles[color]} transition-all duration-150 hover:-translate-y-1 hover:shadow-brutal-md block cursor-pointer select-none`}
      title="Buka profil GitHub @Justrifkyy ↗"
    >
      {/* Top right pill badge */}
      <div className="absolute top-2.5 right-2.5 flex items-center gap-1 font-mono text-[10px] font-black uppercase tracking-wider bg-ink text-paper dark:bg-[#0A0A0A] dark:text-[#FFFDF5] px-1.5 py-0.5 border border-ink opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all">
        <span>GITHUB</span>
        <ArrowUpRight className="w-3 h-3 stroke-[3]" />
      </div>

      <div className="font-display font-black text-4xl md:text-5xl tracking-tight leading-none mb-2">
        <span>{displayValue}</span>
        <span>{suffix}</span>
      </div>
      <div className="font-mono font-bold text-xs md:text-sm uppercase tracking-wide">
        {label}
      </div>
    </a>
  );
};
