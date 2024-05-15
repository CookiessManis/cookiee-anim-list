import Link from "next/link";
import InputSearch from "./InputSearch";

export default function Navbar() {
  return (
    <header className="bg-accent">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2 md:items-center">
        <Link href="/" className="font-bold text-dark text-2xl ">
          Cookiee Anime
        </Link>
        <InputSearch />
      </div>
    </header>
  );
}
