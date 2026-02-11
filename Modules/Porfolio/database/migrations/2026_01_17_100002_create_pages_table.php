<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('portfolio_pages', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique()->nullable();
            $table->foreignId('parent_id')->nullable()->constrained('portfolio_pages')->nullOnDelete();
            $table->foreignId('header_id')->nullable()->constrained('portfolio_headers')->nullOnDelete();
            $table->foreignId('footer_id')->nullable()->constrained('portfolio_footers')->nullOnDelete();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->longText('content')->nullable();
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->json('meta_keywords')->nullable();
            $table->string('featured_image')->nullable();
            $table->string('template')->default('default');
            $table->string('layout')->default('default');
            $table->json('settings')->nullable();
            $table->boolean('is_homepage')->default(false);
            $table->boolean('is_active')->default(true);
            $table->boolean('is_in_menu')->default(true);
            $table->integer('menu_order')->default(0);
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->index(['is_active', 'is_homepage']);
            $table->index(['is_in_menu', 'menu_order']);
            $table->index(['slug', 'is_active']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('portfolio_pages');
    }
};
