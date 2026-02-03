// import {
//   EnvelopeSimpleIcon,
//   TwitterLogoIcon,
//   LinkedinLogoIcon,
//   GithubLogoIcon,
//   SparkleIcon,
// } from '@phosphor-icons/react'
import type { Icon } from "@phosphor-icons/react";
import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon, SparkleIcon, TwitterLogoIcon } from "@phosphor-icons/react/dist/ssr";

export interface SocialLink {
  icon: Icon;
  href: string;
  color: string;
}

export interface QuickLink {
  label: string;
  href: string;
}

export const footerCopy = {
  email: {
    address: "hello@pixelalchemist.dev",
    href: "mailto:hello@pixelalchemist.dev",
    icon: EnvelopeSimpleIcon,
    color: "var(--color-electric-blue)",
  },

  socialLinks: [
    {
      icon: TwitterLogoIcon,
      href: "#",
      color: "var(--color-electric-blue)",
    },
    {
      icon: LinkedinLogoIcon,
      href: "#",
      color: "var(--color-neon-pink)",
    },
    {
      icon: GithubLogoIcon,
      href: "#",
      color: "var(--color-cyber-purple)",
    },
    {
      icon: SparkleIcon,
      href: "#",
      color: "var(--color-acid-green)",
    },
  ] as SocialLink[],

  quickLinks: [
    { label: "Works", href: "#works" },
    { label: "About", href: "#about" },
    { label: "Resume", href: "#" },
    { label: "Blog", href: "#" },
  ] as QuickLink[],

  status: {
    availability: "Currently available",
    notes: [
      "Open to experimental projects & wild ideas",
      "Based in the digital void (remote-first)",
    ],
  },

  legalLinks: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "RSS", href: "#" },
  ],
};
