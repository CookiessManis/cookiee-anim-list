import AnimeListPage from "./components/AnimeList";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const anime = await response.json();

  return (
    <div>
      <h1>Paling Popular</h1>
      <div className="grid  sm:grid-cols-3 md:grid-cols-5 grid-cols-2 gap-4">
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
