<?php

namespace Modules\Porfolio\Actions;

use Illuminate\Support\Str;
use Modules\Porfolio\Models\Portfolio;

class UpdatePortfolioAction
{
    public function execute(Portfolio $portfolio, array $data): bool
    {
        if (isset($data['title']) && $data['title'] !== $portfolio->title) {
            $data['slug'] = $this->generateUniqueSlug($data['title'], $portfolio->id);
        }

        return $portfolio->update($data);
    }

    protected function generateUniqueSlug(string $title, int $excludeId): string
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;

        while (Portfolio::where('slug', $slug)->where('id', '!=', $excludeId)->exists()) {
            $slug = $originalSlug . '-' . $count;
            $count++;
        }

        return $slug;
    }
}
