#!/bin/bash

# Quick Start Script for AI Chatbot

echo "🚀 AI Chatbot - Quick Setup"
echo "============================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
echo ""

echo "Installing backend dependencies..."
cd backend
npm install
cd ..

echo ""
echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo ""
echo "✅ All dependencies installed!"
echo ""
echo "🎯 You're ready to go!"
echo ""
echo "📝 To run the application, use one of these commands:"
echo ""
echo "   Option 1 (Recommended): Run both frontend and backend together"
echo "   → npm run dev"
echo ""
echo "   Option 2: Run backend separately"
echo "   → npm run backend"
echo ""
echo "   Option 3: Run frontend separately"  
echo "   → npm run frontend"
echo ""
echo "🌐 Frontend will be available at: http://localhost:5173"
echo "🔧 Backend will be running on: http://localhost:3000"
echo ""
echo "Happy coding! 🎉"
