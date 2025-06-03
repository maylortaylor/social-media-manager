FROM node:20-slim

WORKDIR /app

# Copy package files
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY frontend/ ./

# Build the application
RUN npm run build

# Expose the port
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev"] 