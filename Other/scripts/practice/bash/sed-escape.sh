#!/bin/bash

echo "apples/bananas/oranges" > ./generated-files/escape.txt

# Escaping the slash with a backslash.
sed 's/\//, /g' ./generated-files/escape.txt

# The character used after s is used as the delimiter.
sed 's#/#, #g' ./generated-files/escape.txt