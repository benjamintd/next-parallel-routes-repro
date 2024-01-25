export const revalidate = 60;

export default async function GameLayout({
  children,
  params: { lang },
  modal,
}: {
  children: React.ReactNode;
  params: { lang: string };
  modal: React.ReactNode;
}) {
  return (
    <div>
      <h1>Lang: {lang}</h1>
      {children}
      {modal}
    </div>
  );
}
