<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('regions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('taxi_company_id');

            $table->string('name');
            $table->timestamps();

            $table->foreign('taxi_company_id')
                ->references(['id'])
                ->on('taxi_companies')
                ->restrictOnUpdate()
                ->restrictOnDelete();
        });
    }
};
