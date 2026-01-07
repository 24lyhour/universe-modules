<?php

namespace Modules\Porfolio\Services;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Str;
use Modules\Porfolio\Contracts\PortfolioRepositoryInterface;
use Modules\Porfolio\Models\Portfolio;

class PortfolioService
{
    public function __construct(
        protected PortfolioRepositoryInterface $portfolioRepository
    ) {}

    /**
     * Get all portfolios.
     */
    public function getAllPortfolios(): Collection
    {
        return $this->portfolioRepository->all();
    }

    /**
     * Get paginated portfolios.
     */
    public function getPaginatedPortfolios(int $perPage = 15): LengthAwarePaginator
    {
        return $this->portfolioRepository->paginate($perPage);
    }

    /**
     * Get a portfolio by ID.
     */
    public function getPortfolioById(int $id): ?Portfolio
    {
        return $this->portfolioRepository->find($id);
    }

    /**
     * Get a portfolio by slug.
     */
    public function getPortfolioBySlug(string $slug): ?Portfolio
    {
        return $this->portfolioRepository->findBySlug($slug);
    }

    /**
     * Create a new portfolio.
     */
    public function createPortfolio(array $data): Portfolio
    {
        $data['slug'] = $this->generateUniqueSlug($data['title']);
        $data['user_id'] = auth()->id();

        if (! isset($data['sort_order'])) {
            $data['sort_order'] = 0;
        }

        return $this->portfolioRepository->create($data);
    }

    /**
     * Update a portfolio.
     */
    public function updatePortfolio(int $id, array $data): bool
    {
        if (isset($data['title'])) {
            $portfolio = $this->portfolioRepository->find($id);
            if ($portfolio && $portfolio->title !== $data['title']) {
                $data['slug'] = $this->generateUniqueSlug($data['title'], $id);
            }
        }

        return $this->portfolioRepository->update($id, $data);
    }

    /**
     * Delete a portfolio.
     */
    public function deletePortfolio(int $id): bool
    {
        return $this->portfolioRepository->delete($id);
    }

    /**
     * Get published portfolios.
     */
    public function getPublishedPortfolios(int $perPage = 15): LengthAwarePaginator
    {
        return $this->portfolioRepository->getPublished($perPage);
    }

    /**
     * Get portfolios by category.
     */
    public function getPortfoliosByCategory(string $category, int $perPage = 15): LengthAwarePaginator
    {
        return $this->portfolioRepository->getByCategory($category, $perPage);
    }

    /**
     * Get portfolios by user.
     */
    public function getPortfoliosByUser(int $userId, int $perPage = 15): LengthAwarePaginator
    {
        return $this->portfolioRepository->getByUserId($userId, $perPage);
    }

    /**
     * Get all categories.
     */
    public function getCategories(): Collection
    {
        return $this->portfolioRepository->getCategories();
    }

    /**
     * Generate a unique slug for the portfolio.
     */
    protected function generateUniqueSlug(string $title, ?int $excludeId = null): string
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;

        while (true) {
            $existingPortfolio = $this->portfolioRepository->findBySlug($slug);

            if (! $existingPortfolio || ($excludeId && $existingPortfolio->id === $excludeId)) {
                break;
            }

            $slug = $originalSlug . '-' . $count;
            $count++;
        }

        return $slug;
    }
}
