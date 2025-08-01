import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="laal-gradient">Mandli Garba</span> & <span className="text-yellow-500">Tradition</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The <em>only</em> authentic <strong>Garba celebration</strong> you will <em>ever</em> <strong>need.</strong>
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all transform hover:scale-105 mb-16"
          >
            Experience Now
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-8">Cultural Goodness</h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Raatladi® contains a blend of two powerful cultural experiences: Traditional Mandli Garba and Modern Celebration.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-left"
            >
              <h4 className="text-2xl font-bold text-yellow-500 mb-4">100% Authentic & Traditional</h4>
              <p className="text-gray-400 text-lg">All naturally sourced <strong>cultural ingredients</strong> from Gujarat.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-left"
            >
              <h4 className="text-2xl font-bold text-red-500 mb-4">Highest Quality Experience</h4>
              <p className="text-gray-400 text-lg">We value creating experiences from the highest-grade traditions that are pure and 100% authentic.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}