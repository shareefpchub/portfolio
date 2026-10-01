import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] text-white border-t border-[#222222] py-14 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Brand & Positioning */}
        <div>
          <div className="text-xl font-extrabold tracking-tight uppercase text-white mb-1">
            Shareef
          </div>
          <p className="text-xs font-mono text-[#8E8E8E] uppercase tracking-wider">
            Product Builder · Designer · Developer
          </p>
        </div>

        {/* Center: Clean Nav links */}
        <nav className="flex items-center gap-6 text-sm text-[#8E8E8E]">
          <button
            onClick={() => handleNavClick("#work")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Work
          </button>
          <button
            onClick={() => handleNavClick("#about")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("#contact")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right: Copyright & Scroll to Top */}
        <div className="flex items-center gap-6 text-xs text-[#8E8E8E]">
          <span>© 2026 Shareef. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded bg-[#1C1C1C] hover:bg-[#252525] text-white transition-colors"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
