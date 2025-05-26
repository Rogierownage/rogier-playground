<?php

function split_list(array $list, int $maxSize) : array
{
    return array_chunk($list, $maxSize);
}

var_dump(split_list([1,2,3,4,5,6,7,8,9,10], 3));
