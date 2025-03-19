#!/bin/bash
set -e  # Stop script on error

echo "Navigating to application directory..."
cd /home/ubuntu/my-nextjs-app

echo "Starting application using PM2..."
pm2 delete nextjs-app || true  # Remove old process if exists
pm2 start npm --name "nextjs-app" -- start
pm2 save
pm2 restart nextjs-app

echo "Application started successfully!"
