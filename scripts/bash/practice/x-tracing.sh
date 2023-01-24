#!/bin/bash -x

# Note that the shebang contains -x at the end to enable x-tracing

echo "Haha"

numbers="{1..5}"

for i in $numbers; do
    echo "$i"
done