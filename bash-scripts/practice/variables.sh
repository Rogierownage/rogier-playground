#!/bin/bash
variableName="bash";

echo "I like bananas"
echo "I like $variableName"
echo "I like ${variableName} and other stuff"
echo $variableName
echo "$variableName"
echo "I am $variableNameing on my keyboard"
echo "I am ${variableName}ing on my keyboard"

variableTwo=$(pwd)

echo "My pwd is: $variableTwo"
echo "My pwd is: $PWD"

variableThree=$(hostname)

echo "You are running this script on $variableThree"

variableThree='banana'

echo "You are running this script on $variableThree"

variableThree=Banana

echo "You are running this script on $variableThree"

variableThree=`hostname`

echo "You are running this script on $variableThree"