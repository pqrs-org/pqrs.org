#!/bin/sh

# forbid undefined variables
set -u

# forbid command failure
set -e

echo "favicon-256.png"
magick favicon.png -resize 256x256 favicon-256.png

echo "favicon-16.png"
magick favicon.png -resize 16x16 favicon-16x16.png

echo "favicon-32.png"
magick favicon.png -resize 32x32 favicon-32x32.png

echo "favicon-64.png"
magick favicon.png -resize 64x64 favicon-64.png

echo "favicon-128.png"
magick favicon.png -resize 128x128 favicon-128.png

echo "favicon.ico"
magick favicon-16x16.png favicon-32x32.png favicon-64.png favicon-128.png favicon-256.png -colors 256 favicon.ico

echo "apple-touch-icon-180x180.png"
magick favicon.png -resize 180x180 apple-touch-icon-180x180.png

echo "android-36x36.png"
magick favicon.png -resize 36x36 android-36x36.png

echo "android-48x48.png"
magick favicon.png -resize 48x48 android-48x48.png

echo "android-72x72.png"
magick favicon.png -resize 72x72 android-72x72.png

echo "android-96x96.png"
magick favicon.png -resize 96x96 android-96x96.png

echo "android-144x144.png"
magick favicon.png -resize 144x144 android-144x144.png

echo "android-192x192.png"
magick favicon.png -resize 192x192 android-192x192.png
