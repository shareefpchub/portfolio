import React from "react";
import { CURRENTLY_BUILDING } from "../data/portfolioData";
import { CheckCircle2, Circle, Clock, GitCommit } from "lucide-react";

export const CurrentlyBuilding: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-10 max-w-6xl mx-auto border-t border-[#E2E2DC]">
      <div className="bg-[#EFEFEA] rounded-lg p-6 md:p-8 border border-[#E0E0DA]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6B6B6B] mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Currently Building</span>
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight text-[#111111]">
              {CURRENTLY_BUILDING.projectTitle}
            </h3>
            <p className="text-sm text-[#6B6B6B] mt-0.5">
              {CURRENTLY_BUILDING.tagline}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="bg-white px-3.5 py-1.5 rounded border border-[#DDD] text-[#111111] font-semibold">
              {CURRENTLY_BUILDING.status}
            </div>
            <div className="text-[#6B6B6B] tabular-nums">
              {CURRENTLY_BUILDING.progressPercentage}% Core Scope
            </div>
          </div>
        </div>

        {/* Milestone Timeline Visual */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-4 border-t border-[#DDD]">
          {CURRENTLY_BUILDING.milestones.map((milestone, idx) => {
            const isCompleted = milestone.status === "completed";
            const isInProgress = milestone.status === "in-progress";

            return (
              <div
                key={milestone.title}
                className={`p-3.5 rounded bg-white border transition-colors ${
                  isInProgress
                    ? "border-emerald-600 ring-1 ring-emerald-600/20"
                    : isCompleted
                    ? "border-[#E0E0DA]"
                    : "border-[#EBEBE6] opacity-70"
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                  <span className="text-[#888]">0{idx + 1}</span>
                  {isCompleted ? (
                    <span className="text-emerald-700 font-medium">Done</span>
                  ) : isInProgress ? (
                    <span className="text-emerald-700 font-semibold animate-pulse">Active</span>
                  ) : (
                    <span className="text-[#999]">Upcoming</span>
                  )}
                </div>
                <div className="text-xs font-semibold text-[#111111] leading-snug">
                  {milestone.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
