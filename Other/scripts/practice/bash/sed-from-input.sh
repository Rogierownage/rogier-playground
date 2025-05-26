#!/bin/bash

echo "hello Rogier" > ./generated-files/input.txt

# With dash to specify that stdin should be used. Note that you could just put the filename as the second parameter instead.
sed 's/hello/bye/' - < ./generated-files/input.txt > ./generated-files/output.txt
./show-output-file.sh

# Omitting second parameter. Stdin should be used. Note that you could just put the filename as the second parameter instead.
sed 's/hello/bye/' < ./generated-files/input.txt > ./generated-files/output.txt
./show-output-file.sh

# Passing stdin through pipe with echo
echo "hello Rogier" | sed 's/hello/bye/' > ./generated-files/output.txt
./show-output-file.sh

# Passing stdin through pipe with cat. This is pointless because you can just put the file as the second parameter of sed.
cat ./generated-files/input.txt | sed 's/hello/bye/' > ./generated-files/output.txt
./show-output-file.sh