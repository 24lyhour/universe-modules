<?php

namespace Modules\Porfolio\Actions;

use Modules\Porfolio\Models\Portfolio;

class DeletePortfolioAction
{
    public function execute(Portfolio $portfolio): bool
    {
        return $portfolio->delete();
    }

    public function forceDelete(Portfolio $portfolio): bool
    {
        return $portfolio->forceDelete();
    }

    public function restore(int $id): bool
    {
        $portfolio = Portfolio::withTrashed()->findOrFail($id);
        return $portfolio->restore();
    }
}
