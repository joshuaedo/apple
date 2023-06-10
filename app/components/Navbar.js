import Link from "next/link";
// import Image from "next/image";
import { appleIcons } from "../image";

export default function Navbar() {
  const [AppleIcon, SearchIcon, ShoppingBagIcon] = appleIcons;
  return (
    <div className="flex">
      <div className="bg-[#fbfbfd] opacity-80 flex text-sm text-clip h-11 space-x-7 mx-auto whitespace-nowrap px-4 fixed z-10">
        <Link className="my-auto" href="/">
          <AppleIcon />
        </Link>
        <Link className="my-auto" href="https://apple.com/">
          Store
        </Link>
        <Link className="my-auto" href="https://apple.com/">
          Mac
        </Link>
        <Link className="my-auto" href="https://apple.com/">
          iPad
        </Link>
        <Link className="my-auto" href="https://apple.com/">
          iPhone
        </Link>
        <Link className="my-auto" href="https://apple.com/">
          Watch
        </Link>
        <Link className="my-auto" href="https://apple.com/">
          Vision
        </Link>
        <Link className="my-auto" href="https://apple.com/">
          Airpods
        </Link>
        <Link className="my-auto" href="https://apple.com/">
          TV & Home
        </Link>
        <Link className="my-auto" href="https://apple.com/">
          Entertainment
        </Link>
        <Link className="my-auto" href="https://apple.com/">
          Accessories
        </Link>
        <Link className="my-auto" href="https://apple.com/">
          Support
        </Link>
        <Link className="my-auto" href="https://apple.com/">
          <SearchIcon />
        </Link>
        <Link className="my-auto" href="https://apple.com/">
          <ShoppingBagIcon />
        </Link>
      </div>
    </div>
  );
}
