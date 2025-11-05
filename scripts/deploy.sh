#!/bin/bash

set -u # forbid undefined variables
set -e # forbid command failure

cd $(dirname $0)/../

function deploy() {
  local repo="$1"
  local source="$2"

  echo $repo

  if [ ! -d $repo ]; then
    echo "ERROR: $(basename $repo) directory is not found"
    exit 1
  fi

  rsync -a --delete $source $repo/public
  (cd $repo && git status -s)
}

deploy \
  ../sites-bulletgba.pqrs.org \
  sites/bulletgba/public/

deploy \
  ../sites-combostick.pqrs.org \
  sites/combostick/public/

deploy \
  ../sites-dcgnuboy.pqrs.org \
  sites/dcgnuboy/public/

deploy \
  ../sites-disable-draganddrop-tb.pqrs.org \
  sites/disable-draganddrop-tb/public/

deploy \
  ../sites-karabiner-elements.pqrs.org \
  sites/karabiner-elements/public/

deploy \
  ../sites-nesterdc.pqrs.org \
  sites/nesterdc/public/

deploy \
  ../sites-showyedge.pqrs.org \
  sites/showyedge/public/

deploy \
  ../sites-tinkle.pqrs.org \
  sites/tinkle/public/

deploy \
  ../sites-truewidget.pqrs.org \
  sites/truewidget/public/

deploy \
  ../sites-vulkanon.pqrs.org \
  sites/vulkanon/public/
