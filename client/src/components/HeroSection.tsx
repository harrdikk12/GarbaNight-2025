import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToTickets = () => {
    const element = document.getElementById('tickets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const letterVariants = {
    hover: { y: -5, color: "#F59E0B", transition: { duration: 0.3 } }
  };

  const LetterFloat = ({ children }: { children: string }) => (
    <motion.span
      className="inline-block cursor-pointer"
      variants={letterVariants}
      whileHover="hover"
    >
      {children}
    </motion.span>
  );

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-red-900/60 to-black/80" />
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <p className="text-yellow-500 text-lg mb-2 floating-animation">Experience the Unforgettable</p>
          <p className="text-4xl md:text-6xl font-light mb-4 glow-effect">Raatladi - Laal Ishq 2025</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-8xl md:text-9xl font-black mb-8 leading-none"
        >
          <div className="laal-gradient">
            <LetterFloat>L</LetterFloat>
            <LetterFloat>a</LetterFloat>
            <LetterFloat>a</LetterFloat>
            <LetterFloat>l</LetterFloat>
          </div>
          <br />
          <div className="text-white">
            <LetterFloat>I</LetterFloat>
            <LetterFloat>s</LetterFloat>
            <LetterFloat>h</LetterFloat>
            <LetterFloat>q</LetterFloat>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-4">begins here.</p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Presented by Zala Events - Ahmedabad, dive into the heart of Gujarat's most vibrant Garba celebration!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToTickets}
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-2xl glow-effect"
              >
                BOOK YOUR PASS NOW!
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="glass-card border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-10 py-4 rounded-full text-lg font-semibold transition-all"
              >
                WATCH TRAILER
              </Button>
            </motion.div>
          </div>
          
          <motion.p
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-500"
          >
            scroll to begin
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}