#!/bin/bash

cd ../image-files
pictures=$(ls *.jpg)
date=$(date +%F)

for picture in $pictures
do
    newName="$date-$picture"
    echo "Renaming $picture to $newName"
    cp "$picture" "$newName"
done