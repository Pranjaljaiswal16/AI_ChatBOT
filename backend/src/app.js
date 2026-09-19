const express = require("express");
const path = require("path");

const app = express();

const projectRoot = path.resolve(__dirname, "../..");

app.use(express.json());


// ===============================
// API ROUTES
// ===============================

// Agar tumhare API routes hain to yahan add karo
// Example:
// app.use("/api/users", userRoutes);


// ===============================
// FRONTEND
// ===============================

const frontendPath = path.join(projectRoot, "frontend", "dist");

// React/Vite static files
app.use(express.static(frontendPath));

// React/Vite fallback
// IMPORTANT: Ye route sabse last hona chahiye
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});


module.exports = app;