#!/bin/bash

suffix=$1

read -rp "Enter a prefix: " prefix

if [ -z "$suffix" ]; then
    suffix=".sh"
fi

ls ./*"$suffix"

for file in *"$suffix"; do
    cp "$file" "/tmp/${prefix}${file}"
done