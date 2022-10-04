#!/bin/bash
pictures=$(ls *.jpg)
date=$(date +%F)

echo $pictures
echo $date

for picture in $pictures
do
    cp "$picture" "$date-$picture"
done