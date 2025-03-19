#!/bin/bash
set -e  # Stop script on error

echo "Ensuring correct permissions..."
sudo chown -R ubuntu:ubuntu /home/ubuntu/my-nextjs-app

echo "Installing dependencies..."
cd /home/ubuntu/my-nextjs-app
npm install --unsafe-perm  # Allows running as different users

echo "Dependencies installed successfully."
