"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Download, Menu, X, Globe } from "lucide-react";
import { BrutalistButton } from "../ui/BrutalistButton";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { BrandLogo } from "../ui/BrandLogo";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full h-[72px] bg-paper border-b-4 border-ink flex items-center">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <BrandLogo size="md" />

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {t.navbar.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono font-bold text-sm uppercase tracking-wider text-ink py-1 relative group transition-colors duration-150"
              data-cursor="link"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-full h-[4px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left border-t border-ink" />
            </a>
          ))}
        </nav>

        {/* Right: Language Switcher, Desktop CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:gap-4">
          
          {/* Brutalist Language Switcher (Desktop & Tablet) */}
          <div className="flex items-center border-3 border-ink bg-paper shadow-brutal-sm p-0.5 select-none font-mono text-xs font-black">
            <button
              type="button"
              onClick={() => setLang("id")}
              className={`px-2 py-1 transition-all ${
                lang === "id"
                  ? "bg-primary text-ink shadow-[2px_2px_0_#0A0A0A] border-2 border-ink -translate-y-0.5"
                  : "text-ink/60 hover:text-ink cursor-pointer"
              }`}
              title="Bahasa Indonesia"
              aria-label="Ganti ke Bahasa Indonesia"
              data-cursor="link"
            >
              ID
            </button>
            <span className="text-ink/40 px-0.5 font-bold">/</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2 py-1 transition-all ${
                lang === "en"
                  ? "bg-primary text-ink shadow-[2px_2px_0_#0A0A0A] border-2 border-ink -translate-y-0.5"
                  : "text-ink/60 hover:text-ink cursor-pointer"
              }`}
              title="English Language"
              aria-label="Switch to English"
              data-cursor="link"
            >
              EN
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden sm:block">
            <BrutalistButton
              href={t.navbar.ctaButton.href}
              download
              variant="primary"
              size="sm"
              icon={<Download className="w-4 h-4 stroke-[3]" />}
            >
              {t.navbar.ctaButton.text}
            </BrutalistButton>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Buka Menu Navigasi"
            className="md:hidden flex items-center justify-center p-2.5 bg-primary border-3 border-ink shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5"
            data-cursor="link"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[3] text-ink" />
            ) : (
              <Menu className="w-6 h-6 stroke-[3] text-ink" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-paper z-40 border-t-4 border-ink flex flex-col justify-between p-6 overflow-y-auto">
          <div className="brutal-grid-light absolute inset-0 opacity-40 pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-6 mt-2">
            {/* Mobile Language Switcher Bar */}
            <div className="flex items-center justify-between border-3 border-ink bg-paper p-3 shadow-brutal-sm">
              <span className="font-mono font-bold text-xs uppercase flex items-center gap-1.5 text-ink">
                <Globe className="w-4 h-4 stroke-[2.5]" />
                {lang === "id" ? "PILIH BAHASA:" : "CHOOSE LANGUAGE:"}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLang("id")}
                  className={`px-3 py-1 font-mono font-black text-xs border-2 border-ink ${
                    lang === "id"
                      ? "bg-primary text-ink shadow-[2px_2px_0_#0A0A0A] -translate-y-0.5"
                      : "bg-paper text-ink/60"
                  }`}
                >
                  INDONESIA (ID)
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 font-mono font-black text-xs border-2 border-ink ${
                    lang === "en"
                      ? "bg-primary text-ink shadow-[2px_2px_0_#0A0A0A] -translate-y-0.5"
                      : "bg-paper text-ink/60"
                  }`}
                >
                  ENGLISH (EN)
                </button>
              </div>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col gap-3">
              {t.navbar.links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display font-black text-3xl sm:text-4xl uppercase text-ink hover:text-accent-pink transition-colors duration-150 flex items-center justify-between border-b-3 border-ink pb-2.5"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-ink bg-primary px-2 py-0.5 border-2 border-ink">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="relative z-10 pt-6 pb-10 flex flex-col gap-4">
            <BrutalistButton
              href={t.navbar.ctaButton.href}
              download
              variant="primary"
              size="lg"
              className="w-full text-center"
              icon={<Download className="w-5 h-5 stroke-[3]" />}
            >
              {t.navbar.ctaButton.text}
            </BrutalistButton>
            <p className="font-mono text-xs text-center text-ink/70">
              © {t.meta.owner} • {lang === "id" ? "Portofolio Neo-Brutalisme" : "Neo-Brutalist Portfolio"}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
