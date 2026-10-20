"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, X, Code2 } from "lucide-react";
import { BrutalistButton } from "../ui/BrutalistButton";
import { portfolioData, ProjectItem } from "@/data/portfolio-data";

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-paper border-b-4 border-ink">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="mb-16">
          <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest bg-accent-pink px-3 py-1 border-3 border-ink shadow-brutal-sm inline-block mb-3">
            02 / KARYA
          </span>
          <h2 className="font-display font-extrabold uppercase text-clamp-h2 tracking-tight text-ink">
            PROYEK PILIHAN
          </h2>
        </div>

        {/* Project Cards (Vertical list with alternating layout) */}
        <div className="flex flex-col gap-16 md:gap-20">
          {portfolioData.projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                style={{ transform: `rotate(${project.rotation})` }}
                className="group relative bg-paper border-4 border-ink p-6 md:p-8 shadow-brutal-md transition-all duration-200 hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-brutal-lg hover:rotate-0"
                data-cursor="project"
              >
                {/* Background Large Number Outline */}
                <div
                  aria-hidden="true"
                  className="absolute -top-10 md:-top-16 right-6 md:right-12 font-display font-black text-8xl md:text-9xl text-outline-ink opacity-25 select-none pointer-events-none -z-0"
                >
                  {project.number}
                </div>

                <div className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}>
                  
                  {/* Thumbnail (16:10 aspect ratio) */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:col-start-7" : ""}`}>
                    <div className="relative aspect-[16/10] overflow-hidden border-4 border-ink bg-ink shadow-brutal-sm group-hover:shadow-none transition-shadow">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover grayscale contrast-110 transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 600px"
                      />

                      {/* Status Badge */}
                      <div className="absolute top-3 left-3 z-20">
                        <span className="font-mono font-black text-xs uppercase px-2.5 py-1 bg-primary border-3 border-ink shadow-brutal-sm">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className={`lg:col-span-6 flex flex-col items-start ${isEven ? "lg:col-start-1" : ""}`}>
                    <div className="font-mono font-bold text-xs text-ink/70 uppercase mb-2">
                      PROYEK #{project.number}
                    </div>

                    <h3 className="font-display font-black uppercase text-2xl md:text-3xl text-ink leading-tight mb-4 group-hover:text-accent-pink transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-body text-base text-ink/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono font-bold text-xs px-2.5 py-1 bg-paper border-2 border-ink shadow-[2px_2px_0_#0A0A0A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <BrutalistButton
                        variant="primary"
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        icon={<ArrowUpRight className="w-4 h-4 stroke-[3]" />}
                      >
                        BACA STUDI KASUS
                      </BrutalistButton>
                      <BrutalistButton
                        href={project.caseStudy.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        size="sm"
                        icon={<ExternalLink className="w-4 h-4 stroke-[3]" />}
                      >
                        LIVE DEMO
                      </BrutalistButton>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/70 backdrop-blur-none">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-paper border-4 border-ink shadow-brutal-lg p-6 sm:p-8">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b-4 border-ink pb-4 mb-6">
              <div>
                <span className="font-mono font-bold text-xs uppercase px-2.5 py-0.5 bg-primary border-2 border-ink inline-block mb-2">
                  STUDI KASUS #{selectedProject.number}
                </span>
                <h3 className="font-display font-black uppercase text-2xl sm:text-3xl text-ink">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Tutup Modal"
                className="p-2 bg-accent-pink text-ink border-3 border-ink shadow-brutal-sm hover:bg-primary active:translate-x-0.5 active:translate-y-0.5"
                data-cursor="link"
              >
                <X className="w-6 h-6 stroke-[3]" />
              </button>
            </div>

            {/* Case Study Fields */}
            <div className="space-y-6 font-body text-sm sm:text-base">
              <div>
                <h4 className="font-mono font-black text-xs uppercase text-ink tracking-wider bg-muted px-2 py-1 border-2 border-ink inline-block mb-2">
                  01. TANTANGAN & MASALAH
                </h4>
                <p className="text-ink/90 leading-relaxed pl-1">{selectedProject.caseStudy.masalah}</p>
              </div>

              <div>
                <h4 className="font-mono font-black text-xs uppercase text-ink tracking-wider bg-muted px-2 py-1 border-2 border-ink inline-block mb-2">
                  02. PERAN & KONTRIBUSI
                </h4>
                <p className="text-ink/90 leading-relaxed pl-1">{selectedProject.caseStudy.peran}</p>
              </div>

              <div>
                <h4 className="font-mono font-black text-xs uppercase text-ink tracking-wider bg-muted px-2 py-1 border-2 border-ink inline-block mb-2">
                  03. PROSES & EKSEKUSI
                </h4>
                <p className="text-ink/90 leading-relaxed pl-1">{selectedProject.caseStudy.proses}</p>
              </div>

              <div>
                <h4 className="font-mono font-black text-xs uppercase text-ink tracking-wider bg-muted px-2 py-1 border-2 border-ink inline-block mb-2">
                  04. TEKNOLOGI & TOOLS
                </h4>
                <p className="font-mono font-bold text-sm text-ink/90 leading-relaxed pl-1">{selectedProject.caseStudy.tools}</p>
              </div>

              <div>
                <h4 className="font-mono font-black text-xs uppercase text-ink tracking-wider bg-primary px-2 py-1 border-2 border-ink inline-block mb-2">
                  05. DAMPAK & HASIL NYATA
                </h4>
                <p className="text-ink font-semibold leading-relaxed pl-1">{selectedProject.caseStudy.hasil}</p>
              </div>
            </div>

            {/* Modal Footer Links */}
            <div className="mt-8 pt-6 border-t-4 border-ink flex flex-wrap gap-4">
              <BrutalistButton
                href={selectedProject.caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                icon={<ExternalLink className="w-4 h-4 stroke-[3]" />}
              >
                KUNJUNGI WEBSITE
              </BrutalistButton>
              <BrutalistButton
                href={selectedProject.caseStudy.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                icon={<GithubIcon className="w-4 h-4" />}
              >
                SOURCE CODE
              </BrutalistButton>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
