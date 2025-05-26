#!/bin/bash

function hello() {
    echo "Hello $1!"
    
    exit # Exits the entire script, not just the function. Use `return` to exit only the function.
}

function test() {
    echo "Test"

    return 1
}

function test2() {
    echo "Test2"
}

function test3() {
    echo "Test3"

    touch wdkieaidwhuhtrbjr5iusbresjp/uhgruhrgugduih &> /dev/null
}

test

echo "Error code: $?"

test2

echo "Error code: $?"

test3

echo "Error code: $?"

hello "Rogier" # Everything after this line is not executed because the function exits the entire script.

echo "Error code: $?" # This line is not executed.