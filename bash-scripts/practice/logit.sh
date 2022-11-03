#!/bin/bash

function logit() {
    local logLevel message timestamp
    logLevel=$1
    shift
    message=$@
    timestamp=$(date +"%Y-%m-%d %T")

    if [ "$logLevel" = 'ERROR' ] || [ "$VERBOSE" = '1' ]
    then
        echo "${timestamp} ${HOSTNAME} ${0} [${$}]: ${logLevel} ${message}"
    fi
}

logit $@