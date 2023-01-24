<?php

use League\Csv\Writer;
use Modules\Way2Translate\Models\Translation;

$result = [];
$allDutch = Translation::where('locale', 'nl')->get();

foreach ($allDutch as $dutch) {
    $english = Translation::where('group', $dutch->group)
        ->where('namespace', $dutch->namespace)
        ->where('name', $dutch->name)
        ->where('locale', 'en')
        ->firstOrFail();

    $result[] = [$dutch->namespace, $dutch->group, $dutch->name, $dutch->value, $english->value];
}

$header = ['Namespace','Groep','Naam','Nederlands','Engels'];
$records = $result;

$csv = Writer::createFromString();

$csv->setDelimiter(';');

$csv->insertOne($header);

$csv->insertAll($records);

file_put_contents(storage_path('app/export.csv'), $csv->toString());
