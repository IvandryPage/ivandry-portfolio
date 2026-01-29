'use client'
import { SkillDomain } from "@/lib/types";
import { GameControllerIcon, GooglePodcastsLogoIcon } from "@phosphor-icons/react";

export const skills: SkillDomain[] = [
  {
    name: 'Front-End Development',
    subheadline: 'Creating responsive and interactive web interfaces.',
    skills: [
      {
        title: 'React',
        description: 'Component-based UI framework for building dynamic interfaces.',
        icon: GooglePodcastsLogoIcon
      },
      {
        title: 'Tailwind CSS',
        description: 'Utility-first CSS framework for fast styling.',
        icon: GooglePodcastsLogoIcon
      },
      {
        title: 'TypeScript',
        description: 'Strongly typed superset of JavaScript for scalable projects.',
        icon: GooglePodcastsLogoIcon
      },
      {
        title: 'Something',
        description: 'Strongly typed superset of JavaScript for scalable projects.',
        icon: GooglePodcastsLogoIcon
      },
      {
        title: 'Less',
        description: 'Strongly typed superset of JavaScript for scalable projects.',
        icon: GooglePodcastsLogoIcon
      }
    ]
  },
  {
    name: 'Game Development',
    subheadline: 'Designing interactive and narrative-driven experiences.',
    skills: [
      {
        title: 'Unity',
        description: '3D game engine for simulations and games.',
        icon: GameControllerIcon
      },
      {
        title: 'Godot',
        description: 'Open-source engine for 2D/3D game projects.',
        icon: GameControllerIcon
      },
      {
        title: 'Blender',
        description: '3D modeling and animation tool.',
        icon: GameControllerIcon
      }
    ]
  }
]