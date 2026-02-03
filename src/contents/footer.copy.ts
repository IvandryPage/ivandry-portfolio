import { EnvelopeSimpleIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";


export const footerCopy = {
  owner: "Galang Ivandry",
  email: {
    address: "hello@ivandry.com", // Ganti dengan email aslimu
    href: "mailto:hello@ivandry.com",
    icon: EnvelopeSimpleIcon,
  },
  socialLinks: [
    {
      label: "Github",
      href: "https://github.com/yourusername",
      icon: GithubLogoIcon,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      icon: LinkedinLogoIcon,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/yourusername",
      icon: InstagramLogoIcon,
    },
  ],
  quickLinks: [
    { label: "Selected Works", href: "#works" },
    { label: "About Identity", href: "#about" },
    { label: "Start a Project", href: "#contact" },
    { label: "Curriculum Vitae", href: "/cv.pdf" },
  ],
  status: {
    availability: "Available for new projects",
    notes: [
      "Based in Jakarta, ID",
      "Current Focus: Creative Frontend & Design Systems"
    ],
  },
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};