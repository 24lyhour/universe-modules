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
        Schema::create('notification_logs', function (Blueprint $table) {
            $table->id();
            $table->morphs('notifiable'); // notifiable_type, notifiable_id
            $table->string('channel', 50)->index(); // push, email, sms, telegram, etc.
            $table->string('type')->index(); // Notification type (e.g., 'welcome', 'device_login')
            $table->json('payload'); // Full notification payload
            $table->string('recipient_id')->nullable(); // Email, phone, chat_id, etc.
            $table->string('message_id')->nullable(); // External message ID (from provider)
            $table->boolean('success')->default(false)->index();
            $table->text('error')->nullable(); // Error message if failed
            $table->json('metadata')->nullable(); // Additional metadata
            $table->nullableMorphs('tenant'); // tenant_type, tenant_id
            $table->timestamps();

            // Index for analytics queries
            $table->index(['channel', 'success', 'created_at']);
            $table->index(['type', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notification_logs');
    }
};
