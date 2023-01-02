#!/bin/bash

echo "Ik eet bananen." > generated-files/delete.txt
echo "En appels." > generated-files/delete.txt

sed -i '/ban/d' generated-files/delete.txt

cat generated-files/delete.txt

echo > generated-files/delete.txt
echo "# Comment goes here" >> generated-files/delete.txt
echo "Actual code" >> generated-files/delete.txt

sed -i '/^#.*/d ; /^$/d ; s/Actual/Crap/g' generated-files/delete.txt

cat generated-files/delete.txt

echo > generated-files/delete.txt
echo "# Comment goes here" >> generated-files/delete.txt
echo "Actual code" >> generated-files/delete.txt

sed -i -e '/^#.*/d' -e '/^$/d' -e 's/Actual/Crap/g' generated-files/delete.txt

cat generated-files/delete.txt