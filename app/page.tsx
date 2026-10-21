import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MarqueeBanner } from "@/components/sections/MarqueeBanner";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Certificates } from "@/components/sections/Certificates";
import { Downloads } from "@/components/sections/Downloads";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { portfolioData } from "@/data/portfolio-data";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink overflow-x-hidden">
      {/* 1. Sticky Brutalist Navbar */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Marquee Banner 1 (Dark & Tilted -1.5deg) */}
        <MarqueeBanner
          items={portfolioData.marquee1}
          variant="dark"
          rotate="-1.5deg"
          speed={55}
          font="display"
        />

        {/* 4. About Section */}
        <About />

        {/* 5. Projects Section (Alternating cards + Case study modal) */}
        <Projects />

        {/* 6. Marquee Banner 2 (Yellow & Tilted 1deg) */}
        <MarqueeBanner
          items={portfolioData.marquee2}
          variant="yellow"
          rotate="1.2deg"
          speed={45}
          direction="right"
          font="mono"
        />

        {/* 7. Skills Section (3 Category Boxes) */}
        <Skills />

        {/* 8. Experience & Education (Vertical Line Timeline) */}
        <Experience />

        {/* 9. Certificates & Credentials (Compact Neo-Brutalist Grid) */}
        <Certificates />

        {/* 10. Downloads CTA (CV ATS & Portfolio PDF) */}
        <Downloads />

        {/* 11. Contact Section (Dark Grid + Brutalist Inputs) */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
