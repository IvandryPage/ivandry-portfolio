import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match semua route kecuali api, static files, dan lain-lain.
  matcher: ['/', '/(id|en)/:path*', '/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};