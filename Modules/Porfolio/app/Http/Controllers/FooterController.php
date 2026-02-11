<?php

namespace Modules\Porfolio\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Momentum\Modal\Modal;
use Modules\Porfolio\Models\Footer;

class FooterController extends Controller
{
    public function index(): Response
    {
        $footers = Footer::query()
            ->orderBy('sort_order')
            ->orderBy('created_at', 'desc')
            ->paginate(15);

        return Inertia::render('porfolio::dashboard/footers/Index', [
            'footers' => $footers,
        ]);
    }

    public function create(): Modal
    {
        return Inertia::modal('porfolio::dashboard/footers/Create')
            ->baseRoute('porfolio.footers.index');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'copyright_text' => 'nullable|string|max:500',
            'logo' => 'nullable|string|max:255',
            'social_links' => 'nullable|array',
            'contact_email' => 'nullable|email|max:255',
            'contact_phone' => 'nullable|string|max:50',
            'contact_address' => 'nullable|string',
            'quick_links' => 'nullable|array',
            'newsletter_enabled' => 'boolean',
            'newsletter_title' => 'nullable|string|max:255',
            'newsletter_description' => 'nullable|string',
            'columns' => 'nullable|array',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        $validated['uuid'] = Str::uuid();

        Footer::create($validated);

        return redirect()->route('porfolio.footers.index')
            ->with('success', 'Footer created successfully.');
    }

    public function edit(int $id): Modal
    {
        $footer = Footer::findOrFail($id);

        return Inertia::modal('porfolio::dashboard/footers/Edit', [
            'footer' => $footer,
        ])->baseRoute('porfolio.footers.index');
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $footer = Footer::findOrFail($id);

        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'copyright_text' => 'nullable|string|max:500',
            'logo' => 'nullable|string|max:255',
            'social_links' => 'nullable|array',
            'contact_email' => 'nullable|email|max:255',
            'contact_phone' => 'nullable|string|max:50',
            'contact_address' => 'nullable|string',
            'quick_links' => 'nullable|array',
            'newsletter_enabled' => 'boolean',
            'newsletter_title' => 'nullable|string|max:255',
            'newsletter_description' => 'nullable|string',
            'columns' => 'nullable|array',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        $footer->update($validated);

        return redirect()->route('porfolio.footers.index')
            ->with('success', 'Footer updated successfully.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $footer = Footer::findOrFail($id);
        $footer->delete();

        return redirect()->route('porfolio.footers.index')
            ->with('success', 'Footer deleted successfully.');
    }
}
