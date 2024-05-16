import AnimeListPage from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Search({ params }) {
  const { keyword } = params;
  const decodeKeyboard = decodeURI(keyword);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyboard}`
  );

  const searchAnime = await response.json();
  return (
    <>
      {/* Anime Terbaru */}
      <section>
        <AnimeListPage
          api={searchAnime}
          title={`pencarian untuk ${decodeKeyboard}...`}
        />
      </section>
    </>
  );
}
