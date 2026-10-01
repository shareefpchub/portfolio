import React, { useState } from "react";
import { ArrowUpRight, CheckCircle, Clock, Smartphone, Sparkles, SlidersHorizontal, ShieldCheck } from "lucide-react";
import { Project } from "../data/portfolioData";

interface ProjectShowcaseCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectShowcaseCard: React.FC<ProjectShowcaseCardProps> = ({
  project,
  onOpenDetails
}) => {
  // Interactive mini states for each project visual preview
  const [phoneLauncherTheme, setPhoneLauncherTheme] = useState<"dark" | "light">("dark");
  const [docNearShift, setDocNearShift] = useState<"morning" | "evening">("morning");
  const [visualActiveFrame, setVisualActiveFrame] = useState<number>(0);

  const renderVisualMockup = () => {
    if (project.id === "doc-near") {
      return (
        <div className="bg-[#141414] text-white p-5 md:p-8 rounded-lg border border-[#262626] font-sans">
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#2A2A2A] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A3A]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A3A]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A3A]"></span>
              <span className="text-[#888] font-mono ml-2 text-[11px]">docnear.platform/clinic-portal</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>LOCAL CLINIC NETWORK</span>
            </div>
          </div>

          {/* Platform UI Core */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
            {/* Left Column: Doctor Profile & Clinic Info */}
            <div className="md:col-span-6 bg-[#1A1A1A] p-5 rounded-md border border-[#2C2C2C]">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-base font-bold text-white">Dr. Sarah Jenkins, MD</h4>
                  <p className="text-xs text-[#9B9B9B]">Cardiologist & General Physician</p>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/30">
                  Verified Doctor
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#B5B5B5] my-4 pt-3 border-t border-[#292929]">
                <div className="flex justify-between">
                  <span className="text-[#888]">Clinic</span>
                  <span className="text-white font-medium">St. Jude Community Clinic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888]">Location</span>
                  <span className="text-white font-medium">North Ward, Lane 4 (0.8 km)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888]">Consultation</span>
                  <span className="text-white font-medium">In-person arrival</span>
                </div>
              </div>

              {/* Shift Selector */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-[#888] uppercase block mb-2">Select Clinic Shift</span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => setDocNearShift("morning")}
                    className={`py-2 px-3 rounded text-left transition-colors cursor-pointer ${
                      docNearShift === "morning"
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "bg-[#252525] text-[#AAA] hover:text-white"
                    }`}
                  >
                    <div className="text-[11px]">Morning Shift</div>
                    <div className="text-[10px] opacity-75 font-mono">09:00 AM - 12:30 PM</div>
                  </button>
                  <button
                    onClick={() => setDocNearShift("evening")}
                    className={`py-2 px-3 rounded text-left transition-colors cursor-pointer ${
                      docNearShift === "evening"
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "bg-[#252525] text-[#AAA] hover:text-white"
                    }`}
                  >
                    <div className="text-[11px]">Evening Shift</div>
                    <div className="text-[10px] opacity-75 font-mono">04:30 PM - 08:00 PM</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Flow Breakdown & Desk Verification Rule */}
            <div className="md:col-span-6 space-y-3">
              <div className="bg-[#1A1A1A] p-4 rounded-md border border-[#2C2C2C]">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>KEY PRODUCT SPECIFICATION</span>
                </div>
                <h5 className="text-sm font-semibold text-white mb-1.5">
                  Arrival-Based Verification (Not Auto-Completed)
                </h5>
                <p className="text-xs text-[#9B9B9B] leading-relaxed">
                  Booking online queues the patient into the clinic roster. The appointment is officially marked verified & admitted when the patient checks in at the reception desk.
                </p>
              </div>

              <div className="bg-[#1A1A1A] p-4 rounded-md border border-[#2C2C2C]">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-[#888] font-mono">ROSTER STATUS</span>
                  <span className="text-emerald-400 font-mono text-[11px]">HYBRID DESK</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between p-2 bg-[#222] rounded text-[#DDD]">
                    <span className="font-mono text-[11px]">#01 Digital (Online)</span>
                    <span className="text-emerald-400 text-[11px]">Verified Admitted</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-[#222] rounded text-[#DDD]">
                    <span className="font-mono text-[11px]">#02 Phone Call-In (Desk Entry)</span>
                    <span className="text-amber-400 text-[11px]">Awaiting Arrival</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === "dumb-phone-launcher") {
      const isDark = phoneLauncherTheme === "dark";
      return (
        <div className="bg-[#141414] text-white p-5 md:p-8 rounded-lg border border-[#262626]">
          {/* Controls */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#2A2A2A] text-xs">
            <div className="flex items-center gap-2 font-mono text-[#888] text-[11px]">
              <Smartphone className="w-3.5 h-3.5" />
              <span>ANDROID DISTRACTION-FREE LAUNCHER</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#777] font-mono">OLED MODE:</span>
              <button
                onClick={() => setPhoneLauncherTheme(isDark ? "light" : "dark")}
                className="px-2 py-0.5 text-[11px] font-mono bg-[#282828] hover:bg-[#333] text-white rounded transition-colors"
              >
                {isDark ? "Dark AMOLED" : "Chalk White"}
              </button>
            </div>
          </div>

          {/* Minimalist Phone Chassis Mockup */}
          <div className="max-w-sm mx-auto">
            <div
              className={`p-6 rounded-2xl border transition-colors duration-200 shadow-2xl ${
                isDark
                  ? "bg-black text-white border-[#2A2A2A]"
                  : "bg-[#F7F7F5] text-[#111] border-[#DDD]"
              }`}
            >
              {/* Phone Status Bar */}
              <div className="flex justify-between items-center text-[10px] font-mono mb-8 opacity-60">
                <span>10:42 AM</span>
                <div className="flex items-center gap-2">
                  <span>94%</span>
                  <span>LTE</span>
                </div>
              </div>

              {/* Minimalist Date & Time */}
              <div className="mb-10">
                <div className="text-4xl font-extrabold tracking-tighter mb-1 tabular-nums">10:42</div>
                <div className="text-xs uppercase tracking-widest opacity-60 font-medium">Thursday · October 1</div>
              </div>

              {/* Distraction-Free Typography App Menu */}
              <div className="space-y-4 mb-10 font-sans text-sm tracking-wide">
                {["Phone", "Messages", "Calendar", "Notes", "Camera"].map((appName, idx) => (
                  <div
                    key={appName}
                    className="flex items-center justify-between group cursor-pointer hover:opacity-100 opacity-75 transition-opacity"
                  >
                    <span className="text-base font-semibold">{appName}</span>
                    <span className="text-[11px] font-mono opacity-40">0{idx + 1}</span>
                  </div>
                ))}
              </div>

              {/* Intentional cognitive friction bar */}
              <div
                className={`pt-4 border-t text-[11px] font-mono flex items-center justify-between ${
                  isDark ? "border-[#222] text-[#666]" : "border-[#E0E0DA] text-[#888]"
                }`}
              >
                <span>Swipe up for all apps</span>
                <span>0 Badges</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === "creative-visual-experiments") {
      const frames = [
        { title: "Framing & Negative Space", aspect: "16:9 Cinema", desc: "Asymmetric subject weight balancing narrative tension." },
        { title: "Chiaroscuro & Shadow Rhythm", aspect: "4:3 Classic", desc: "Natural window light sculpting depth without synthetic fill." },
        { title: "Generative Pacing Pre-Viz", aspect: "2.35:1 Anamorphic", desc: "Rapid iterative blocking for camera motion and cut points." }
      ];

      return (
        <div className="bg-[#141414] text-white p-5 md:p-8 rounded-lg border border-[#262626]">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#2A2A2A] text-xs">
            <div className="flex items-center gap-2 font-mono text-[#888] text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>VISUAL STORYTELLING & MOTION TIMELINE</span>
            </div>
            <div className="text-[11px] font-mono text-[#777]">DAVINCI · BLENDER · AI</div>
          </div>

          {/* Interactive Frame Viewer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            {frames.map((frame, idx) => (
              <button
                key={frame.title}
                onClick={() => setVisualActiveFrame(idx)}
                className={`p-3.5 rounded text-left transition-all cursor-pointer ${
                  visualActiveFrame === idx
                    ? "bg-[#252525] border border-emerald-600/60 text-white"
                    : "bg-[#181818] border border-[#262626] text-[#888] hover:text-white"
                }`}
              >
                <div className="text-[10px] font-mono text-emerald-400 mb-1">FRAME 0{idx + 1} · {frame.aspect}</div>
                <div className="text-xs font-semibold text-white">{frame.title}</div>
              </button>
            ))}
          </div>

          {/* Visual Canvas Representation */}
          <div className="p-6 bg-[#181818] border border-[#262626] rounded-md relative overflow-hidden">
            <div className="aspect-video w-full bg-[#0E0E0E] rounded border border-[#2A2A2A] flex flex-col justify-between p-5 relative">
              <div className="flex justify-between items-center text-[11px] font-mono text-[#666]">
                <span>TIMECODE 00:01:24:18</span>
                <span className="text-emerald-400">FPS 24.00</span>
              </div>

              {/* Graphic Composition Grid */}
              <div className="my-auto text-center space-y-2">
                <div className="w-12 h-1 bg-emerald-500 mx-auto"></div>
                <div className="text-sm md:text-base font-semibold text-white tracking-wide">
                  {frames[visualActiveFrame].title}
                </div>
                <p className="text-xs text-[#999] max-w-md mx-auto font-normal">
                  {frames[visualActiveFrame].desc}
                </p>
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-[#555]">
                <span>RATIO: {frames[visualActiveFrame].aspect}</span>
                <span>EDITORIAL SUITE</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <article className="border-t border-[#E0E0DA] pt-12 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Project Narrative & Metadata */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            {/* Number + Category (Unboxed text with typographic separator) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-2 font-mono">
              <span className="text-[#111111]">{project.number}</span>
              <span className="text-[#A0A09A]" aria-hidden="true">·</span>
              <span>{project.category}</span>
            </div>

            {/* Project Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-base text-[#6B6B6B] leading-relaxed mb-6 font-normal">
              {project.description}
            </p>

            {/* Project Metadata Specs (Unboxed clean layout) */}
            <div className="space-y-2.5 text-xs py-5 border-y border-[#E5E5DF] mb-6">
              <div className="flex items-baseline justify-between">
                <span className="text-[#888882] font-mono uppercase tracking-wider text-[11px]">Role</span>
                <span className="text-[#111111] font-medium">{project.role}</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-[#888882] font-mono uppercase tracking-wider text-[11px]">Status</span>
                <span className="text-emerald-800 font-medium">{project.status}</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-[#888882] font-mono uppercase tracking-wider text-[11px]">Tools</span>
                <span className="text-[#111111] font-medium">{project.tools.join(" · ")}</span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div>
            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#111111] hover:bg-emerald-900 rounded-md transition-colors cursor-pointer shadow-sm"
            >
              <span>{project.ctaText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: High-Quality Interactive Visual Preview */}
        <div className="lg:col-span-7">
          {renderVisualMockup()}
        </div>
      </div>
    </article>
  );
};
