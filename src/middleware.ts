import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { defaultLocale, locales } from "@/i18n/settings";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import cookie from "cookie";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Read the language preference from a cookie
  const cookieHeader = request.headers.get("Cookie");
  const cookies = cookie.parse(cookieHeader || "");
  const preferredLanguage = cookies["i18next"];

  // Override the Accept-Language header with the language from the cookie
  if (preferredLanguage) {
    negotiatorHeaders["accept-language"] = preferredLanguage;
  }

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales as any
  );

  const locale = matchLocale(languages, locales, defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Redirect if there is no locale
  if (!pathnameLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  } else {
    let response = NextResponse.next();
    response.cookies.set("i18next", pathnameLocale);
    return response;
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images/|ads.txt|sitemap.xml|robots.txt|opengraph-image.png|manifest.webmanifest).*)",
  ],
};
