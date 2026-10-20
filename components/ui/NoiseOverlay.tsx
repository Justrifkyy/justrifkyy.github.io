"use client";

import React from "react";

export const NoiseOverlay: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9990] noise-overlay opacity-60"
    />
  );
};
