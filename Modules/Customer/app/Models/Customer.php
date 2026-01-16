<?php

namespace Modules\Customer\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Customer\Database\Factories\CustomerFactory;
use Modules\Movice\Models\Movice;

// use Modules\Customer\Database\Factories\CustomerFactory;

class Customer extends Model
{
    use HasFactory;

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
    ];


    /**
     * relation to the movies rented by the customer
     */
    public function movies(){
        return $this->belongsToMany(Movice::class, 'customer_movice', 'customer_id', 'movice_id')
                    ->withTimestamps()
                    ->withPivot('rented_at', 'returned_at');
    }

    /**
     * relation to the two factor authentication records
     */
    public function twoFactorAuthentications(){
        return $this->hasMany(TwoFactorAuthentication::class, 'customer_id', 'id');
    }


    /**
     * Create a new factory instance for the model.
     */
    protected static function newFactory(): CustomerFactory
    {
        return CustomerFactory::new();
    }
}
