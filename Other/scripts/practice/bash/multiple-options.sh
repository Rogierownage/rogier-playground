#!/bin/bash -xe

# Note that the shebang contains both -e and -x

echo "Haha"

set +e
set +e
set +x
set -e -x
set +xe

ping -c 1 banaan &> /dev/null

echo "Hey"

set -e
set -x +e

ping -c 1 banaan &> /dev/null

echo "Hai"

set -e

ping -c 1 banaan &> /dev/null

echo "Nope"