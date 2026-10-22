"use client";

import React from "react";
import Image from "next/image";
import { ArrowDownRight, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { BrutalistButton } from "../ui/BrutalistButton";
import { Sticker } from "../ui/Sticker";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const Hero: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="relative min-h-[calc(100vh-72px)] bg-paper brutal-grid-light flex items-center justify-center py-12 md:py-16 overflow-hidden border-b-4 border-ink">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Mobile Photo (Shown first on mobile) */}
          <div className="block lg:hidden w-full max-w-[320px] mx-auto">
            <HeroPhotoFrame />
          </div>

          {/* Left Text (Columns 1-7 on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Mega Heading */}
            <h1 className="font-display font-extrabold uppercase tracking-tighter text-ink text-clamp-h1 lg:text-mega leading-[0.9] flex flex-col mb-6">
              <span>{t.hero.headingLines[0]}</span>
              <span className="relative inline-block w-fit my-1">
                <span className="absolute inset-0 bg-primary -rotate-2 border-3 border-ink -z-10 translate-y-1 shadow-brutal-sm" />
                <span className="relative px-2 py-0.5">{t.hero.headingLines[1]}</span>
              </span>
              <span className="text-outline-ink">{t.hero.headingLines[2]}</span>
            </h1>

            {/* Typewriter Subheading with key={lang} so it resets when toggled */}
            <div className="font-mono text-base md:text-xl text-ink font-bold min-h-[3.5rem] mb-6 bg-paper/90 p-3 border-3 border-ink shadow-brutal-sm max-w-xl">
              <span className="text-accent-pink mr-2">›</span>
              <TypeAnimation
                key={lang}
                sequence={t.hero.typewriterSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* Core Engineering Disciplines (Web, Mobile Android, Multiplatform) */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="font-mono text-[11px] font-black uppercase tracking-wider px-3 py-1.5 bg-paper border-2 border-ink shadow-[2px_2px_0_#0A0A0A] flex items-center gap-1.5 hover:-translate-y-0.5 transition-transform select-none">
                <span className="w-2.5 h-2.5 bg-primary border border-ink" />
                WEB APPLICATIONS
              </span>
              <span className="font-mono text-[11px] font-black uppercase tracking-wider px-3 py-1.5 bg-paper border-2 border-ink shadow-[2px_2px_0_#0A0A0A] flex items-center gap-1.5 hover:-translate-y-0.5 transition-transform select-none">
                <span className="w-2.5 h-2.5 bg-accent-pink border border-ink" />
                MOBILE (ANDROID)
              </span>
              <span className="font-mono text-[11px] font-black uppercase tracking-wider px-3 py-1.5 bg-paper border-2 border-ink shadow-[2px_2px_0_#0A0A0A] flex items-center gap-1.5 hover:-translate-y-0.5 transition-transform select-none">
                <span className="w-2.5 h-2.5 bg-accent-blue border border-ink" />
                MULTI-PLATFORM
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <BrutalistButton
                href={t.hero.cta[0].href}
                variant="primary"
                size="lg"
                icon={<ArrowDownRight className="w-5 h-5 stroke-[3]" />}
              >
                {t.hero.cta[0].text}
              </BrutalistButton>
              <BrutalistButton
                href={t.hero.cta[1].href}
                variant="outline"
                size="lg"
                icon={<Mail className="w-5 h-5 stroke-[3]" />}
              >
                {t.hero.cta[1].text}
              </BrutalistButton>
            </div>
          </div>

          {/* Desktop Photo (Columns 8-12 on desktop) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center relative">
            <HeroPhotoFrame />
          </div>

        </div>
      </div>
    </section>
  );
};

const HeroPhotoFrame: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative group w-full max-w-[340px] md:max-w-[380px] select-none">
      {/* Background Yellow Layer offset -20px 20px, rotate -3deg */}
      <div
        className="absolute inset-0 bg-primary border-4 border-ink -rotate-3 transition-transform duration-300 group-hover:rotate-0"
        style={{ transform: "translate(-20px, 20px) rotate(-3deg)" }}
      />

      {/* Main Photo Frame rotated 3deg */}
      <div className="relative border-4 border-ink bg-paper shadow-brutal-lg rotate-3 transition-all duration-300 group-hover:rotate-0 group-hover:shadow-brutal-md">
        
        {/* Tape decoration on top center */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <Sticker shape="tape" rotate="-6deg">
            {t.hero.photo.badgeText}
          </Sticker>
        </div>

        {/* Photo Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
          <Image
            src={t.hero.photo.src}
            alt={t.hero.photo.alt}
            fill
            priority
            className="object-cover grayscale contrast-125 transition-all duration-300 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105"
            sizes="(max-width: 768px) 80vw, 400px"
          />
          {/* Halftone texture overlay */}
          <div className="absolute inset-0 halftone-overlay opacity-15 pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
        </div>

        {/* Sticker Starburst top right */}
        <div className="absolute -top-6 -right-6 z-20">
          <div className="w-20 h-20 bg-accent-pink text-ink font-mono font-black text-[11px] uppercase border-3 border-ink shadow-brutal-sm flex items-center justify-center text-center p-2 rotate-12 animate-[spin_15s_linear_infinite]">
            {t.hero.photo.stickerText}
          </div>
        </div>

        {/* Label bottom left */}
        <div className="absolute -bottom-3.5 left-4 z-20 bg-paper border-3 border-ink px-3 py-1 font-mono font-bold text-xs uppercase shadow-brutal-sm">
          {t.hero.photo.label}
        </div>

        {/* Rotating Circular Text bottom left */}
        <div className="absolute -bottom-10 -left-10 z-10 w-28 h-28 hidden sm:block animate-[spin_18s_linear_infinite_reverse]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="transparent"
            />
            <text className="font-mono text-[9px] font-black uppercase fill-ink tracking-[0.2em]">
              <textPath href="#circlePath">
                {t.hero.photo.circularText}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};
