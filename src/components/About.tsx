import React from "react";
import { GraduationCap, Compass, Lightbulb, Code2 } from "lucide-react";

export const About: React.FC = () => {
  const exploringItems = [
    { title: "Product Design", desc: "Crafting structured interfaces with deliberate visual hierarchy." },
    { title: "Web Development", desc: "Building responsive, modern applications with semantic code." },
    { title: "UI/UX", desc: "Analyzing user behavior, friction points, and frictionless journeys." },
    { title: "Software Development", desc: "Understanding algorithms, relational data, and system logic." },
    { title: "AI-Assisted Workflows", desc: "Accelerating design iterations, rapid prototyping, and engineering speed." }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-10 max-w-6xl mx-auto border-t border-[#E0E0DA]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Narrative */}
        <div className="lg:col-span-6">
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 mb-2">
            Background & Direction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] mb-6">
            A little about me.
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#555555] leading-relaxed">
            <p>
              I'm <strong className="text-[#111111] font-semibold">Shareef</strong>, a BCA student interested in building useful software products and digital experiences.
            </p>
            <p>
              I enjoy working across UI/UX, product thinking, web development, and creative technology. My focus is on turning practical problems into simple, usable digital solutions.
            </p>
            <p className="text-sm text-[#777]">
              Rather than building purely theoretical concepts, I look at daily local systems—like clinic appointment queues and distraction-heavy phone habits—and prototype pragmatic solutions that people can genuinely use.
            </p>
          </div>
        </div>

        {/* Right Column: Timeline & Focus Areas */}
        <div className="lg:col-span-6 space-y-8">
          {/* Education Box */}
          <div className="p-6 bg-white rounded-lg border border-[#E0E0DA] shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6B6B6B] mb-3">
              <GraduationCap className="w-4 h-4 text-emerald-800" />
              <span>Education</span>
            </div>
            <div className="text-lg font-bold text-[#111111]">
              Bachelor of Computer Applications (BCA)
            </div>
            <p className="text-sm text-[#6B6B6B] mt-1">
              Undergraduate program covering computer science fundamentals, software engineering, databases, and application design.
            </p>
          </div>

          {/* Currently Exploring */}
          <div className="p-6 bg-white rounded-lg border border-[#E0E0DA] shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6B6B6B] mb-4">
              <Compass className="w-4 h-4 text-emerald-800" />
              <span>Currently Exploring</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exploringItems.map((item) => (
                <div
                  key={item.title}
                  className="p-3 bg-[#F9F9F7] rounded border border-[#ECECE6]"
                >
                  <div className="text-xs font-bold text-[#111111] mb-0.5">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-[#6B6B6B] leading-snug">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
