"use client";
// import Image from "next/image";
import { appleIcons } from "./image";
import useDeviceSize from "./hooks/useDeviceSize";

export default function HomePage() {
  const [width, height] = useDeviceSize();
  const isMobile = width <= 767;

  const [AppleIcon, SearchIcon, ShoppingBagIcon, LargeAppleIcon] = appleIcons;

  const backgroundStyles = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <main className="home-page max-w-[100vw]">
      <section
        className="h-[90vh] w-[100vw] relative"
        style={{
          ...backgroundStyles,
          backgroundImage: `url(https://www.apple.com/v/home/bb/images/heroes/apple-vision-pro/hero_apple_vision_pro__e8407ehady6i_largetall_2x.jpg)`,
        }}
      >
        <div className="absolute text-center m-auto left-0 right-0 bottom-10 space-y-3 px-3">
          <div className="flex mx-auto items-center justify-center">
            <LargeAppleIcon />
            <h2 className="text-4xl md:text-6xl font-bold opacity-90 inline">
              Vision Pro
            </h2>
          </div>
          <p className="text-base md:text-2xl opacity-90">
            Welcome to the era of spatial computing.
          </p>
          <p className="text-gray-500 text-sm md:text-xl">
            Available early next year in the U.S
          </p>
          <p className="text-blue-800 text-sm md:text-xl">Learn More &gt;</p>
        </div>
      </section>

      <section
        className="h-[90vh] w-[100vw]"
        style={{
          ...backgroundStyles,
          backgroundImage: `url(https://www.apple.com/v/home/bb/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm${
            isMobile ? "_small_2x.jpg" : "_largetall_2x.jpg"
          })`,
        }}
      ></section>

      <section
        className="h-[90vh] w-[100vw]"
        style={{
          ...backgroundStyles,
          backgroundImage: `url(https://www.apple.com/v/home/bb/images/heroes/macbook-air-15/hero_macbook_air_15_announce__fz5mtxnl9l6q${
            isMobile ? "_small_2x.jpg" : "_largetall_2x.jpg"
          })`,
        }}
      ></section>

      <section
        className="h-[90vh] w-[100vw] "
        style={{
          ...backgroundStyles,
          backgroundImage: `url(https://www.apple.com/v/home/bb/images/promos/mac-studio/promo_mac_studio_announce__do7xnc8z5mgm${
            isMobile ? "_small_2x.jpg" : "_largetall_2x.jpg"
          })`,
        }}
      ></section>

      <section
        className="h-[90vh] w-[100vw] "
        style={{
          ...backgroundStyles,
          backgroundImage: `url(https://www.apple.com/v/home/bb/images/promos/mac-pro/promo_mac_pro_announce__dd118zq1ap6q${
            isMobile ? "_small_2x.jpg" : "_largetall_2x.jpg"
          })`,
        }}
      ></section>

      <section
        className="h-[90vh] w-[100vw]"
        style={{
          ...backgroundStyles,
          backgroundImage: `url(https://www.apple.com/v/home/bb/images/promos/iphone-tradein/iphone_tradein_promo__d5au3rkw5kuq${
            isMobile ? "_small_2x.jpg" : "_largetall_2x.jpg"
          })`,
        }}
      ></section>

      <section
        className="h-[90vh] w-[100vw]"
        style={{
          ...backgroundStyles,
          backgroundImage: `url(https://www.apple.com/v/home/bb/images/promos/apple-watch-series-8/promo_apple_watch_series_8_spring__d9hfvufh7hyu${
            isMobile ? "_small_2x.jpg" : "_largetall_2x.jpg"
          })`,
        }}
      ></section>

      <section
        className="h-[90vh] w-[100vw]"
        style={{
          ...backgroundStyles,
          backgroundImage: `url(https://www.apple.com/v/home/bb/images/promos/apple-design-awards-2023/design_awards_promo__gdn0njc261yu${
            isMobile ? "_small_2x.jpg" : "_largetall_2x.jpg"
          })`,
        }}
      ></section>

      <section
        className="h-[90vh] w-[100vw]"
        style={{
          ...backgroundStyles,
          backgroundImage: `url(https://www.apple.com/v/home/bb/images/promos/apple-card/tile__cauwwcyyn9hy${
            isMobile ? "_small_2x.jpg" : "_largetall_2x.jpg"
          })`,
        }}
      ></section>
    </main>
  );
}
