import Link from "next/link";

export default function Header({ title, hrefTitle, linkHref }) {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="font-bold text-2xl ">{title}</h1>
      {hrefTitle && linkHref ? (
        <Link
          href={linkHref}
          className="md:text-xl text-md  underline font-semibold hover:text-indigo-600"
        >
          {hrefTitle}
        </Link>
      ) : null}
    </div>
  );
}
