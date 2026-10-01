export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  role: string;
  status: string;
  tools: string[];
  ctaText: string;
  featured?: boolean;
  highlightDetails: {
    problem: string;
    solution: string;
    keyDecisions: string[];
  };
}

export const PROJECTS: Project[] = [
  {
    id: "doc-near",
    number: "01",
    title: "Doc Near",
    category: "Product Design · Healthcare · Web Platform",
    tagline: "Local clinic appointment discovery and verified arrival management",
    description: "A local doctor appointment platform designed to make discovering nearby doctors and booking clinic appointments simpler for patients while streamlining front-desk workflows.",
    role: "Product Designer / Developer",
    status: "MVP in development",
    tools: ["Figma", "Web Development", "UI/UX", "Tailwind CSS"],
    ctaText: "View Case Study",
    featured: true,
    highlightDetails: {
      problem: "Local clinics rely heavily on phone calls and paper registers. Patients face long wait times, uncertain doctor schedules, and lack of visibility into clinic shifts.",
      solution: "A local-first platform enabling patients to discover verified doctors by clinic and shift, while empowering clinic staff to manage digital and phone bookings in one single roster.",
      keyDecisions: [
        "Arrival-based confirmation: Online bookings remain 'Pending Attendance' until verified upon patient arrival at the reception.",
        "Integrated telephone walk-in support so desk operators don't maintain dual registers.",
        "Shift-based scheduling (Morning & Evening blocks) tailored to how local clinics actually operate."
      ]
    }
  },
  {
    id: "dumb-phone-launcher",
    number: "02",
    title: "Dumb Phone Launcher",
    category: "Android · Productivity · UI",
    tagline: "Distraction-free minimalist interface designed for intentional phone usage",
    description: "A minimalist Android launcher designed to reduce distractions and cultivate a calm, utilitarian smartphone experience using typography and intentional gestures.",
    role: "Product Designer / Developer",
    status: "Concept & Prototype",
    tools: ["Figma", "Android UI", "UX Research", "Design Systems"],
    ctaText: "View Project",
    highlightDetails: {
      problem: "Modern mobile OS interfaces use hyper-saturated app icons, notification badges, and algorithm feeds engineered to capture user attention and cause doom-scrolling.",
      solution: "A high-contrast typographic interface that strips away icons, badges, and infinite carousels, presenting only essential apps and deliberate access paths.",
      keyDecisions: [
        "Pure typographic app list to remove dopamine triggers associated with colorful brand icons.",
        "Quick gesture search for non-essential applications to add healthy cognitive friction.",
        "Monochrome high-contrast design optimized for OLED battery preservation and visual calm."
      ]
    }
  },
  {
    id: "creative-visual-experiments",
    number: "03",
    title: "Creative Visual Experiments",
    category: "Visual Design · Video · AI",
    tagline: "Explorations in visual storytelling, motion composition, and generative workflows",
    description: "A curated series of experiments exploring visual storytelling, non-linear video editing, geometric composition, and AI-assisted creative workflows.",
    role: "Visual Creator / Editor",
    status: "Ongoing Explorations",
    tools: ["DaVinci Resolve", "Adobe Premiere Pro", "Blender", "Generative AI"],
    ctaText: "Explore Work",
    highlightDetails: {
      problem: "Traditional creative pipelines are often fragmented between conceptual drafting, motion design, and editing, creating high friction in iterative visual storytelling.",
      solution: "A unified experimental workflow combining modular 3D spatial blocking, timeline pacing, and generative asset generation for rapid visual iteration.",
      keyDecisions: [
        "Focus on rhythm and pacing rather than ornamental flashiness.",
        "Exploration of hybrid human-directed AI asset augmentation for storyboarding.",
        "Strict adherence to editorial composition and cinematic color theory."
      ]
    }
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Product & Design",
    description: "Structuring user-centric digital experiences from conceptual wireframes to polished interfaces.",
    skills: [
      { name: "UI/UX Design", note: "Component systems, layout hierarchy & spacing" },
      { name: "Wireframing", note: "Low & high-fidelity user journeys" },
      { name: "Prototyping", note: "Interactive motion & tactile state feedback" },
      { name: "Design Systems", note: "Tokens, typography math & atomic assets" },
      { name: "Product Thinking", note: "Problem definition, user flows & edge cases" }
    ]
  },
  {
    category: "Development",
    description: "Translating architectural blueprints into clean, responsive, and maintainable software.",
    skills: [
      { name: "HTML5", note: "Semantic structures & accessible DOM" },
      { name: "CSS3 / Tailwind", note: "Responsive grids, flexbox & design tokens" },
      { name: "JavaScript", note: "Modern ES6+, DOM manipulation & async logic" },
      { name: "Python", note: "Data structures, backend logic & scripting" },
      { name: "SQL", note: "Relational database querying & schema basics" }
    ]
  },
  {
    category: "Tools & Creative Tech",
    description: "Core toolchain for digital production, version control, and multimedia crafting.",
    skills: [
      { name: "Figma", note: "Auto-layout, variables & interactive prototypes" },
      { name: "Git / GitHub", note: "Version control, branching & repository hygiene" },
      { name: "Adobe Premiere Pro", note: "Non-linear timeline editing & sound design" },
      { name: "DaVinci Resolve", note: "Color grading & cinematic post-production" },
      { name: "Blender", note: "3D scene composition & spatial primitives" }
    ]
  }
];

export const CURRENTLY_BUILDING = {
  projectTitle: "Doc Near",
  tagline: "Local healthcare appointment & clinic attendance platform",
  status: "MVP in development",
  progressPercentage: 65,
  milestones: [
    { title: "Problem Discovery & Local Clinic Research", status: "completed", date: "Q1" },
    { title: "Product Architecture & Information Architecture", status: "completed", date: "Q2" },
    { title: "Core Patient Discovery & Shift Booking Engine", status: "completed", date: "Q3" },
    { title: "Clinic Reception Arrival Verification Flow", status: "in-progress", date: "Current" },
    { title: "Field Testing with Local Neighborhood Clinics", status: "upcoming", date: "Next" }
  ]
};

export const SOCIAL_LINKS = {
  email: "shareefpc99@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com"
};
