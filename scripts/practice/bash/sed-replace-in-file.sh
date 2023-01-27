#!/bin/bash

echo "hello world" > generated-files/input.txt
sed -i 's/hello/world/' ./generated-files/input.txt

./show-input-file.sh