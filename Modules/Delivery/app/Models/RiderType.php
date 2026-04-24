<?php

namespace Modules\Delivery\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Delivery\Database\Factories\RiderTypeFactory;

class RiderType extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'id',
        'uuid',
        'rider_id',
        'vehicle_name',
        'vehicle_plate',
        'note',
        'is_active',
        'created_at',
        'updated_at',

    ];


    /**
     * Protect the filed
     */
    protected $case = [
        'is_active' =>'boolean',
        'uuid'      => 'string',
        'create_at' => 'datetime',
        'update_at' => 'datetime',

    ];

    /**
     * gloabl scope 
     */
    public function scopeActive($query) {
        return $query->where('is_active', 1);
    }  


    /**
     * protection the factory type of the rider
     */
    protected static function newFactory(): RiderTypeFactory
    {
        return RiderTypeFactory::new();
    }

    /**
     * relation to 
     */
    public function rider() : BelongsTo
    {
        return $this->belongsTo(Rider::class);
    }
}
