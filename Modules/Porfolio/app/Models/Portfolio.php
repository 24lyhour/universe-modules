<?php

namespace Modules\Porfolio\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use Modules\Customer\Models\Customer;

class Portfolio extends Model
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

    protected $table = 'portfolio_portfolios';

    protected $fillable = [
        'uuid',
        'user_id',
        'title',
        'slug',
        'header_id',
        'footer_id',
        'customer_id',
        'portfolio_type',
        'portfolio_id',
        'description',
        'content',
        'featured_image',
        'gallery',
        'education_id',
        'category',
        'industry',
        'experience_level',
        'location',
        'tags',
        'client_name',
        'project_url',
        'project_date',
        'view',
        'is_featured',
        'is_active',
        'sort_order',
    ];

    /***
     * product the  data types
     */
    protected $casts = [
        'gallery' => 'array',
        'tags' => 'array',
        'project_date' => 'date',
        'sort_order' => 'integer',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];


    /**
     * Get the user that owns the portfolio.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    /**
     * 
     * get the customer that owns the portfolio.
     */
    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    /**
     * relation with the header 
     */
    public function header(): BelongsTo
    {
        return $this->belongsTo(Header::class , 'header_id');
    }

    /**
     * Scope a query to only include published portfolios.
     */
    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    /**
     * Scope a query to only include draft portfolios.
     */
    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }

    /**
     * Scope a query to filter by category.
     */
    public function scopeByCategory($query, string $category)
    {
        return $query->where('category', $category);
    }

    /**
     * Scope a query to order by sort order.
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order')->orderBy('created_at', 'desc');
    }

}
