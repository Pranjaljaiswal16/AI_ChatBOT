# AI Chatbot - Frontend & Backend Setup Guide

## 📁 Project Structure

```
AI_Chatbot/
├── backend/
│   ├── server.js              # Main server with Socket.io
│   ├── package.json
│   ├── src/
│   │   ├── app.js             # Express app
│   │   └── services/
│   │       └── ai.service.js  # AI response generation
│   └── .env                   # Environment variables
│
└── frontend/
    ├── src/
    │   ├── App.jsx            # Main chat component
    │   ├── main.jsx           # React entry point
    │   └── index.css          # Responsive styles
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🚀 Quick Start

### Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 2: Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Step 3: Run Backend Server

```bash
cd backend
npm start
# or if you have a dev script set up:
npm run dev
```

The backend will run on: **http://localhost:3000**

### Step 4: Run Frontend (in a new terminal)

```bash
cd frontend
npm run dev
```

The frontend will run on: **http://localhost:5173**

### Step 5: Open in Browser

Visit: **http://localhost:5173**

You should see a responsive chatbot interface!

## 📱 Features

✅ **Real-time Communication** - Messages sent via Socket.io
✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **Auto-scrolling** - Messages automatically scroll to bottom
✅ **Typing Indicator** - Shows when AI is generating response
✅ **Error Handling** - Connection errors displayed to user
✅ **Gradient UI** - Modern purple gradient design with animations

## 🔧 Backend Setup (if needed)

Make sure your backend has:

1. ✅ Socket.io server initialized
2. ✅ CORS configured (already done)
3. ✅ Listening on port 3000
4. ✅ Handling "message" events
5. ✅ Emitting "response" events

Your `server.js` is already configured for this!

## 📝 Environment Variables

### Backend (.env file)

```env
GOOGLE_API_KEY=your_api_key_here
# Add other variables as needed
```

### Frontend

No environment variables needed (connects to http://localhost:3000)

## 🐛 Troubleshooting

### Frontend can't connect to backend?

- Make sure backend is running on port 3000
- Check browser console for error messages
- Ensure CORS is properly configured in backend

### Messages not appearing?

- Check browser console for JavaScript errors
- Check server terminal for connection logs
- Verify Socket.io events match (frontend sends "message", backend listens for "message")

### Changes not reflecting?

- Hard refresh browser (Ctrl+F5 / Cmd+Shift+R)
- Clear browser cache if needed

## 📦 Tech Stack

**Frontend:**

- React 18
- Vite (build tool)
- Socket.io Client
- CSS3 (responsive)

**Backend:**

- Node.js + Express
- Socket.io
- Google GenAI SDK

## 🎨 Customization

### Change Colors

Edit `frontend/src/index.css`:

```css
/* Change gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Chat Title

Edit `frontend/src/App.jsx`:

```jsx
<div className="chat-header">🤖 Your Custom Title Here</div>
```

### Change Backend Connection

Edit `frontend/src/App.jsx`:

```javascript
socketRef.current = io("http://your-backend-url:3000", {
  // ... options
});
```

## 📞 Communication Flow

```
User Input
    ↓
Frontend (React Component)
    ↓
Socket.io emit "message" event
    ↓
Backend (Socket.io Server)
    ↓
AI Service (generateResponse)
    ↓
Socket.io emit "response" event
    ↓
Frontend receives response
    ↓
Display in Chat
```

## ✨ Happy Chatting!

Your responsive AI chatbot is ready to go! 🎉
