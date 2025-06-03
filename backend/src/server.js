/** @format */

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080; // Default to 8080 for Cloud Run

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// API routes will go here
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Serve the frontend for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something broke!" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
  console.log(`Health check available at http://localhost:${port}/api/health`);
});
