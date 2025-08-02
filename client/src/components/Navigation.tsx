import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-red-700/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold text-red-500 glow-effect cursor-pointer font-serif"
            onClick={() => scrollToSection('hero')}
          >
            Raatladi
          </motion.div>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              <Link href="/">
                <button className="hover:text-yellow-500 transition-colors duration-300 text-lg font-medium">
                  Home
                </button>
              </Link>
              <Link href="/gallery">
                <button className="hover:text-yellow-500 transition-colors duration-300 text-lg font-medium">
                  Gallery
                </button>
              </Link>
            </div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/booking">
                <Button 
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg glow-effect"
                >
                  Book Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}