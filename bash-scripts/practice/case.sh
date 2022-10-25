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