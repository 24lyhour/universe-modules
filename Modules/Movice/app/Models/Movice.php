<?php

namespace Modules\Movice\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Customer\Models\Customer;
use Modules\Movice\Database\Factories\MoviceFactoryFactory;

class Movice extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'movice_id',
        'title',
        'movice_code',
        'move_type',
        'customer_id',
        'description',
        'release_date',
        'rating',
        'genre',
        'director',
        'cast',
        'poster_url',
        'trailer_url',
        'duration',
        'language',
        'country',
        'status',
        'created_by',
        'updated_by',
        'deleted_by',
        'created_at',
        'updated_at',
        'deleted_at',
    ];


    /// relationship
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    protected static function newFactory(): MoviceFactoryFactory
    {
        return MoviceFactoryFactory::new();
    }
}
