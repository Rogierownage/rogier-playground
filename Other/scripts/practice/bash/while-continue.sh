#!/bin/bash

cp "$0" /dev/tty
lineNumber=0

while read -r line; do
    ((lineNumber++))

    read -rp "Do you want to print line $lineNumber? y/n: " answer < /dev/tty
    
    if [ "$answer" != 'y' ] && [ "$answer" != 'Y' ]; then
        continue
    fi
    
    echo "$line"
done < "$0"
