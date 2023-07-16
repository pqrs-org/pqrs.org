#!/bin/bash

# forbid undefined variables
set -u

# forbid command failure
set -e

cd $(dirname $0)/../

function deploy() {
  local repo="$1"
  local source="$2"

  echo $repo

  if [ ! -d $repo ]; then
    echo "ERROR: $(basename $repo) directory is not found"
    exit 1
  fi

  rsync -a --delete --exclude CNAME --exclude .nojekyll $source $repo/docs
  (cd $repo && git status -s)
}

deploy \
  ../gh-pages-bulletgba.pqrs.org \
  sites/bulletgba/public/

deploy \
  ../gh-pages-dcgnuboy.pqrs.org \
  sites/dcgnuboy/public/

deploy \
  ../gh-pages-disable-draganddrop-tb.pqrs.org \
  sites/disable-draganddrop-tb/public/

deploy \
  ../gh-pages-karabiner-elements.pqrs.org \
  sites/karabiner-elements/public/

deploy \
  ../gh-pages-nesterdc.pqrs.org \
  sites/nesterdc/public/

deploy \
  ../gh-pages-showyedge.pqrs.org \
  sites/showyedge/public/

deploy \
  ../gh-pages-tinkle.pqrs.org \
  sites/tinkle/public/

deploy \
  ../gh-pages-truewidget.pqrs.org \
  sites/truewidget/public/

deploy \
  ../gh-pages-vulkanon.pqrs.org \
  sites/vulkanon/public/
