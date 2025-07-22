#!/bin/bash

# Clean, reinstall, and build script for Next.js projects
# This script removes .next and node_modules, reinstalls dependencies, and creates a production build

echo "🧹 Starting cleanup process..."

# Remove .next directory
if [ -d ".next" ]; then
    echo "🗑️  Removing .next directory..."
    rm -rf .next
    echo "✅ .next directory removed"
else
    echo "ℹ️  .next directory not found"
fi

# Remove node_modules directory
if [ -d "node_modules" ]; then
    echo "🗑️  Removing node_modules directory..."
    rm -rf node_modules
    echo "✅ node_modules directory removed"
else
    echo "ℹ️  node_modules directory not found"
fi

# Note: Keeping package-lock.json to preserve exact dependency versions
# Only remove it if you're having dependency conflicts

# Clear npm cache
echo "🧽 Clearing npm cache..."
npm cache clean --force
echo "✅ npm cache cleared"

# Reinstall dependencies
echo "📦 Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi

# Generate production build
echo "🏗️  Building production version..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Production build completed successfully!"
    echo "🚀 You can now run 'npm start' to start the production server"
    echo "💡 Or run 'npm run dev' to start the development server"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi

echo "🎉 Cleanup, reinstall, and build completed!"
