import { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Upload, Play, Image, Video, Plus, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import Navigation from '@/components/Navigation';
import { Link } from 'wouter';

interface GalleryItem {
  id: string;
  title: string;
  url: string;
  type: 'image' | 'video';
  isHomepage: boolean;
  createdAt: string;
}

export default function Gallery() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [newItem, setNewItem] = useState({
    title: '',
    url: '',
    type: 'image' as 'image' | 'video',
    isHomepage: false
  });
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();

  const { data: galleryItems = [], isLoading } = useQuery<GalleryItem[]>({
    queryKey: ['/api/gallery'],
  });

  const addItemMutation = useMutation({
    mutationFn: async (item: Omit<GalleryItem, 'id' | 'createdAt'>) => {
      return await apiRequest('/api/gallery', 'POST', item);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/gallery'] });
      setNewItem({ title: '', url: '', type: 'image', isHomepage: false });
      toast({
        title: "Success",
        description: "Item added to gallery successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to add item to gallery",
        variant: "destructive",
      });
    }
  });

  const deleteItemMutation = useMutation({
    mutationFn: async (id: string) => {
      return await apiRequest(`/api/gallery/${id}`, 'DELETE');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/gallery'] });
      toast({
        title: "Success",
        description: "Item deleted successfully!",
      });
    }
  });

  const handleAdminLogin = () => {
    if (adminPassword === 'Hrdk@1212') {
      setIsAdmin(true);
      setShowAdminLogin(false);
      toast({
        title: "Admin Access Granted",
        description: "You can now add and manage gallery items",
      });
    } else {
      toast({
        title: "Invalid Password",
        description: "Please enter the correct admin password",
        variant: "destructive",
      });
    }
  };

  const handleAddItem = () => {
    if (!newItem.title || !newItem.url) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    addItemMutation.mutate(newItem);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <section className="pt-24 md:pt-32 pb-12 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Link href="/">
              <Button className="bg-gray-800/50 hover:bg-gray-700/50 text-white border border-red-500/30 hover:border-red-500/50 transition-all">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 md:mb-8">
              <span className="text-red-500 glow-effect">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
              Relive the magical moments from our Garba celebrations. Experience the joy, tradition, and vibrant energy of Raatladi - Laal Ishq 2025.
            </p>
          </motion.div>

          {/* Admin Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            {!isAdmin ? (
              <div className="text-center">
                <Dialog open={showAdminLogin} onOpenChange={setShowAdminLogin}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white">
                      <Plus className="mr-2 h-4 w-4" />
                      Admin Access
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="glass-card border border-red-500/20">
                    <DialogHeader>
                      <DialogTitle className="text-red-500 glow-effect">Admin Login</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="password">Admin Password</Label>
                        <Input
                          id="password"
                          type="password"
                          value={adminPassword}
                          onChange={(e) => setAdminPassword(e.target.value)}
                          className="bg-gray-800/50 border-red-500/30 text-white"
                          placeholder="Enter admin password"
                        />
                      </div>
                      <Button onClick={handleAdminLogin} className="w-full bg-red-600 hover:bg-red-700">
                        Login
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ) : (
              <div className="glass-card rounded-2xl p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-red-500 mb-4 flex items-center">
                  <Plus className="mr-2 h-5 w-5" />
                  Add New Item
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={newItem.title}
                      onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                      className="bg-gray-800/50 border-red-500/30 text-white"
                      placeholder="Enter title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="url">URL</Label>
                    <Input
                      id="url"
                      value={newItem.url}
                      onChange={(e) => setNewItem({...newItem, url: e.target.value})}
                      className="bg-gray-800/50 border-red-500/30 text-white"
                      placeholder="Enter image/video URL"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="type">Type</Label>
                    <Select value={newItem.type} onValueChange={(value: 'image' | 'video') => setNewItem({...newItem, type: value})}>
                      <SelectTrigger className="bg-gray-800/50 border-red-500/30 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="image">Image</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2 pt-6">
                    <input
                      type="checkbox"
                      id="homepage"
                      checked={newItem.isHomepage}
                      onChange={(e) => setNewItem({...newItem, isHomepage: e.target.checked})}
                      className="rounded"
                    />
                    <Label htmlFor="homepage">Show on Homepage</Label>
                  </div>
                </div>
                <Button 
                  onClick={handleAddItem} 
                  disabled={addItemMutation.isPending}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  {addItemMutation.isPending ? 'Adding...' : 'Add Item'}
                </Button>
              </div>
            )}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
                <p className="text-gray-400 mt-4">Loading gallery...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {galleryItems.map((item: GalleryItem, index: number) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="group relative will-change-auto"
                  >
                    {/* Mobile: Simple layout without glass card for videos */}
                    <div className="md:hidden">
                      {isAdmin && (
                        <button
                          onClick={() => deleteItemMutation.mutate(item.id)}
                          className="absolute top-2 right-2 z-10 p-2 bg-red-600 hover:bg-red-700 rounded-full transform-gpu"
                        >
                          <X className="h-4 w-4 text-white" />
                        </button>
                      )}
                      
                      <div className="aspect-video relative overflow-hidden rounded-xl">
                        {item.type === 'image' ? (
                          <img
                            src={item.url}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <video
                            src={item.url}
                            className="w-full h-full object-cover rounded-xl"
                            controls
                            playsInline
                            muted
                          />
                        )}
                      </div>
                      
                      <div className="mt-3">
                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <span className="flex items-center">
                            {item.type === 'image' ? <Image className="h-4 w-4 mr-1" /> : <Video className="h-4 w-4 mr-1" />}
                            {item.type}
                          </span>
                          {item.isHomepage && (
                            <span className="px-2 py-1 bg-red-600 text-white rounded-full text-xs">Homepage</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Desktop: Full glass card layout */}
                    <div className="hidden md:block glass-card rounded-2xl overflow-hidden transform-gpu will-change-auto">
                      {isAdmin && (
                        <button
                          onClick={() => deleteItemMutation.mutate(item.id)}
                          className="absolute top-2 right-2 z-10 p-2 bg-red-600 hover:bg-red-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform-gpu"
                        >
                          <X className="h-4 w-4 text-white" />
                        </button>
                      )}
                      
                      <div className="aspect-video relative overflow-hidden">
                        {item.type === 'image' ? (
                          <img
                            src={item.url}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 transform-gpu will-change-transform"
                            loading="lazy"
                          />
                        ) : (
                          <div className="relative w-full h-full bg-gray-800 flex items-center justify-center">
                            <video
                              src={item.url}
                              className="w-full h-full object-cover"
                              controls
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <Play className="h-12 w-12 text-red-500 opacity-80" />
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <span className="flex items-center">
                            {item.type === 'image' ? <Image className="h-4 w-4 mr-1" /> : <Video className="h-4 w-4 mr-1" />}
                            {item.type}
                          </span>
                          {item.isHomepage && (
                            <span className="px-2 py-1 bg-red-600 text-white rounded-full text-xs">Homepage</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}