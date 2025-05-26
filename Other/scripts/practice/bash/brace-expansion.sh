#!/bin/bash

echo "Hallo, "{Rogier,Jorick,Johan}.
echo hallo," "Rogier. hallo," "Jorick. hallo," "Johan.

variable=( {1..20} )

echo "${variable[@]}"

for number in {1..30}
do
    echo "$number"
done

for number in "${variable[@]}" {1..30}
do
    echo "$number"
done

echo {a..z..2}

echo {01..999}