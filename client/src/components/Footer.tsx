import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold laal-gradient mb-4">Raatladi</h2>
          <p className="text-gray-400 text-lg">Presented by Zala Events - Ahmedabad</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-yellow-500 mb-4">Connect with us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <span className="text-sm">@</span>
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <span className="text-sm">in</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-yellow-500 mb-4">Event Info</h3>
            <p className="text-gray-400">Mahendra Farm, Ahmedabad</p>
            <p className="text-gray-400">8:00 PM onwards</p>
            <p className="text-gray-400">All ages welcome</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-yellow-500 mb-4">Hashtags</h3>
            <div className="text-sm text-gray-400 space-y-1">
              <p>#RaatladiLaalIshq2025</p>
              <p>#MandliGarba #AhmedabadGarba</p>
              <p>#Navratri2025 #LaalIshq</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"
        >
          <p>&copy; 2025 Raatladi - Laal Ishq. Presented by Zala Events - Ahmedabad. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
