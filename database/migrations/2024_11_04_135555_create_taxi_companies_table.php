<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('taxi_companies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('name_normalized')->virtualAs("regexp_replace(name, '[^A-Za-z0-9]', '')")->index();
            $table->timestamps();

            $table->index(['name', 'name_normalized']);
        });
    }
};
