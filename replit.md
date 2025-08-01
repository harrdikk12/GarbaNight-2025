# Overview

This is a full-stack web application for "Raatladi - Laal Ishq 2025," a Garba celebration event website presented by Zala Events - Ahmedabad. The application features a modern, visually striking single-page application with smooth animations, scroll-based interactions, and a premium event landing page design. The website showcases traditional Gujarati Garba culture with contemporary web design, featuring sections for event information, venue details, ticket booking, and cultural highlights.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing with minimal bundle size
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a "Laal Ishq" (red love) color scheme
- **UI Components**: Radix UI primitives with shadcn/ui design system for consistent, accessible components
- **Animations**: Framer Motion for smooth scroll animations, page transitions, and interactive elements
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for the REST API server
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development**: tsx for TypeScript execution in development mode
- **Production**: esbuild for fast, optimized server-side bundling
- **Storage Interface**: Abstract storage pattern with in-memory implementation (ready for database integration)

## Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Current Schema**: Basic user management with username/password authentication
- **Migration Strategy**: Drizzle migrations with push commands for schema updates

## Component Structure
- **Layout**: Single-page application with section-based navigation
- **Sections**: Hero, About, Experience, Venue, Highlights, Tickets, and Footer
- **Interactions**: Smooth scrolling navigation, scroll-triggered animations, and responsive design
- **Loading Experience**: Custom loading screen with brand animation
- **Navigation**: Fixed header with smooth scroll-to-section functionality

## Development Workflow
- **Monorepo Structure**: Client, server, and shared code in a single repository
- **Path Aliases**: Configured TypeScript paths for clean imports (@/, @shared/)
- **Hot Reload**: Vite HMR for instant client-side updates during development
- **Type Checking**: Strict TypeScript configuration across all packages

# External Dependencies

## UI and Styling
- **Radix UI**: Complete set of accessible UI primitives (accordion, dialog, dropdown, toast, etc.)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Framer Motion**: Production-ready motion library for React animations
- **Lucide React**: Feather-inspired icon library

## Data and State Management
- **TanStack Query**: Server state management with caching, background updates, and error handling
- **React Hook Form**: Performant forms with easy validation (@hookform/resolvers)
- **Zod**: TypeScript-first schema validation (integrated with Drizzle)

## Database and ORM
- **Neon Database**: Serverless PostgreSQL with @neondatabase/serverless driver
- **Drizzle ORM**: Type-safe SQL toolkit with schema generation and migrations
- **Connection Pooling**: PostgreSQL session management with connect-pg-simple

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **ESBuild**: Fast bundler for production server builds
- **Date Utilities**: date-fns for date manipulation and formatting

## Utility Libraries
- **clsx & tailwind-merge**: Conditional class name utilities for dynamic styling
- **class-variance-authority**: Type-safe variant API for component styling
- **nanoid**: URL-safe unique string ID generator
- **cmdk**: Command palette interface library