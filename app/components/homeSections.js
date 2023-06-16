import { appleIcons } from "../image";
import useDeviceSize from "../hooks/useDeviceSize";

export default function HomeSection() {
  const [width, height] = useDeviceSize();
  const isMobile = width <= 767;

  const [
    AppleIcon,
    SearchIcon,
    ShoppingBagIcon,
    LargeAppleIcon,
    HamburgerDisabledIcon,
    HamburgerEnabledIcon,
  ] = appleIcons;

  const backgroundStyles = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <section
        className="h-[90vh] w-full relative"
        style={{
          ...backgroundStyles,
          backgroundImage: `url(https://www.apple.com/v/home/bb/images/heroes/apple-vision-pro/hero_apple_vision_pro__e8407ehady6i_largetall_2x.jpg)`,
        }}
      >
        <div className="absolute text-center m-auto left-0 right-0 bottom-10 space-y-3 px-3">
          <div className="flex mx-auto items-center justify-center">
            <LargeAppleIcon fill="black" />
            <h2 className="text-4xl md:text-6xl font-bold opacity-90 inline">
              Vision Pro
            </h2>
          </div>
          <p className="text-lg md:text-2xl opacity-90">
            Welcome to the era of spatial computing.
          </p>
          <p className="text-gray-500 text-base md:text-xl">
            Available early next year in the U.S
          </p>
          <p className="text-blue-800 text-base md:text-xl link">
            Learn More &gt;
          </p>
        </div>
      </section>

      <section
        className="h-[83vh] md:h-[90vh] w-full relative"
        style={{
          ...backgroundStyles,
          backgroundImage: `url(https://www.apple.com/v/home/bb/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm${
            isMobile ? "_small_2x.jpg" : "_largetall_2x.jpg"
          })`,
        }}
      >
        <div className="absolute text-center m-auto left-0 right-0 top-10 space-y-4 px-3">
          <div className="flex mx-auto items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-bold opacity-90 inline text-white">
              iPhone 14 Pro
            </h2>
          </div>
          <p className="text-lg md:text-2xl opacity-90 text-white">
            Pro. Beyond.
          </p>
          <p className="text-blue-600 text-base md:text-xl">
            <span className="link">Learn More &gt;</span>
            <span className="pl-4 link"> Buy &gt;</span>
          </p>
        </div>
      </section>

      <section
        className="h-[83vh] md:h-[90vh] w-full relative"
        style={{
          ...backgroundStyles,
          backgroundImage: `url(https://www.apple.com/v/home/bb/images/heroes/macbook-air-15/hero_macbook_air_15_announce__fz5mtxnl9l6q${
            isMobile ? "_small_2x.jpg" : "_largetall_2x.jpg"
          })`,
        }}
      >
        <div className="absolute text-center m-auto left-0 right-0 top-10 space-y-4 px-3">
          <div className="flex mx-auto items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-bold opacity-90 inline">
              MacBook Air 15”
            </h2>
          </div>
          <p className="text-lg md:text-2xl opacity-90">
            Impressively big. Impossibly thin.
          </p>
          <p className="text-blue-600 text-base md:text-xl">
            <span className="link">Learn More &gt;</span>
            <span className="pl-4 link"> Buy &gt;</span>
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
        <section
          className="h-[83vh] md:h-[90vh] relative"
          style={{
            ...backgroundStyles,
            backgroundImage: `url(https://www.apple.com/v/home/bb/images/promos/mac-studio/promo_mac_studio_announce__do7xnc8z5mgm_small_2x.jpg
          )`,
          }}
        >
          <div className="absolute text-center m-auto left-0 right-0 top-10 space-y-4 px-3">
            <div className="flex mx-auto items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-bold opacity-90 inline">
                MacBook Studio
              </h2>
            </div>
            <p className="text-lg md:text-xl opacity-90">
              Supercharged by M2 Max and M2 Ultra.
            </p>
            <p className="text-blue-600 text-base md:text-xl">
              <span className="link">Learn More &gt;</span>
              <span className="pl-4 link"> Buy &gt;</span>
            </p>
          </div>
        </section>

        <section
          className="h-[83vh] md:h-[90vh] relative"
          style={{
            ...backgroundStyles,
            backgroundImage: `url(https://www.apple.com/v/home/bb/images/promos/mac-pro/promo_mac_pro_announce__dd118zq1ap6q_small_2x.jpg
          )`,
          }}
        >
          <div className="absolute text-center m-auto left-0 right-0 top-10 space-y-4 px-3">
            <div className="flex mx-auto items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-bold opacity-90 inline">
                Mac Pro
              </h2>
            </div>
            <p className="text-lg md:text-xl opacity-90">
              Transformed by Apple silicon.
            </p>
            <p className="text-blue-600 text-base md:text-xl">
              <span className="link">Learn More &gt;</span>
              <span className="pl-4 link"> Buy &gt;</span>
            </p>
          </div>
        </section>

        <section
          className="h-[83vh] md:h-[90vh] relative"
          style={{
            ...backgroundStyles,
            backgroundImage: `url(https://www.apple.com/v/home/bb/images/promos/iphone-tradein/iphone_tradein_promo__d5au3rkw5kuq_small_2x.jpg
          )`,
          }}
        >
          <div className="absolute text-center m-auto left-0 right-0 top-10 space-y-4 px-3">
            <div className="flex mx-auto items-center justify-center">
              <LargeAppleIcon fill="black" />
              <h2 className="text-4xl md:text-5xl font-bold opacity-90 inline">
                Trade In
              </h2>
            </div>
            <p className="text-lg md:text-xl opacity-90">
              Upgrade and save. Its that easy
            </p>
            <p className="text-blue-600 text-base md:text-xl">
              <span className="link">See what your device is worth &gt; </span>
            </p>
          </div>
        </section>

        <section
          className="h-[83vh] md:h-[90vh] relative"
          style={{
            ...backgroundStyles,
            backgroundImage: `url(https://www.apple.com/v/home/bb/images/promos/apple-watch-series-8/promo_apple_watch_series_8_spring__d9hfvufh7hyu_small_2x.jpg
          )`,
          }}
        >
          <div className="absolute text-center m-auto left-0 right-0 top-10 space-y-4 px-3 text-white">
            <div className="">
              <div className="flex mx-auto items-center justify-center">
                <LargeAppleIcon fill="white" />
                <h2 className="text-4xl md:text-5xl font-bold opacity-90 inline pb-2">
                  WATCH
                </h2>
              </div>
              <p className="text-base md:text-base opacity-90 text-red-600">
                SERIES 8
              </p>
            </div>

            <p className="text-lg md:text-xl opacity-90">
              A healthy leap ahead.
            </p>
            <p className="text-blue-600 text-base md:text-xl">
              <span className="link">Learn More &gt;</span>
              <span className="pl-4 link"> Buy &gt;</span>
            </p>
          </div>
        </section>

        <section
          className="h-[83vh] md:h-[90vh] relative"
          style={{
            ...backgroundStyles,
            backgroundImage: `url(https://www.apple.com/v/home/bb/images/promos/racial-equity-justice-initiative/promo__sw58lbodkmqq_small_2x.jpg
          )`,
          }}
        >
          <div className="absolute text-center m-auto left-0 right-0 bottom-10 space-y-4 px-3 text-white">
            <div className="flex mx-auto items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-bold opacity-90 inline px-10 md:px-20">
                Racial Equality and Justice Initiative
              </h2>
            </div>
            <p className="text-lg md:text-xl opacity-90 px-10 md:px-20">
              We&apos;re advancing equity by expanding opportunities around the
              world
            </p>
            <p className="text-blue-600 text-base md:text-xl">
              <span>Learn More &gt;</span>
            </p>
          </div>
        </section>

        <section
          className="h-[83vh] md:h-[90vh] relative"
          style={{
            ...backgroundStyles,
            backgroundImage: `url(https://www.apple.com/v/home/bb/images/promos/apple-card/tile__cauwwcyyn9hy_small_2x.jpg
          )`,
          }}
        >
          <div className="absolute text-center m-auto left-0 right-0 top-10 space-y-4">
            <div className="flex mx-auto items-center justify-center">
              <LargeAppleIcon fill="black" />
              <h2 className="text-4xl md:text-5xl font-bold opacity-90 inline">
                Card
              </h2>
            </div>
            <p className="text-lg md:text-xl opacity-90 px-20">
              Get up to 3% Daily Cash back with every purchase
            </p>
            <p className="text-blue-600 text-base md:text-xl">
              <span className="link"> Learn More &gt; </span>
              <span className="pl-4 link"> Buy &gt;</span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
