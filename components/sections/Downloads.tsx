"use client";

import React from "react";
import { Download, FileText, Folder } from "lucide-react";
import confetti from "canvas-confetti";
import { BrutalistButton } from "../ui/BrutalistButton";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const Downloads: React.FC = () => {
  const { t } = useLanguage();

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#FFE14D", "#FF5DA2", "#4D7CFF", "#0A0A0A"],
    });
  };

  return (
    <section id="downloads" className="relative py-20 md:py-28 bg-paper border-b-4 border-ink">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="mb-16">
          <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest bg-primary px-3 py-1 border-3 border-ink shadow-brutal-sm inline-block mb-3">
            {t.downloads.heading.label}
          </span>
          <h2 className="font-display font-extrabold uppercase text-clamp-h2 tracking-tight text-ink">
            {t.downloads.heading.text}
          </h2>
        </div>

        {/* 2 Big Action Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {t.downloads.items.map((item, idx) => {
            const isPrimary = item.color === "primary";

            return (
              <div
                key={idx}
                className={`group border-4 border-ink p-8 md:p-10 shadow-brutal-lg transition-all duration-200 hover:-translate-x-1.5 hover:-translate-y-1.5 flex flex-col justify-between ${
                  isPrimary ? "bg-primary" : "bg-accent-pink"
                }`}
              >
                <div>
                  {/* Icon with hover wiggle animation */}
                  <div className="w-16 h-16 bg-paper border-3 border-ink shadow-brutal-sm flex items-center justify-center mb-6 group-hover:animate-[wiggle_0.5s_ease-in-out]">
                    {item.icon === "file-text" ? (
                      <FileText className="w-8 h-8 stroke-[2.5] text-ink" />
                    ) : (
                      <Folder className="w-8 h-8 stroke-[2.5] text-ink" />
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-base text-ink/90 font-medium leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Download Button with confetti */}
                <div>
                  <BrutalistButton
                    href={item.file}
                    download
                    onClick={triggerConfetti}
                    variant="dark"
                    size="md"
                    className="w-full"
                    icon={<Download className="w-5 h-5 stroke-[3]" />}
                  >
                    {item.button}
                  </BrutalistButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-8 text-center">
          <p className="font-mono text-xs md:text-sm text-ink/70">
            * {t.downloads.note}
          </p>
        </div>

      </div>
    </section>
  );
};
