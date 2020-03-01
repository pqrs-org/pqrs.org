#!/bin/bash

# forbid undefined variables
set -u

# forbid command failure
set -e

cd $(dirname $0)/../

function deploy() {
  local repo="$1"
  local source="$2"

  echo
  echo '#'
  echo '#' $repo
  echo '#'
  echo

  if [ ! -d $repo ]; then
    echo "ERROR: $(basename $repo) directory is not found"
    exit 1
  fi

  rsync -a --delete --exclude CNAME $source $repo/docs
  (cd $repo && git status)
}

deploy \
  ../gh-pages-disable-draganddrop-tb.pqrs.org \
  sites/disable-draganddrop-tb/public/

deploy \
  ../gh-pages-showyedge.pqrs.org \
  sites/showyedge/public/

deploy \
  ../gh-pages-tinkle.pqrs.org \
  sites/tinkle/public/
