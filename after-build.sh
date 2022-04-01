#!/bin/bash
npm install
npm run build
npm run generate
cp .htaccess ./dist/