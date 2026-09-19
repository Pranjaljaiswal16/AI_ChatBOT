@echo off
REM Quick Start Script for AI Chatbot (Windows)

echo.
echo 🚀 AI Chatbot - Quick Setup
echo ============================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install it from https://nodejs.org
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js is installed: %NODE_VERSION%
echo.

REM Install dependencies
echo 📦 Installing dependencies...
echo.

echo Installing backend dependencies...
cd backend
call npm install
cd ..

echo.
echo Installing frontend dependencies...
cd frontend
call npm install
cd ..

echo.
echo ✅ All dependencies installed!
echo.
echo 🎯 You're ready to go!
echo.
echo 📝 To run the application, use one of these commands:
echo.
echo    Option 1 (Recommended): Run both frontend and backend together
echo    ^> npm run dev
echo.
echo    Option 2: Run backend separately
echo    ^> npm run backend
echo.
echo    Option 3: Run frontend separately  
echo    ^> npm run frontend
echo.
echo 🌐 Frontend will be available at: http://localhost:5173
echo 🔧 Backend will be running on: http://localhost:3000
echo.
echo Happy coding! 🎉
echo.
pause
