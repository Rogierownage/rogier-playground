#!/bin/bash

function count_files() {
    local wordCount

    wordCount=$(ls "$1" | wc -w)

    echo "$1":
    echo "$wordCount"
}

count_files "$PWD"
count_files /etc
count_files /var
count_files /usr/bin


