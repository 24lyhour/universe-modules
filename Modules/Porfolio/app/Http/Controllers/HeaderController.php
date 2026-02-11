<?php

namespace Modules\Porfolio\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Momentum\Modal\Modal;
use Modules\Porfolio\Models\Header;

class HeaderController extends Controller
{
    public function index(): Response
    {
        $headers = Header::query()
            ->orderBy('sort_order')
            ->orderBy('created_at', 'desc')
            ->paginate(15);

        return Inertia::render('porfolio::dashboard/headers/Index', [
            'headers' => $headers,
        ]);
    }

    public function create(): Modal
    {
        return Inertia::modal('porfolio::dashboard/headers/Create')
            ->baseRoute('porfolio.headers.index');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'logo' => 'nullable|string|max:255',
            'logo_alt' => 'nullable|string|max:255',
            'navigation' => 'nullable|array',
            'actions' => 'nullable|array',
            'style' => 'required|string|max:50',
            'position' => 'required|string|max:50',
            'background_color' => 'nullable|string|max:50',
            'text_color' => 'nullable|string|max:50',
            'is_transparent' => 'boolean',
            'show_search' => 'boolean',
            'show_language_switcher' => 'boolean',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        Header::create($validated);

        return redirect()->route('porfolio.headers.index')
            ->with('success', 'Header created successfully.');
    }

    public function edit(int $id): Modal
    {
        $header = Header::findOrFail($id);

        return Inertia::modal('porfolio::dashboard/headers/Edit', [
            'header' => $header,
        ])->baseRoute('porfolio.headers.index');
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $header = Header::findOrFail($id);

        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'logo' => 'nullable|string|max:255',
            'logo_alt' => 'nullable|string|max:255',
            'navigation' => 'nullable|array',
            'actions' => 'nullable|array',
            'style' => 'required|string|max:50',
            'position' => 'required|string|max:50',
            'background_color' => 'nullable|string|max:50',
            'text_color' => 'nullable|string|max:50',
            'is_transparent' => 'boolean',
            'show_search' => 'boolean',
            'show_language_switcher' => 'boolean',
            'is_active' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        $header->update($validated);

        return redirect()->route('porfolio.headers.index')
            ->with('success', 'Header updated successfully.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $header = Header::findOrFail($id);
        $header->delete();

        return redirect()->route('porfolio.headers.index')
            ->with('success', 'Header deleted successfully.');
    }
}
