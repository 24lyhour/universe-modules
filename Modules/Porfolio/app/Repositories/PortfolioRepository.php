<?php

namespace Modules\Porfolio\Repositories;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Modules\Porfolio\Contracts\PortfolioRepositoryInterface;
use Modules\Porfolio\Models\Portfolio;

class PortfolioRepository implements PortfolioRepositoryInterface
{
    public function __construct(
        protected Portfolio $model
    ) {}

    /**
     * Get all portfolios.
     */
    public function all(): Collection
    {
        return $this->model->with('user')->ordered()->get();
    }

    /**
     * Get paginated portfolios.
     */
    public function paginate(int $perPage = 15): LengthAwarePaginator
    {
        return $this->model->with('user')->ordered()->paginate($perPage);
    }

    /**
     * Find a portfolio by ID.
     */
    public function find(int $id): ?Portfolio
    {
        return $this->model->with('user')->find($id);
    }

    /**
     * Find a portfolio by slug.
     */
    public function findBySlug(string $slug): ?Portfolio
    {
        return $this->model->with('user')->where('slug', $slug)->first();
    }

    /**
     * Create a new portfolio.
     */
    public function create(array $data): Portfolio
    {
        return $this->model->create($data);
    }

    /**
     * Update a portfolio.
     */
    public function update(int $id, array $data): bool
    {
        $portfolio = $this->find($id);

        if (! $portfolio) {
            return false;
        }

        return $portfolio->update($data);
    }

    /**
     * Delete a portfolio.
     */
    public function delete(int $id): bool
    {
        $portfolio = $this->find($id);

        if (! $portfolio) {
            return false;
        }

        return $portfolio->delete();
    }

    /**
     * Get published portfolios.
     */
    public function getPublished(int $perPage = 15): LengthAwarePaginator
    {
        return $this->model->with('user')->published()->ordered()->paginate($perPage);
    }

    /**
     * Get portfolios by category.
     */
    public function getByCategory(string $category, int $perPage = 15): LengthAwarePaginator
    {
        return $this->model->with('user')->byCategory($category)->ordered()->paginate($perPage);
    }

    /**
     * Get portfolios by user ID.
     */
    public function getByUserId(int $userId, int $perPage = 15): LengthAwarePaginator
    {
        return $this->model->with('user')->where('user_id', $userId)->ordered()->paginate($perPage);
    }

    /**
     * Get all categories.
     */
    public function getCategories(): Collection
    {
        return $this->model->select('category')
            ->whereNotNull('category')
            ->distinct()
            ->pluck('category');
    }
}
