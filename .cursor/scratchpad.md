# Social Media Management System for Suite E Studios

## Background and Motivation

Suite E Studios, located in St. Petersburg's Historic Warehouse Arts District, needs a comprehensive social media management system to efficiently handle their community-focused content across multiple platforms. The system will serve both Suite E Studios and @StPeteMusic brands, with a primary focus on YouTube content management and cross-platform posting capabilities.

### Key Business Goals
- Streamline social media management for community events
- Maintain consistent brand voice across platforms
- Efficiently promote Final Friday events, Art Walk participation, and Thursday Dance Nights
- Support partnership with Brewed Awakenings
- Enable scalable content management for both brands

## Key Challenges and Analysis

1. **Multi-Tenant Architecture**
   - Need to maintain separate brand identities and credentials
   - Secure isolation of brand-specific data and operations
   - Efficient resource sharing while maintaining separation

2. **API Integration Complexity**
   - YouTube Data API (v3) for primary content management
   - Meta Graph API for Instagram and Facebook integration
   - Rate limit management across multiple platforms
   - Token lifecycle management for multiple OAuth flows

3. **Content Management**
   - Template system for recurring events
   - Dynamic variable substitution with timezone awareness
   - Cross-platform content adaptation
   - Media asset management and optimization

4. **Security Considerations**
   - Secure credential storage and management
   - Role-based access control
   - Audit logging for sensitive operations
   - Cross-brand access prevention

## High-level Task Breakdown

### Phase 1: Foundation Setup
1. [ ] Initialize project structure
   - Set up React frontend with TypeScript
   - Configure Deno backend
   - Set up Firebase project
   - Configure Docker development environment
   Success Criteria: Project builds successfully, development environment runs locally

2. [ ] Implement Authentication System
   - Google Auth integration
   - Brand selection workflow
   - Platform-specific OAuth flows
   - Token management system
   Success Criteria: Users can authenticate and switch between brands

3. [ ] Set up Database Structure
   - Design Firestore collections
   - Implement security rules
   - Set up Firebase Storage
   - Configure real-time capabilities
   Success Criteria: Database structure supports multi-tenancy, security rules prevent cross-brand access

### Phase 2: Core Functionality
4. [ ] YouTube Integration
   - Implement video listing and management
   - Set up metadata update capabilities
   - Create batch processing system
   - Implement template variable system
   Success Criteria: Can list and update YouTube content with templates

5. [ ] Template System
   - Create template management interface
   - Implement variable substitution engine
   - Set up timezone-aware calculations
   - Build preview system
   Success Criteria: Templates work with both static and dynamic variables

6. [ ] Meta Platform Integration
   - Implement Instagram Graph API integration
   - Set up Facebook Graph API integration
   - Create unified posting system
   - Implement media handling
   Success Criteria: Can post to both platforms simultaneously

### Phase 3: Enhancement and Optimization
7. [ ] Content Processing Pipeline
   - Implement content adaptation engine
   - Set up media optimization
   - Create scheduling system
   - Build analytics dashboard
   Success Criteria: Content adapts appropriately for each platform

8. [ ] User Interface and Experience
   - Build brand-specific workflows
   - Implement real-time preview
   - Create batch operations interface
   - Set up notification system
   Success Criteria: Interface is intuitive and efficient for content management

## UI/UX Design Specifications

### Layout Structure
1. **Left Sidebar Navigation**
   - Collapsible sidebar with icon-only view when closed
   - Expandable to show full text labels
   - Brand selection at the top
   - Main navigation items:
     - Dashboard
     - YouTube Management
     - Instagram/Facebook
     - Templates
     - Analytics
     - Settings

2. **Top Navigation Bar**
   - Brand logo/name on the left
   - Search functionality in the center
   - Right side items:
     - User profile dropdown
     - Notifications
     - Settings
     - Logout

### Component Library
- Tailwind CSS for styling
- shadcn/ui for component library
- Custom theme matching Suite E Studios brand colors
- Responsive design for all screen sizes

## Project Structure

```
social_manager/
├── .github/                    # GitHub Actions workflows
├── .vscode/                    # VS Code settings
├── frontend/                   # React frontend application
│   ├── public/                # Static assets
│   │   ├── src/
│   │   │   ├── components/        # Reusable UI components
│   │   │   │   ├── ui/           # shadcn components
│   │   │   │   ├── layout/       # Layout components
│   │   │   │   └── features/     # Feature-specific components
│   │   │   ├── hooks/            # Custom React hooks
│   │   │   ├── lib/              # Utility functions
│   │   │   ├── pages/            # Page components
│   │   │   ├── styles/           # Global styles
│   │   │   └── types/            # TypeScript types
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── backend/                    # Deno backend application
│   │   ├── src/
│   │   │   ├── api/              # API routes
│   │   │   ├── services/         # Business logic
│   │   │   ├── models/           # Data models
│   │   │   └── utils/            # Utility functions
│   │   └── deno.json
│   ├── docker/                     # Docker configuration
│   │   ├── frontend/
│   │   ├── backend/
│   │   └── docker-compose.yml
│   ├── firebase/                   # Firebase configuration
│   │   ├── functions/             # Cloud Functions
│   │   ├── rules/                 # Security rules
│   │   └── indexes/               # Database indexes
│   ├── scripts/                    # Build and deployment scripts
│   ├── .env.example               # Example environment variables
│   ├── .gitignore
│   └── package.json
```

## Development Setup Guide

### Prerequisites
1. **Node.js and npm**
   - Install Node.js 18.x or later
   - Verify installation: `node --version` and `npm --version`

2. **Deno**
   - Install Deno 1.x or later
   - Verify installation: `deno --version`

3. **Docker**
   - Install Docker Desktop
   - Verify installation: `docker --version`

4. **Firebase CLI**
   - Install: `npm install -g firebase-tools`
   - Verify installation: `firebase --version`

### Local Development Setup

1. **Clone and Install Dependencies**
   ```bash
   git clone [repository-url]
   cd social_manager
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start Development Environment**
   ```bash
   # Start all services
   docker-compose up -d
   
   # Start frontend development server
   cd frontend
   npm run dev
   
   # Start backend development server
   cd backend
   deno task dev
   ```

4. **Firebase Setup**
   ```bash
   firebase login
   firebase init
   # Select Firestore, Storage, and Functions
   ```

### Deployment

1. **Frontend Deployment**
   ```bash
   cd frontend
   npm run build
   firebase deploy --only hosting
   ```

2. **Backend Deployment**
   ```bash
   cd backend
   deno task deploy
   ```

3. **Firebase Functions Deployment**
   ```bash
   firebase deploy --only functions
   ```

## Project Status Board

### Current Sprint
- [x] Task 1: Initialize project structure
  - Created directory structure
  - Set up basic configuration files
  - Initialized Git repository
- [x] Task 2: Set up development environment
  - Configured Vite with React and TypeScript
  - Set up Tailwind CSS and shadcn/ui
  - Created basic component structure
- [x] Task 3: Create basic UI components
  - Created collapsible sidebar
  - Implemented top navigation
  - Set up routing structure

### Completed Tasks
- Project structure initialization
- Development environment setup
- Basic component creation

### Upcoming Tasks
- Complete UI layout implementation
- Set up authentication system
- Implement database structure
- YouTube API integration

## Executor's Feedback or Assistance Requests
- Need to install dependencies and verify setup
- Need to test the development environment
- Need to implement the top navigation bar

## Lessons
- Use shadcn/ui for consistent component styling
- Implement proper TypeScript configuration for path aliases
- Set up proper development environment with Vite

## Next Steps
1. Run the setup script to install dependencies
2. Test the development environment
3. Complete the UI layout implementation 