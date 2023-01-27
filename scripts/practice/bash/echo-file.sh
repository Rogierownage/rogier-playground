#!/bin/bash

read -rp "How many lines do you want? " wantedLines
lineNumber=1

while read -r line; do
    if [ "$lineNumber" -gt "$wantedLines" ]; then
        break
    fi

    echo "$lineNumber: $line"

    ((lineNumber++))
done < /var/log/syslog