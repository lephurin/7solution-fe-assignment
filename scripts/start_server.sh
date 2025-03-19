#!/bin/bash
# Ensure the script stops on error
set -e

echo "Navigating to application directory..."
cd /home/ubuntu/my-nextjs-app

echo "Installing dependencies..."
npm install

echo "Starting application..."
npm run start &

echo "Application started successfully!"
