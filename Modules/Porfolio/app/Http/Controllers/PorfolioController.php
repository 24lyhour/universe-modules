<?php

namespace Modules\Porfolio\Http\Controllers;

use App\Http\Controllers\Controller;
use Momentum\Modal\Modal;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Porfolio\Http\Requests\StorePortfolioRequest;
use Modules\Porfolio\Http\Requests\UpdatePortfolioRequest;
use Modules\Porfolio\Services\PortfolioService;

class PorfolioController extends Controller
{
    public function __construct(
        protected PortfolioService $portfolioService
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $portfolios = $this->portfolioService->getPaginatedPortfolios();
        $categories = $this->portfolioService->getCategories();

        return Inertia::render('porfolio::dashboard/portfolios/Index', [
            'portfolios' => $portfolios,
            'categories' => $categories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     * Returns modal that overlays the Index page.
     */
    public function create(): Modal
    {
        $categories = $this->portfolioService->getCategories();

        return Inertia::modal('porfolio::dashboard/portfolios/Create', [
            'categories' => $categories,
        ])->baseRoute('porfolio.index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePortfolioRequest $request): RedirectResponse
    {
        $this->portfolioService->createPortfolio($request->validated());

        return redirect()
            ->route('porfolio.index')
            ->with('success', 'Portfolio created successfully.');
    }

    /**
     * Show the specified resource.
     */
    public function show(int $id): Modal
    {
        $portfolio = $this->portfolioService->getPortfolioById($id);

        if (! $portfolio) {
            abort(404);
        }

        return Inertia::modal('porfolio::dashboard/portfolios/Show', [
            'portfolio' => $portfolio,
        ])->baseRoute('porfolio.index');
    }

    /**
     * Show the form for editing the specified resource.
     * Returns modal that overlays the Index page.
     */
    public function edit(int $id): Modal
    {
        $portfolio = $this->portfolioService->getPortfolioById($id);

        if (! $portfolio) {
            abort(404);
        }

        $categories = $this->portfolioService->getCategories();

        return Inertia::modal('porfolio::dashboard/portfolios/Edit', [
            'portfolio' => $portfolio,
            'categories' => $categories,
        ])->baseRoute('porfolio.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePortfolioRequest $request, int $id): RedirectResponse
    {
        $updated = $this->portfolioService->updatePortfolio($id, $request->validated());

        if (! $updated) {
            abort(404);
        }

        return redirect()
            ->route('porfolio.index')
            ->with('success', 'Portfolio updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id): RedirectResponse
    {
        $deleted = $this->portfolioService->deletePortfolio($id);

        if (! $deleted) {
            abort(404);
        }

        return redirect()
            ->route('porfolio.index')
            ->with('success', 'Portfolio deleted successfully.');
    }
}
