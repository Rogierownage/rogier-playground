#!/bin/bash

function hello() {
    echo "Hello $1!"

    echo "\$1 is $1"
}

function hey() {
    echo "Hey function with parameters"
    echo "$@"

    hello "$2"
    
    echo "\$1 is $1"
}

function usesGlobalVariable() {
    echo "$globalVariable"
}

function definesGlobalVariable() {
    globalVariable="Hey"
}

hey "Name1" "Name2"

usesGlobalVariable # echos nothing
definesGlobalVariable
usesGlobalVariable # echos "Hey"