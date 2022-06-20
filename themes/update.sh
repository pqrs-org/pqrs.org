#!/bin/bash

set -u # forbid undefined variables
set -e # forbid command failure

docsyrev=v0.3.0

basedir=$(dirname $0)
cd $basedir
pwd=$(pwd)

rm -fr docsy
git clone \
  --recursive \
  --shallow-submodules \
  --depth 1 \
  --branch $docsyrev \
  https://github.com/google/docsy.git

rm -f docsy-revisions
for d in $(find docsy -name '.git'); do
  echo -n "$d: " >>docsy-revisions
  (cd $(dirname $d) && git rev-parse HEAD) >>docsy-revisions
done

for d in $(find docsy -name '.git'); do
  rm -fr $d
done

rm -fr docsy/userguide
