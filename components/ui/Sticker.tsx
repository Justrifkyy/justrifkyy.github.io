"use client";

import React from "react";

interface StickerProps {
  children: React.ReactNode;
  shape?: "starburst" | "circle" | "badge" | "tape";
  color?: "primary" | "accentPink" | "accentBlue" | "paper" | "muted" | "ink";
  rotate?: string;
  className?: string;
  animateSlow?: boolean;
}

export const Sticker: React.FC<StickerProps> = ({
  children,
  shape = "badge",
  color = "primary",
  rotate = "0deg",
  className = "",
  animateSlow = false,
}) => {
  const colorMap = {
    primary: "bg-primary text-ink",
    accentPink: "bg-accent-pink text-ink",
    accentBlue: "bg-accent-blue text-paper",
    paper: "bg-paper text-ink",
    muted: "bg-muted text-ink",
    ink: "bg-ink text-paper",
  };

  if (shape === "tape") {
    return (
      <div
        style={{ transform: `rotate(${rotate})` }}
        className={`px-6 py-1.5 bg-[#E8E4D4] opacity-90 border-t-2 border-b-2 border-dashed border-ink/40 text-[11px] font-mono font-bold tracking-widest text-ink select-none ${className}`}
      >
        {children}
      </div>
    );
  }

  if (shape === "starburst") {
    return (
      <div
        style={{ transform: `rotate(${rotate})` }}
        className={`relative inline-flex items-center justify-center font-mono font-extrabold text-xs uppercase p-3 border-3 border-ink shadow-brutal-sm ${colorMap[color]} ${
          animateSlow ? "animate-[spin_20s_linear_infinite]" : ""
        } ${className}`}
      >
        {children}
      </div>
    );
  }

  if (shape === "circle") {
    return (
      <div
        style={{ transform: `rotate(${rotate})` }}
        className={`w-24 h-24 rounded-full border-3 border-ink shadow-brutal-sm flex items-center justify-center text-center p-2 font-mono font-bold text-xs uppercase leading-tight ${colorMap[color]} ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <span
      style={{ transform: `rotate(${rotate})` }}
      className={`inline-flex items-center gap-1.5 px-3 py-1 border-3 border-ink font-mono text-xs font-bold shadow-brutal-sm select-none ${colorMap[color]} ${className}`}
    >
      {children}
    </span>
  );
};
