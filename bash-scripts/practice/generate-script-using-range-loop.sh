#!/bin/bash

fileName="./generated-scripts/echo-positional-parameters.sh"

touch $fileName

echo > $fileName

for var in {0..9}; do
    echo "echo \$$var" >> $fileName
done

chmod 755 $fileName