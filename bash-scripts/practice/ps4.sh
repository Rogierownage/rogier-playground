#!/bin/bash -x

PS4="/) "
# Note: The next line does not work. It must be capitalized.
ps4="dwaadwdawjdw"

echo "Banaan"

PS4="+ ${BASH_SOURCE}:$LINENO + "

echo "Test"