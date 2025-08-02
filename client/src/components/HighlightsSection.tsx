import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const highlights = [
  {
    icon: "🎵",
    title: "The Soul of Mandli Garba",
    description: "Experience authentic, traditional Garba with live, powerhouse Mandli artists whose beats will compel you to dance all night long."
  },
  {
    icon: "❤️",
    title: '"Laal Ishq" Ambiance',
    description: "Immerse yourself in the rich hues of \"Laal Ishq\" with stunning red-themed decor, creating a visually captivating atmosphere."
  },
  {
    icon: "🎶",
    title: "Unforgettable Music",
    description: "Dance to timeless hits and electrifying new renditions by renowned artists, featuring celebrated performers."
  },
  {
    icon: "👥",
    title: "Premium Crowd & Experience",
    description: "Known for sophisticated and energetic crowds, ensuring a joyous and memorable Garba celebration for all."
  },
  {
    icon: "🌙",
    title: "All-Night Celebration",
    description: "From dhol beats to shehnai melodies, keep twirling till morning with continuous, vibrant music and dancing."
  },
  {
    icon: "📸",
    title: "Photo Booths & Installations",
    description: "Capture unforgettable moments with specially designed photo opportunities and unique installations."
  }
];

const qualityBadges = [
  { icon: "✓", title: "All Ages Welcome" },
  { icon: "🏛️", title: "Traditional Venue" },
  { icon: "🎵", title: "Live Music" },
  { icon: "🍽️", title: "Traditional Food" },
  { icon: "🛡️", title: "Full Security" },
  { icon: "📍", title: "Ahmedabad" }
];

export default function HighlightsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      {/* Highlights */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16"
          >
            What to Expect at <span className="laal-gradient">Raatladi - Laal Ishq 2025</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-card rounded-2xl p-8 group"
              >
                <motion.h3 
                  className="text-xl font-bold text-red-500 mb-4 group-hover:text-red-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-2xl mr-3">{highlight.icon}</span>
                  {highlight.title}
                </motion.h3>
                <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Badges */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">the miracle of tradition</h2>
            <p className="text-xl">100% <strong>authentic</strong> and <strong>traditional</strong> <span className="text-red-500">cultural experience.</span></p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {qualityBadges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card text-center p-6 rounded-xl group"
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-sm font-bold">{badge.icon}</span>
                </motion.div>
                <p className="text-sm font-medium group-hover:text-white transition-colors">{badge.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}