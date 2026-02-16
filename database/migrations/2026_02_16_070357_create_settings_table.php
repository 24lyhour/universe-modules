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
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('group')->index(); // e.g., 'wallet', 'general', 'notification'
            $table->string('key')->index();
            $table->text('value')->nullable();
            $table->string('type')->default('string'); // string, integer, boolean, json
            $table->timestamps();

            $table->unique(['group', 'key']);
        });

        // Seed default wallet settings
        $walletSettings = [
            ['group' => 'wallet', 'key' => 'id_prefix', 'value' => 'W', 'type' => 'string'],
            ['group' => 'wallet', 'key' => 'id_padding', 'value' => '8', 'type' => 'integer'],
            ['group' => 'wallet', 'key' => 'number_prefix', 'value' => 'WLT', 'type' => 'string'],
            ['group' => 'wallet', 'key' => 'number_separator', 'value' => '-', 'type' => 'string'],
            ['group' => 'wallet', 'key' => 'number_date_format', 'value' => 'Ymd', 'type' => 'string'],
            ['group' => 'wallet', 'key' => 'number_random_length', 'value' => '5', 'type' => 'integer'],
            ['group' => 'wallet', 'key' => 'default_currency', 'value' => 'USD', 'type' => 'string'],
        ];

        foreach ($walletSettings as $setting) {
            \DB::table('settings')->insert(array_merge($setting, [
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
