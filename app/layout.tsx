import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Rifky — Neo-Brutalist Portfolio",
  description: "Portofolio Neo-Brutalisme Muhammad Rifky. Fullstack Developer & Creative Technologist.",
};

import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${bricolage.variable} ${spaceGrotesk.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-paper text-ink font-body selection:bg-primary selection:text-ink antialiased">
        <SmoothScrollProvider>
          <ScrollProgress />
          <CustomCursor />
          <NoiseOverlay />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
