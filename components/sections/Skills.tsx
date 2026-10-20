"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio-data";

export const Skills: React.FC = () => {
  const headerColors = {
    primary: "bg-primary text-ink",
    accentPink: "bg-accent-pink text-ink",
    accentBlue: "bg-accent-blue text-paper",
  };

  const hoverColors = {
    primary: "hover:bg-primary",
    accentPink: "hover:bg-accent-pink",
    accentBlue: "hover:bg-accent-blue hover:text-paper",
  };

  return (
    <section id="skills" className="relative py-20 md:py-28 bg-paper border-b-4 border-ink">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="mb-16">
          <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest bg-primary px-3 py-1 border-3 border-ink shadow-brutal-sm inline-block mb-3">
            {portfolioData.skills.heading.label}
          </span>
          <h2 className="font-display font-extrabold uppercase text-clamp-h2 tracking-tight text-ink">
            {portfolioData.skills.heading.text}
          </h2>
        </div>

        {/* 3 Columns Category Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolioData.skills.groups.map((group, groupIdx) => (
            <div
              key={group.title}
              className="border-4 border-ink bg-paper shadow-brutal-md flex flex-col transition-transform hover:-translate-y-1 hover:shadow-brutal-lg"
            >
              {/* Category Header */}
              <div className={`p-4 border-b-4 border-ink ${headerColors[group.color]} flex items-center justify-between`}>
                <h3 className="font-display font-black text-xl uppercase tracking-wider">
                  {group.title}
                </h3>
                <span className="font-mono text-xs font-black px-2 py-0.5 bg-paper text-ink border-2 border-ink">
                  0{groupIdx + 1}
                </span>
              </div>

              {/* Skill Chips List */}
              <div className="p-6 flex flex-wrap gap-3 flex-1 bg-paper">
                {group.items.map((skill, skillIdx) => {
                  // Precalculated slight rotation for brutalist feel
                  const rotations = ["hover:-rotate-2", "hover:rotate-2", "hover:-rotate-1", "hover:rotate-1"];
                  const rotClass = rotations[skillIdx % rotations.length];

                  return (
                    <div
                      key={skill}
                      className={`font-mono text-xs md:text-sm font-bold uppercase px-3.5 py-2 bg-paper text-ink border-3 border-ink shadow-brutal-sm transition-all duration-150 hover:-translate-y-1 ${rotClass} ${hoverColors[group.color]} cursor-default select-none`}
                    >
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
