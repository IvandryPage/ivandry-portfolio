import { Icon } from '@phosphor-icons/react'
import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TwitterLogoIcon,
} from '@phosphor-icons/react/dist/ssr'

export interface SocialLink {
  label: string
  icon: Icon
  href: string
  color: string
}

export interface QuickLink {
  label: string
  href: string
}

export const footerCopy = {
  /* Identity */
  owner: 'Galang Ivandry',

  /* Contact */
  email: {
    address: 'galang.ivandry@gmail.com', // pakai email personal, bukan brand
    href: 'mailto:galang.ivandry@gmail.com',
    icon: EnvelopeSimpleIcon,
    color: 'var(--color-electric-blue)',
  },

  /* Social proof */
  socialLinks: [
    {
      label: "Linkedin",
      icon: LinkedinLogoIcon,
      href: 'https://linkedin.com/in/your-profile',
      color: 'var(--color-neon-pink)',
    },
    {
      label: "GitHub",
      icon: GithubLogoIcon,
      href: 'https://github.com/your-username',
      color: 'var(--color-cyber-purple)',
    },
    {
      label: "Twitter",
      icon: TwitterLogoIcon,
      href: 'https://twitter.com/your-handle',
      color: 'var(--color-electric-blue)',
    },
    {
      label: "Instagram",
      icon: InstagramLogoIcon,
      href: 'https://twitter.com/your-handle',
      color: 'var(--color-acid-green)',
    },
  ] as SocialLink[],

  /* Navigation */
  quickLinks: [
    { label: 'Works', href: '#works' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '/resume.pdf' },
  ] as QuickLink[],

  /* Status */
  status: {
    availability: 'Open for internship & junior opportunities',
    notes: [
      'Frontend (React / Next.js)',
      'Game programming fundamentals (C++ / SFML)',
    ],
  },

  /* Legal / meta */
  legalLinks: [
    { label: 'Privacy', href: '#' },
    { label: 'RSS', href: '#' },
  ],
}
