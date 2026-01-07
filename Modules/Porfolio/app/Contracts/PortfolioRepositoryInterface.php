<?php

namespace Modules\Porfolio\Contracts;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Modules\Porfolio\Models\Portfolio;

interface PortfolioRepositoryInterface
{
    /**
     * Get all portfolios.
     */
    public function all(): Collection;

    /**
     * Get paginated portfolios.
     */
    public function paginate(int $perPage = 15): LengthAwarePaginator;

    /**
     * Find a portfolio by ID.
     */
    public function find(int $id): ?Portfolio;

    /**
     * Find a portfolio by slug.
     */
    public function findBySlug(string $slug): ?Portfolio;

    /**
     * Create a new portfolio.
     */
    public function create(array $data): Portfolio;

    /**
     * Update a portfolio.
     */
    public function update(int $id, array $data): bool;

    /**
     * Delete a portfolio.
     */
    public function delete(int $id): bool;

    /**
     * Get published portfolios.
     */
    public function getPublished(int $perPage = 15): LengthAwarePaginator;

    /**
     * Get portfolios by category.
     */
    public function getByCategory(string $category, int $perPage = 15): LengthAwarePaginator;

    /**
     * Get portfolios by user ID.
     */
    public function getByUserId(int $userId, int $perPage = 15): LengthAwarePaginator;

    /**
     * Get all categories.
     */
    public function getCategories(): Collection;
}
