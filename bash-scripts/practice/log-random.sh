#!/bin/bash

function logRandomNumber () {
    local number=$RANDOM

    echo "$number"

    logger -t randomly -i -p user.info $number
}

for i in {1..3}; do
    logRandomNumber
done
