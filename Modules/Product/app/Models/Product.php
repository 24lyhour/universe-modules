<?php

namespace Modules\Product\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Product\Database\Factories\ProductFactory;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'uuid',
        'name',
        'slug',
        'status',
        'price',
        'outlet_id',
        'menu_id',
        'add_on_id',
        'upSell_id',
        'coupon_id',
        'category_id',
        'variations_id',
        'description',
        'sku',
        'stock',
        'pushase_price',
        'sale_price',
        'pre_order',
        'images_url',
        'status',
    ];

    /**
     * protect the static data for the the seeder and the factory
     */
    protected static function newFactory(): ProductFactory
    {
        return ProductFactory::new();
    }

    /**
     * relation to the outlet
     */
    public function outlet()
    {
        return $this->hasMany(Outlet::class);
    }

    /**
     * resltation to the menu
     */
    public function menu() 
    { 
        return $this->belongsTo(Menu::class);
    }

    /**
     * relation to  the category 
     */
    public function category()
    { 
        return  $this->belongTo(Category::class);
    }


}
