require("dotenv").config();

const app = require("./src/app.js");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { generateResponse } = require("./src/services/ai.service.js");

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A User connected:", socket.id);

  // Har user/socket ki alag short memory
  const chatHistory = [];

  socket.on("disconnect", () => {
    console.log("A User disconnected:", socket.id);
  });

  socket.on("ai-message", async (data) => {
    try {
      const messageText = data?.text || data;

      // User message memory mein add
      chatHistory.push({
        type: "text",
        text: messageText,
      });

      // AI response
      const response = await generateResponse(chatHistory);

      console.log("AI response:", response);

      // Frontend ko response
      socket.emit("ai-message-response", response);
    } catch (error) {
      console.error("AI Error:", error);

      socket.emit("ai-message-response", {
        error: "Something went wrong while generating AI response.",
      });
    }
  });
});

httpServer.listen(3000, () => {
  console.log("Server is Running on Port 3000");
});
