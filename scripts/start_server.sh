#!/bin/bash
set -e  # Stop script on error

echo "Navigating to application directory..."
cd /home/ubuntu/my-nextjs-app

echo "Building the application..."
npm run build

echo "Starting application using PM2..."
pm2 delete my-nextjs-app || true  # Remove old process if exists
pm2 start npm --name "my-nextjs-app" -- start
pm2 save
pm2 restart my-nextjs-app

echo "Application started successfully!"
