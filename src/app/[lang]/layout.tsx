import "@/app/globals.css";

import { fixedT } from "@/i18n/server";
import { Locale, locales } from "@/i18n/settings";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const t = await fixedT(lang);

  return (
    <html lang={lang} className={poppins.className}>
      <body>
        <main className="w-screen min-h-screen p-4 bg-zinc-50">
          <header className="flex flex-col items-center w-full mb-6 text-center">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold uppercase md:text-3xl text-cyan-950">
                {t("title")}
              </h1>
            </div>

            <p className="text-sm font-medium text-cyan-950 md:text-base">
              {t("subtitle")}
            </p>
          </header>
          <div className="relative w-full max-w-xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
