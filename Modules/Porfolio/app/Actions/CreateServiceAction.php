<?php

namespace Modules\Porfolio\Actions;

use Illuminate\Support\Str;
use Modules\Porfolio\Models\Service;

class CreateServiceAction
{
    public function execute(array $data): Service
    {
        $data['uuid'] = Str::uuid();
        $data['slug'] = $this->generateUniqueSlug($data['title']);

        return Service::create($data);
    }

    protected function generateUniqueSlug(string $title): string
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;

        while (Service::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $count;
            $count++;
        }

        return $slug;
    }
}
