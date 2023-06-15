import Image from "next/legacy/image";
import { Carousel } from "react-responsive-carousel";
import { carouselImages } from "../image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function AppleCarousel() {
  const [
    carouselOne,
    carouselTwo,
    carouselThree,
    carouselFour,
    carouselFive,
    carouselSix,
    carouselSeven,
    carouselEight,
  ] = carouselImages;
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showArrows={false}
        showThumbs={false}
        interval={3000}
        className="h-auto m-0 b-0 p-0 bg-black"
      >
        <Image loading="lazy" src={carouselOne} alt="" objectFit={true} />
        <Image loading="lazy" src={carouselTwo} alt="" objectFit={true} />
        <Image loading="lazy" src={carouselThree} alt="" objectFit={true} />
      </Carousel>
    </>
  );
}
