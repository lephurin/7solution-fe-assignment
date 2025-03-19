#!/bin/bash
cd /home/ubuntu/my-nextjs-app
npm install
npm run build
pm2 restart my-nextjs-app || pm2 start npm --name "my-nextjs-app" -- start
