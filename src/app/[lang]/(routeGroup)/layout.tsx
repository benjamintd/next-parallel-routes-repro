import Link from "next/link";

export default async function GameLayout({
  children,
  params: { lang },
  parallel,
}: {
  children: React.ReactNode;
  params: { lang: string };
  parallel: React.ReactNode;
}) {
  return (
    <div>
      <h1>Lang: {lang}</h1>
      <nav className="flex flex-col">
        <Link className="underline" href="/en">
          en
        </Link>
        <Link className="underline" href="/fr">
          fr
        </Link>
        <Link className="underline" href={`/${lang}/about`}>
          About
        </Link>
      </nav>
      {children}
      {parallel}
    </div>
  );
}
