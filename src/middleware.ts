import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function getLocale(): string | undefined {
  return Math.random() > 0.5 ? "en" : "fr";
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameLocale = ["en", "fr"].find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Redirect if there is no locale
  if (!pathnameLocale) {
    const locale = getLocale();

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images/|ads.txt|sitemap.xml|robots.txt|opengraph-image.png|manifest.webmanifest).*)",
  ],
};
