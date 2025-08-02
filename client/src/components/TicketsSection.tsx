import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function TicketsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const openBookingPage = () => {
    // This would typically open the actual booking platform
    alert('Redirecting to ticket booking platform...');
  };

  return (
    <section id="tickets" className="py-24 bg-gradient-to-b from-black via-red-900/20 to-black relative">
      <div className="absolute inset-0 z-0">
        <div 
          className="parallax-bg opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="glass-card rounded-3xl p-12 text-center">
          <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="text-red-500 glow-effect">Book Your</span><br />
            <span className="text-red-500 glow-effect">Laal Ishq</span> <span className="text-red-500 glow-effect">Experience</span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card rounded-3xl p-12 mb-8 group"
        >
          <div className="mb-8 text-center">
            <motion.h3 
              className="text-4xl font-bold text-yellow-500 mb-4"
              whileHover={{ scale: 1.1 }}
            >
              Starting from ₹999
            </motion.h3>
            <p className="text-gray-300 mb-6 text-lg">Limited passes available - Book now to secure your spot!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card rounded-2xl p-6 text-left"
            >
              <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                <span className="mr-2">📅</span> Event Details:
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center"><span className="mr-3">📅</span> Navratri 2025 (September - October)</li>
                <li className="flex items-center"><span className="mr-3">⏰</span> 8:00 PM onwards, nightly</li>
                <li className="flex items-center"><span className="mr-3">📍</span> Mahendra Farm, Ahmedabad</li>
                <li className="flex items-center"><span className="mr-3">👨‍👩‍👧‍👦</span> All ages welcome</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass-card rounded-2xl p-6 text-left"
            >
              <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                <span className="mr-2">✨</span> Includes:
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center"><span className="mr-3">✅</span> Traditional Gujarati delicacies</li>
                <li className="flex items-center"><span className="mr-3">✅</span> Professional photography</li>
                <li className="flex items-center"><span className="mr-3">✅</span> Premium decorations</li>
                <li className="flex items-center"><span className="mr-3">✅</span> Full security coverage</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={openBookingPage}
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all shadow-2xl glow-effect"
              >
                BOOK YOUR PASS NOW! 🎫
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="glass-card border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-12 py-4 rounded-full text-xl font-semibold transition-all"
              >
                Watch Highlights 📺
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-sm text-gray-500"
        >
          Book exclusively from: "Raatladi - The Mandli Garba - Laal Ishq'25 | Ahmedabad"
        </motion.p>
        </div>
      </div>
    </section>
  );
}