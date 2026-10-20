"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { BrutalistButton } from "../ui/BrutalistButton";
import { portfolioData } from "@/data/portfolio-data";

import { BrandLogo } from "../ui/BrandLogo";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full h-[72px] bg-paper border-b-4 border-ink flex items-center">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <BrandLogo size="md" />

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {portfolioData.navbar.links.map((link) => (
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

        {/* Right: Desktop CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <BrutalistButton
              href={portfolioData.navbar.ctaButton.href}
              download
              variant="primary"
              size="sm"
              icon={<Download className="w-4 h-4 stroke-[3]" />}
            >
              {portfolioData.navbar.ctaButton.text}
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

          <nav className="relative z-10 flex flex-col gap-4 mt-6">
            {portfolioData.navbar.links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-black text-4xl sm:text-5xl uppercase text-ink hover:text-accent-pink transition-colors duration-150 flex items-center justify-between border-b-3 border-ink pb-3"
              >
                <span>{link.label}</span>
                <span className="font-mono text-sm text-ink bg-primary px-2 py-0.5 border-2 border-ink">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="relative z-10 pt-8 pb-12 flex flex-col gap-4">
            <BrutalistButton
              href={portfolioData.navbar.ctaButton.href}
              download
              variant="primary"
              size="lg"
              className="w-full text-center"
              icon={<Download className="w-5 h-5 stroke-[3]" />}
            >
              {portfolioData.navbar.ctaButton.text}
            </BrutalistButton>
            <p className="font-mono text-xs text-center text-ink/70">
              © {portfolioData.meta.owner} • Portfolio Brutalisme
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
