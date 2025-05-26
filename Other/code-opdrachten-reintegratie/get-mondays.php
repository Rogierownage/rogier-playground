<?php

use Carbon\Carbon;
use Carbon\CarbonPeriod;

require 'vendor/autoload.php';

function get_mondays(Carbon $startDate, Carbon $endDate) : array
{
    $period = (new CarbonPeriod($startDate, $endDate));
    $validMondays = [];

    foreach ($period as $date) {
        if ($date->isMonday() && $date->diffInDays($endDate) >= 6) {
            $validMondays[] = $date;
        }
    }

    return $validMondays;
}

$mondays = get_mondays(Carbon::parse('08-10-2024'), Carbon::parse('02-11-2024'));

var_dump(array_map(
    fn (Carbon $date) => $date->format('d-m-Y'),
    $mondays
));
