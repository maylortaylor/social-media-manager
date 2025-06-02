# Social Media Management System

A comprehensive social media management system for Suite E Studios and @StPeteMusic, built with React, Deno, and Firebase.

## Features

- Multi-brand social media management
- YouTube content management and optimization
- Cross-platform posting (Instagram & Facebook)
- Template system for recurring content
- Real-time content preview
- Analytics dashboard

## Tech Stack

- **Frontend**: React with TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Deno
- **Database**: Firebase (Firestore)
- **Storage**: Firebase Storage
- **Authentication**: Google Auth, OAuth 2.0
- **Containerization**: Docker

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.x or later
- npm 9.x or later
- Deno 1.x or later
- Docker Desktop
- Firebase CLI
- Git

## Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd social_manager
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install frontend dependencies
   cd frontend
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Initialize Firebase**
   ```bash
   firebase login
   firebase init
   # Select Firestore, Storage, and Functions
   ```

## Development

1. **Start the development environment**
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

2. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000

## Project Structure

```
social_manager/
├── frontend/          # React frontend application
├── backend/           # Deno backend application
├── docker/            # Docker configuration
├── firebase/          # Firebase configuration
└── scripts/           # Build and deployment scripts
```

## Deployment

### Frontend Deployment
```bash
cd frontend
npm run build
firebase deploy --only hosting
```

### Backend Deployment
```bash
cd backend
deno task deploy
```

### Firebase Functions Deployment
```bash
firebase deploy --only functions
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

[License Type] - See LICENSE file for details

## Support

For support, please contact [contact information] 