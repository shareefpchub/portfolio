import React, { useState } from "react";
import { ArrowDown, ArrowUpRight, Layers, Eye, Smartphone, Calendar, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onViewWork: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork, onContact }) => {
  const [activeBlueprintTab, setActiveBlueprintTab] = useState<"system" | "preview">("system");

  return (
    <section className="min-h-[85vh] md:min-h-[88vh] flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Typography & Intent */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Small label (Unboxed text with typographic separator) */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#6B6B6B] uppercase mb-4">
            <span>BCA Student</span>
            <span className="text-[#A0A09A]" aria-hidden="true">·</span>
            <span>Product Builder</span>
            <span className="text-[#A0A09A]" aria-hidden="true">·</span>
            <span className="text-emerald-800">Designer</span>
          </div>

          {/* Large Headline with balanced wrapping */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#111111] leading-[1.12] mb-6 text-balance">
            I design & build digital products that solve real-world problems.
          </h1>

          {/* Supporting paragraph */}
          <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed max-w-xl mb-8 font-normal">
            I'm Shareef, a BCA student exploring product design, web development, and practical software solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onViewWork}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#111111] hover:bg-emerald-900 rounded-md transition-colors shadow-sm cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onContact}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#111111] bg-white hover:bg-[#EFEFEA] border border-[#E0E0DA] rounded-md transition-colors cursor-pointer"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4 text-[#6B6B6B]" />
            </button>
          </div>
        </div>

        {/* Right Column: Sophisticated Product Creation Visual Canvas */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-[#111111] text-white rounded-lg p-5 md:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-[#272727] relative overflow-hidden">
            {/* Top Bar of Blueprint canvas */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#2A2A2A]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8E8E8E]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                <span>PRODUCT CANVAS</span>
                <span className="text-[#444]">/</span>
                <span className="text-[#CCC]">DOC_NEAR_SPEC</span>
              </div>
              <div className="flex items-center gap-1 bg-[#1E1E1E] p-1 rounded">
                <button
                  onClick={() => setActiveBlueprintTab("system")}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                    activeBlueprintTab === "system"
                      ? "bg-[#2E2E2E] text-white"
                      : "text-[#888] hover:text-white"
                  }`}
                >
                  Blueprint
                </button>
                <button
                  onClick={() => setActiveBlueprintTab("preview")}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                    activeBlueprintTab === "preview"
                      ? "bg-[#2E2E2E] text-white"
                      : "text-[#888] hover:text-white"
                  }`}
                >
                  Live Frame
                </button>
              </div>
            </div>

            {/* Canvas Body */}
            {activeBlueprintTab === "system" ? (
              <div className="space-y-4 font-mono text-xs text-[#A0A0A0]">
                {/* Visual Step 1 */}
                <div className="p-3 bg-[#181818] border border-[#2B2B2B] rounded">
                  <div className="flex justify-between items-center mb-1 text-[11px] text-[#777]">
                    <span>01. PATIENT DISCOVERY</span>
                    <span className="text-emerald-400">LAT/LNG MATCH</span>
                  </div>
                  <div className="text-sm font-medium text-white flex items-center gap-2">
                    <span className="text-emerald-400">●</span> Find Doctor & Clinic by Shift
                  </div>
                  <p className="text-[11px] text-[#888] mt-1 font-sans">
                    Morning (09:00 - 12:30) & Evening (16:30 - 20:00)
                  </p>
                </div>

                {/* Visual Step 2 */}
                <div className="p-3 bg-[#181818] border border-[#2B2B2B] rounded">
                  <div className="flex justify-between items-center mb-1 text-[11px] text-[#777]">
                    <span>02. HYBRID SCHEDULING ENGINE</span>
                    <span className="text-white">CONSOLIDATED</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                    <div className="bg-[#202020] p-2 rounded border border-[#2F2F2F]">
                      <div className="text-[#888]">Channel A</div>
                      <div className="text-white font-sans font-medium">Digital Patient Form</div>
                    </div>
                    <div className="bg-[#202020] p-2 rounded border border-[#2F2F2F]">
                      <div className="text-[#888]">Channel B</div>
                      <div className="text-white font-sans font-medium">Front-Desk Call In</div>
                    </div>
                  </div>
                </div>

                {/* Visual Step 3 */}
                <div className="p-3 bg-[#181818] border border-emerald-950/60 rounded">
                  <div className="flex justify-between items-center mb-1 text-[11px] text-[#777]">
                    <span>03. ATTENDANCE CONFIRMATION</span>
                    <span className="text-emerald-400 font-semibold">VERIFIED ADMISSION</span>
                  </div>
                  <p className="text-[11px] text-[#AAA] font-sans">
                    Slot reserved digitally → Doctor / Clinic confirms upon physical patient reporting.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px] text-[#666]">
                  <span>SYSTEM: MODULAR ARCHITECTURE</span>
                  <span className="tabular-nums">VERSION 0.9.4 MVP</span>
                </div>
              </div>
            ) : (
              <div className="space-y-3 font-sans">
                {/* Mini Live UI Mockup */}
                <div className="bg-[#1C1C1C] p-4 rounded border border-[#2E2E2E]">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#2C2C2C]">
                    <div>
                      <div className="text-xs font-bold text-white tracking-tight">Doc Near</div>
                      <div className="text-[10px] text-[#888]">Care Clinic · Suite 2B</div>
                    </div>
                    <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/30">
                      OPEN TODAY
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2.5 bg-[#242424] rounded flex items-center justify-between text-xs">
                      <div>
                        <div className="font-medium text-white">Dr. Sarah Jenkins</div>
                        <div className="text-[11px] text-[#999]">Cardiology · Morning Shift</div>
                      </div>
                      <button className="px-2.5 py-1 bg-white text-black font-semibold text-[11px] rounded hover:bg-slate-200 transition-colors">
                        Select
                      </button>
                    </div>

                    <div className="p-2.5 bg-[#242424] rounded flex items-center justify-between text-xs">
                      <div>
                        <div className="font-medium text-white">Dr. Arun Kumar</div>
                        <div className="text-[11px] text-[#999]">General Medicine · Evening Shift</div>
                      </div>
                      <button className="px-2.5 py-1 bg-[#333] text-white font-medium text-[11px] rounded">
                        Full
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#292929] flex items-center justify-between text-[11px] text-[#777]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Arrival Verification Flow
                    </span>
                    <span className="text-[#AAA]">2 Slots Left</span>
                  </div>
                </div>

                <div className="p-2.5 bg-[#171717] rounded text-[11px] text-[#888] font-mono flex items-center justify-between">
                  <span>DESK OVERRIDE: ACTIVE</span>
                  <span className="text-emerald-400">SYNC READY</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="pt-8 flex items-center justify-between border-t border-[#EAEAE5] text-xs text-[#888882]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse"></span>
          <span>Available for internships & collaborations</span>
        </div>

        <button
          onClick={onViewWork}
          className="group flex items-center gap-2 text-xs font-medium text-[#6B6B6B] hover:text-[#111111] transition-colors cursor-pointer"
        >
          <span>Scroll to explore projects</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};
