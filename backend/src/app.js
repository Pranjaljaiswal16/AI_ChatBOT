const express = require("express");
const path = require("path");

const app = express();

const projectRoot = path.resolve(__dirname, "../..");

// API routes yahan
// app.use("/api/...", ...);

// Frontend
app.use(
  express.static(path.join(projectRoot, "frontend", "dist"))
);

// React/Vite fallback — LAST route
app.get("/{*splat}", (req, res) => {
  res.sendFile(
    path.join(projectRoot, "frontend", "dist", "index.html")
  );
});

module.exports = app;