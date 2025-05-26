#!/bin/bash

function hello() {
    local localVar=Haha banaan="$1" aLocalVariable

    echo "$localVar"
    echo "$banaan"

    read -rp "Enter something: " aLocalVariable

    echo "$aLocalVariable"
}

hello He he

echo "$localVar" # nothing
echo "$banaan" # nothing
echo "$aLocalVariable" # nothing