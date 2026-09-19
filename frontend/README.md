# AI Chatbot Frontend

A responsive React chatbot frontend that communicates with the backend via Socket.io in real-time.

## Features

- ✨ Responsive design (works on desktop, tablet, mobile)
- 💬 Real-time messaging with Socket.io
- 🎨 Modern gradient UI with smooth animations
- ⌨️ Auto-scrolling messages
- 📱 Mobile-friendly interface
- 🔄 Automatic reconnection handling
- ⚠️ Error handling and status messages

## Setup

### Prerequisites

- Node.js (v16 or higher)
- Backend running on `http://localhost:3000`

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The frontend will be available at `http://localhost:5173`

## Project Structure

```
frontend/
├── src/
│   ├── App.jsx          # Main chat component
│   ├── main.jsx         # React entry point
│   └── index.css        # Responsive styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool (fast and modern)
- **Socket.io Client** - Real-time communication
- **CSS3** - Responsive styling with media queries

## Connection to Backend

The frontend automatically connects to the backend at `http://localhost:3000` using Socket.io. Make sure:

1. Backend is running on port 3000
2. Socket.io is properly configured in backend
3. Backend emits `response` events for messages
4. Frontend sends `message` events with `{ text: "message" }` format

## Responsive Breakpoints

- Desktop: Full width (up to 700px max-width)
- Tablet: 600px and below
- Mobile: 400px and below

## Keyboard Shortcuts

- **Enter** - Send message
- **Shift + Enter** - New line (coming soon)
