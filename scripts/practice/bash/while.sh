#!/bin/bash

number=22222

while [ $number -gt 15000 ]; do
    echo $number

    number=$RANDOM
done

index=1
while [ $index -lt 6 ]; do
    echo $index
    ((index++))
done

for index in {1..5} ; do
    echo "$index"
done

read -rp "Enter the amount of loops: " index

for i in $(seq 1 "$index"); do
    echo "$i"
done

while [ "$correct" != "y" ]; do
    read -rp "Enter a number: " number
    read -rp "Is $number correct? y/n: " correct
done

echo "Your number is $number"

while true; do
    echo "Haha"

    sleep 1
done