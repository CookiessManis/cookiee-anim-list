import Image from "next/image";
import Link from "next/link";

const AnimeListPage = ({ title, images, id }) => {
  return (
    // <div className="grid grid-cols-3 gap-2 h-32 ">
    <Link href={`${id}`} className="cursor-pointer">
      <Image
        src={images}
        alt="..."
        width={600}
        height={600}
        className="w-full h-[350px] object-fill rounded-xl "
      />
      <h3 className="font-semibold md:text-xl text-md p-4">{title}</h3>
    </Link>
    // </div>
  );
};

export default AnimeListPage;
