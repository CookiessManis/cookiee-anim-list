import Link from "next/link";

export default function Header({ title, hrefTitle, linkHref }) {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="font-bold text-2xl text-primary hover:text-accent">
        {title}
      </h1>
      {hrefTitle && linkHref ? (
        <Link
          href={linkHref}
          className="md:text-xl text-md  underline font-semibold text-primary hover:text-accent transition-all"
        >
          {hrefTitle}
        </Link>
      ) : null}
    </div>
  );
}
