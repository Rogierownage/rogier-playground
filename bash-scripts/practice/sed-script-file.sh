#!/bin/bash

echo '/^#.*$/d' > generated-files/script.txt
echo '/^$/d' >> generated-files/script.txt
echo 's/Actual/Crap/' >> generated-files/script.txt

echo > generated-files/delete.txt
echo "# Comment goes here" >> generated-files/delete.txt
echo "Actual code" >> generated-files/delete.txt

sed -i -f generated-files/script.txt generated-files/delete.txt

cat generated-files/delete.txt