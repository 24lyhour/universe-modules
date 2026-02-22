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
        Schema::create('user_tenants', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('tenant_type');
            $table->unsignedBigInteger('tenant_id');
            $table->string('role')->nullable(); // Role within this tenant
            $table->boolean('is_primary')->default(false);
            $table->timestamps();

            $table->unique(['user_id', 'tenant_type', 'tenant_id']);
            $table->index(['tenant_type', 'tenant_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_tenants');
    }
};
