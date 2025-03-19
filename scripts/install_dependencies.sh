#!/bin/bash
set -e  # Stop script on error

echo "Installing dependencies..."
cd /home/ubuntu/my-nextjs-app
sudo npm install --unsafe-perm=true --allow-root  # Allows running as different users

echo "Dependencies installed successfully."
