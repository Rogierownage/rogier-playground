#!/bin/bash
if [ -e /etc/passwd ]
then
    echo 'Condition is true'
fi

touch file
if [ -x file ]
then
    echo "File is executable 1"
fi
chmod 755 file
if [ -x file ]
then
    echo "File is executable 2"
fi
rm file

mkdir dir
if [ -d dir ]
then
    echo "File is directory 3"
fi
rm -r dir

directory=$(pwd)
echo "$directory"

if [ -n "$directory" ]
then
    echo "Condition is true"
fi

if [ -n "Haha" ]
then
    echo "String is not empty"
fi

if [ haha ]
then
    echo "Test"
fi

if [ 1 -gt 0 ]
then
    echo "Test2"
fi

if [ -d "/etc/" ]
then
    echo "Test3"
fi

if [ 1 = 1 ]
then
    echo "Test3"
fi

if [ 1 != 1 ]
then
    echo "Test4"
fi

if [ 1 -gt 0 ]
then
    echo "Test5"
fi

if [ "Haha" = "Haha" ]
then
    echo "Test6"
fi

banaan=6
banaan2=06

echo "$banaan$banaan2"

if [ $banaan != $banaan2 ]
then
    echo "not equal (as string)"
fi

if [ $banaan -le $banaan2 ]
then
    echo "Less than or equal"
fi

if [ "Haha" = "Haha" ]
then
    echo "Test6"
fi 

var1=5
var2=05

if [ $var1 -eq $var2 ]
then
    echo "$var1 is equal to $var2 (arithmetic)"
fi
if [ $var1 = $var2 ]
then
    echo "$var1 is equal to $var2 (string)"
fi

variable="Haha"
if [ $variable = "Haha" ]
then
    echo "Yes"
fi

variable="Haha"
if [ "$variable" = "Haha" ]
then
    echo "Yes"
fi

variable2=2
if [ $variable2 -gt 01 ]
then
    echo "Yes2"
fi

variable2=2
if [ "$variable2" -gt "01" ]
then
    echo "Yes2"
fi

myShell="Bash"
quality="good"

if [ "$myShell is good" = "Bash is $quality" ]
then
    echo "It is Bash"
fi

number="5"

if [ "$number" -eq "3" ]
then
    echo "${number}=3"
else
    echo "${number}!=3"
fi

number1=$RANDOM
number2=$RANDOM

if [ "$number1" -le "$number2" ]
then
    echo "${number1}<=${number2}"
else
    echo "${number1}>${number2}"
fi

myShell="csh"

if [ "$myShell" = "Bash" ]
then    
    echo "It is Bash"
else
    echo "It is not bash"
fi

number=$RANDOM

if [ "$number" -le "10000" ]
then
    echo "$number <= 10000"
elif [ "$number" -le "20000" ]
then
    echo "10000 < $number <= 20000"
elif [ "$number" -le "30000" ]
then
    echo "20000 < $number <= 30000"
else
    echo "30000 < $number <= 32767"
fi

if [ -e /etc/shadow ]
then
    echo "Shadow passwords are enabled"

    if [ -w /etc/shadow ]
    then
        echo "You have permissions to edit /etc/shadow"
    else
        echo "You do NOT have permissions to edit /etc/shadow"
    fi
fi


