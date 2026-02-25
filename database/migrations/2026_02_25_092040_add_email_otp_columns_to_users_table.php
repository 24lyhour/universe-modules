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
            // 2FA method: 'totp' for authenticator app, 'email' for email OTP
            $table->enum('two_factor_method', ['totp', 'email'])->default('email')->after('two_factor_confirmed_at');
            // Email OTP code (hashed)
            $table->string('two_factor_email_code', 255)->nullable()->after('two_factor_method');
            // When the OTP expires
            $table->timestamp('two_factor_email_expires_at')->nullable()->after('two_factor_email_code');
            // Failed attempt count
            $table->tinyInteger('two_factor_email_attempts')->default(0)->after('two_factor_email_expires_at');
            // Last OTP sent at (for rate limiting)
            $table->timestamp('two_factor_email_sent_at')->nullable()->after('two_factor_email_attempts');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'two_factor_method',
                'two_factor_email_code',
                'two_factor_email_expires_at',
                'two_factor_email_attempts',
                'two_factor_email_sent_at',
            ]);
        });
    }
};
