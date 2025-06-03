/** @format */

const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// Serve static files from the frontend build directory if it exists
const frontendDistPath = path.join(__dirname, "../../frontend/dist");
try {
  if (require("fs").existsSync(frontendDistPath)) {
    console.log("Serving static files from:", frontendDistPath);
    app.use(express.static(frontendDistPath));
  } else {
    console.log("Frontend dist directory not found:", frontendDistPath);
  }
} catch (err) {
  console.error("Error checking frontend dist directory:", err);
}

// Serve the frontend for all other routes if frontend exists
app.get("*", (req, res) => {
  const indexPath = path.join(frontendDistPath, "index.html");
  if (require("fs").existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    message: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// Start the server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`Health check available at http://localhost:${port}/api/health`);
});
