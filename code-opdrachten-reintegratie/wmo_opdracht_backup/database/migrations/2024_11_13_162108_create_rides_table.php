<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rides', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id');

            $table->decimal('distance', 10, 3, true);
            $table->string('from_address');
            $table->string('from_zip_code');
            $table->string('from_city');
            $table->string('to_address');
            $table->string('to_zip_code');
            $table->string('to_city');

            $table->timestamps();

            $table->foreign('user_id')
                ->references(['id'])
                ->on('users')
                ->restrictOnUpdate()
                ->restrictOnDelete();
        });
    }
};
