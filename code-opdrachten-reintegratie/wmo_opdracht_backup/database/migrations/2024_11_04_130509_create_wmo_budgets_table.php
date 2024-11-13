<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('wmo_budgets', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id');
            $table->boolean('active')->default(true);
            $table->decimal('current_budget', 10, 3, true);
            $table->decimal('yearly_budget', 10, 3, true);
            $table->date('current_budget_set_at');

            $table->timestamps();

            $table->foreign('user_id')
                ->references(['id'])
                ->on('users')
                ->restrictOnUpdate()
                ->restrictOnDelete();
        });
    }
};
