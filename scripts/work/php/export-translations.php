<?php

use League\Csv\Writer;
use Modules\Way2Translate\Models\Translation;

// Note: You have to install league/csv via composer before running this script.

// WARNING: This script does not encode everything correctly. For example eurosign characters get messed up.
// To fix this issue, after running this script, follow these steps in Excel:
// - Open a new blank workbook
// - In the topbar, go to "Data" -> "From Text/CSV"
// - Select the output file of this script
// - For "File origin" select "65001 Unicode (UTF-8)"
// - Click "Load" and save as a new file. Now this file should work.

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
