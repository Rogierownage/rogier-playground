#!/bin/bash

filename=$1

if [ -f "$filename" ]; then
    echo "File is a regular file"

    exit 0
fi

if [ -d "$filename" ]; then
    echo "File is a directory"

    exit 0
fi

echo "File is a non-regular file"