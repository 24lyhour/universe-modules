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
        Schema::create('notification_templates', function (Blueprint $table) {
            $table->id();
            $table->string('key')->index(); // Unique template key (e.g., 'welcome', 'order_confirmed')
            $table->string('name'); // Human-readable name
            $table->string('title'); // Notification title (supports interpolation)
            $table->text('body'); // Notification body (supports interpolation)
            $table->string('email_template')->nullable(); // Blade template path for emails
            $table->json('channels')->nullable(); // Default channels for this template
            $table->json('data')->nullable(); // Default data/variables
            $table->nullableMorphs('tenant'); // tenant_type, tenant_id for tenant-specific templates
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->softDeletes();

            // Unique key per tenant (or global if tenant is null)
            $table->unique(['key', 'tenant_type', 'tenant_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notification_templates');
    }
};
