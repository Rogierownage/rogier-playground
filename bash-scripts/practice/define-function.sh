#!/bin/bash

function hello() {
    echo "Hello!"
    now
}
function now() {
    echo "It's $(date +%r)"
}

# This works because hello and now are defined, even though now is not defined when hello is defined.
hello
# This does not work because the function is defined later
hey

function hey() {
    echo "Hey!"
}