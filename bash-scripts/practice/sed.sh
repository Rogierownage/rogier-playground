#!/bin/bash

echo "Dwight is the assistant regional manager." > generated-files/manager.txt

cat generated-files/manager.txt

sed 's/ass/butt/' ./generated-files/manager.txt
sed 's/assistant/Assistant to the/' ./generated-files/manager.txt
# Note: The next line will not replace anything due to casing.
sed 's/Assistant/assistant to the/' ./generated-files/manager.txt
# Note: The next line uses the i flag for case-insensitive, and does work as a result.
sed 's/Assistant/assistant to the/i' ./generated-files/manager.txt