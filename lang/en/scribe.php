<?php

// phpcs:disable Generic.Files.LineLength.TooLong

return [
    'max_length' => 'Must not be greater than :max characters.',

    'example' => [
        'address' => 'Soesterweg 100',
        'zipcode' => '3810 AN',
        'city' => 'Amersfoort',
    ],

    'attributes' => [
        'from_address' => 'The origin\'s street name and number.',
        'from_zipcode' => 'The origin\'s zipcode.',
        'from_city' => 'The origin\'s city.',
        'to_zipcode' => 'The destination\'s zipcode.',
        'to_address' => 'The destination\'s street name and number.',
        'to_city' => 'The destination\'s city.',
    ]
];
