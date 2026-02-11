<?php

namespace Modules\Porfolio\Actions;

use Illuminate\Support\Str;
use Modules\Porfolio\Models\Page;

class CreatePageAction
{
    public function execute(array $data): Page
    {
        $data['uuid'] = Str::uuid();
        $data['slug'] = $this->generateUniqueSlug($data['title']);

        if (!empty($data['is_homepage']) && $data['is_homepage']) {
            Page::where('is_homepage', true)->update(['is_homepage' => false]);
        }

        return Page::create($data);
    }

    protected function generateUniqueSlug(string $title): string
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;

        while (Page::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $count;
            $count++;
        }

        return $slug;
    }
}
