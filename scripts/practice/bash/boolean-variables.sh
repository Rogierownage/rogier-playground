#!/bin/bash

# Note that true and false are actually commands that simply return 0 or non-zero exit status respectively.

echo "Check"
enabled="true"
if $enabled; then echo "Enabled"; else echo "Not enabled"; fi
$enabled && echo "Enabled using &&"

echo "Check"
enabled="false"
if $enabled; then echo "Enabled"; else echo "Not enabled"; fi
$enabled && echo "Enabled using &&"

echo "Check"
enabled=true
if $enabled; then echo "Enabled"; else echo "Not enabled"; fi
$enabled && echo "Enabled using &&"

echo "Check"
enabled=false
if $enabled; then echo "Enabled"; else echo "Not enabled"; fi
$enabled || echo "Enabled using ||"