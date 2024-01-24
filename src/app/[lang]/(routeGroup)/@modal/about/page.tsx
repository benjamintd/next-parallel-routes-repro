import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="mb-4 p-4 bg-white rounded border shadow">
      <h1>about modal</h1>
      <Link className="underline" href="/">
        Close
      </Link>
    </div>
  );
};

export default AboutPage;
