<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\SimpleExcel\SimpleExcelReader;
use Illuminate\Support\Str;
use Spatie\SimpleExcel\SimpleExcelWriter;

class ExtractChaptersFromCsv extends Command
{
    /**
     * @var string
     */
    protected $signature = 'csv:extract-chapters';

    /**
     * @var string
     */
    protected $description = 'Takes only the chapters from a CSV file and puts them in another CSV file. ' .
        'Note: This command is very specific to one specific use case.';

    /**
     * @return mixed
     */
    public function handle()
    {
        $inputPath = storage_path('app/input.csv');
        $outputPath = storage_path('app/output.csv');

        $chapterRows = SimpleExcelReader::create($inputPath)
            ->getRows()
            ->map(function (array $row) {
                $row['Label'] = str_replace(' ', '', $row['Label']);
                $row['Label'] = trim($row['Label']);
                $row['Title'] = trim($row['Title']);

                return $row;
            })
            ->filter(function (array $row) {
                return preg_match('/^\d{1,3}$/', $row['Label']);
            })
            ->map(function (array $row) {
                $row['Label'] = Str::padLeft($row['Label'], 2, '0');

                return $row;
            });

        SimpleExcelWriter::create($outputPath)->addRows($chapterRows);
    }
}
