<?php

namespace Modules\Porfolio\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;
use Modules\Porfolio\Database\Factories\HeaderFactory;

class Header extends Model
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

    protected $table = 'portfolio_headers';

    protected $fillable = [
        'uuid',
        'title',
        'logo',
        'logo_alt',
        'navigation',
        'actions',
        'style',
        'position',
        'background_color',
        'text_color',
        'is_transparent',
        'show_search',
        'show_language_switcher',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'navigation' => 'array',
        'actions' => 'array',
        'is_transparent' => 'boolean',
        'show_search' => 'boolean',
        'show_language_switcher' => 'boolean',
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];

    /**
     * Header styles
     */
    const STYLE_DEFAULT = 'default';
    const STYLE_CENTERED = 'centered';
    const STYLE_MINIMAL = 'minimal';
    const STYLE_FULL_WIDTH = 'full-width';

    /**
     * Header positions
     */
    const POSITION_FIXED = 'fixed';
    const POSITION_STICKY = 'sticky';
    const POSITION_STATIC = 'static';

    protected static function newFactory(): HeaderFactory
    {
        return HeaderFactory::new();
    }

    /**
     * Relation with portfolios
     */
    public function portfolios(): HasMany
    {
        return $this->hasMany(Portfolio::class, 'header_id');
    }

    /**
     * Relation with pages
     */
    public function pages(): HasMany
    {
        return $this->hasMany(Page::class, 'header_id');
    }

    /**
     * Scope for active headers
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

    /**
     * Get navigation items as collection
     */
    public function getNavigationItems(): array
    {
        return $this->navigation ?? [];
    }

    /**
     * Get action buttons as collection
     */
    public function getActionButtons(): array
    {
        return $this->actions ?? [];
    }
}
