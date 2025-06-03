# Use Node.js 20 as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy root package.json and package-lock.json
COPY package*.json ./

# Install root dependencies (if any)
RUN npm install

# Copy frontend package files
COPY frontend/package*.json ./frontend/

# Install frontend dependencies with platform-specific Rollup
RUN cd frontend && \
    npm install && \
    npm install typescript@latest --save-dev && \
    npm install @rollup/rollup-linux-x64-gnu --save-optional && \
    npm install -g typescript

# Copy the rest of the application code
COPY . .

# Build the frontend
RUN cd frontend && \
    npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"] 