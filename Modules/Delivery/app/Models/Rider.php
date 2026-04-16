<?php

namespace Modules\Delivery\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Delivery\Database\Factories\RiderFactory;

class Rider extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'id',
        'uuid',
        'rider_name',
        'rider_number',
        'phone_number',
        'vehicle_type',
        'vehicle_plate',
        'delivery_id',
        'status',
        'is_available',
        'current_location',
        'current_lat', 
        'current_long',
        'rating',
        'device_token',
        'gps_status',
        'gps_location',
        'total_orders',
        'total_earnings',
        'commission_rate',
        'documents',
        'is_active',
        'telegram_chat_id', 
        'notes',
    ];

    /**
     * protection 
     */
    protected function casts(): array
    {
        return [
            'is_available' => 'boolean',
            'documents' => 'array',
        ];
    }

    /**
     * gloabal scope 
     */
    public function scopeActive($query) {
        return $query->where('is_active', 1);
    }  

    /**
     * protect factory
     */
    protected static function newFactory(): RiderFactory
    {
        return RiderFactory::new();
    }

    /**
     * relation to 
     */
    public function customer() : hasMany
    {
        return $this->hasMany(Customer::class);
    }

    /**
     * relation to outlet
     */
    public function outlet() : hasMany
    {
        return $this->hasMany(Outlet::class);
    }

    /**
     * relation to order
     */
    public function order() : hasMany
    {
        return $this->hasMany(Order::class);
    }

    /**
     * relation to payment
     */
    public function payment() : hasMany
    {
        return $this->hasMany(Payment::class);
    }

    /**
     * relation to rider_vehicle
     */
    public function rider_vehicle() : hasMany
    {
        return $this->hasMany(RiderVehicle::class);
    }

    /**
     * relation to the order shipping 
     */
    public function order_shipping() : hasMany
    {
        return $this->hasMany(OrderShipping::class);
    }

    /**
     * relation to shipping  zone
     */
    public function shipping_zone() : hasMany
    {
        return $this->hasMany(ShippingZone::class);
    }

    /**
     * relation to delivery
     */
    public function delivery() : hasMany
    {
        return $this->hasMany(Delivery::class);
    }
 
}

