import { Icon } from "@phosphor-icons/react";

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  concept: string;
  interaction: string;
  stack: string;
  imageUrl: string;
  year: string;
  color: string;
  icon: Icon;
}
