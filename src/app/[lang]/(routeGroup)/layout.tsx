import { Locale } from "@/i18n/settings";

export const revalidate = 60;

export default async function GameLayout({
  children,
  params: { lang },
  modal,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
  modal: React.ReactNode;
}) {
  return (
    <div>
      <p>lang: {lang}</p>
      {children}
      {modal}
    </div>
  );
}
