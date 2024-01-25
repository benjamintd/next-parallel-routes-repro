import Link from "next/link";

export default async function HomePage({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  return (
    <div>
      <h1>main ({lang})</h1>
      <nav className="flex gap-4">
        <Link className="underline" href={`/${lang}/about`}>
          about link
        </Link>
        <Link className="underline" href={`/${lang}/sign-in`}>
          sign-in link
        </Link>
      </nav>
    </div>
  );
}
