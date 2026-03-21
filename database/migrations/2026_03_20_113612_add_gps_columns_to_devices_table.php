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
            if (!Schema::hasColumn('devices', 'accuracy')) {
                $table->decimal('accuracy', 10, 2)->nullable()->after('longitude');
            }
            if (!Schema::hasColumn('devices', 'gps_enabled')) {
                $table->boolean('gps_enabled')->default(false)->after('accuracy');
            }
            if (!Schema::hasColumn('devices', 'location_updated_at')) {
                $table->timestamp('location_updated_at')->nullable()->after('gps_enabled');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('devices', function (Blueprint $table) {
            $columns = ['accuracy', 'gps_enabled', 'location_updated_at'];
            foreach ($columns as $column) {
                if (Schema::hasColumn('devices', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
