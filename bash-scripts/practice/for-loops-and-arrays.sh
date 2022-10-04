#!/bin/bash

for varName in "Haha" "Bananen"
do
    echo "The var is $varName"
done

otherVar="Banaan"

for varName in "Haha" $otherVar
do
    echo "The var is $varName"
done

myArray=(1 2 "Haha")

echo ${myArray[2]}

echo "${myArray[0]} ${myArray[1]} ${myArray[2]}${myArray[3]}"

colorsString="Red Green Blue"

for varName in $colorsString 
do
    echo "Color $varName"
done

myArray=("red" "green" "blue" 15)
myArray+=("Yes" "No")

for varName in ${myArray[@]}
do
    echo "Array element: $varName"
done

arrayAsString=${myArray[@]}

echo "Array as string $arrayAsString"

for variable in 1 2 ${colorsString} ${myArray[@]}
do
    echo "Variable is: $variable"
done
