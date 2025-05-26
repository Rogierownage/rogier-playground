<?php

declare(strict_types=1);

for ($i = 1; $i <= 100; $i++) {
    $message = $i . ': ';

    if ($i % 3 === 0) {
        $message .= 'Fizz';
    }

    if ($i % 5 === 0) {
        $message .= 'Buzz';
    }

    echo  $message . PHP_EOL;
}
