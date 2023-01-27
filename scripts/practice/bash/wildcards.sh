#!/bin/bash

ls ./*.py

if [ ! -e "/tmp/shizzle" ]; then
    mkdir /tmp/shizzle
fi

cp ./* /tmp/shizzle/


if [ ! -e "/tmp/shizzle2" ]; then
    mkdir /tmp/shizzle2
fi

cp ./?????-*.sh /tmp/shizzle2/

ls [hj]*.[ps][yh]

touch test
touch tebt
touch Test
touch TEST
touch 1test
touch done\?
touch done1

ls ./te[sb]t

ls ./te[!s]t

ls [[:upper:]]*

ls [a-zA-Z]*

ls [[:digit:]]*

ls done?
ls done\?

rm test
rm tebt
rm Test
rm TEST
rm 1test
rm done\?
rm done1