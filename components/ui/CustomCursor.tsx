"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<"default" | "link" | "project">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on desktop and when reduced-motion is not requested
    const mediaQuery = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mediaQuery.matches || motionQuery.matches) {
      setIsDesktop(false);
      return;
    }

    setIsDesktop(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectTarget = target.closest('[data-cursor="project"]');
      if (projectTarget) {
        setCursorState("project");
        return;
      }

      const linkTarget = target.closest('a, button, input, textarea, [data-cursor="link"]');
      if (linkTarget) {
        setCursorState("link");
        return;
      }

      setCursorState("default");
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isDesktop || !isVisible) return null;

  const cursorVariants = {
    default: {
      width: 16,
      height: 16,
      x: position.x - 8,
      y: position.y - 8,
      backgroundColor: "#0A0A0A",
      border: "2px solid #FFFDF5",
      rotate: 0,
    },
    link: {
      width: 56,
      height: 56,
      x: position.x - 28,
      y: position.y - 28,
      backgroundColor: "#FFE14D",
      border: "3px solid #0A0A0A",
      rotate: 0,
    },
    project: {
      width: 88,
      height: 88,
      x: position.x - 44,
      y: position.y - 44,
      backgroundColor: "#FF5DA2",
      border: "4px solid #0A0A0A",
      rotate: -4,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-mono font-black text-ink select-none shadow-[2px_2px_0_#0A0A0A]"
      animate={cursorVariants[cursorState]}
      transition={{
        type: "spring",
        stiffness: 550,
        damping: 28,
        mass: 0.4,
      }}
    >
      {cursorState === "link" && (
        <span className="text-[10px] tracking-widest font-black uppercase">BUKA</span>
      )}
      {cursorState === "project" && (
        <span className="text-xs tracking-wider font-black uppercase">LIHAT</span>
      )}
    </motion.div>
  );
};
