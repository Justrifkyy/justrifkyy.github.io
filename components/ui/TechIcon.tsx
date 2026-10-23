"use client";

import React from "react";

export interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-4 h-4" }) => {
  const normalized = name.toLowerCase().trim();

  // 1. React
  if (normalized.includes("react")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-label="React">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  // 2. Next.js
  if (normalized.includes("next")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="Next.js">
        <circle cx="12" cy="12" r="11" fill="#0A0A0A" />
        <path d="M7.5 17.5V6.5h2.2l6.2 8.5V6.5h2V17.5h-2L9.5 8.8v8.7H7.5z" fill="#FFFDF5" />
      </svg>
    );
  }

  // 3. TypeScript
  if (normalized === "ts" || normalized.includes("typescript")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-label="TypeScript">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M4 10.5h6M7 10.5v8" stroke="#FFFDF5" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M13.5 16.5c.8.9 2 1.3 3.2 1.3 1.5 0 2.3-.7 2.3-1.6 0-2.4-5.2-1.2-5.2-4.4 0-1.5 1.2-2.6 3.2-2.6 1.4 0 2.5.5 3.3 1.3" stroke="#FFFDF5" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  // 4. JavaScript
  if (normalized === "js" || normalized.includes("javascript")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-label="JavaScript">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M8 12.5v4c0 1.5-.8 2-2 2-.8 0-1.5-.3-1.8-.7" stroke="#0A0A0A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M12.5 16.5c.8.9 1.8 1.3 3 1.3 1.5 0 2.3-.7 2.3-1.6 0-2.4-5-1.2-5-4.4 0-1.5 1.2-2.6 3.1-2.6 1.3 0 2.3.5 3.1 1.3" stroke="#0A0A0A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  // 5. Tailwind CSS
  if (normalized.includes("tailwind")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#38BDF8" aria-label="Tailwind CSS">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    );
  }

  // 6. Flutter
  if (normalized.includes("flutter")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-label="Flutter">
        <path d="M14.314 0L2.3 12l3.694 3.695L21.708 0h-7.394z" fill="#42A5F5" />
        <path d="M14.286 10.999L7.966 17.32l3.694 3.694 3.694-3.694 6.326-6.321h-7.394z" fill="#0D47A1" />
        <path d="M11.66 21.014l2.626 2.626h7.394l-6.326-6.32-3.694 3.694z" fill="#01579B" />
        <path d="M15.354 17.32l2.626-2.626 3.694 3.694h-7.394l1.074-1.068z" fill="#29B6F6" />
      </svg>
    );
  }

  // 7. Dart
  if (normalized.includes("dart")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-label="Dart">
        <path d="M4.1 3.5l7.7-2 8.7 8.7-2 7.7-14.4-14.4z" fill="#0081C6" />
        <path d="M4.1 3.5l14.4 14.4-5.2 5.2-11.2-11.2 2-8.4z" fill="#00B4AB" />
        <path d="M8.2 18.8l4.1 4.1 7.6-7.6-4.1-4.1-7.6 7.6z" fill="#40C4FF" />
      </svg>
    );
  }

  // 8. Android
  if (normalized.includes("android")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#3DDC84" aria-label="Android">
        <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-5.03-3.61l1.41-1.41a.495.495 0 000-.7.495.495 0 00-.7 0l-1.62 1.62C13.56 3.32 12.8 3.19 12 3.19c-.8 0-1.56.13-2.56.71L7.82 2.28a.495.495 0 00-.7 0 .495.495 0 000 .7l1.41 1.41C6.72 5.37 5.5 7.15 5.5 7.15h13s-1.22-1.78-3.03-2.76zM9 5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm6 0c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75z" />
      </svg>
    );
  }

  // 9. Java
  if (normalized.includes("java") && !normalized.includes("javascript")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-label="Java">
        <path d="M8.5 18.5c2.5.5 5.5.5 7.5-.5-1 .5-2.5.8-4.5.8-1.5 0-2.5-.1-3-.3zM7 16c3 .8 7.5.8 10.5 0-1.5.5-3.5.7-6 .7-2 0-3.5-.2-4.5-.7z" fill="#EA2D2E" />
        <path d="M12.5 1.5c-1 2-2 3.5-3.5 5.5 1.5-1 3-1.8 3.5-3.5v-2zm-3 4c-1 1.5-2 3-3.5 4.5 1.5-1 3-1.5 3.5-3v-1.5zm5-2c-.5 1-1 2-2 3 1-.5 2-1 2.5-2v-1z" fill="#5382A1" />
        <path d="M6 13c3 1 8 1 12 0-2.5 1-6.5 1.3-9.5.8-1-.2-2-.5-2.5-.8zm12.5 1.5c.5-.3.8-.7.8-1.2 0-.8-.7-1.3-1.8-1.3h-.5c.8-.5 1.5-1.2 1.5-2 0-1.3-1.2-2-3-2-1 0-2 .2-2.8.5.5-.3 1.2-.5 2-.5 1.5 0 2.3.5 2.3 1.3 0 .7-.5 1.2-1.3 1.6 1.8.2 2.8.9 2.8 1.8 0 .8-.5 1.4-1.3 1.8z" fill="#EA2D2E" />
        <path d="M4 21c4 1 11 1 16 0-3 .6-7.5.8-11 .7-2.5 0-4-.2-5-.7z" fill="#5382A1" />
      </svg>
    );
  }

  // 10. PHP
  if (normalized.includes("php")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-label="PHP">
        <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
        <path d="M6.5 14.5l.8-5h2.2c1.2 0 1.8.6 1.6 1.8-.2 1.3-1 2-2.2 2H7.7l-.4 2.2H6.5zm1.7-3h1c.6 0 1-.3 1.1-.9.1-.6-.2-.9-.8-.9h-1l-.3 1.8zm5.5 3l.8-5h1.2l-.3 2h1.5c1.2 0 1.8.6 1.6 1.8-.2 1.3-1 2-2.2 2h-2.1l-.5 2.2h-1.2zm2.1-3h1c.6 0 1-.3 1.1-.9.1-.6-.2-.9-.8-.9h-1l-.3 1.8z" fill="#FFFDF5" />
      </svg>
    );
  }

  // 11. Laravel
  if (normalized.includes("laravel")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#FF2D20" aria-label="Laravel">
        <path d="M3.5 6.5l8-4.5 8 4.5v11l-8 4.5-8-4.5v-11zm8-2.3l-6 3.4 6 3.4 6-3.4-6-3.4zm-7 5.1v7.6l6 3.4v-7.6l-6-3.4zm8 11l6-3.4v-7.6l-6 3.4v7.6z" />
      </svg>
    );
  }

  // 12. MySQL
  if (normalized.includes("mysql")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-label="MySQL">
        <path d="M21.5 13.5c-1.5-3-4-5-7.5-5.5 1.5-.5 3 .5 3.5 1.5.5-1.5 0-3-1.5-4-2.5-1.5-6-.5-8.5 2-2 2-3.5 5-3.5 7.5 0 3.5 2.5 6 6 6 4 0 7.5-2.5 9-6 .5-1 1.5-1.5 2.5-1.5z" fill="#00758F" />
        <path d="M19.5 14c-.5.5-1.5.5-2 0s-.5-1.5 0-2 1.5-.5 2 0 .5 1.5 0 2z" fill="#F29111" />
      </svg>
    );
  }

  // 13. SQLite
  if (normalized.includes("sqlite")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-label="SQLite">
        <rect width="24" height="24" rx="4" fill="#003B57" />
        <path d="M7 6c3-1 7-1 10 0v3c-3-1-7-1-10 0V6zm0 4.5c3-1 7-1 10 0v3c-3-1-7-1-10 0v-3zm0 4.5c3-1 7-1 10 0v3c-3-1-7-1-10 0v-3z" fill="#00A3E0" />
      </svg>
    );
  }

  // 14. Turso
  if (normalized.includes("turso")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#00E699" aria-label="Turso">
        <rect width="24" height="24" rx="5" fill="#0A0A0A" />
        <circle cx="9" cy="9" r="2.5" fill="#00E699" />
        <circle cx="15" cy="9" r="2.5" fill="#00E699" />
        <path d="M7 15c1.5 2 4 3 6.5 2s3-2 3.5-3" stroke="#00E699" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  // 15. Docker
  if (normalized.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#2496ED" aria-label="Docker">
        <path d="M2.5 12.5c.3 2.5 2 5.5 5.5 6.5 4 .8 8.5-.5 11.5-3.5 1.5-1.5 2-3.5 2-3.5s-1 .5-2.5.5c-.3-1-1.2-1.7-2-1.8-.8-.2-1.8.2-2.3.8-3.2-.2-6.5 1.5-8.2.5-.8-.5-1.5-1.2-2-2-.7.8-1.5 1.7-2 2.5zm4-5h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-6 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2z" />
      </svg>
    );
  }

  // 16. Git
  if (normalized.includes("git") && !normalized.includes("github")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#F05032" aria-label="Git">
        <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.7 4.7l2.7 2.7c.6-.2 1.3 0 1.8.5.5.5.7 1.2.5 1.8l2.6 2.6c.6-.2 1.3 0 1.8.5.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.6-.6-.7-1.4-.4-2.1L12.3 11v4.7c.2.2.4.5.4.8 0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6c0-.6.3-1.1.8-1.4V9.8c-.5-.3-.8-.8-.8-1.4 0-.4.1-.7.4-1L7.2 4.7 2.4 9.5c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.6z" />
      </svg>
    );
  }

  // 17. GitHub
  if (normalized.includes("github")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="GitHub">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
      </svg>
    );
  }

  // 18. Linux
  if (normalized.includes("linux") || normalized.includes("shell") || normalized.includes("bash")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-label="Linux">
        <path d="M12 2C9.5 2 8 4 8 7c0 1.5.5 3.5 1 5-1.5 1-3 3-3 5.5 0 2 2 3.5 6 3.5s6-1.5 6-3.5c0-2.5-1.5-4.5-3-5.5.5-1.5 1-3.5 1-5 0-3-1.5-5-4-5z" fill="#0A0A0A" />
        <ellipse cx="12" cy="14" rx="3.5" ry="4.5" fill="#FFFDF5" />
        <ellipse cx="10.5" cy="6.5" rx=".7" ry="1" fill="#FFFDF5" />
        <ellipse cx="13.5" cy="6.5" rx=".7" ry="1" fill="#FFFDF5" />
        <circle cx="10.5" cy="6.5" r=".4" fill="#0A0A0A" />
        <circle cx="13.5" cy="6.5" r=".4" fill="#0A0A0A" />
        <path d="M11 8.5l1-1 1 1-1 1-1-1z" fill="#FCC624" />
        <path d="M6 19.5c1.5 0 3-.5 3.5-1.5-1.5 0-3 .5-3.5 1.5zm12 0c-1.5 0-3-.5-3.5-1.5 1.5 0 3 .5 3.5 1.5z" fill="#FCC624" />
      </svg>
    );
  }

  // 19. Figma
  if (normalized.includes("figma")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-label="Figma">
        <path d="M8 12a4 4 0 014-4h4v8h-4a4 4 0 01-4-4z" fill="#1ABCFE" />
        <path d="M4 12a4 4 0 014-4h4v8H8a4 4 0 01-4-4z" fill="#0ACF83" />
        <path d="M4 20a4 4 0 014-4h4v4a4 4 0 01-4 4 4 4 0 01-4-4z" fill="#A259FF" />
        <path d="M4 4a4 4 0 014-4h4v8H8a4 4 0 01-4-4z" fill="#F24E1E" />
        <path d="M12 0h4a4 4 0 014 4 4 4 0 01-4 4h-4V0z" fill="#FF7262" />
      </svg>
    );
  }

  // 20. Bootstrap
  if (normalized.includes("bootstrap")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-label="Bootstrap">
        <rect width="24" height="24" rx="5" fill="#7952B3" />
        <path d="M8 6h5c1.8 0 3 .9 3 2.3 0 1-.6 1.7-1.5 2 1.2.3 1.9 1.1 1.9 2.2 0 1.6-1.3 2.5-3.2 2.5H8V6zm2.2 3.8h2.6c.8 0 1.3-.4 1.3-1 0-.6-.5-1-1.3-1h-2.6v2zm0 3.4v2.2h2.8c.9 0 1.5-.4 1.5-1.1 0-.7-.6-1.1-1.5-1.1h-2.8z" fill="#FFFDF5" />
      </svg>
    );
  }

  // 21. Leaflet
  if (normalized.includes("leaflet")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-label="Leaflet">
        <path d="M12 2C7 5 4 10 4 15c0 4 3.5 7 8 7s8-3 8-7c0-5-3-10-8-13z" fill="#199900" />
        <path d="M12 5v14m-3-9l3 3 3-3" stroke="#FFFDF5" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  // 22. Python
  if (normalized.includes("python")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-label="Python">
        <path d="M11.9 2c-3.1 0-4.9.4-4.9 2.2V6h5v1.5H5.8c-2.2 0-3.8 1.3-3.8 3.8 0 2.2 1.4 3.8 3.5 3.8h1.5v-2c0-1.5 1.3-2.8 2.8-2.8h4.5c1.3 0 2.2-.9 2.2-2.2V4.2c0-1.8-2-2.2-4.6-2.2zm-1.7 1.5c.4 0 .8.3.8.8s-.3.8-.8.8-.8-.3-.8-.8.4-.8.8-.8z" fill="#3776AB" />
        <path d="M12.1 22c3.1 0 4.9-.4 4.9-2.2V18h-5v-1.5h6.2c2.2 0 3.8-1.3 3.8-3.8 0-2.2-1.4-3.8-3.5-3.8H17v2c0 1.5-1.3 2.8-2.8 2.8H9.7c-1.3 0-2.2.9-2.2 2.2v4.1c0 1.8 2 2.2 4.6 2.2zm1.7-1.5c-.4 0-.8-.3-.8-.8s.3-.8.8-.8.8.3.8.8-.4.8-.8.8z" fill="#FFD438" />
      </svg>
    );
  }

  // 23. Node.js
  if (normalized.includes("node")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#339933" aria-label="Node.js">
        <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4z" />
      </svg>
    );
  }

  // 24. APIs / WebSocket / REST
  if (normalized.includes("api") || normalized.includes("rest") || normalized.includes("websocket")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-label="API">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    );
  }

  // 25. Clean Architecture / Systems / Multi-Platform
  if (normalized.includes("architecture") || normalized.includes("multi-platform") || normalized.includes("cross-platform")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-label="Architecture">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    );
  }

  // 26. Weather API
  if (normalized.includes("weather")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#EB6E4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Weather API">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41" />
      </svg>
    );
  }

  // 27. Midtrans / Payment
  if (normalized.includes("midtrans") || normalized.includes("payment")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#0072CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Midtrans Payment">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    );
  }

  // Default Fallback: Code Brackets Icon
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-label={name}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};

/**
 * Intelligent helper: extracts all matching tech icons from a skill/tool label
 * e.g. "Next.js & React" -> [Next.js, React]
 * "Git & GitHub Actions CI/CD" -> [Git, GitHub]
 * "Flutter & Dart" -> [Flutter, Dart]
 * "Android Native Java" -> [Android, Java]
 */
export const TechIconsFor: React.FC<{ text: string; className?: string }> = ({
  text,
  className = "w-4 h-4",
}) => {
  const normalized = text.toLowerCase();
  const detectedKeys: string[] = [];

  const checks: [string, string][] = [
    ["next", "next.js"],
    ["react", "react"],
    ["typescript", "typescript"],
    ["tailwind", "tailwind css"],
    ["flutter", "flutter"],
    ["dart", "dart"],
    ["android", "android"],
    ["java", "java"],
    ["php", "php"],
    ["laravel", "laravel"],
    ["mysql", "mysql"],
    ["sqlite", "sqlite"],
    ["turso", "turso"],
    ["docker", "docker"],
    ["github", "github"],
    ["git", "git"],
    ["linux", "linux"],
    ["figma", "figma"],
    ["bootstrap", "bootstrap"],
    ["leaflet", "leaflet"],
    ["node", "node.js"],
    ["api", "rest api"],
    ["architecture", "clean architecture"],
  ];

  for (const [needle, key] of checks) {
    if (needle === "java" && normalized.includes("javascript")) continue;
    if (needle === "git" && normalized.includes("github") && !normalized.includes("git &")) continue;

    if (normalized.includes(needle)) {
      if (!detectedKeys.includes(key)) {
        detectedKeys.push(key);
      }
    }
  }

  // If none matched, fallback to default code icon
  if (detectedKeys.length === 0) {
    return <TechIcon name={text} className={className} />;
  }

  return (
    <div className="inline-flex items-center gap-1.5 shrink-0">
      {detectedKeys.map((key) => (
        <TechIcon key={key} name={key} className={className} />
      ))}
    </div>
  );
};
