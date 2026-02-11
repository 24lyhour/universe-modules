<?php

namespace Modules\Porfolio\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Momentum\Modal\Modal;
use Modules\Porfolio\Models\Service;

class ServiceController extends Controller
{
    public function index(): Response
    {
        $services = Service::query()
            ->orderBy('sort_order')
            ->orderBy('created_at', 'desc')
            ->paginate(15);

        return Inertia::render('porfolio::dashboard/services/Index', [
            'services' => $services,
        ]);
    }

    public function create(): Modal
    {
        return Inertia::modal('porfolio::dashboard/services/Create')
            ->baseRoute('porfolio.services.index');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string|max:500',
            'content' => 'nullable|string',
            'icon' => 'nullable|string|max:50',
            'image' => 'nullable|string|max:255',
            'features' => 'nullable|array',
            'price' => 'nullable|numeric|min:0',
            'price_unit' => 'nullable|string|max:50',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        $validated['uuid'] = Str::uuid();
        $validated['slug'] = $this->generateUniqueSlug($validated['title']);

        Service::create($validated);

        return redirect()->route('porfolio.services.index')
            ->with('success', 'Service created successfully.');
    }

    public function edit(int $id): Modal
    {
        $service = Service::findOrFail($id);

        return Inertia::modal('porfolio::dashboard/services/Edit', [
            'service' => $service,
        ])->baseRoute('porfolio.services.index');
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $service = Service::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string|max:500',
            'content' => 'nullable|string',
            'icon' => 'nullable|string|max:50',
            'image' => 'nullable|string|max:255',
            'features' => 'nullable|array',
            'price' => 'nullable|numeric|min:0',
            'price_unit' => 'nullable|string|max:50',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        if (isset($validated['title']) && $validated['title'] !== $service->title) {
            $validated['slug'] = $this->generateUniqueSlug($validated['title'], $id);
        }

        $service->update($validated);

        return redirect()->route('porfolio.services.index')
            ->with('success', 'Service updated successfully.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $service = Service::findOrFail($id);
        $service->delete();

        return redirect()->route('porfolio.services.index')
            ->with('success', 'Service deleted successfully.');
    }

    protected function generateUniqueSlug(string $title, ?int $excludeId = null): string
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;

        $query = Service::where('slug', $slug);
        if ($excludeId) {
            $query->where('id', '!=', $excludeId);
        }

        while ($query->exists()) {
            $slug = $originalSlug . '-' . $count;
            $count++;
            $query = Service::where('slug', $slug);
            if ($excludeId) {
                $query->where('id', '!=', $excludeId);
            }
        }

        return $slug;
    }
}
