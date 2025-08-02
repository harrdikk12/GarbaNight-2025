import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

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
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
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
          <div className="inline-block px-6 py-3 rounded-full border-2 border-yellow-500 bg-gradient-to-r from-yellow-500/10 to-red-500/10 backdrop-blur-sm shadow-lg glow-effect">
            <p className="text-yellow-500 text-lg font-semibold">Presented by Zala Events - Ahmedabad</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          {/* Main Title - Raatladi */}
          <div className="text-7xl md:text-9xl font-black mb-6 leading-none">
            <div className="text-white glow-effect">
              {['R', 'a', 'a', 't', 'l', 'a', 'd', 'i'].map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block letter-float"
                  animate={{
                    y: [0, -25, 0],
                    color: ['#ffffff', '#fbbf24', '#ffffff'],
                    textShadow: [
                      '0 0 10px rgba(239, 68, 68, 0.8)',
                      '0 0 20px rgba(251, 191, 36, 1)',
                      '0 0 10px rgba(239, 68, 68, 0.8)'
                    ]
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    ease: "easeInOut"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Subtitle - Laal Ishq 2025 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-4xl md:text-6xl mb-4"
          >
            <span className="text-red-500 font-serif italic font-bold glow-effect">Laal Ishq</span>
            <span className="text-yellow-500 ml-4 font-bold">2025</span>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-4">begins here.</p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Experience the Unforgettable! Dive into the heart of Gujarat's most vibrant Garba celebration with the profound, passionate love for our traditions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => window.open('https://www.district.in/events/raatladi-laal-ishq25-ahmedabad-buy-tickets?utm_source=partner&utm_medium=social&af_xp=custom&deep_link_sub1=edition%3A%2F%2Fwebview%3Furl%3Dhttps%3A%2F%2Fdistrict.insider.in%2Fraatladi-laal-ishq25-ahmedabad%2Fevent%3Futm_source%3Dpartner%26utm_medium%3Dsocial&fbclid=PAZXh0bgNhZW0CMTEAAaeryi_8pOLRfSdfkd9DWr5-KAmC6942k22gnGak84Yl84q7T-rJubsR38pxtQ_aem_gqqHHBdcB2DEOvpN5oXJUg&source_caller=ui&pid=Partner&is_retargeting=true&af_click_lookback=7d&shortlink=RaatladiLaalIshqPartnerSocial&deep_link_value=edition%3A%2F%2Fwebview%3Furl%3Dhttps%3A%2F%2Fdistrict.insider.in%2Fraatladi-laal-ishq25-ahmedabad%2Fevent%3Futm_source%3Dpartner%26utm_medium%3Dsocial&af_reengagement_window=7d&c=d-app_both_partner_d-events_others_na_na_na_na_na_na_RaatladiLaalishqPartnerSocial_na_na_na_na_Raatladi_PartnerSocial_Ahmedabad_20250630', '_blank')}
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:bg-white hover:from-white hover:to-white hover:text-red-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-2xl glow-effect border-2 border-red-500 hover:border-red-600"
              >
                BOOK YOUR PASS NOW!
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/gallery">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:bg-white hover:from-white hover:to-white hover:text-red-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-2xl glow-effect border-2 border-red-500 hover:border-red-600"
                >
                  WATCH TRAILER
                </Button>
              </Link>
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