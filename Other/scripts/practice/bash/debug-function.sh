#!/bin/bash

function debug() {
    echo "DEBUG: Executing command: $@"
    $@
}

debug ls
debug ping -c 1 google.nl