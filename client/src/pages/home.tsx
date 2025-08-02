import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import VenueSection from "@/components/VenueSection";
import HighlightsSection from "@/components/HighlightsSection";
import GalleryPreview from "@/components/GalleryPreview";
import Footer from "@/components/Footer";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    const handleClick = () => {
      setShowLoading(false);
    };

    document.addEventListener('click', handleClick);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {showLoading && <LoadingScreen />}
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <VenueSection />
      <HighlightsSection />
      <GalleryPreview />
      <Footer />
    </div>
  );
}
