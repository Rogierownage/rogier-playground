#!/bin/bash

function test() {
    for param in "$@"
    do
        echo "$param"
    done

    # This is not the name of the function, but rather the name of the script.
    echo "$0"

    hello "Rogier"
}

function hello() {
    echo "Hello $1!"
}

test "param1" "param2" "Ha" "Hello"