#!/bin/bash

echo "I love bananas" > ./generated-files/bananas.txt
echo "I really love bananas" >> ./generated-files/bananas.txt
echo "For real" >> ./generated-files/bananas.txt
echo "I love, love, love them" >> ./generated-files/bananas.txt

echo
# Only replaces the first occurence on a line.
sed 's/love/like/' ./generated-files/bananas.txt

echo
# Replaces all occurences in the file.
sed 's/love/like/g' ./generated-files/bananas.txt

echo
# Replaces the second occurence only, for each line.
sed 's/love/like/2' ./generated-files/bananas.txt

echo
# Places the output in the file bananas-like.txt
sed 's/love/like/gw ./generated-files/bananas-like.txt' ./generated-files/bananas.txt
echo
cat ./generated-files/bananas-like.txt

echo
# Puts a backup of the file into bananas.txt.bak before it replaces anything.
sed -i.bak 's/love/like/g' ./generated-files/bananas.txt
cat ./generated-files/bananas.txt
echo
cat ./generated-files/bananas.txt.bak