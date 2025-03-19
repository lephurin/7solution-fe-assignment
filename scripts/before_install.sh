#!/bin/bash
# Ensure the script stops on error
set -e

echo "Stopping existing application (if any)..."
sudo systemctl stop nextjs-app || true

echo "Removing old application files..."
sudo rm -rf /home/ubuntu/my-nextjs-app
