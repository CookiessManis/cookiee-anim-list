import Image from "next/image";
import Link from "next/link";

const AnimeListPage = ({ api }) => {
  return (
    <div className="grid  sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-4 px-4">
      {api.data.map((anime) => {
        return (
          <Link
            href={`/${anime.mal_id}`}
            className="cursor-pointer"
            key={anime.mal_id}
          >
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={600}
              height={600}
              className="w-full h-[350px] object-fill rounded-xl "
            />
            <h3 className="font-semibold md:text-xl text-md p-4">
              {anime.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeListPage;
