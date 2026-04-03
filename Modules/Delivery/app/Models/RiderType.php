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
    protected $fillable = [];


    /**
     * protection the factory type of the rider
     */
    protected static function newFactory(): RiderTypeFactory
    {
        return RiderTypeFactory::new();
    }
}
