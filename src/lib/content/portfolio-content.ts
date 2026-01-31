import { Content } from "../types/content";

export const content: Content = {
  hero: {
    eyebrow: "Personal Portfolio",
    title: "I design and build digital systems with intent.",
    description:
      "A typography-driven portfolio focused on clarity, structure, and deliberate engineering decisions.",
  },

  thesis: {
    title: "Most digital products fail because they prioritize novelty over clarity.",
    description:
      "I build interfaces and systems that resist monotony by focusing on structure, intent, and long-term usability rather than visual spectacle.",
    principles: [
      "Clarity over cleverness.",
      "Systems before screens.",
      "Restraint is a feature.",
    ],
  },

  selectedWork: {
    title: "Selected Work",
    description:
      "A small selection of projects, experiments, and ongoing work that reflect how I approach problems and trade-offs.",
    items: [
      {
        title: "Editorial-style Personal Portfolio",
        category: "Web / Front-End",
        summary:
          "Exploring how typography, hierarchy, and flow can replace traditional navigation patterns.",
        status: "In Progress",
      },
      {
        title: "Open-World MMORPG Systems Exploration",
        category: "Game Design",
        summary:
          "An exploration of progression systems, world consistency, and player agency in large-scale open worlds.",
        status: "Experiment",
      },
    ],
  },

  skills: {
    title: "Capabilities",
    description:
      "A practical overview of the tools and skills I use to design, build, and reason about software systems.",
    groups: [
      {
        label: "Front-End",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        label: "Game & Systems",
        items: ["Game Design", "System Architecture", "State Management"],
      },
      {
        label: "Workflow",
        items: ["Git", "Component-driven Design", "Iterative Prototyping"],
      },
    ],
  },

  social: {
    title: "Find Me Elsewhere",
    description:
      "Places where I share work, ideas, or ongoing experiments.",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/yourname",
        description: "Code, experiments, and work in progress.",
      },
      {
        title: "LinkedIn",
        url: "https://linkedin.com/in/yourname",
        description: "Professional background and collaboration.",
      },
    ],
  },
};
