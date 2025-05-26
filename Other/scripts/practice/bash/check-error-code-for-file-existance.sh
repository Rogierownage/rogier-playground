#!/bin/bash

./examine-param-file-single.sh "$1"

if [ $? -eq 1 ]; then
    echo "Check: Filename is empty or file does not exist"
else
    echo "Check: File does exist"
fi