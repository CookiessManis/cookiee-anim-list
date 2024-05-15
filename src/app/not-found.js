import { FileSearch } from "@phosphor-icons/react/dist/ssr";

const Page = () => {
  return (
    <div>
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
        <div className="flex justify-center items-center gap-3">
          <FileSearch size={36} className="text-accent" />
          <h1 className="text-accent text-2xl font-bold">Page Not Found</h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
