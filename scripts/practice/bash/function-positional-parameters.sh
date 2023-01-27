#!/bin/bash

function test() {
    for param in "$@"
    do
        echo "$param"
    done

    # This echos not the name of the function, but rather the name of the script.
    echo "$0"

    hello "Rogier"
}

function hello() {
    echo "Hello $1!"
}

test "Word1 Word2" "Ha" "Hello"