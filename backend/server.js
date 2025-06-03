/** @format */

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the frontend/dist directory
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Handle all routes by serving index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Start the server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
