<?php

namespace Modules\Delivery\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Delivery\Database\Factories\DeliveryFactory;

class Delivery extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
            'uuid',
            'total_delivery',
            'shipping_zone_id',
            'order_shipping_id',
            'outlet_id',
            'rider_id',
            'order_id',
            'payment_id',
            'customer_id',
            'latitude',
            'longitude',
            'status',
            'created_at',
            'updated_at',
    ];


    /**
     * protect case
     */
    protected $casts = [
        
    ];

    /**
     * deliver factory
     */
    protected static function newFactory(): DeliveryFactory
    {
        return DeliveryFactory::new();
    }

    /**
     * relation to rider
     */
    public function rider() : BelongsTo
    {
        return $this->belongsTo(Rider::class);
    }

    /**
     * relation to order
     */
    public function order() : BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * realtiont to the outlets
     */
    public function outlet() : HasMany
    {
        return $this->hasMany(Outlet::class);
    }

    /**
     * raletion to the shipping_zone
     */
    public function shippingZone() : BelongsTo
    {
        return $this->belongsTo(ShippingZone::class);
    }

    /**
     * relation to the order shipping
     */
    public function orderShipping() : BelongsTo
    {
        return $this->belongsTo(OrderShipping::class);
    }
    
}

