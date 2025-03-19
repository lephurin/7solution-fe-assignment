#!/bin/bash
echo "Stopping existing application (if any)..."
if systemctl list-units --type=service | grep -q "nextjs-app.service"; then
  sudo systemctl stop nextjs-app.service
else
  echo "Service nextjs-app.service not found, skipping..."
fi

echo "Removing old application files..."
sudo rm -rf /home/ubuntu/my-nextjs-app/* # Remove files but keep folder

echo "BeforeInstall completed successfully."