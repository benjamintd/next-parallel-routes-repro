import Link from "next/link";

export default async function DefaultPage() {
  return (
    <div>
      <h1>main</h1>
      <nav className="flex gap-4">
        <Link className="underline" href="/about">
          about link
        </Link>
        <Link className="underline" href="/sign-in">
          sign-in link
        </Link>
        <Link className="underline" href="/privacy">
          privacy link
        </Link>
      </nav>
    </div>
  );
}
