# Social Media Manager

A comprehensive social media management system for Suite E Studios and @StPeteMusic, built with React, Node.js, and Firebase.

## Features

- Multi-brand social media management
- YouTube content management and optimization
- Cross-platform posting (Instagram & Facebook)
- Template system for recurring content
- Real-time content preview
- Analytics dashboard

## Project Structure

```
social_manager/
├── backend/                 # Backend Node.js server
│   ├── src/                # Source code
│   │   └── server.js       # Express server
│   ├── package.json        # Backend dependencies
│   └── .gitignore         # Backend-specific gitignore
├── frontend/               # React frontend application
│   ├── src/               # Source code
│   ├── public/            # Static files
│   ├── package.json       # Frontend dependencies
│   └── .gitignore        # Frontend-specific gitignore
├── functions/             # Firebase Cloud Functions
├── docker/               # Docker configuration files
│   ├── backend/         # Backend Dockerfile
│   └── frontend/        # Frontend Dockerfile
├── .github/             # GitHub Actions workflows
├── scripts/             # Utility scripts
├── docker-compose.yml   # Docker Compose configuration
├── package.json         # Root package.json
└── README.md           # This file
```

## Prerequisites

- Node.js 20 or later
- Docker and Docker Compose
- Firebase CLI (`npm install -g firebase-tools`)
- Git

## Getting Started

### Option 1: Using Docker (Recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/social_manager.git
   cd social_manager
   ```

2. Start the development environment:
   ```bash
   docker-compose up
   ```
   This will:
   - Build and start both frontend and backend containers
   - Mount your local code for development
   - Set up proper networking between services
   - Handle node_modules properly

3. Access the applications:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

### Option 2: Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/social_manager.git
   cd social_manager
   ```

2. Install dependencies:
   ```bash
   # Install root dependencies
   npm install

   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. Start the development servers:

   In one terminal:
   ```bash
   # Start the backend server
   cd backend
   npm start
   ```

   In another terminal:
   ```bash
   # Start the frontend development server
   cd frontend
   npm run dev
   ```

4. Access the applications:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## Development

### Environment Variables

1. Frontend:
   - Copy `frontend/.env.example` to `frontend/.env`
   - Update the variables as needed

2. Backend:
   - Copy `backend/.env.example` to `backend/.env`
   - Update the variables as needed

### Available Scripts

#### Root Directory
- `npm install`: Install all dependencies
- `npm run dev`: Start both frontend and backend in development mode

#### Frontend
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run test`: Run tests

#### Backend
- `npm start`: Start the server
- `npm run dev`: Start server with nodemon
- `npm run lint`: Run ESLint
- `npm run test`: Run tests

## Deployment

### Firebase Deployment

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

### Docker Deployment

1. Build the Docker images:
   ```bash
   docker-compose build
   ```

2. Push the images to your registry:
   ```bash
   docker-compose push
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@suiteestudios.com or join our Slack channel.

## Environment Variables

### Frontend
The following environment variables are required for the frontend. Copy `.env.example` to `.env` and fill in the values:

```
# Frontend Environment Variables Example
VITE_API_URL=http://localhost:8000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

### Backend
The following environment variables are required for the backend. Copy `.env.example` to `.env` and fill in the values:

```
# Backend Environment Variables Example
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mydatabase
DB_USER=myuser
DB_PASSWORD=mypassword
JWT_SECRET=your_jwt_secret_here
API_KEY=your_api_key_here
``` 