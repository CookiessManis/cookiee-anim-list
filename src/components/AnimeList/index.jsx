import Image from "next/image";
import Link from "next/link";

const AnimeListPage = ({ api, title }) => {
  return (
    <>
      <h1 className="text-white p-4 font-semibold text-2xl hover:text-accent">
        {title}
      </h1>
      <div className="grid  sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-4 px-4  pt-12">
        {api.data?.map((anime) => {
          return (
            <Link
              href={`/${anime.mal_id}`}
              className="cursor-pointer text-primary hover:text-accent transition-all"
              key={anime.mal_id}
            >
              <Image
                src={anime.images.webp.image_url}
                alt="..."
                width={600}
                height={600}
                className="w-full h-[350px] object-fill rounded-xl "
              />
              <h3 className="font-semibold md:text-xl text-md p-4  ">
                {anime.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AnimeListPage;
