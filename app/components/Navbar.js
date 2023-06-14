import Link from "next/link";
// import Image from "next/image";
import { appleIcons } from "../image";

export default function Navbar() {
  const [
    AppleIcon,
    SearchIcon,
    ShoppingBagIcon,
    LargeAppleIcon,
    HamburgerDisabledIcon,
  ] = appleIcons;
  return (
    <div className="flex fixed z-50 w-[100vw] bg-[#fbfbfd] opacity-80">
      <div className="flex text-sm text-clip h-11 space-x-7 mx- md:mx-auto whitespace-nowrap px-4 relative w-screen md:w-auto">
        <Link className="my-auto" href="/">
          <AppleIcon />
        </Link>
        <Link className="my-auto hidden md:inline" href="https://apple.com/">
          Store
        </Link>
        <Link className="my-auto hidden md:inline" href="https://apple.com/">
          Mac
        </Link>
        <Link className="my-auto hidden md:inline" href="https://apple.com/">
          iPad
        </Link>
        <Link className="my-auto hidden md:inline" href="https://apple.com/">
          iPhone
        </Link>
        <Link className="my-auto hidden md:inline" href="https://apple.com/">
          Watch
        </Link>
        <Link className="my-auto hidden md:inline" href="https://apple.com/">
          Vision
        </Link>
        <Link className="my-auto hidden md:inline" href="https://apple.com/">
          Airpods
        </Link>
        <Link className="my-auto hidden md:inline" href="https://apple.com/">
          TV & Home
        </Link>
        <Link className="my-auto hidden md:inline" href="https://apple.com/">
          Entertainment
        </Link>
        <Link className="my-auto hidden md:inline" href="https://apple.com/">
          Accessories
        </Link>
        <Link className="my-auto hidden md:inline" href="https://apple.com/">
          Support
        </Link>

        <div className="flex space-x-3 md:space-x-7 absolute right-4 md:static">
          <Link className="my-auto" href="https://apple.com/">
            <SearchIcon />
          </Link>
          <Link className="my-auto" href="https://apple.com/">
            <ShoppingBagIcon />
          </Link>
          <div className="my-auto inline md:hidden">
            <HamburgerDisabledIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
