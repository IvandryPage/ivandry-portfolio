import { Icon } from "@phosphor-icons/react";

export type Project = {
  id: string,
  title: string,
  media: string,
  shortDescription: string,
  context: string,
  focus: string[],
  learnings: string[],
  tech: string[],
  status: string
}

export type ToolSkill = {
  title: string,        
  icon: Icon,
  description: string
}

export type SkillDomain = { 
  name: string;
  subheadline: string;
  skills: ToolSkill[];
}
