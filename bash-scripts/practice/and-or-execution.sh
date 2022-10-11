#!/bin/bash

echo "Echo \"Haha\" if the file exists"

./examine-param-file-single.sh "$1" && echo "Haha"

echo "Echo \"Hihi\" if the file does not exist"

./examine-param-file-single.sh "$1" || echo "Hihi"