#!/bin/bash
# Startup script for High-Performance-React Project

echo "======================================================"
echo "High-Performance-React Project - Startup Script"
echo "======================================================"
echo ""

# Navigate to project root
cd "$(dirname "$0")"

echo "Step 1: Checking environment..."
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "PNPM version: $(pnpm --version)"
echo ""

echo "Step 2: Installing dependencies..."
pnpm install --frozen-lockfile 2>/dev/null || pnpm install --ignore-scripts

echo ""
echo "Step 3: Building workspace..."
pnpm run build 2>/dev/null || echo "Build script not available (OK)"

echo ""
echo "Step 4: Starting development server..."
echo "Project: no-outsiders"
echo "Port: 3000"
echo "URL: http://localhost:3000"
echo ""

cd artifacts/no-outsiders
pnpm run dev
