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
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Book Your<br />
            <span className="laal-gradient">Laal Ishq</span> Experience
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-black/80 backdrop-blur-md rounded-3xl p-12 mb-8"
        >
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-yellow-500 mb-4">Starting from ₹999</h3>
            <p className="text-gray-400 mb-6">Limited passes available - Book now to secure your spot!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-left"
            >
              <h4 className="text-xl font-bold text-red-500 mb-3">Event Details:</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📅 Navratri 2025 (September - October)</li>
                <li>⏰ 8:00 PM onwards, nightly</li>
                <li>📍 Mahendra Farm, Ahmedabad</li>
                <li>👨‍👩‍👧‍👦 All ages welcome</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-left"
            >
              <h4 className="text-xl font-bold text-red-500 mb-3">Includes:</h4>
              <ul className="space-y-2 text-gray-400">
                <li>✅ Traditional Gujarati delicacies</li>
                <li>✅ Professional photography</li>
                <li>✅ Premium decorations</li>
                <li>✅ Full security coverage</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={openBookingPage}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all transform hover:scale-105"
            >
              BOOK YOUR PASS NOW!
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-12 py-4 rounded-full text-xl font-semibold transition-all"
            >
              Watch Highlights
            </Button>
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
    </section>
  );
}
