#!/bin/bash

filename=$1

if [ -z "$filename" ]
then
    echo "Filename is empty"

    exit 1
fi

if [ ! -e "$filename" ]
then
    echo "File does not exist"

    exit 1
fi

./determine-file-type.sh "$filename"

ls "$filename" -lha