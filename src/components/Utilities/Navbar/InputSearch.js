"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function InputSearch() {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search/${searchRef.current.value}`);
    searchRef.current.value = "";
  };
  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <input
          placeholder="cari anime"
          className="rounded-lg p-2 w-full"
          ref={searchRef}
        />
        <button className="absolute top-2 end-2">
          <MagnifyingGlass size={24} />
        </button>
      </form>
    </div>
  );
}
