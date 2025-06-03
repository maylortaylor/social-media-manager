/** @format */

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

// API routes will go here
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Serve the frontend for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
