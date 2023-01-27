#!/bin/bash

if [ -n "$0" ]; then
    echo "\$0 is not empty: $0"
else
    echo "\$0 is empty"
fi

if [ -n "$1" ]; then
    echo "\$1 is not empty: $1"
else
    echo "\$1 is empty"
fi

if [ -n "$2" ]; then
    echo "\$2 is not empty: ${2}ing"
else
    echo "\$2 is empty"
fi

username=$3

echo "$username"
echo "$@"

parameterCounter=1

for parameter in "$@"
do
    echo "parameter$parameterCounter: $parameter"

    parameterCounter=$((parameterCounter+1))
done