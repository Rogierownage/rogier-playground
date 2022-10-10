#!/bin/bash

host=$1

ping -c 1 "$host" > /dev/null
returnCode=$?

if [ "$returnCode" -eq "0" ]; then
    echo "Success"
else
    echo "Failure"
fi