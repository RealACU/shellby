import Link from "next/link";
import { Egg, NotebookText, Image, PencilLine } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-1/5 w-full fixed px-12 py-4 gap-4 bg-yellow-300 grid grid-cols-4 items-center z-index-9999">
      <Link
        className="h-full w-full p-3 rounded-lg flex hover:bg-slate-50 duration-200"
        href="/"
      >
        <div className="h-full w-full flex flex-col items-center justify-center">
          <p>Home</p>
          <Egg />
        </div>
      </Link>
      <Link
        className="h-full w-full p-3 rounded-lg flex hover:bg-slate-50 duration-200"
        href="/log"
      >
        <div className="h-full w-full flex flex-col items-center justify-center">
          <p>Egg Log</p>
          <NotebookText />
        </div>
      </Link>
      <Link
        className="h-full w-full p-3 rounded-lg flex hover:bg-slate-50 duration-200"
        href="/gallery"
      >
        <div className="h-full w-full flex flex-col items-center justify-center">
          <p>Gallery</p>
          <Image />
        </div>
      </Link>
      <Link
        className="h-full w-full p-3 rounded-lg flex hover:bg-slate-50 duration-200"
        href="/application"
      >
        <div className="h-full w-full flex flex-col items-center justify-center">
          <p>Application</p>
          <PencilLine />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
