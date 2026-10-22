"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, ShieldCheck, Eye, X, ZoomIn } from "lucide-react";
import { CertificateItem } from "@/data/portfolio-data";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { BrutalistButton } from "../ui/BrutalistButton";

export const Certificates: React.FC = () => {
  const { t, lang } = useLanguage();
  const [previewCert, setPreviewCert] = useState<CertificateItem | null>(null);

  const badgeColors = {
    primary: "bg-primary text-ink",
    accentPink: "bg-accent-pink text-ink",
    accentBlue: "bg-accent-blue text-paper",
  };

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="certificates" className="relative py-20 md:py-24 bg-paper border-b-4 border-ink">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest bg-accent-pink text-ink px-3 py-1 border-3 border-ink shadow-brutal-sm inline-block mb-3">
              {t.certificates.heading.label}
            </span>
            <h2 className="font-display font-extrabold uppercase text-clamp-h2 tracking-tight text-ink">
              {t.certificates.heading.text}
            </h2>
          </div>
          <p className="font-body text-sm md:text-base text-ink/80 max-w-md font-medium">
            {t.certificates.description}
          </p>
        </div>

        {/* Compact 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.certificates.items.map((cert: CertificateItem) => (
            <div
              key={cert.id}
              className="group border-4 border-ink bg-paper p-5 shadow-brutal-sm hover:shadow-brutal-md hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                {/* Certificate Preview Image Box */}
                <div
                  onClick={() => setPreviewCert(cert)}
                  className="relative aspect-[16/10] w-full overflow-hidden border-3 border-ink bg-ink shadow-[2px_2px_0_#0A0A0A] mb-4 cursor-pointer select-none group/img"
                  title={t.certificates.previewButton}
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover/img:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="font-mono font-bold text-xs uppercase px-2.5 py-1 bg-primary text-ink border-2 border-ink shadow-[2px_2px_0_#0A0A0A] flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>{t.certificates.previewButton}</span>
                    </span>
                  </div>
                </div>

                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
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
                <h3
                  onClick={() => setPreviewCert(cert)}
                  className="font-display font-black text-lg uppercase text-ink leading-snug mb-2 hover:text-accent-pink transition-colors cursor-pointer"
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-1.5 font-mono font-bold text-xs text-ink/80 uppercase mb-4">
                  <ShieldCheck className="w-3.5 h-3.5 text-ink shrink-0 stroke-[2.5]" />
                  <span>{cert.issuer}</span>
                </div>
              </div>

              {/* Footer info & verify link */}
              <div className="pt-3 border-t-2 border-dashed border-ink/30 flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] font-bold text-ink/60 uppercase truncate">
                  {cert.credentialId}
                </span>

                <div className="flex items-center gap-2 shrink-0">
                  {/* View Preview Button */}
                  <button
                    onClick={() => setPreviewCert(cert)}
                    className="inline-flex items-center gap-1 font-mono font-bold text-xs uppercase px-2.5 py-1 bg-paper hover:bg-muted border-2 border-ink shadow-[2px_2px_0_#0A0A0A] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                    title={t.certificates.previewButton}
                    data-cursor="link"
                  >
                    <Eye className="w-3 h-3 stroke-[2.5]" />
                    <span className="hidden sm:inline">{lang === "id" ? "LIHAT" : "VIEW"}</span>
                  </button>

                  {/* External Verify Link */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono font-bold text-xs uppercase px-2.5 py-1 bg-primary hover:bg-[#ffe666] border-2 border-ink shadow-[2px_2px_0_#0A0A0A] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                    data-cursor="link"
                  >
                    <span>{t.certificates.verifyButton}</span>
                    <ExternalLink className="w-3 h-3 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Certificate Image Preview Modal */}
      {previewCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/80 backdrop-blur-none">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-paper border-4 border-ink shadow-brutal-lg p-5 sm:p-7">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b-4 border-ink pb-4 mb-5">
              <div>
                <span className="font-mono font-bold text-xs uppercase px-2.5 py-0.5 bg-primary border-2 border-ink inline-block mb-1.5">
                  {previewCert.category} • {previewCert.year}
                </span>
                <h3 className="font-display font-black uppercase text-xl sm:text-2xl text-ink leading-tight">
                  {previewCert.title}
                </h3>
                <p className="font-mono text-xs text-ink/70 mt-1 uppercase">
                  {previewCert.issuer} • ID: {previewCert.credentialId}
                </p>
              </div>

              <button
                onClick={() => setPreviewCert(null)}
                aria-label="Tutup Preview"
                className="p-2 bg-accent-pink text-ink border-3 border-ink shadow-brutal-sm hover:bg-primary active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                data-cursor="link"
              >
                <X className="w-6 h-6 stroke-[3]" />
              </button>
            </div>

            {/* Full High-Resolution Certificate Image */}
            <div className="relative aspect-[4/3] w-full border-4 border-ink bg-ink shadow-brutal-md overflow-hidden mb-6">
              <Image
                src={previewCert.image}
                alt={previewCert.title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="pt-4 border-t-3 border-dashed border-ink/40 flex flex-wrap items-center justify-between gap-4">
              <div className="font-mono text-xs text-ink/80">
                {lang === "id"
                  ? "* Sertifikat resmi terverifikasi dengan nomor kredensial yang valid."
                  : "* Officially verified certificate with a registered credential ID."}
              </div>

              <div className="flex items-center gap-3">
                <BrutalistButton
                  href={previewCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  icon={<ExternalLink className="w-4 h-4 stroke-[3]" />}
                >
                  {t.certificates.verifyButton}
                </BrutalistButton>
                <button
                  onClick={() => setPreviewCert(null)}
                  className="font-mono font-bold text-xs uppercase px-4 py-2.5 bg-paper hover:bg-muted border-3 border-ink shadow-brutal-sm cursor-pointer"
                >
                  {lang === "id" ? "TUTUP" : "CLOSE"}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
