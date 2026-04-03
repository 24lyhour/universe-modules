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
            'totoal_delivery',
            'rider_id',
            'order_id',
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
}

