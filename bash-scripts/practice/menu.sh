#!/bin/bash

echo "1. Show disk usage."
echo "2. Show system uptime."
echo "3. Show the users logged into the system."
read -rp "Choose an option from above (Or 'q' to quit): " input

case "$input" in
    1)
        df

        ;;
    2)
        uptime

        ;;
    3)
        who

        ;;
    q)
        echo "Goodbye!"

        ;;
    *)
        echo "Invalid!"
        ;;
esac