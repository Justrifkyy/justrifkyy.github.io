"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { BrutalistButton } from "../ui/BrutalistButton";
import { portfolioData } from "@/data/portfolio-data";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-paper border-t-4 border-ink py-10">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright */}
        <div className="font-mono font-bold text-xs md:text-sm uppercase text-ink">
          {portfolioData.footer.left}
        </div>

        {/* Center: Tech note */}
        <div className="font-mono text-xs md:text-sm text-ink/80 text-center">
          {portfolioData.footer.center}
        </div>

        {/* Right: Scroll to top */}
        <div>
          <BrutalistButton
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            icon={<ArrowUp className="w-4 h-4 stroke-[3]" />}
          >
            {portfolioData.footer.right}
          </BrutalistButton>
        </div>

      </div>
    </footer>
  );
};
