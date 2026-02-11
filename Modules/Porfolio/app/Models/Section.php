<?php

namespace Modules\Porfolio\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Section extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'portfolio_sections';

    protected $fillable = [
        'uuid',
        'page_id',
        'title',
        'subtitle',
        'slug',
        'type',
        'content',
        'settings',
        'background_image',
        'background_color',
        'text_color',
        'padding',
        'margin',
        'animation',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'settings' => 'array',
        'padding' => 'array',
        'margin' => 'array',
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];

    /**
     * Section types
     */
    const TYPE_HERO = 'hero';
    const TYPE_ABOUT = 'about';
    const TYPE_SERVICES = 'services';
    const TYPE_PORTFOLIO = 'portfolio';
    const TYPE_TESTIMONIALS = 'testimonials';
    const TYPE_TEAM = 'team';
    const TYPE_CONTACT = 'contact';
    const TYPE_CTA = 'cta';
    const TYPE_FEATURES = 'features';
    const TYPE_STATS = 'stats';
    const TYPE_FAQ = 'faq';
    const TYPE_PRICING = 'pricing';
    const TYPE_GALLERY = 'gallery';
    const TYPE_CUSTOM = 'custom';

    /**
     * Get section types
     */
    public static function getTypes(): array
    {
        return [
            self::TYPE_HERO => 'Hero Section',
            self::TYPE_ABOUT => 'About Section',
            self::TYPE_SERVICES => 'Services Section',
            self::TYPE_PORTFOLIO => 'Portfolio Section',
            self::TYPE_TESTIMONIALS => 'Testimonials Section',
            self::TYPE_TEAM => 'Team Section',
            self::TYPE_CONTACT => 'Contact Section',
            self::TYPE_CTA => 'Call to Action',
            self::TYPE_FEATURES => 'Features Section',
            self::TYPE_STATS => 'Statistics Section',
            self::TYPE_FAQ => 'FAQ Section',
            self::TYPE_PRICING => 'Pricing Section',
            self::TYPE_GALLERY => 'Gallery Section',
            self::TYPE_CUSTOM => 'Custom Section',
        ];
    }

    /**
     * Relationship with Page
     */
    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }

    /**
     * Scope for active sections
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
