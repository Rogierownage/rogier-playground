#!/bin/bash

echo "hello world" > generated-files/input.txt
sed 's/hello/world/' ./generated-files/input.txt > ./generated-files/output.txt

./show-input-file.sh
./show-output-file.sh

echo "hello world" > generated-files/input.txt
# Note: Since -i is used, sed does its changes inside the input file and has no output. Therefore, output.txt becomes empty. You should not use it like this.
sed -i 's/hello/world/' ./generated-files/input.txt > ./generated-files/output.txt

./show-input-file.sh
./show-output-file.sh