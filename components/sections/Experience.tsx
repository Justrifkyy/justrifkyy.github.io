"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { TechIcon } from "@/components/ui/TechIcon";

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-20 md:py-28 bg-paper border-b-4 border-ink">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="mb-16">
          <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest bg-accent-blue text-paper px-3 py-1 border-3 border-ink shadow-brutal-sm inline-block mb-3">
            {t.experience.heading.label}
          </span>
          <h2 className="font-display font-extrabold uppercase text-clamp-h2 tracking-tight text-ink">
            {t.experience.heading.text}
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical 6px Center Line on desktop, left on mobile */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-[6px] bg-ink" />

          {/* Timeline Items */}
          <div className="flex flex-col gap-12 md:gap-16">
            {t.experience.items.map((item, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full"
                >
                  {/* Square Node on Timeline */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-7 h-7 bg-primary border-4 border-ink shadow-[2px_2px_0_#0A0A0A] z-20" />

                  {/* Card Container */}
                  <div
                    className={`w-full md:w-[calc(50%-40px)] pl-12 md:pl-0 ${
                      isEven ? "md:ml-auto md:pl-10" : "md:mr-auto md:pr-10"
                    }`}
                  >
                    <div className="border-4 border-ink bg-paper p-6 shadow-brutal-sm hover:shadow-brutal-md transition-shadow">
                      {/* Period Label */}
                      <div className="mb-3">
                        <span className="font-mono font-bold text-xs uppercase px-2.5 py-1 bg-ink text-paper inline-block">
                          {item.period}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="font-display font-black text-xl md:text-2xl uppercase text-ink mb-1">
                        {item.title}
                      </h3>
                      <div className="font-mono font-bold text-xs md:text-sm text-accent-pink uppercase mb-3">
                        @ {item.org}
                      </div>

                      {/* Summary */}
                      <p className="font-body text-sm md:text-base text-ink/80 leading-relaxed font-medium">
                        {item.summary}
                      </p>

                      {/* Tech Stack / Focus Chips */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t-2 border-dashed border-ink/30">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono font-bold text-xs px-2.5 py-1 bg-paper border-2 border-ink shadow-[2px_2px_0_#0A0A0A] inline-flex items-center gap-1.5 hover:-translate-y-0.5 transition-transform"
                            >
                              <TechIcon name={tag} className="w-3.5 h-3.5 shrink-0" />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
