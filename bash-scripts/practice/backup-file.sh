#!/bin/bash

function backupFile() {
    local oldPath="$1" newPath

    if [ -f "$oldPath" ]; then
        newPath=/tmp/$(basename "$oldPath").$(date +%F).$$

        echo copying "$oldPath" to "$newPath"

        cp "$oldPath" "$newPath"

        return
    fi

    return 1
}

backupFile "$@"

echo "Exit status of backup: $?"

