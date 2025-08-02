import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Play, ArrowRight, Image, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface GalleryItem {
  id: string;
  title: string;
  url: string;
  type: 'image' | 'video';
  isHomepage: boolean;
  createdAt: string;
}

export default function GalleryPreview() {
  const { ref, isVisible } = useScrollAnimation();
  
  const { data: galleryItems = [] } = useQuery<GalleryItem[]>({
    queryKey: ['/api/gallery'],
  });

  // Filter items that should show on homepage and limit to 6
  const homepageItems = galleryItems
    .filter((item: GalleryItem) => item.isHomepage)
    .slice(0, 6);

  if (homepageItems.length === 0) return null;

  return (
    <section className="py-12 md:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4 md:mb-8">
              <span className="text-red-500 glow-effect">Memorable</span> <span className="text-red-500 glow-effect">Moments</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
              Relive the magic of our previous celebrations. Experience the joy, energy, and cultural richness that makes Raatladi unforgettable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {homepageItems.map((item: GalleryItem, index: number) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                {/* Mobile: Simple content without card wrapper for videos */}
                <div className="md:hidden">
                  <div className="aspect-video relative overflow-hidden rounded-xl">
                    {item.type === 'image' ? (
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={item.url}
                        className="w-full h-full object-cover rounded-xl"
                        muted
                        loop
                        controls
                        playsInline
                      />
                    )}
                    
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-1 bg-black/70 text-white rounded-full text-xs flex items-center">
                        {item.type === 'image' ? <Image className="h-3 w-3 mr-1" /> : <Video className="h-3 w-3 mr-1" />}
                        {item.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Desktop: Full card layout */}
                <div className="hidden md:block glass-card rounded-2xl overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    {item.type === 'image' ? (
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="relative w-full h-full bg-gray-800">
                        <video
                          src={item.url}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => e.currentTarget.pause()}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="h-12 w-12 text-red-500 opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-1 bg-black/70 text-white rounded-full text-xs flex items-center">
                        {item.type === 'image' ? <Image className="h-3 w-3 mr-1" /> : <Video className="h-3 w-3 mr-1" />}
                        {item.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <Link href="/gallery">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all shadow-2xl glow-effect"
              >
                View Full Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}