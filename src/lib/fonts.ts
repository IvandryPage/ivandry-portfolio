import { JetBrains_Mono, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

export const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ["latin"],
  display: 'swap'
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ["latin"],
  display: 'swap'
});

export const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ["latin"],
  display: 'swap'
});

export const fontClasses = `${plusJakartaSans.variable} ${jetBrainsMono.variable} ${playfair.variable}`;