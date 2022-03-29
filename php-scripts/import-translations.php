<?php

use Modules\Way2Translate\Models\Translation;
use League\Csv\Reader;

dump('start');

//load the CSV document from a file path
$csv = Reader::createFromPath(storage_path('Vendr_translations_20220314.csv'), 'r');
$csv->setDelimiter(';');
$csv->setHeaderOffset(0);

$header = $csv->getHeader(); //returns the CSV header record
$records = $csv->getRecords(); //returns all the CSV records as an Iterator object

foreach ($records as $record) {
    $dutch = Translation::where('namespace', $record['Namespace'])->where('group', $record['Groep'])->where('name', $record['Naam'])->where('locale', 'nl')->firstOrFail();
    $english = Translation::where('namespace', $record['Namespace'])->where('group', $record['Groep'])->where('name', $record['Naam'])->where('locale', 'en')->firstOrFail();
  
    $dutch->value = $record['Nederlands'];
    $dutch->save();
  
    $english->value = $record['Engels'];
    $english->save();
}

dump('done');
exit();
