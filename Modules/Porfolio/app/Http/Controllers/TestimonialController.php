<?php

namespace Modules\Porfolio\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Momentum\Modal\Modal;
use Modules\Porfolio\Models\Testimonial;

class TestimonialController extends Controller
{
    public function index(): Response
    {
        $testimonials = Testimonial::query()
            ->orderBy('sort_order')
            ->orderBy('created_at', 'desc')
            ->paginate(15);

        return Inertia::render('porfolio::dashboard/testimonials/Index', [
            'testimonials' => $testimonials,
        ]);
    }

    public function create(): Modal
    {
        return Inertia::modal('porfolio::dashboard/testimonials/Create')
            ->baseRoute('porfolio.testimonials.index');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'nullable|string|max:255',
            'company' => 'nullable|string|max:255',
            'avatar' => 'nullable|string|max:255',
            'content' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        $validated['uuid'] = Str::uuid();

        Testimonial::create($validated);

        return redirect()->route('porfolio.testimonials.index')
            ->with('success', 'Testimonial created successfully.');
    }

    public function edit(int $id): Modal
    {
        $testimonial = Testimonial::findOrFail($id);

        return Inertia::modal('porfolio::dashboard/testimonials/Edit', [
            'testimonial' => $testimonial,
        ])->baseRoute('porfolio.testimonials.index');
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $testimonial = Testimonial::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'nullable|string|max:255',
            'company' => 'nullable|string|max:255',
            'avatar' => 'nullable|string|max:255',
            'content' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        $testimonial->update($validated);

        return redirect()->route('porfolio.testimonials.index')
            ->with('success', 'Testimonial updated successfully.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $testimonial = Testimonial::findOrFail($id);
        $testimonial->delete();

        return redirect()->route('porfolio.testimonials.index')
            ->with('success', 'Testimonial deleted successfully.');
    }
}
