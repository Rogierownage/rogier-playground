#!/bin/bash

read -rp "Enter a file or directory path: " filename

if [ -z "$filename" ]
then
    echo "Filename is empty"

    exit 1
fi

if [ ! -e "$filename" ]
then
    echo "File does not exist"

    exit 0
fi

./determine-file-type.sh "$filename"

ls "$filename" -lha