import type { Metadata } from "next";
import {   JetBrains_Mono, Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ["latin"],
  display: 'swap'
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ["latin"],
  display: 'swap'
})

const spaceGrostek = Space_Grotesk({
  variable: "--font-space-grostek",
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Ivandry Portfolio",
  description: "Portfolio Website for Showcasing the Ivandry's Works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} ${spaceGrostek.variable} antialiased min-h-screen bg-background text-foreground`}
      >
          {children}
      </body>
    </html>
  );
}
