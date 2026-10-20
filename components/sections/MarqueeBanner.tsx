"use client";

import React from "react";
import Marquee from "react-fast-marquee";

interface MarqueeBannerProps {
  items: string[];
  variant?: "dark" | "yellow";
  rotate?: string;
  speed?: number;
  direction?: "left" | "right";
  font?: "display" | "mono";
}

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  items,
  variant = "dark",
  rotate = "-1.5deg",
  speed = 50,
  direction = "left",
  font = "display",
}) => {
  const isDark = variant === "dark";

  return (
    <div
      className="relative z-20 w-[105vw] -left-[2.5vw] overflow-hidden my-4 py-2 border-y-4 border-ink shadow-brutal-md select-none transition-transform"
      style={{
        transform: `rotate(${rotate})`,
        backgroundColor: isDark ? "#0A0A0A" : "#FFE14D",
        color: isDark ? "#FFE14D" : "#0A0A0A",
      }}
    >
      <Marquee
        speed={speed}
        direction={direction}
        pauseOnHover
        gradient={false}
        className="py-1"
      >
        <div className="flex items-center gap-6 pr-6">
          {items.map((item, idx) => (
            <span
              key={idx}
              className={`flex items-center gap-6 uppercase tracking-wider text-xl md:text-2xl font-black ${
                font === "display" ? "font-display" : "font-mono"
              }`}
            >
              <span>{item}</span>
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
