<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('movices', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->string('description');
            $table->string('custom_id')->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('image');
            $table->string('video');
            $table->string('price');
            $table->string('category');
            $table->string('tags');
            $table->string('status');
            $table->string('rating');
            $table->string('review');
            $table->string('views');
            $table->string('likes');
            $table->string('dislikes');
            $table->string('comments');
            $table->string('shares');
            $table->string('downloads');
            $table->string('watch_time');
            $table->string('watch_count');
            $table->string('watch_date');
            $table->string('watch_time');
            $table->string('watch_count');
            $table->string('watch_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movices');
    }
};
