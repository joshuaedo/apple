"use client";
import { appleIcons } from "../image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NavPage({ toggleNavPage }) {
  const [
    AppleIcon,
    SearchIcon,
    ShoppingBagIcon,
    LargeAppleIcon,
    HamburgerDisabledIcon,
    HamburgerEnabledIcon,
  ] = appleIcons;
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white"
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      <div className="relative">
        <HamburgerEnabledIcon toggleNavPage={toggleNavPage} />
        <div className="text-black grid grid-cols-1 space-y-4 text-2xl font-bold pt-9 pl-5">
          <Link
            className="nav-link"
            href="https://www.apple.com/us/shop/goto/store"
          >
            Store
          </Link>
          <Link className="nav-link" href="https://apple.com/mac">
            Mac
          </Link>
          <Link className="nav-link" href="https://apple.com/ipad">
            iPad
          </Link>
          <Link className="nav-link" href="https://apple.com/iphone">
            iPhone
          </Link>
          <Link className="nav-link" href="https://apple.com/watch">
            Watch
          </Link>
          <Link
            className="nav-link"
            href="https://www.apple.com/apple-vision-pro/"
          >
            Vision
          </Link>
          <Link className="nav-link" href="https://apple.com/airpods">
            Airpods
          </Link>
          <Link className="nav-link" href="https://apple.com/tv-home">
            TV & Home
          </Link>
          <Link className="nav-link" href="https://apple.com/entertainment">
            Entertainment
          </Link>
          <Link
            className="nav-link"
            href="https://www.apple.com/us/shop/goto/buy_accessories"
          >
            Accessories
          </Link>
          <Link
            className="nav-link"
            href="https://support.apple.com/?cid=gn-ols-home-hp-tab"
          >
            Support
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
