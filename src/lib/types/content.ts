export type WorkItem = {
  title: string;
  category: string;
  summary: string;
  status?: "In Progress" | "Completed" | "Experiment";
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type SocialLink = {
  title: string;
  url: string;
  description?: string;
};

export type Content = {
  hero: {
    eyebrow?: string;
    title: string;
    description: string;
  };

  thesis: {
    label?: string;
    title: string;
    description: string;
    principles: string[];
  };

  selectedWork: {
    label?: string;
    title: string;
    description: string;
    items: WorkItem[];
  };

  skills: {
    label?: string;
    title: string;
    description: string;
    groups: SkillGroup[];
  };

  social: {
    label?: string;
    title: string;
    description: string;
    links: SocialLink[];
  };
};
