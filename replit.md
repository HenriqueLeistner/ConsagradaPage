# Overview

This is a full-stack web application for "Consagrada Agência" (Consagrada Agency), a Brazilian digital marketing agency. The application serves as a modern, single-page agency website showcasing services, team members, and providing contact functionality. Built with React on the frontend and Express.js on the backend, it features a dark theme design with Portuguese content and comprehensive UI components for an engaging user experience.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **UI Framework**: Shadcn/ui components with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a dark color scheme
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Design System**: Comprehensive component library with consistent spacing, typography, and color tokens

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Architecture Pattern**: RESTful API design with modular route registration
- **Storage Abstraction**: Interface-based storage system with in-memory implementation (MemStorage) that can be easily swapped for database implementations
- **Middleware**: Custom logging middleware for API request tracking and performance monitoring
- **Error Handling**: Centralized error handling with structured error responses

## Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with Neon database support
- **Schema Management**: Type-safe database schemas with Zod integration for validation
- **Migration System**: Drizzle Kit for database migrations stored in `/migrations`
- **Current Implementation**: In-memory storage for development with database infrastructure ready for production
- **Data Models**: User management and contact submission tracking with UUID primary keys

## Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions (infrastructure ready)
- **Current State**: Basic user schema defined but authentication flow not yet implemented
- **Security**: Prepared for cookie-based session management with database persistence

## Development and Build Configuration
- **Development Server**: Vite dev server with HMR and custom middleware integration
- **Production Build**: Separate client and server builds with static asset serving
- **TypeScript**: Strict type checking with path mapping for clean imports
- **Code Quality**: ESBuild for fast server bundling, PostCSS for CSS processing

# External Dependencies

## UI and Design System
- **Radix UI**: Complete set of accessible, unstyled UI primitives for complex components
- **Lucide React**: Consistent icon system with React components
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Class Variance Authority**: Type-safe component variants system
- **Embla Carousel**: Accessible carousel/slider component

## Database and ORM
- **Neon Database**: Serverless PostgreSQL database platform
- **Drizzle ORM**: Type-safe ORM with excellent TypeScript integration
- **Connect-pg-simple**: PostgreSQL session store for Express sessions

## Development Tools
- **Vite**: Fast build tool with hot module replacement and optimized bundling
- **TSX**: TypeScript execution for development server
- **Replit Integration**: Development environment plugins for runtime error handling and debugging

## Form Handling and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries
- **Zod**: Type-safe schema validation for forms and API data

## State Management and Data Fetching
- **TanStack Query**: Powerful data synchronization and caching for server state
- **Date-fns**: Modern date utility library for date formatting and manipulation