FROM node:20-slim

WORKDIR /app

# Copy package files
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY backend/ ./

# Cloud Run will provide the PORT environment variable
ENV PORT=8080
ENV NODE_ENV=production

# Expose the port
EXPOSE ${PORT}

# Add health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:${PORT}/api/health || exit 1

# Start the server with Node directly (more reliable than npm start)
CMD ["node", "src/server.js"] 