"use client";
import AppleCarousel from "./components/AppleCarousel";
import HomeSections from "./components/homeSections";

export default function HomePage() {
  return (
    <main className="home-page max-w-full">
      <HomeSections />
      <AppleCarousel />
    </main>
  );
}
