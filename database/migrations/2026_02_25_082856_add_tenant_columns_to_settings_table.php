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
        // Add tenant columns if they don't exist (for production)
        if (! Schema::hasColumn('settings', 'tenant_type')) {
            Schema::table('settings', function (Blueprint $table) {
                $table->string('tenant_type')->nullable()->after('type');
                $table->unsignedBigInteger('tenant_id')->nullable()->after('tenant_type');
                $table->index(['tenant_type', 'tenant_id'], 'settings_tenant_index');
            });
        }

        // Try to drop old unique constraint (ignore if doesn't exist)
        try {
            Schema::table('settings', function (Blueprint $table) {
                $table->dropUnique(['group', 'key']);
            });
        } catch (\Exception $e) {
            // Constraint doesn't exist, continue
        }

        // Add new unique constraint with tenant columns
        Schema::table('settings', function (Blueprint $table) {
            $table->unique(['group', 'key', 'tenant_type', 'tenant_id'], 'settings_unique');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('settings', function (Blueprint $table) {
            $table->dropUnique('settings_unique');
        });

        if (Schema::hasColumn('settings', 'tenant_type')) {
            Schema::table('settings', function (Blueprint $table) {
                $table->dropIndex('settings_tenant_index');
                $table->dropColumn(['tenant_type', 'tenant_id']);
            });
        }
    }
};
