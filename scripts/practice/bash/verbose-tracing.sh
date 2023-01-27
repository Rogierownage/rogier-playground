#!/bin/bash -v

# Note that -v is enabled.

filename="haha/text.txt"

echo $filename

set -x 

echo $filename

set +v

echo $filename