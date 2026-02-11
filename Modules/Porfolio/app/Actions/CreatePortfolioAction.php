<?php

namespace Modules\Porfolio\Actions;

use Illuminate\Support\Str;
use Modules\Porfolio\Models\Portfolio;

class CreatePortfolioAction
{
    public function execute(array $data): Portfolio
    {
        $data['uuid'] = Str::uuid();
        $data['slug'] = $this->generateUniqueSlug($data['title']);
        $data['user_id'] = $data['user_id'] ?? auth()->id();

        return Portfolio::create($data);
    }

    protected function generateUniqueSlug(string $title): string
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;

        while (Portfolio::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $count;
            $count++;
        }

        return $slug;
    }
}
