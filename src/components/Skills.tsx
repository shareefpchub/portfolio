import React from "react";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import { Sparkles, Terminal, Palette, PenTool } from "lucide-react";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-10 max-w-6xl mx-auto border-t border-[#E0E0DA]">
      {/* Section Header */}
      <div className="mb-12 max-w-2xl">
        <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 mb-2">
          Competencies & Tools
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] mb-3">
          Skills & Technical Foundation
        </h2>
        <p className="text-base text-[#6B6B6B] font-normal leading-relaxed">
          A balanced intersection of interface design, software development fundamentals, and digital creative tools.
        </p>
      </div>

      {/* Categories Grid (Clean editorial presentation without noisy pill badges) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={cat.category}
            className="p-6 bg-white rounded-lg border border-[#E0E0DA] flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#ECECE6]">
                <h3 className="text-lg font-bold text-[#111111]">
                  {cat.category}
                </h3>
                <span className="text-[11px] font-mono text-[#888]">0{idx + 1}</span>
              </div>

              <p className="text-xs text-[#6B6B6B] mb-6 leading-relaxed">
                {cat.description}
              </p>

              {/* Skills List */}
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group py-1.5 flex flex-col border-b border-[#F2F2EE] last:border-b-0"
                  >
                    <div className="text-sm font-semibold text-[#111111] group-hover:text-emerald-800 transition-colors">
                      {skill.name}
                    </div>
                    <div className="text-xs text-[#888] font-normal">
                      {skill.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F2F2EE] text-[11px] font-mono text-[#999]">
              Applied in real projects
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
