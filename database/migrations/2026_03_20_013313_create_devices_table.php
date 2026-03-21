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
        Schema::create('devices', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();

            // Polymorphic relationship (User, Customer, Employee, etc.)
            $table->morphs('deviceable');

            // Device identification
            $table->string('device_id')->nullable(); // Unique device identifier
            $table->string('device_type')->default('mobile'); // mobile, tablet, desktop, web
            $table->string('device_name')->nullable(); // "John's iPhone"

            // FCM token for push notifications
            $table->text('fcm_token')->nullable();

            // Device info
            $table->string('device_os')->nullable(); // iOS, Android, Windows, macOS
            $table->string('device_os_version')->nullable(); // 17.0, 14, etc.
            $table->string('device_model')->nullable(); // iPhone 15, Pixel 8, etc.
            $table->string('device_brand')->nullable(); // Apple, Samsung, Google
            $table->string('browser')->nullable(); // Chrome, Safari, Firefox
            $table->string('browser_version')->nullable();

            // Login tracking
            $table->string('ip_address')->nullable();
            $table->string('location')->nullable(); // City, Country

            // GPS / Location tracking
            $table->decimal('latitude', 10, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->decimal('accuracy', 10, 2)->nullable(); // GPS accuracy in meters
            $table->boolean('gps_enabled')->default(false); // Device has GPS enabled
            $table->timestamp('location_updated_at')->nullable();

            // Timestamps
            $table->timestamp('last_used_at')->nullable();
            $table->timestamp('last_login_at')->nullable();
            $table->boolean('is_active')->default(true);
            $table->boolean('is_trusted')->default(false); // User marked as trusted
            $table->timestamps();

            // Indexes (morphs already creates index on deviceable_type, deviceable_id)
            $table->index('device_id');
            $table->index('is_active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('devices');
    }
};
