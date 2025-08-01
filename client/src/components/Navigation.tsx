import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
            className="text-2xl font-bold laal-gradient cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Raatladi
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'About', id: 'about' },
              { name: 'Experience', id: 'experience' },
              { name: 'Venue', id: 'venue' },
              { name: 'Tickets', id: 'tickets' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
          
          <Button 
            onClick={() => scrollToSection('tickets')}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}