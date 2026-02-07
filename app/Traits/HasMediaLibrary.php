<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

trait HasMediaLibrary
{
    use InteractsWithMedia;

    /**
     * Upload a single file.
     */
    public function uploadMedia(
        UploadedFile $file,
        string $collection = 'default',
        ?string $disk = null,
        array $customProperties = []
    ): Media {
        return $this->addMedia($file)
            ->withCustomProperties($customProperties)
            ->toMediaCollection($collection, $disk);
    }

    /**
     * Upload multiple files.
     *
     * @param  array<UploadedFile>  $files
     * @return \Illuminate\Support\Collection<Media>
     */
    public function uploadMultipleMedia(
        array $files,
        string $collection = 'default',
        ?string $disk = null,
        array $customProperties = []
    ): \Illuminate\Support\Collection {
        $media = collect();

        foreach ($files as $file) {
            $media->push($this->uploadMedia($file, $collection, $disk, $customProperties));
        }

        return $media;
    }

    /**
     * Get the URL of the first media item.
     */
    public function getMediaUrl(string $collection = 'default', string $conversion = ''): ?string
    {
        $media = $this->getFirstMedia($collection);

        if (! $media) {
            return null;
        }

        return $conversion ? $media->getUrl($conversion) : $media->getUrl();
    }

    /**
     * Get all media URLs for a collection.
     */
    public function getMediaUrls(string $collection = 'default', string $conversion = ''): array
    {
        return $this->getMedia($collection)->map(function ($media) use ($conversion) {
            return $conversion ? $media->getUrl($conversion) : $media->getUrl();
        })->toArray();
    }

    /**
     * Check if model has media in a collection.
     */
    public function hasMediaInCollection(string $collection = 'default'): bool
    {
        return $this->getMedia($collection)->isNotEmpty();
    }

    /**
     * Get media count for a collection.
     */
    public function getMediaCount(string $collection = 'default'): int
    {
        return $this->getMedia($collection)->count();
    }

    /**
     * Replace media in a collection (delete old, add new).
     */
    public function replaceMedia(
        UploadedFile $file,
        string $collection = 'default',
        ?string $disk = null,
        array $customProperties = []
    ): Media {
        $this->clearMediaCollection($collection);

        return $this->uploadMedia($file, $collection, $disk, $customProperties);
    }
}
