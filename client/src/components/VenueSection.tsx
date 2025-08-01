import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function VenueSection() {
  const { ref, isVisible } = useScrollAnimation();

  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/MAHENDRA+FARM+Ahmedabad', '_blank');
  };

  return (
    <section id="venue" className="py-24 relative">
      <div className="absolute inset-0 z-0">
        <div 
          className="parallax-bg h-full opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-900/70 to-black/80" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-black mb-8">
            A <em>better</em> y<span className="text-yellow-500">o</span>u<br />
            starts here
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Gujarat's best kept secret. Feel supercharged with our traditional blend of cultural experiences.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-black/60 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto mb-8"
        >
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">MAHENDRA FARM</h3>
          <p className="text-gray-300 mb-4">
            Explore the spacious and beautifully adorned grounds of Mahendra Farm, transformed into a dazzling haven for Garba enthusiasts right here in Ahmedabad.
          </p>
          <p className="text-sm text-gray-400">Search "MAHENDRA FARM" on Google Maps for exact location</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button
            onClick={openGoogleMaps}
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all transform hover:scale-105"
          >
            Get Directions
          </Button>
        </motion.div>
      </div>
    </section>
  );
}