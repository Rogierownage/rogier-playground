#!/bin/bash

read -rp "Enter a word: " word

case $word in
    haha|HAHA)
        echo "The word is haha"
        echo "It is indeed haha"
        ;;
    banaan)
        echo "The word is banaan"
        ;;
    *)
        echo "Default"
        ;;
esac

read -rp "Enter y/n: " answer

case $answer in 
    [yY]|[yY][eE][sS])
        echo "You answered yes"
        ;;
    [nN]|[nN][oO])
        echo "You answered no"
        ;;
    *)
        echo "Invalid answer"
        ;;
esac

if [[ "$answer" = [yY] ]]; then
    echo "Yes"
fi

read -rp "Enter a character: " character

case $character in
    [[:alpha:]])
        echo "Alphabetic character"
        ;;
    [[:digit:]])
        echo "Numeric character"
        ;;
    [[:alnum:]])
        # Note: This is never executed because the other cases take precendence.
        echo "Alphanumeric character"
        ;;
esac