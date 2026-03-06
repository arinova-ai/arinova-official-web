import { type NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, isValidLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a valid locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Validate the locale segment
    const segment = pathname.split('/')[1];
    if (isValidLocale(segment)) {
      return NextResponse.next();
    }
  }

  // Redirect root to default locale
  if (pathname === '/') {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}`, request.url)
    );
  }

  // For paths without locale, redirect to default
  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|og).*)'],
};
