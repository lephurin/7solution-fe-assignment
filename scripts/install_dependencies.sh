#!/bin/bash
set -e  # Stop script on error

echo "Ensuring correct permissions..."
sudo chown -R ubuntu:ubuntu /home/ubuntu/my-nextjs-app

echo "Installing dependencies..."
cd /home/ubuntu/my-nextjs-app
sudo npm install --unsafe-perm=true --allow-rootAllows running as different users

echo "Dependencies installed successfully."
