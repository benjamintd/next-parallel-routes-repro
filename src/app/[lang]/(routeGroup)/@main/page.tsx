import Link from "next/link";

export default async function GamePage() {
  return (
    <div>
      <h1>main</h1>
      <nav className="flex gap-4">
        <Link href="/about">about link</Link>
        <Link href="/sign-in">sign-in link</Link>
        <Link href="/privacy">privacy link</Link>
      </nav>
    </div>
  );
}
