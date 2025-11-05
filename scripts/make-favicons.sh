#!/bin/sh

set -u # forbid undefined variables
set -e # forbid command failure

sips -z 32 32   favicon.png --out favicon-32x32.png
sips -z 180 180 favicon.png --out apple-touch-icon-180x180.png

bash "$(dirname $0)/optimize-image.sh" *.png
