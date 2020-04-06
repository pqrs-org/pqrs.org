#!/bin/bash

set -u

basedir=$(dirname $0)
cd $basedir
pwd=$(pwd)

rm -fr docsy
git clone --recursive --shallow-submodules --depth 1 https://github.com/google/docsy.git

rm -f docsy-revisions
for d in $(find docsy -name '.git'); do
    echo -n "$d: " >> docsy-revisions
    (cd $(dirname $d) && git rev-parse HEAD) >> docsy-revisions
done

for d in $(find docsy -name '.git'); do
    rm -fr $d
done

rm -fr docsy/userguide
