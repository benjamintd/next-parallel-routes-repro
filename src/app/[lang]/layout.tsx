import "@/app/globals.css";

// START
// Comment everything between START and END to solve the bug.
export async function generateStaticParams() {
  return ["en", "fr"].map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const metadata = {
    title: {
      default: `Title (${lang})`,
      template: "%s | Site",
    },
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        fr: "/fr",
      },
    },
    description: "Description",
  };

  return metadata;
}
// END

export const revalidate = 60;

export default async function LayoutPage({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <body className="p-6">{children}</body>
      <footer className="p-6">Footer</footer>
    </html>
  );
}
