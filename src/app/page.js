import Link from "next/link";
import AnimeListPage from "@/components/AnimeList";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await response.json();

  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl ">Paling Popular</h1>
        <Link
          href={"/all"}
          className="md:text-xl text-md  underline font-semibold hover:text-indigo-600"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="grid  sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-4 px-4">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id}>
              <AnimeListPage
                title={data.title}
                images={data.images.webp.image_url}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
