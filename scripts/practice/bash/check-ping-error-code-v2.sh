#!/bin/bash

read -rp "Enter host: " host
ping -c 1 "$host"

if [ "$?" -ne "0" ]; then
    echo "$host unreachable"

    exit 1
fi

exit 0