import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const messagesEndRef = useRef(null);
  const socketRef = useRef(null);

  // Initialize Socket.IO connection
  useEffect(() => {
    socketRef.current = io("http://localhost:3000", {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    });

    // Connection successful
    socketRef.current.on("connect", () => {
      console.log("Connected to server:", socketRef.current.id);
      setError("");
    });

    // Receive AI response
    socketRef.current.on("ai-message-response", (data) => {
      console.log("AI Response:", data);

      // Backend se error object aaye
      if (data?.error) {
        setError(data.error);
        setIsLoading(false);
        return;
      }

      // AI response ko chat mein add karo
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: "ai",
          content: data?.response || data,
        },
      ]);

      setIsLoading(false);
    });

    // Socket error
    socketRef.current.on("error", (error) => {
      console.error("Socket error:", error);
      setError("Connection error");
      setIsLoading(false);
    });

    // Connection error
    socketRef.current.on("connect_error", (error) => {
      console.error("Connection error:", error);
      setError("Failed to connect to server");
      setIsLoading(false);
    });

    // Disconnect
    socketRef.current.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    // Cleanup
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // Send message
  const handleSendMessage = (e) => {
    e.preventDefault();

    const messageText = input.trim();

    if (!messageText) return;

    // Clear previous error
    setError("");

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: "user",
      content: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Clear input
    setInput("");

    // Show loading
    setIsLoading(true);

    // Check socket connection
    if (socketRef.current && socketRef.current.connected) {
      console.log("Sending message:", messageText);

      // IMPORTANT:
      // Backend is listening for "ai-message"
      socketRef.current.emit("ai-message", {
        text: messageText,
      });
    } else {
      setError("Not connected to server. Please check if backend is running.");

      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">🤖 AI Chatbot</div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.type}`}>
            <div className="message-content">{msg.content}</div>
          </div>
        ))}

        {/* Loading */}
        {isLoading && (
          <div className="message ai">
            <div className="typing-indicator">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
          </div>
        )}

        {/* Error */}
        {error && <div className="error-message">⚠️ {error}</div>}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form className="chat-input-container" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
          maxLength={500}
        />

        <button
          type="submit"
          className="send-btn"
          disabled={isLoading || !input.trim()}
          title="Send message"
        >
          ✈️
        </button>
      </form>
    </div>
  );
}

export default App;
