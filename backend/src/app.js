const express = require("express");
const path = require("path");

const app = express();
const projectRoot = path.resolve(__dirname, "../..");

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

// Frontend
app.use(express.static(path.join(projectRoot, "frontend", "dist")));

// React/Vite routes
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.resolve(projectRoot, "frontend", "dist", "index.html"));
});

module.exports = app;
