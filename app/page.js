import Image from "next/image";
import { home__backgrounds } from "./image";

export default function HomePage() {
  const [
    hero,
    home__backgroundOne,
    home__backgroundTwo,
    home__backgroundThree,
    home__backgroundFour,
    home__backgroundFive,
    home__backgroundSix,
    home__backgroundSeven,
    home__backgroundEight,
  ] = home__backgrounds;

  const backgroundStyles = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <main className="home-page">
      <section
        className="h-screen relative"
        style={{
          ...backgroundStyles,
          backgroundImage: `url(https://www.apple.com/v/home/bb/images/heroes/apple-vision-pro/hero_apple_vision_pro__e8407ehady6i_largetall_2x.jpg)`,
        }}
      >
        <div className="absolute text-center m-auto left-0 right-0 bottom-10 space-y-3">
          <h2 className="text-6xl font-bold opacity-90">Vision Pro</h2>
          <p className="text-2xl opacity-90">
            Welcome to the era of spatial computing.
          </p>
          <p className="text-gray-500 text-xl">
            Available early next year in the U.S
          </p>
          <p className="text-blue-800 text-xl">Learn More &gt;</p>
        </div>
      </section>
      <section
        className="h-screen"
        style={{
          ...backgroundStyles,
          backgroundImage: `url(${home__backgroundOne.src})`,
        }}
      ></section>
    </main>
  );
}
