#!/bin/bash

case $1 in
    start)
        echo "Starting"
        
        /tmp/sleepwalkingserver &
        ;;
    stop)
        kill $(cat /tmp/sleepwalkingserver.pid)
        ;;
    *)
        echo "Invalid argument. Use start|stop"
        exit 1
        ;;
esac