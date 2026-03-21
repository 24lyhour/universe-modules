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
        Schema::table('devices', function (Blueprint $table) {
            $table->decimal('accuracy', 10, 2)->nullable()->after('longitude');
            $table->boolean('gps_enabled')->default(false)->after('accuracy');
            $table->timestamp('location_updated_at')->nullable()->after('gps_enabled');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('devices', function (Blueprint $table) {
            $table->dropColumn(['accuracy', 'gps_enabled', 'location_updated_at']);
        });
    }
};
