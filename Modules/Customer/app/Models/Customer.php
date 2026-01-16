<?php

namespace Modules\Customer\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Customer\Database\Factories\CustomerFactory;
use Modules\Customer\Traits\TwoFactorAuthentication;
use Modules\Movice\Models\Movice;

class Customer extends Model
{
    use HasFactory;
    use TwoFactorAuthentication;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'movice_id',
        'customer_id',
        'name',
        'email',
        'password',
        'phone',
        'address',
        'date_of_birth',
        'gender',
        'status',
        'two_factor_enabled',
        'email_verified_at',
        'phone_verified_at',
        'created_by',
        'updated_by',  

    ];

    /**
     * The attributes that should be hidden for arrays.
     */
    protected $hidden = [
        'password',
        'two_factor_secret',
        'two_factor_recovery_codes',
    ];

    /**
     * Get the attributes that should be cast.
     */
    protected function casts(): array
    {
        return [
            'date_of_birth' => 'date',
            'two_factor_enabled' => 'boolean',
            'email_verified_at' => 'datetime',
            'phone_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Relation to the movies rented by the customer.
     */
    public function movies(){
        return $this->belongsToMany(Movice::class, 'customer_movice', 'customer_id', 'movice_id')
                    ->withTimestamps()
                    ->withPivot('rented_at', 'returned_at');
    }



    /**
     * Create a new factory instance for the model.
     */
    protected static function newFactory(): CustomerFactory
    {
        return CustomerFactory::new();
    }
}
