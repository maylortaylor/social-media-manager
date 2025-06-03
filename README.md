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
- Docker Desktop for Mac
- Git

## Installation

1. Install Docker Desktop:
```bash
brew install --cask docker
```

2. Start Docker Desktop from your Applications folder

3. Clone the repository:
```bash
git clone <repository-url>
cd social-media-manager
```

## Development

### Local Development with Docker

1. Start the development environment:
```bash
docker compose up --build
```

2. Access the applications:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080
- Health Check: http://localhost:8080/api/health

### Manual Development

1. Install dependencies:
```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

2. Start the development servers:
```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
```

## Deployment

The application is configured for deployment to Google Cloud Run. To deploy:

1. Ensure you have the Google Cloud CLI installed and configured
2. Run the deployment:
```bash
gcloud builds submit
```

## Environment Variables

### Backend
- `PORT`: Server port (default: 8080)
- `NODE_ENV`: Environment (development/production)

### Frontend
- `VITE_API_URL`: Backend API URL (default: http://localhost:8080)

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

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