import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Star, Phone, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import Navigation from '@/components/Navigation';

export default function Booking() {
  const { ref, isVisible } = useScrollAnimation();

  const handleBooking = () => {
    // Open Instagram link in new tab
    window.open('https://www.instagram.com/raatladi/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <section className="pt-24 md:pt-32 pb-12 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 md:mb-8">
              <span className="text-red-500 glow-effect">Book Your</span><br />
              <span className="text-white glow-effect">Laal Ishq</span> <span className="text-white glow-effect">Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
              Secure your spot at Gujarat's most vibrant Garba celebration. Experience the passion, tradition, and unforgettable moments of Raatladi - Laal Ishq 2025.
            </p>
          </motion.div>

          {/* Event Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-12 mb-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                <span className="text-red-500 glow-effect">Event Details</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-red-600 rounded-full">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Date</h3>
                    <p className="text-gray-400">Coming Soon - 2025</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-red-600 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Time</h3>
                    <p className="text-gray-400">Evening to Night</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-red-600 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Venue</h3>
                    <p className="text-gray-400">Ahmedabad, Gujarat</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-red-600 rounded-full">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Capacity</h3>
                    <p className="text-gray-400">Limited Seats Available</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-red-600 rounded-full">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Experience</h3>
                    <p className="text-gray-400">Traditional Garba & Cultural Events</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-red-600 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Organized By</h3>
                    <p className="text-gray-400">Zala Events - Ahmedabad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Action */}
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mb-6"
              >
                <Button
                  onClick={handleBooking}
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:bg-white hover:from-white hover:to-white hover:text-red-600 text-white px-12 py-6 rounded-full text-xl font-bold transition-all shadow-2xl glow-effect border-2 border-red-500 hover:border-red-600"
                >
                  <Instagram className="mr-3 h-6 w-6" />
                  BOOK NOW ON INSTAGRAM
                </Button>
              </motion.div>
              
              <p className="text-gray-400 text-sm">
                Follow us on Instagram for booking details and updates
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-card rounded-2xl p-6 md:p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-red-500 mb-4">Need More Information?</h3>
            <p className="text-gray-400 mb-4">
              Contact Zala Events - Ahmedabad for booking inquiries and event details
            </p>
            <div className="flex justify-center items-center space-x-6">
              <a 
                href="https://www.instagram.com/raatladi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>@raatladi</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}