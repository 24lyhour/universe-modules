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
        Schema::create('delivery_rider', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();

            $table->string('rider_name');
            $table->string('rider_number')->nullable();
            $table->string('phone_number')->nullable();

            $table->string('vehicle_type')->nullable();
            $table->string('vehicle_plate')->nullable();

            $table->unsignedBigInteger('delivery_id')->nullable();

            $table->string('status')->default('pending'); // active, inactive, etc
            $table->boolean('is_available')->default(false);

            $table->string('current_location')->nullable();
            $table->decimal('current_lat', 10, 7)->nullable();
            $table->decimal('current_long', 10, 7)->nullable();

            $table->decimal('rating', 3, 2)->default(0); // e.g. 4.50

            $table->string('device_token')->nullable();
            $table->boolean('gps_status')->default(false);

            $table->integer('total_orders')->default(0);
            $table->decimal('total_earnings', 12, 2)->default(0);

            $table->decimal('commission_rate', 5, 2)->default(0); // percentage

            $table->json('documents')->nullable(); // store files or images

            $table->boolean('is_active')->default(true);

            $table->text('notes')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('delivery_rider');
    }
};
