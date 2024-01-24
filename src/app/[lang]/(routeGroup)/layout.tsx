import { Locale } from "@/i18n/settings";

export const revalidate = 60;

export default async function GameLayout({
  main,
  params: { lang },
  modal,
}: {
  main: React.ReactNode;
  params: { lang: Locale };
  modal: React.ReactNode;
}) {
  return (
    <div>
      <p>lang: {lang}</p>
      {main}
      {modal}
    </div>
  );
}
