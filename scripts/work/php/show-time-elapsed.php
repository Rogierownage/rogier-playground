<?php

function showTimeElapsed($label, $operation)
{
    $timeBefore = microtime(true);

    $result = $operation();

    $timeAfter = microtime(true);
    
    dump($label . ': Took ' . ($timeAfter - $timeBefore) . ' seconds');

    return $result;
}
