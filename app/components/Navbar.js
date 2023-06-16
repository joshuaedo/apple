"use client";
import Link from "next/link";
import { useState } from "react";
// import Image from "next/image";
import { appleIcons } from "../image";
import NavPage from "./NavPage";

export default function Navbar() {
  const [isNavPage, setIsNavPage] = useState(false);
  const toggleNavPage = () => {
    setIsNavPage(!isNavPage);
  };

  const [
    AppleIcon,
    SearchIcon,
    ShoppingBagIcon,
    LargeAppleIcon,
    HamburgerDisabledIcon,
    HamburgerEnabledIcon,
  ] = appleIcons;

  return (
    <>
      {isNavPage && <NavPage toggleNavPage={toggleNavPage} />}
      <div className="flex fixed z-20 w-[100vw] bg-[#fbfbfd] opacity-80">
        <div className="flex text-sm text-clip h-11 space-x-7 mx- md:mx-auto whitespace-nowrap px-4 relative w-screen md:w-auto">
          <Link className="my-auto" href="/">
            <AppleIcon />
          </Link>
          <Link
            className="my-auto hidden md:inline"
            href="https://www.apple.com/us/shop/goto/store"
          >
            Store
          </Link>
          <Link
            className="my-auto hidden md:inline"
            href="https://apple.com/mac"
          >
            Mac
          </Link>
          <Link
            className="my-auto hidden md:inline"
            href="https://apple.com/ipad"
          >
            iPad
          </Link>
          <Link
            className="my-auto hidden md:inline"
            href="https://apple.com/iphone"
          >
            iPhone
          </Link>
          <Link
            className="my-auto hidden md:inline"
            href="https://apple.com/watch"
          >
            Watch
          </Link>
          <Link
            className="my-auto hidden md:inline"
            href="https://www.apple.com/apple-vision-pro/"
          >
            Vision
          </Link>
          <Link
            className="my-auto hidden md:inline"
            href="https://apple.com/airpods"
          >
            Airpods
          </Link>
          <Link
            className="my-auto hidden md:inline"
            href="https://apple.com/tv-home"
          >
            TV & Home
          </Link>
          <Link
            className="my-auto hidden md:inline"
            href="https://apple.com/entertainment"
          >
            Entertainment
          </Link>
          <Link
            className="my-auto hidden md:inline"
            href="https://www.apple.com/us/shop/goto/buy_accessories"
          >
            Accessories
          </Link>
          <Link
            className="my-auto hidden md:inline"
            href="https://support.apple.com/?cid=gn-ols-home-hp-tab"
          >
            Support
          </Link>

          <div className="flex space-x-3 md:space-x-7 absolute right-4 md:static">
            <Link className="my-auto" href="https://www.apple.com/us/search">
              <SearchIcon />
            </Link>
            <Link
              className="my-auto"
              href="https://www.apple.com/us/shop/goto/bag"
            >
              <ShoppingBagIcon />
            </Link>
            <div className="my-auto inline md:hidden">
              <HamburgerDisabledIcon toggleNavPage={toggleNavPage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
