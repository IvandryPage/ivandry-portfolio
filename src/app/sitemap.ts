import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ivandrypage.vercel.app';
  const locales = ['en', 'id'];
 
  return locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  ]);
}