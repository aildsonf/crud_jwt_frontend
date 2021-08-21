#!/bin/bash
echo '======================================================'
echo "[1/5] - Removing custom Next.js build folder ..."
rm -rf .next/

echo '======================================================'
echo "[2/5] - Removing .node_modules/ ..."
rm -rf node_modules

echo '======================================================'
echo "[3/5] - Removing lock files ..."
rm -rf yarn.lock
rm -rf package-lock.json

echo '======================================================'
echo "[4/5] - Installing Dependecies ..."
npm install

echo '======================================================'
echo "[5/5] - Building and Running ..."
npm run build
npm run start
