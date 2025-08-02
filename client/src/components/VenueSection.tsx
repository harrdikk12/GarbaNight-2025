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
            <span className="text-red-500 glow-effect">A</span> <span className="text-red-500 glow-effect"><em>better</em></span> <span className="text-red-500 glow-effect">you</span><br />
            <span className="text-red-500 glow-effect">starts here</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Gujarat's best kept secret. Feel supercharged with our traditional blend of cultural experiences.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card rounded-3xl p-10 max-w-3xl mx-auto mb-8 group"
        >
          <motion.h3 
            className="text-3xl font-bold text-yellow-500 mb-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            MAHENDRA FARM
          </motion.h3>
          <p className="text-gray-200 mb-6 text-lg leading-relaxed text-center">
            Explore the spacious and beautifully adorned grounds of Mahendra Farm, transformed into a dazzling haven for Garba enthusiasts right here in Ahmedabad.
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span className="text-red-400">📍</span>
            <p className="text-sm">Search "MAHENDRA FARM" on Google Maps for exact location</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={openGoogleMaps}
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all shadow-2xl glow-effect"
            >
              Get Directions 📍
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}