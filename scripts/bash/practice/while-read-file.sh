#!/bin/bash

echo "Test 1"

while read -r line; do
    echo "$line"
done < ./bash-scripts/practice/logit.sh

echo "Test 2"

cat ./bash-scripts/practice/logit.sh | while read -r line; do
    echo "$line"
done


echo "Test 3"

lineNumber=1

while read -r line; do
    echo "$lineNumber: $line"
    ((lineNumber++))
done < "$0"

echo "Test 4"

ls -lha | while read -r line; do
    echo "$line"
done

cat /etc/fstab

while read -r fs mp rest; do
    echo "FS: $fs | MP: $mp"
    echo "Rest: $rest"
done < /etc/fstab