#!/bin/bash

if [ ! -e "/tmp/python-shizzle" ]; then
    mkdir /tmp/python-shizzle
fi

if [ ! -e "/tmp/bash-shizzle" ]; then
    mkdir /tmp/bash-shizzle
fi

for file in *.py; do
    echo "Copying file $file"
    cp "$file" /tmp/python-shizzle
done

for file in *.sh; do
    echo "Copying file $file"
    cp "$file" /tmp/bash-shizzle
done