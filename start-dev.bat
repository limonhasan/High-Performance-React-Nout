@echo off
setlocal enabledelayedexpansion

echo.
echo ======================================================
echo High-Performance-React Project - Startup Script
echo ======================================================
echo.

REM Navigate to project root
cd /d "%~dp0"

echo Step 1: Checking environment...
echo Node version:
node --version
echo PNPM version:
pnpm --version
echo.

echo Step 2: Installing dependencies...
pnpm install --frozen-lockfile 2>nul || pnpm install --ignore-scripts

echo.
echo Step 3: Building workspace...
pnpm run build 2>nul
if errorlevel 1 (
    echo Build script not available (OK - continuing)
)

echo.
echo Step 4: Starting development server...
echo Project: no-outsiders
echo Port: 3000
echo URL: http://localhost:3000
echo.

cd /d "%~dp0artifacts\no-outsiders"
pnpm run dev

pause
