# Media Library Documentation

A global media library component for the Universe project, powered by [Spatie Laravel Media Library](https://spatie.be/docs/laravel-medialibrary).

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage in Models](#usage-in-models)
- [MediaService API](#mediaservice-api)
- [CLI Commands](#cli-commands)
- [File Structure](#file-structure)
- [Examples](#examples)

---

## Overview

The Media Library provides:

- File uploads (single, multiple, from URL, from base64)
- Media collections per model
- Image conversions and responsive images
- Global MediaService for advanced operations
- CLI commands for management
- Statistics and cleanup utilities

**Package:** `spatie/laravel-medialibrary` v11.17

---

## Installation

The package is already installed. To set up a fresh installation:

```bash
# Install package
composer require spatie/laravel-medialibrary

# Publish migration
php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider" --tag="medialibrary-migrations"

# Publish config
php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider" --tag="medialibrary-config"

# Run migration
php artisan migrate
```

---

## Configuration

Configuration file: `config/media-library.php`

### Key Settings

```php
return [
    // Default storage disk
    'disk_name' => env('MEDIA_DISK', 'public'),

    // Maximum file size (bytes)
    'max_file_size' => 1024 * 1024 * 10, // 10MB

    // Image manipulation driver
    'image_driver' => 'gd', // or 'imagick'

    // Responsive images
    'responsive_images' => [
        'use_tiny_placeholders' => true,
        'tiny_placeholder_generator' => null,
    ],

    // Queue conversions
    'queue_conversions_by_default' => env('QUEUE_CONVERSIONS', true),

    // Queue name
    'queue_name' => '',

    // Media model
    'media_model' => Spatie\MediaLibrary\MediaCollections\Models\Media::class,
];
```

### Storage Disks

Ensure your `config/filesystems.php` has the appropriate disks:

```php
'disks' => [
    'public' => [
        'driver' => 'local',
        'root' => storage_path('app/public'),
        'url' => env('APP_URL').'/storage',
        'visibility' => 'public',
    ],

    'media' => [
        'driver' => 'local',
        'root' => storage_path('app/media'),
        'url' => env('APP_URL').'/media',
        'visibility' => 'public',
    ],
],
```

Don't forget to create the symbolic link:

```bash
php artisan storage:link
```

---

## Usage in Models

### Step 1: Implement HasMedia Interface

```php
<?php

namespace Modules\Product\Models;

use App\Traits\HasMediaLibrary;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;

class Product extends Model implements HasMedia
{
    use HasMediaLibrary;
}
```

### Step 2: Define Media Collections (Optional)

```php
public function registerMediaCollections(): void
{
    // Single file collection (replaces on new upload)
    $this->addMediaCollection('avatar')
        ->singleFile()
        ->useDisk('public');

    // Multiple files collection
    $this->addMediaCollection('images')
        ->useDisk('public');

    // Documents collection
    $this->addMediaCollection('documents')
        ->acceptsMimeTypes(['application/pdf', 'application/msword'])
        ->useDisk('public');
}
```

### Step 3: Define Image Conversions (Optional)

```php
use Spatie\MediaLibrary\MediaCollections\Models\Media;

public function registerMediaConversions(?Media $media = null): void
{
    $this->addMediaConversion('thumb')
        ->width(150)
        ->height(150)
        ->sharpen(10);

    $this->addMediaConversion('preview')
        ->width(400)
        ->height(400);

    $this->addMediaConversion('large')
        ->width(1200)
        ->height(1200)
        ->withResponsiveImages();
}
```

---

## MediaService API

Location: `app/Services/MediaService.php`

### Upload Methods

```php
use App\Services\MediaService;

$mediaService = app(MediaService::class);

// Upload single file
$media = $mediaService->upload(
    model: $product,
    file: $request->file('image'),
    collection: 'images',
    disk: 'public',
    customProperties: ['alt' => 'Product image']
);

// Upload multiple files
$mediaCollection = $mediaService->uploadMultiple(
    model: $product,
    files: $request->file('images'),
    collection: 'gallery'
);

// Upload from URL
$media = $mediaService->uploadFromUrl(
    model: $product,
    url: 'https://example.com/image.jpg',
    collection: 'images'
);

// Upload from base64
$media = $mediaService->uploadFromBase64(
    model: $product,
    base64: $base64String,
    filename: 'image.jpg',
    collection: 'images'
);
```

### Retrieval Methods

```php
// Get all media for a model
$media = $mediaService->getMedia($product, 'images');

// Get first media
$firstMedia = $mediaService->getFirstMedia($product, 'images');

// Get URL
$url = $mediaService->getUrl($product, 'images');

// Get URL with conversion
$thumbUrl = $mediaService->getUrl($product, 'images', 'thumb');

// Find media by ID
$media = $mediaService->find($mediaId);

// Get all media with filters
$media = $mediaService->all([
    'collection_name' => 'images',
    'model_type' => Product::class,
    'mime_type' => 'image/',
]);
```

### Management Methods

```php
// Delete media by ID
$mediaService->delete($mediaId);

// Clear entire collection
$mediaService->clearCollection($product, 'images');

// Update custom properties
$mediaService->updateProperties($mediaId, [
    'alt' => 'New alt text',
    'caption' => 'New caption',
]);
```

### Statistics Methods

```php
// Get total size
$totalSize = $mediaService->getTotalSize();

// Get total count
$totalCount = $mediaService->getTotalCount();

// Get comprehensive stats
$stats = $mediaService->getStats();
// Returns: total_count, total_size, total_size_formatted, by_collection, by_mime_type

// Format bytes
$formatted = $mediaService->formatBytes(1024 * 1024); // "1 MB"
```

---

## HasMediaLibrary Trait

Location: `app/Traits/HasMediaLibrary.php`

Provides convenient methods for models:

```php
// Upload
$product->uploadMedia($file, 'images');
$product->uploadMultipleMedia($files, 'images');
$product->replaceMedia($file, 'avatar'); // Clears and uploads

// Retrieve
$url = $product->getMediaUrl('images');
$urls = $product->getMediaUrls('images');
$url = $product->getMediaUrl('images', 'thumb'); // With conversion

// Check
$hasMedia = $product->hasMediaInCollection('images');
$count = $product->getMediaCount('images');
```

---

## CLI Commands

### `media:list`

List all media files in the system.

```bash
# List all media (default: 20 items)
php artisan media:list

# Filter by collection
php artisan media:list --collection=avatars

# Filter by type
php artisan media:list --type=image
php artisan media:list --type=video
php artisan media:list --type=audio
php artisan media:list --type=document

# Limit results
php artisan media:list --limit=50

# Combined
php artisan media:list --collection=products --type=image --limit=100
```

**Output:**
```
Media Library
-------------
+----+----------------+------------+------------+--------+------------------+
| ID | Name           | Collection | Type       | Size   | Created          |
+----+----------------+------------+------------+--------+------------------+
| 1  | product-1.jpg  | images     | image/jpeg | 245 KB | 2026-02-06 12:30 |
| 2  | document.pdf   | documents  | application| 1.2 MB | 2026-02-06 12:35 |
+----+----------------+------------+------------+--------+------------------+

Showing 2 of 2 total media files.
```

### `media:stats`

Display media library statistics.

```bash
php artisan media:stats
```

**Output:**
```
Media Library Statistics
------------------------

Overview
+-------------+--------+
| Metric      | Value  |
+-------------+--------+
| Total Files | 156    |
| Total Size  | 45 MB  |
+-------------+--------+

By Collection
+------------+-------+--------+
| Collection | Count | Size   |
+------------+-------+--------+
| images     | 120   | 35 MB  |
| documents  | 30    | 8 MB   |
| avatars    | 6     | 2 MB   |
+------------+-------+--------+

By File Type
+------------------+-------+
| MIME Type        | Count |
+------------------+-------+
| image/jpeg       | 100   |
| image/png        | 20    |
| application/pdf  | 30    |
| image/webp       | 6     |
+------------------+-------+
```

### `media:clean`

Clean orphaned media files and directories.

```bash
# Preview what would be deleted (dry run)
php artisan media:clean --dry-run

# Run with confirmation prompt
php artisan media:clean

# Force without confirmation
php artisan media:clean --force
```

### Built-in Spatie Commands

```bash
# Clean deprecated conversions
php artisan media-library:clean

# Clear all items in a collection
php artisan media-library:clear

# Regenerate conversions
php artisan media-library:regenerate
```

---

## File Structure

```
universe/
├── app/
│   ├── Services/
│   │   └── MediaService.php          # Global media service
│   └── Traits/
│       └── HasMediaLibrary.php       # Trait for models
├── config/
│   └── media-library.php             # Configuration
├── database/
│   └── migrations/
│       └── 2026_02_06_*_create_media_table.php
├── Modules/
│   └── Media/
│       ├── app/
│       │   ├── Console/
│       │   │   └── Commands/
│       │   │       ├── MediaListCommand.php
│       │   │       ├── MediaStatsCommand.php
│       │   │       └── MediaCleanCommand.php
│       │   ├── Http/
│       │   │   └── Controllers/
│       │   │       └── MediaController.php
│       │   └── Providers/
│       │       └── MediaServiceProvider.php
│       ├── config/
│       ├── routes/
│       └── README.md
└── storage/
    └── app/
        └── public/                    # Default media storage
```

---

## Examples

### Controller Example

```php
<?php

namespace Modules\Product\Http\Controllers;

use App\Services\MediaService;
use Illuminate\Http\Request;
use Modules\Product\Models\Product;

class ProductController extends Controller
{
    public function __construct(
        private MediaService $mediaService
    ) {}

    public function store(Request $request)
    {
        $product = Product::create($request->validated());

        // Upload main image
        if ($request->hasFile('image')) {
            $product->uploadMedia($request->file('image'), 'images');
        }

        // Upload gallery
        if ($request->hasFile('gallery')) {
            $product->uploadMultipleMedia($request->file('gallery'), 'gallery');
        }

        return redirect()->route('products.show', $product);
    }

    public function update(Request $request, Product $product)
    {
        $product->update($request->validated());

        // Replace main image
        if ($request->hasFile('image')) {
            $product->replaceMedia($request->file('image'), 'images');
        }

        return redirect()->route('products.show', $product);
    }

    public function destroyMedia(Product $product, int $mediaId)
    {
        $this->mediaService->delete($mediaId);

        return back()->with('success', 'Media deleted.');
    }
}
```

### API Resource Example

```php
<?php

namespace Modules\Product\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'image' => $this->getMediaUrl('images'),
            'thumbnail' => $this->getMediaUrl('images', 'thumb'),
            'gallery' => $this->getMediaUrls('gallery'),
            'gallery_thumbnails' => $this->getMedia('gallery')->map(fn ($m) => [
                'id' => $m->id,
                'url' => $m->getUrl(),
                'thumb' => $m->getUrl('thumb'),
            ]),
        ];
    }
}
```

### Blade View Example

```blade
{{-- Display single image --}}
@if($product->hasMediaInCollection('images'))
    <img src="{{ $product->getMediaUrl('images') }}" alt="{{ $product->name }}">
@endif

{{-- Display with conversion --}}
<img src="{{ $product->getMediaUrl('images', 'thumb') }}" alt="Thumbnail">

{{-- Display gallery --}}
@foreach($product->getMedia('gallery') as $media)
    <img src="{{ $media->getUrl('thumb') }}"
         data-full="{{ $media->getUrl() }}"
         alt="{{ $media->name }}">
@endforeach
```

### Form Example

```blade
<form action="{{ route('products.store') }}" method="POST" enctype="multipart/form-data">
    @csrf

    {{-- Single file --}}
    <input type="file" name="image" accept="image/*">

    {{-- Multiple files --}}
    <input type="file" name="gallery[]" multiple accept="image/*">

    <button type="submit">Save</button>
</form>
```

---

## Best Practices

1. **Define collections** - Always define media collections for better organization
2. **Use conversions** - Create image conversions for thumbnails and previews
3. **Queue conversions** - Enable `queue_conversions_by_default` in production
4. **Clean regularly** - Run `media:clean` periodically to remove orphaned files
5. **Validate uploads** - Always validate file types and sizes in form requests
6. **Use custom properties** - Store metadata like alt text, captions, etc.

---

## Troubleshooting

### Images not displaying

```bash
# Create storage link
php artisan storage:link
```

### Conversions not generating

```bash
# Check if queue worker is running
php artisan queue:work

# Or regenerate manually
php artisan media-library:regenerate
```

### Permission errors

```bash
# Fix storage permissions
chmod -R 775 storage
chown -R www-data:www-data storage
```
