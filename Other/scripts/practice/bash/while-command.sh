#!/bin/bash

while ping -c 1 www.google.nl &> /dev/null; do
    echo "App is still up"
    sleep 3
done

echo "App is down"