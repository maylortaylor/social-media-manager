#!/bin/bash

# Install frontend dependencies
cd frontend
npm install

# Install global dependencies
npm install -g firebase-tools

# Initialize Firebase (if not already initialized)
if [ ! -f "firebase.json" ]; then
  firebase init
fi

echo "Setup complete! You can now start the development server with:"
echo "cd frontend && npm run dev" 