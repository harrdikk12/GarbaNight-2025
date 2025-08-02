import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertGalleryItemSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Gallery routes
  app.get('/api/gallery', async (req, res) => {
    try {
      const items = await storage.getAllGalleryItems();
      res.json(items);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
      res.status(500).json({ error: 'Failed to fetch gallery items' });
    }
  });

  app.post('/api/gallery', async (req, res) => {
    try {
      const validatedData = insertGalleryItemSchema.parse(req.body);
      const item = await storage.createGalleryItem(validatedData);
      res.json(item);
    } catch (error) {
      console.error('Error creating gallery item:', error);
      res.status(400).json({ error: 'Invalid gallery item data' });
    }
  });

  app.delete('/api/gallery/:id', async (req, res) => {
    try {
      await storage.deleteGalleryItem(req.params.id);
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting gallery item:', error);
      res.status(500).json({ error: 'Failed to delete gallery item' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
