import HeroSection from "./components/home-page/HeroSection";
import CardCarousel from "./components/home-page/CardCarousel";

export default function Home() {
  return (
    <div className="bg-page-bg">
      <HeroSection />
      <CardCarousel />
    </div>
  );
}
