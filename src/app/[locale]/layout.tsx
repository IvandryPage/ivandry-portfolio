import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from 'next-intl';

import "../globals.css";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/generateMetadata";
import { fontClasses } from "@/lib/fonts";
import { SiteNavigation } from "@/components/SiteNavigation";

// Pre-renders all supported locales at build time
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Generates dynamic metadata based on the current active locale.
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return await constructMetadata(locale);
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const {locale} = await params;
  
  // Ensures locale are supported
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${fontClasses} antialiased min-h-screen bg-background text-foreground`}
      >
        <NextIntlClientProvider messages={messages}>
          <SiteNavigation />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
