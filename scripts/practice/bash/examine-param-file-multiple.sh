#!/bin/bash

for filename in "$@"
do
    echo
    echo "Filename is: $filename"

    if [ -z "$filename" ]
    then
        echo "Filename is empty"

        continue
    fi

    if [ ! -e "$filename" ]
    then
        echo "File does not exist"

        continue
    fi

    ./determine-file-type.sh "$filename"

    ls "$filename" -lha
done