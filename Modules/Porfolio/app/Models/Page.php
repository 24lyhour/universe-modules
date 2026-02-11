<?php

namespace Modules\Porfolio\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Page extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'portfolio_pages';

    protected $fillable = [
        'uuid',
        'parent_id',
        'header_id',
        'footer_id',
        'title',
        'slug',
        'description',
        'content',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'featured_image',
        'template',
        'layout',
        'settings',
        'is_homepage',
        'is_active',
        'is_in_menu',
        'menu_order',
        'published_at',
    ];

    protected $casts = [
        'settings' => 'array',
        'meta_keywords' => 'array',
        'is_homepage' => 'boolean',
        'is_active' => 'boolean',
        'is_in_menu' => 'boolean',
        'menu_order' => 'integer',
        'published_at' => 'datetime',
    ];

    /**
     * Page templates
     */
    const TEMPLATE_DEFAULT = 'default';
    const TEMPLATE_HOMEPAGE = 'homepage';
    const TEMPLATE_ABOUT = 'about';
    const TEMPLATE_PORTFOLIO = 'portfolio';
    const TEMPLATE_CONTACT = 'contact';
    const TEMPLATE_BLOG = 'blog';
    const TEMPLATE_SERVICES = 'services';
    const TEMPLATE_LANDING = 'landing';

    /**
     * Get available templates
     */
    public static function getTemplates(): array
    {
        return [
            self::TEMPLATE_DEFAULT => 'Default',
            self::TEMPLATE_HOMEPAGE => 'Homepage',
            self::TEMPLATE_ABOUT => 'About',
            self::TEMPLATE_PORTFOLIO => 'Portfolio',
            self::TEMPLATE_CONTACT => 'Contact',
            self::TEMPLATE_BLOG => 'Blog',
            self::TEMPLATE_SERVICES => 'Services',
            self::TEMPLATE_LANDING => 'Landing Page',
        ];
    }

    /**
     * Relationship with sections
     */
    public function sections(): HasMany
    {
        return $this->hasMany(Section::class)->ordered();
    }

    /**
     * Active sections
     */
    public function activeSections(): HasMany
    {
        return $this->hasMany(Section::class)->active()->ordered();
    }

    /**
     * Relationship with Header
     */
    public function header(): BelongsTo
    {
        return $this->belongsTo(Header::class);
    }

    /**
     * Relationship with Footer
     */
    public function footer(): BelongsTo
    {
        return $this->belongsTo(Footer::class);
    }

    /**
     * Parent page
     */
    public function parent(): BelongsTo
    {
        return $this->belongsTo(Page::class, 'parent_id');
    }

    /**
     * Child pages
     */
    public function children(): HasMany
    {
        return $this->hasMany(Page::class, 'parent_id')->ordered();
    }

    /**
     * Scope for active pages
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope for published pages
     */
    public function scopePublished($query)
    {
        return $query->where('is_active', true)
            ->where(function ($q) {
                $q->whereNull('published_at')
                    ->orWhere('published_at', '<=', now());
            });
    }

    /**
     * Scope for menu items
     */
    public function scopeInMenu($query)
    {
        return $query->where('is_in_menu', true)->orderBy('menu_order');
    }

    /**
     * Scope to order by menu order
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('menu_order')->orderBy('created_at', 'desc');
    }

    /**
     * Get homepage
     */
    public static function getHomepage()
    {
        return static::where('is_homepage', true)->active()->first();
    }
}
