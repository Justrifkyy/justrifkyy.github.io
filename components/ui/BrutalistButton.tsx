"use client";

import React from "react";
import Link from "next/link";

interface BrutalistButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "dark" | "pink" | "blue";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  download?: boolean | string;
  target?: string;
  rel?: string;
  id?: string;
}

export const BrutalistButton: React.FC<BrutalistButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  icon,
  download,
  target,
  rel,
  id,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-mono font-bold uppercase transition-all duration-150 cursor-pointer select-none border-4 border-ink active:translate-x-1 active:translate-y-1 active:shadow-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-md",
    md: "px-6 py-3 text-sm tracking-wide shadow-brutal-sm hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-md",
    lg: "px-8 py-4 text-base tracking-wider shadow-brutal-md hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-brutal-lg",
  };

  const variantStyles = {
    primary: "bg-primary text-ink hover:bg-[#ffe666]",
    outline: "bg-paper text-ink hover:bg-primary",
    dark: "bg-ink text-paper border-paper hover:bg-primary hover:text-ink hover:border-ink shadow-[4px_4px_0_#FFFDF5]",
    pink: "bg-accent-pink text-ink hover:bg-[#ff7bb3]",
    blue: "bg-accent-blue text-paper hover:bg-[#6891ff]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (href.startsWith("http") || href.startsWith("/") || download) {
      return (
        <a
          id={id}
          href={href}
          onClick={onClick}
          className={combinedClasses}
          download={download}
          target={target}
          rel={rel}
          data-cursor="link"
        >
          <span>{children}</span>
          {icon && <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">{icon}</span>}
        </a>
      );
    }

    return (
      <Link id={id} href={href} onClick={onClick} className={combinedClasses} data-cursor="link">
        <span>{children}</span>
        {icon && <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={combinedClasses}
      data-cursor="link"
    >
      <span>{children}</span>
      {icon && <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};
