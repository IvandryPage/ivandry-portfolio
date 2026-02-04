import { Metadata } from "next";

// Dynamic SEO Function
export async function constructMetadata(locale: string): Promise<Metadata> {
  const isId = locale === 'id';
  
  const title = "Galang Ivandry — Frontend Developer & Information Systems Student";
  const description = isId 
    ? "Portofolio profesional Galang Ivandry, mahasiswa Sistem Informasi UPNVYK dan Frontend & Game Developer yang fokus pada arsitektur web kreatif dan sistem logika."
    : "Professional portfolio of Galang Ivandry, an Information Systems student at UPNVYK and Frontend Developer & Game specializing in creative web architecture and system logic.";

  return {
    title: {
      default: title,
      template: `%s | Galang Ivandry`
    },
    description: description,
    keywords: [
      "Galang Ivandry", 
      "Ivandry", 
      "Frontend Developer Yogyakarta", 
      "Sistem Informasi UPNVYK", 
      "Information Systems Student", 
      "Web Developer Indonesia",
      "React Engineer",
      "Next.js Developer",
      "C++ Developer"
    ],
    authors: [{ name: "Galang Ivandry" }],
    creator: "Galang Ivandry",

    openGraph: {
      type: "website",
      locale: isId ? "id_ID" : "en_US",
      url: `https://ivandrypage.vercel.app/${locale}`,
      title: title,
      description: description,
      siteName: "Galang Ivandry's Portfolio",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Galang Ivandry's Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      creator: "@ivandrypage",
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}