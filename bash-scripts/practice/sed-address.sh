#!/bin/bash

echo "Apache." > generated-files/server.txt
echo "Apache server." >> generated-files/server.txt
echo "Apache is very cool." >> generated-files/server.txt
echo "Gotta love apache." >> generated-files/server.txt

sed '2 s/apache/nginx/i' generated-files/server.txt
echo
sed '/^.*s.*$/ s/apache/nginx/i' generated-files/server.txt
echo
sed '2,3 s/apache/nginx/i' generated-files/server.txt
echo
sed '/server/,4 s/apache/nginx/i' generated-files/server.txt
echo
sed '/server/,/^$/ s/apache/nginx/i' generated-files/server.txt
echo
sed '/^.*$/d' generated-files/server.txt
