#!/bin/bash

fileName="./generated-files/echo-positional-parameters.sh"

rm $fileName
touch $fileName

for var in {0..9}; do
    echo "echo \$$var" >> $fileName
done

chmod 755 $fileName