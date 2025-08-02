import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const benefits = [
  {
    icon: "⚡",
    title: "Energy & Joy",
    color: "text-yellow-500",
    points: [
      "Rich in cultural rhythms and beats that increase energy levels.",
      "Traditional music properties reduce stress and fatigue."
    ]
  },
  {
    icon: "🕺",
    title: "Cultural Connection",
    color: "text-yellow-500",
    points: [
      "Deep-rooted traditional dance forms that connect you to heritage.",
      "Boosts cultural understanding and community bonding."
    ]
  },
  {
    icon: "👥",
    title: "Social Experience",
    color: "text-yellow-500",
    points: [
      "High-energy group activities that impact social health.",
      "Increases social function, networking and community spirit."
    ]
  },
  {
    icon: "📸",
    title: "Memorable Moments",
    color: "text-yellow-500",
    points: [
      "Professional photography, premium decorations, and unforgettable experiences.",
      "Creates lasting memories with friends and family."
    ]
  }
];

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            The <em>real</em><br />
            <span className="laal-gradient">limitless</span> experience.
          </h2>
          <p className="text-xl text-gray-400">discover the magic</p>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        >
          Attending Raatladi® has a number of cultural benefits, continue on the journey to find out more.
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="glass-card rounded-2xl p-8 text-center group"
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-2xl">{benefit.icon}</span>
              </motion.div>
              <h3 className={`text-xl font-bold mb-4 ${benefit.color} group-hover:text-white transition-colors`}>{benefit.title}</h3>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 space-y-3 transition-colors">
                {benefit.points.map((point, pointIndex) => (
                  <p key={pointIndex} className="leading-relaxed">
                    <strong className="text-red-400">0{pointIndex + 1}</strong> {point}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="section-separator mt-16"></div>
      </div>
    </section>
  );
}