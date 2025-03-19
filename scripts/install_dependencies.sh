#!/bin/bash
set -e  # Stop script on error

echo "Installing dependencies..."
cd /home/ubuntu/my-nextjs-app
rm -rf node_modules package-lock.json
npm cache clean --force
npm install --no-fund --no-audit

echo "Dependencies installed successfully."