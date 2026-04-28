<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * `logo_url` is now created directly in
 * Modules/Hotel/database/migrations/.../create_provinces_table.php.
 *
 * This older "add" migration is kept for environments that ran the
 * create-provinces migration before the column was added — it's a
 * no-op on fresh installs (Schema::hasColumn guards both ways).
 */
return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('provinces') || Schema::hasColumn('provinces', 'logo_url')) {
            return;
        }

        Schema::table('provinces', function (Blueprint $table) {
            $table->string('logo_url')->nullable()->after('code');
        });
    }

    public function down(): void
    {
        if (!Schema::hasTable('provinces') || !Schema::hasColumn('provinces', 'logo_url')) {
            return;
        }

        Schema::table('provinces', function (Blueprint $table) {
            $table->dropColumn('logo_url');
        });
    }
};
