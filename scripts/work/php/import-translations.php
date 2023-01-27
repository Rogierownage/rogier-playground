<?php

use Modules\Way2Translate\Models\Translation;
use League\Csv\Reader;

// Note: You have to install league/csv via composer before running this script.

dump('start');

$csv = Reader::createFromPath(storage_path('Vendr_translations_20221027.csv'), 'r');
$csv->setDelimiter(';');
$csv->setHeaderOffset(0);

$records = $csv->getRecords();

foreach ($records as $record) {
    $dutch = Translation::where('namespace', $record['Namespace'])->where('group', $record['Groep'])->where('name', $record['Naam'])->where('locale', 'nl')->firstOrFail();
    $english = Translation::where('namespace', $record['Namespace'])->where('group', $record['Groep'])->where('name', $record['Naam'])->where('locale', 'en')->firstOrFail();
  
    $dutch->value = $record['Nederlands'];
    $dutch->save();
  
    $english->value = $record['Engels'];
    $english->save();
}

dump('done');
