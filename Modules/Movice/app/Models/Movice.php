<?php

namespace Modules\Movice\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Movice\Database\Factories\MoviceFactory;

class Movice extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'title',
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

    protected static function newFactory(): MoviceFactory
    {
        return MoviceFactory::new();
    }
}
