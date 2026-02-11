<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('portfolio_headers', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique()->nullable();
            $table->string('title')->nullable();
            $table->string('logo')->nullable();
            $table->string('logo_alt')->nullable();
            $table->json('navigation')->nullable();
            $table->json('actions')->nullable();
            $table->string('style')->default('default');
            $table->string('position')->default('fixed');
            $table->string('background_color')->nullable();
            $table->string('text_color')->nullable();
            $table->boolean('is_transparent')->default(false);
            $table->boolean('show_search')->default(false);
            $table->boolean('show_language_switcher')->default(false);
            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
            $table->softDeletes();

            $table->index(['is_active', 'sort_order']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('portfolio_headers');
    }
};
