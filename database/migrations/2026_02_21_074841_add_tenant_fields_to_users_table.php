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
        Schema::table('users', function (Blueprint $table) {
            $table->string('tenant_type')->nullable()->after('role');
            $table->unsignedBigInteger('tenant_id')->nullable()->after('tenant_type');
            $table->index(['tenant_type', 'tenant_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIndex(['tenant_type', 'tenant_id']);
            $table->dropColumn(['tenant_type', 'tenant_id']);
        });
    }
};
