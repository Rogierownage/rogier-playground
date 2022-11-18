#!/bin/bash

ping -c 1 banaan &> /dev/null

set -e

echo "Hello"

set +e

echo "Hehe"

set -e

ping -c 1 banaan &> /dev/null

set +e

echo "Unreachable"