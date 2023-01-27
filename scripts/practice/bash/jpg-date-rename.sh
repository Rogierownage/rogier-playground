#!/bin/bash

cd image-files || exit
pictures=$(ls *.jpg)
date=$(date +%F)

echo "Doing"

for picture in $pictures
do
    newName="$date-$picture"
    echo "Renaming $picture to $newName"
    cp "$picture" "$newName"
done