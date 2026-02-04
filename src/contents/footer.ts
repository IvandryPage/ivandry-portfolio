import { 
  EnvelopeSimpleIcon, 
  GithubLogoIcon, 
  InstagramLogoIcon, 
  LinkedinLogoIcon 
} from "@phosphor-icons/react/dist/ssr";

export const FOOTER_DATA = {
  email: {
    address: "ivandry.89@gmail.com",
    href: "mailto:ivandry.89@gmail.com",
    icon: EnvelopeSimpleIcon,
  },
  socials: [
    { id: "github", href: "https://github.com/ivandrypage", icon: GithubLogoIcon },
    { id: "linkedin", href: "https://linkedin.com/in/ivandrypage", icon: LinkedinLogoIcon },
    { id: "instagram", href: "https://instagram.com/ivandrypage", icon: InstagramLogoIcon },
  ]
};