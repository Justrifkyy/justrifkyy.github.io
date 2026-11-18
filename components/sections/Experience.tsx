"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { TechIcon } from "@/components/ui/TechIcon";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { TimelineItem } from "@/data/portfolio-data";

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "work" | "education">("all");

  const workItems = t.experience.items.filter((item) => item.type === "work");
  const educationItems = t.experience.items.filter((item) => item.type === "education");

  const showWork = filter === "all" || filter === "work";
  const showEducation = filter === "all" || filter === "education";

  return (
    <section id="experience" className="relative py-10 md:py-14 bg-paper border-b-4 border-ink">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
        
        {/* Section Heading & Filter Tabs */}
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest bg-accent-blue text-paper px-2.5 py-0.5 border-2 border-ink shadow-brutal-sm inline-block mb-2">
              {t.experience.heading.label}
            </span>
            <h2 className="font-display font-extrabold uppercase text-2xl md:text-3xl lg:text-4xl tracking-tight text-ink">
              {t.experience.heading.text}
            </h2>
          </div>

          {/* Quick Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto font-mono text-xs">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 font-bold uppercase border-2 border-ink shadow-[2px_2px_0_#0A0A0A] transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-primary text-ink font-black -translate-y-0.5"
                  : "bg-paper text-ink/70 hover:text-ink hover:bg-muted"
              }`}
            >
              {t.experience.allLabel || "SEMUA"} ({t.experience.items.length})
            </button>
            <button
              onClick={() => setFilter("work")}
              className={`px-3 py-1 font-bold uppercase border-2 border-ink shadow-[2px_2px_0_#0A0A0A] transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                filter === "work"
                  ? "bg-primary text-ink font-black -translate-y-0.5"
                  : "bg-paper text-ink/70 hover:text-ink hover:bg-muted"
              }`}
            >
              <Briefcase className="w-3 h-3 stroke-[2.5]" />
              <span>{t.experience.workLabel ? t.experience.workLabel.split("&")[0].trim() : "KERJA"} ({workItems.length})</span>
            </button>
            <button
              onClick={() => setFilter("education")}
              className={`px-3 py-1 font-bold uppercase border-2 border-ink shadow-[2px_2px_0_#0A0A0A] transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                filter === "education"
                  ? "bg-primary text-ink font-black -translate-y-0.5"
                  : "bg-paper text-ink/70 hover:text-ink hover:bg-muted"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>{t.experience.educationLabel ? t.experience.educationLabel.split("&")[0].trim() : "PENDIDIKAN"} ({educationItems.length})</span>
            </button>
          </div>
        </div>

        {/* 2-Column Compact Layout (Fits in 1 Screen on Desktop) */}
        <div className={`grid gap-6 lg:gap-8 items-start ${
          filter === "all" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 max-w-3xl mx-auto"
        }`}>
          
          {/* COLUMN 1: PENGALAMAN KERJA & LAB */}
          {showWork && (
            <div className="flex flex-col">
              {/* Column Header Bar */}
              <div className="flex items-center justify-between pb-2 mb-4 border-b-2 border-ink">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-primary border-2 border-ink shadow-[1px_1px_0_#0A0A0A]">
                    <Briefcase className="w-3.5 h-3.5 stroke-[2.5] text-ink" />
                  </div>
                  <h3 className="font-display font-black text-sm md:text-base uppercase tracking-wider text-ink">
                    {t.experience.workLabel || "PENGALAMAN KERJA & LAB"}
                  </h3>
                </div>
                <span className="font-mono font-bold text-[11px] px-2 py-0.5 bg-paper border border-ink shadow-[1px_1px_0_#0A0A0A]">
                  {workItems.length} PERAN
                </span>
              </div>

              {/* Timeline Items */}
              <div className="relative pl-5 md:pl-6 border-l-3 border-ink space-y-3 md:space-y-3.5">
                {workItems.map((item, idx) => (
                  <CompactCard key={idx} item={item} nodeColor="bg-primary" />
                ))}
              </div>
            </div>
          )}

          {/* COLUMN 2: PENDIDIKAN & MILESTONES */}
          {showEducation && (
            <div className="flex flex-col">
              {/* Column Header Bar */}
              <div className="flex items-center justify-between pb-2 mb-4 border-b-2 border-ink">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-accent-pink border-2 border-ink shadow-[1px_1px_0_#0A0A0A]">
                    <GraduationCap className="w-3.5 h-3.5 stroke-[2.5] text-ink" />
                  </div>
                  <h3 className="font-display font-black text-sm md:text-base uppercase tracking-wider text-ink">
                    {t.experience.educationLabel || "PENDIDIKAN FORMAL"}
                  </h3>
                </div>
                <span className="font-mono font-bold text-[11px] px-2 py-0.5 bg-paper border border-ink shadow-[1px_1px_0_#0A0A0A]">
                  {educationItems.length} TINGKAT
                </span>
              </div>

              {/* Timeline Items */}
              <div className="relative pl-5 md:pl-6 border-l-3 border-ink space-y-3 md:space-y-3.5">
                {educationItems.map((item, idx) => (
                  <CompactCard key={idx} item={item} nodeColor="bg-accent-blue" />
                ))}

                {/* 3rd Symmetrical Highlight Card (Balances height on desktop) */}
                {filter === "all" && (
                  <div className="relative">
                    {/* Diamond Node */}
                    <div className="absolute -left-[27px] md:-left-[31px] top-3.5 w-3 h-3 bg-accent-pink border-2 border-ink shadow-[1px_1px_0_#0A0A0A] rotate-45 z-10" />

                    {/* Card Body */}
                    <div className="border-3 border-dashed border-ink bg-primary/15 p-3 md:p-3.5 shadow-brutal-sm hover:-translate-y-0.5 transition-transform">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-mono font-bold text-[10px] uppercase px-1.5 py-0.5 bg-accent-pink text-ink border border-ink inline-flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>{t.experience.statusBadge || "STATUS • MAHASISWA AKTIF"}</span>
                        </span>
                        <span className="font-mono font-bold text-[10px] md:text-xs text-ink/80 uppercase">
                          {t.experience.statusOrg || "UNIVERSITAS MUSLIM INDONESIA"}
                        </span>
                      </div>

                      <h4 className="font-display font-black text-sm md:text-base uppercase text-ink leading-tight mb-1">
                        {t.experience.statusTitle || "Kompetensi & Kesiapan Rekayasa"}
                      </h4>

                      <p className="font-body text-xs text-ink/80 leading-relaxed font-medium mb-2.5">
                        {t.experience.statusSummary || "Fokus pada Software Engineering, arsitektur Web & Mobile Android, Clean Architecture, serta siap berkolaborasi dalam proyek profesional."}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-dashed border-ink/30">
                        {(t.experience.statusTags || ["Clean Architecture", "Code Review", "Mentoring", "Problem Solving"]).map((tag) => (
                          <span
                            key={tag}
                            className="font-mono font-bold text-[10px] px-2 py-0.5 bg-paper border border-ink shadow-[1px_1px_0_#0A0A0A] inline-flex items-center gap-1"
                          >
                            <TechIcon name={tag} className="w-3 h-3 shrink-0" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

interface CompactCardProps {
  item: TimelineItem;
  nodeColor?: string;
}

const CompactCard: React.FC<CompactCardProps> = ({ item, nodeColor = "bg-primary" }) => {
  return (
    <div className="relative">
      {/* Diamond Node on Timeline Line */}
      <div className={`absolute -left-[27px] md:-left-[31px] top-3.5 w-3 h-3 ${nodeColor} border-2 border-ink shadow-[1px_1px_0_#0A0A0A] rotate-45 z-10`} />

      {/* Card Content */}
      <div className="border-3 border-ink bg-paper p-3 md:p-3.5 shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal-md transition-all duration-150">
        {/* Top Header: Period & Org */}
        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
          <span className="font-mono font-bold text-[10px] uppercase px-1.5 py-0.5 bg-ink text-paper inline-block tracking-wider">
            {item.period}
          </span>
          <span className="font-mono font-bold text-[10px] md:text-xs text-accent-pink uppercase truncate max-w-[200px]" title={item.org}>
            @ {item.org}
          </span>
        </div>

        {/* Title */}
        <h4 className="font-display font-black text-sm md:text-base uppercase text-ink leading-tight my-1">
          {item.title}
        </h4>

        {/* Concise Summary */}
        <p className="font-body text-xs text-ink/80 leading-relaxed font-medium mb-2.5">
          {item.summary}
        </p>

        {/* Tech Stack Chips */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-dashed border-ink/20">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono font-bold text-[10px] px-2 py-0.5 bg-paper border border-ink shadow-[1px_1px_0_#0A0A0A] inline-flex items-center gap-1 hover:-translate-y-0.5 transition-transform"
              >
                <TechIcon name={tag} className="w-3 h-3 shrink-0" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
