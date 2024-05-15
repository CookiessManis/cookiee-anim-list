import AnimeListPage from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Search({ params }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${params.keyword}`
  );

  const searchAnime = await response.json();
  return (
    <>
      {/* Anime Terbaru */}
      <section>
        <AnimeListPage api={searchAnime} />
      </section>
    </>
  );
}
