import React, { useEffect } from "react";
import { X, ArrowUpRight, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";
import { Project } from "../data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onContactClick
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="bg-[#F7F7F5] w-full max-w-3xl max-h-[90vh] rounded-lg shadow-2xl border border-[#D5D5CF] flex flex-col overflow-hidden text-[#111111]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E2DC] bg-[#EDEDE8]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#666]">
            <span className="font-semibold text-[#111]">{project.number}</span>
            <span>·</span>
            <span>{project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#DDD] text-[#444] hover:text-black transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 font-sans">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 mb-1">
              Case Study Deep Dive
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base text-[#555] font-medium leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-white rounded border border-[#E0E0DA] text-xs">
            <div>
              <span className="text-[#888] font-mono uppercase tracking-wider block mb-0.5 text-[11px]">Role</span>
              <span className="font-semibold text-[#111]">{project.role}</span>
            </div>
            <div>
              <span className="text-[#888] font-mono uppercase tracking-wider block mb-0.5 text-[11px]">Current State</span>
              <span className="font-semibold text-emerald-800">{project.status}</span>
            </div>
            <div>
              <span className="text-[#888] font-mono uppercase tracking-wider block mb-0.5 text-[11px]">Toolchain</span>
              <span className="font-semibold text-[#111]">{project.tools.join(", ")}</span>
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="space-y-6 text-sm text-[#444] leading-relaxed">
            <div>
              <h3 className="text-base font-bold text-[#111] mb-2">The Real-World Problem</h3>
              <p>{project.highlightDetails.problem}</p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#111] mb-2">The Architectural Solution</h3>
              <p>{project.highlightDetails.solution}</p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#111] mb-3">Key Design Decisions & Product Logic</h3>
              <div className="space-y-2">
                {project.highlightDetails.keyDecisions.map((decision, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 bg-white rounded border border-[#E5E5DF]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span className="text-xs text-[#333] font-medium leading-snug">{decision}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project-specific in-depth notes */}
          {project.id === "doc-near" && (
            <div className="p-4 bg-emerald-950/5 border border-emerald-900/20 rounded text-xs text-emerald-900 space-y-1">
              <span className="font-bold font-mono uppercase tracking-wide block">Front-Desk Reality Check</span>
              <p className="leading-relaxed">
                Most appointment platforms fail in neighborhood clinics because they assume doctors sit in front of full laptops and that patients reliably show up. Doc Near's lightweight desk-operator view acknowledges walk-in calls and gates queue progression on physical check-in.
              </p>
            </div>
          )}

          {project.id === "dumb-phone-launcher" && (
            <div className="p-4 bg-zinc-900 text-white rounded text-xs space-y-1">
              <span className="font-bold font-mono uppercase tracking-wide block text-emerald-400">Ergonomic Constraint</span>
              <p className="leading-relaxed text-[#CCC]">
                By removing colorful brand badges and replacing them with pure typography, user screen unlock sessions dropped drastically in user behavior testing. Essential utilities remain accessible within two taps.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#E2E2DC] bg-[#EDEDE8]">
          <span className="text-xs text-[#777] font-mono">Product Case Study</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#111111] hover:bg-emerald-900 rounded transition-colors"
            >
              <span>Discuss Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
