#!/bin/bash
set -e  # Stop script on error

echo "Stopping existing application (if any)..."
if pm2 list | grep -q "my-nextjs-app"; then
  pm2 stop my-nextjs-app
else
  echo "PM2 process not found, skipping stop..."
fi

echo "Removing old application files, except .git folder..."
find /home/ubuntu/my-nextjs-app -mindepth 1 ! -regex '^/home/ubuntu/my-nextjs-app/.git\(/.*\)?' -delete

echo "BeforeInstall completed successfully."
