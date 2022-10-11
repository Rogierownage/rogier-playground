#!/bin/bash

read -rp "Filename: " filename

if [ -f "$filename" ]; then
    echo "Regular file"
    exit 0
fi

if [ -d "$filename" ]; then
    echo "Directory"
    exit 1
fi

if [ -e "$filename" ]; then
    echo "Non-regular file"
    exit 2
fi

echo "Does not exist"
exit 3