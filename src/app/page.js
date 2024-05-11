import AnimeListPage from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await response.json();

  return (
    <>
      {/* Anime Terbaru */}
      <section>
        <Header
          title="Paling Populer"
          hrefTitle="Lihat Semua"
          linkHref="/AnimeList"
        />
        <AnimeListPage api={anime} />
      </section>
    </>
  );
}
