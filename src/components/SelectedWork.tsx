import React from "react";
import { Project, PROJECTS } from "../data/portfolioData";
import { ProjectShowcaseCard } from "./ProjectShowcaseCard";

interface SelectedWorkProps {
  onOpenDetails: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenDetails }) => {
  return (
    <section id="work" className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 max-w-2xl">
        <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 mb-2">
          Portfolio Archive
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] mb-3">
          Selected Work
        </h2>
        <p className="text-base sm:text-lg text-[#6B6B6B] font-normal leading-relaxed">
          A collection of products, experiments, and digital experiences I've worked on.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {PROJECTS.map((project) => (
          <ProjectShowcaseCard
            key={project.id}
            project={project}
            onOpenDetails={onOpenDetails}
          />
        ))}
      </div>
    </section>
  );
};
