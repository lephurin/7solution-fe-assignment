#!/bin/bash
set -e  # Stop script on error

echo "Navigating to application directory..."
cd /home/ubuntu/my-nextjs-app

echo "Starting application using PM2..."
pm2 delete my-nextjs-app || true  # Ignore error if process doesn’t exist
pm2 start npm --name "my-nextjs-app" -- start
pm2 save  # Save process for restart

echo "Application started successfully!"