"use client";

import React from "react";
import { ExternalLink, Award, ShieldCheck } from "lucide-react";
import { portfolioData, CertificateItem } from "@/data/portfolio-data";

export const Certificates: React.FC = () => {
  const badgeColors = {
    primary: "bg-primary text-ink",
    accentPink: "bg-accent-pink text-ink",
    accentBlue: "bg-accent-blue text-paper",
  };

  return (
    <section id="certificates" className="relative py-20 md:py-24 bg-paper border-b-4 border-ink">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest bg-accent-pink text-ink px-3 py-1 border-3 border-ink shadow-brutal-sm inline-block mb-3">
              {portfolioData.certificates.heading.label}
            </span>
            <h2 className="font-display font-extrabold uppercase text-clamp-h2 tracking-tight text-ink">
              {portfolioData.certificates.heading.text}
            </h2>
          </div>
          <p className="font-body text-sm md:text-base text-ink/80 max-w-md font-medium">
            {portfolioData.certificates.description}
          </p>
        </div>

        {/* Compact 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certificates.items.map((cert: CertificateItem) => (
            <div
              key={cert.id}
              className="border-4 border-ink bg-paper p-5 shadow-brutal-sm hover:shadow-brutal-md hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`font-mono font-black text-[10px] uppercase px-2 py-0.5 border-2 border-ink ${badgeColors[cert.badgeColor]}`}
                  >
                    {cert.category}
                  </span>
                  <span className="font-mono font-bold text-xs text-ink/70">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-lg md:text-xl uppercase text-ink leading-snug mb-2 hover:text-accent-pink transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-1.5 font-mono font-bold text-xs text-ink/80 uppercase mb-4">
                  <ShieldCheck className="w-3.5 h-3.5 text-ink shrink-0 stroke-[2.5]" />
                  <span>{cert.issuer}</span>
                </div>
              </div>

              {/* Footer info & verify link */}
              <div className="pt-3 border-t-2 border-dashed border-ink/30 flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-ink/60 uppercase">
                  {cert.credentialId}
                </span>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono font-bold text-xs uppercase px-2.5 py-1 bg-paper hover:bg-primary border-2 border-ink shadow-[2px_2px_0_#0A0A0A] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                  data-cursor="link"
                >
                  <span>VERIFIKASI</span>
                  <ExternalLink className="w-3 h-3 stroke-[2.5]" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
