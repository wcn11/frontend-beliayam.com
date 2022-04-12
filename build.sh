#!/bin/bash
npm run build --max-old-space-size=1000
cp .htaccess ./build/