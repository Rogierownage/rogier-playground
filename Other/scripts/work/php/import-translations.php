<?php

use Modules\Way2Translate\Models\Translation;
use League\Csv\Reader;

// Note: You have to install league/csv via composer before running this script.

// To use this script, make sure all the translations are present in your local database. Then copy-paste this to Web Tinker.
// You can use the file that is created from the export-translations.php script, after the client has editted it.
// Change the storage_path to where the file is located. Make sure the delimiter is correct. Then run the script.
// After you run the script, all the values from the CSV file should be updated in your local database. Then just insert that into the live/accept database.
// Don't forget to clear the translations cache. This can be done by logging in and editing a translation. This will activate the code that resets the cache.

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
