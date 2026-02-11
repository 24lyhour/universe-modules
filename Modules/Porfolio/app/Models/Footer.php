<?php

namespace Modules\Porfolio\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Footer extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * Boot the model and auto-generate UUID.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = (string) Str::uuid();
            }
        });
    }

    protected $table = 'portfolio_footers';

    protected $fillable = [
        'uuid',
        'title',
        'description',
        'copyright_text',
        'logo',
        'social_links',
        'contact_email',
        'contact_phone',
        'contact_address',
        'quick_links',
        'newsletter_enabled',
        'newsletter_title',
        'newsletter_description',
        'columns',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'social_links' => 'array',
        'quick_links' => 'array',
        'columns' => 'array',
        'newsletter_enabled' => 'boolean',
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];

    /**
     * Scope for active footers
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope to order by sort order
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order')->orderBy('created_at', 'desc');
    }
}
