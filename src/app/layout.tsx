import "@/app/globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <main className="w-screen min-h-screen p-4 bg-zinc-50">
          <header className="flex flex-col items-center w-full mb-6 text-center">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold uppercase md:text-3xl text-cyan-950">
                Title
              </h1>
            </div>

            <p className="text-sm font-medium text-cyan-950 md:text-base">
              Subtitle
            </p>
          </header>
          <div className="relative w-full max-w-xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
