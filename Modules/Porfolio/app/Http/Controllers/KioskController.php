<?php

namespace Modules\Porfolio\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;
use Modules\Porfolio\Models\Page;
use Modules\Porfolio\Models\Portfolio;
use Modules\Porfolio\Models\Service;
use Modules\Porfolio\Models\Testimonial;
use Modules\Porfolio\Models\ContactMessage;
use Modules\Porfolio\Models\SiteSetting;

class KioskController extends Controller
{
    /**
     * Homepage
     */
    public function home(): View
    {
        $page = Page::where('is_homepage', true)->active()->first()
            ?? Page::where('slug', 'home')->active()->first();

        return view('porfolio::pages.home', [
            'page' => $page,
            'services' => Service::active()->featured()->ordered()->take(6)->get(),
            'featuredPortfolios' => Portfolio::where('is_active', true)
                ->where('is_featured', true)
                ->orderBy('sort_order')
                ->take(6)
                ->get(),
            'testimonials' => Testimonial::active()->featured()->ordered()->take(3)->get(),
            'settings' => SiteSetting::getPublicSettings(),
        ]);
    }

    /**
     * About page
     */
    public function about(): View
    {
        $page = Page::where('slug', 'about')->active()->first();

        return view('porfolio::pages.about', [
            'page' => $page,
            'testimonials' => Testimonial::active()->ordered()->take(6)->get(),
            'settings' => SiteSetting::getPublicSettings(),
        ]);
    }

    /**
     * Portfolio listing page
     */
    public function portfolioIndex(Request $request): View
    {
        $page = Page::where('slug', 'portfolio')->active()->first();

        $query = Portfolio::where('is_active', true)->orderBy('sort_order');

        if ($request->has('category') && $request->category) {
            $query->where('category', $request->category);
        }

        $portfolios = $query->paginate(12);

        $categories = Portfolio::where('is_active', true)
            ->whereNotNull('category')
            ->distinct()
            ->pluck('category')
            ->sort()
            ->values();

        return view('porfolio::pages.portfolio.index', [
            'page' => $page,
            'portfolios' => $portfolios,
            'categories' => $categories,
            'settings' => SiteSetting::getPublicSettings(),
        ]);
    }

    /**
     * Portfolio detail page
     */
    public function portfolioShow(string $slug): View
    {
        $portfolio = Portfolio::where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        // Increment view count
        $portfolio->increment('view');

        // Get related portfolios
        $relatedPortfolios = Portfolio::where('is_active', true)
            ->where('id', '!=', $portfolio->id)
            ->where(function ($q) use ($portfolio) {
                $q->where('category', $portfolio->category)
                    ->orWhere('industry', $portfolio->industry);
            })
            ->orderBy('sort_order')
            ->take(3)
            ->get();

        return view('porfolio::pages.portfolio.show', [
            'portfolio' => $portfolio,
            'relatedPortfolios' => $relatedPortfolios,
            'settings' => SiteSetting::getPublicSettings(),
        ]);
    }

    /**
     * Services listing page
     */
    public function servicesIndex(): View
    {
        $page = Page::where('slug', 'services')->active()->first();

        return view('porfolio::pages.services.index', [
            'page' => $page,
            'services' => Service::active()->ordered()->get(),
            'settings' => SiteSetting::getPublicSettings(),
        ]);
    }

    /**
     * Service detail page
     */
    public function serviceShow(string $slug): View
    {
        $service = Service::where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        $otherServices = Service::active()
            ->where('id', '!=', $service->id)
            ->ordered()
            ->take(3)
            ->get();

        return view('porfolio::pages.services.show', [
            'service' => $service,
            'otherServices' => $otherServices,
            'settings' => SiteSetting::getPublicSettings(),
        ]);
    }

    /**
     * Contact page
     */
    public function contact(): View
    {
        $page = Page::where('slug', 'contact')->active()->first();

        return view('porfolio::pages.contact', [
            'page' => $page,
            'settings' => SiteSetting::getPublicSettings(),
        ]);
    }

    /**
     * Submit contact form
     */
    public function submitContact(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string|max:5000',
        ]);

        $validated['uuid'] = Str::uuid();
        $validated['ip_address'] = $request->ip();
        $validated['user_agent'] = $request->userAgent();

        ContactMessage::create($validated);

        return redirect()->back()
            ->with('success', 'Thank you for your message. We will get back to you soon!');
    }

    /**
     * Dynamic page by slug
     */
    public function page(string $slug): View
    {
        $page = Page::where('slug', $slug)
            ->active()
            ->published()
            ->with(['header', 'footer', 'activeSections'])
            ->firstOrFail();

        $template = $page->template ?? 'default';
        $viewName = "porfolio::pages.templates.{$template}";

        if (!view()->exists($viewName)) {
            $viewName = 'porfolio::pages.templates.default';
        }

        return view($viewName, [
            'page' => $page,
            'settings' => SiteSetting::getPublicSettings(),
        ]);
    }
}
