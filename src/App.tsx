/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { DocNearFeature } from "./components/DocNearFeature";
import { CurrentlyBuilding } from "./components/CurrentlyBuilding";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectModal } from "./components/ProjectModal";
import { Project } from "./data/portfolioData";

export default function App() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111111] flex flex-col font-sans selection:bg-emerald-900 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onViewWork={scrollToWork} onContact={scrollToContact} />

        {/* Selected Work Archive */}
        <SelectedWork onOpenDetails={(proj) => setActiveModalProject(proj)} />

        {/* Doc Near Deep Editorial Feature */}
        <DocNearFeature />

        {/* Currently Building Status */}
        <CurrentlyBuilding />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onContactClick={scrollToContact}
      />
    </div>
  );
}
