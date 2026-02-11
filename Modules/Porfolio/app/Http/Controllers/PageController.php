<?php

namespace Modules\Porfolio\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Momentum\Modal\Modal;
use Modules\Porfolio\Models\Page;
use Modules\Porfolio\Models\Header;
use Modules\Porfolio\Models\Footer;

class PageController extends Controller
{
    public function index(): Response
    {
        $pages = Page::with(['header', 'footer', 'parent'])
            ->orderBy('menu_order')
            ->orderBy('created_at', 'desc')
            ->paginate(15);

        return Inertia::render('porfolio::dashboard/pages/Index', [
            'pages' => $pages,
        ]);
    }

    public function create(): Modal
    {
        return Inertia::modal('porfolio::dashboard/pages/Create', [
            'headers' => Header::active()->ordered()->get(['id', 'title']),
            'footers' => Footer::active()->ordered()->get(['id', 'title']),
            'pages' => Page::active()->whereNull('parent_id')->ordered()->get(['id', 'title']),
            'templates' => Page::getTemplates(),
        ])->baseRoute('porfolio.pages.index');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'content' => 'nullable|string',
            'parent_id' => 'nullable|exists:pages,id',
            'header_id' => 'nullable|exists:headers,id',
            'footer_id' => 'nullable|exists:footers,id',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'meta_keywords' => 'nullable|array',
            'featured_image' => 'nullable|string|max:255',
            'template' => 'required|string|max:50',
            'layout' => 'nullable|string|max:50',
            'settings' => 'nullable|array',
            'is_homepage' => 'boolean',
            'is_active' => 'boolean',
            'is_in_menu' => 'boolean',
            'menu_order' => 'nullable|integer|min:0',
        ]);

        $validated['uuid'] = Str::uuid();
        $validated['slug'] = $this->generateUniqueSlug($validated['title']);

        if (!empty($validated['is_homepage']) && $validated['is_homepage']) {
            Page::where('is_homepage', true)->update(['is_homepage' => false]);
        }

        Page::create($validated);

        return redirect()->route('porfolio.pages.index')
            ->with('success', 'Page created successfully.');
    }

    public function edit(int $id): Modal
    {
        $page = Page::findOrFail($id);

        return Inertia::modal('porfolio::dashboard/pages/Edit', [
            'page' => $page,
            'headers' => Header::active()->ordered()->get(['id', 'title']),
            'footers' => Footer::active()->ordered()->get(['id', 'title']),
            'pages' => Page::active()->whereNull('parent_id')->where('id', '!=', $id)->ordered()->get(['id', 'title']),
            'templates' => Page::getTemplates(),
        ])->baseRoute('porfolio.pages.index');
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $page = Page::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'content' => 'nullable|string',
            'parent_id' => 'nullable|exists:pages,id',
            'header_id' => 'nullable|exists:headers,id',
            'footer_id' => 'nullable|exists:footers,id',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'meta_keywords' => 'nullable|array',
            'featured_image' => 'nullable|string|max:255',
            'template' => 'required|string|max:50',
            'layout' => 'nullable|string|max:50',
            'settings' => 'nullable|array',
            'is_homepage' => 'boolean',
            'is_active' => 'boolean',
            'is_in_menu' => 'boolean',
            'menu_order' => 'nullable|integer|min:0',
        ]);

        if (isset($validated['title']) && $validated['title'] !== $page->title) {
            $validated['slug'] = $this->generateUniqueSlug($validated['title'], $id);
        }

        if (!empty($validated['is_homepage']) && $validated['is_homepage'] && !$page->is_homepage) {
            Page::where('is_homepage', true)->where('id', '!=', $id)->update(['is_homepage' => false]);
        }

        $page->update($validated);

        return redirect()->route('porfolio.pages.index')
            ->with('success', 'Page updated successfully.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $page = Page::findOrFail($id);
        $page->delete();

        return redirect()->route('porfolio.pages.index')
            ->with('success', 'Page deleted successfully.');
    }

    protected function generateUniqueSlug(string $title, ?int $excludeId = null): string
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;

        $query = Page::where('slug', $slug);
        if ($excludeId) {
            $query->where('id', '!=', $excludeId);
        }

        while ($query->exists()) {
            $slug = $originalSlug . '-' . $count;
            $count++;
            $query = Page::where('slug', $slug);
            if ($excludeId) {
                $query->where('id', '!=', $excludeId);
            }
        }

        return $slug;
    }
}
