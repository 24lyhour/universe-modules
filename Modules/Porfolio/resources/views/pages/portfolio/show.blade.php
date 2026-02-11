@extends('porfolio::layouts.master')

@section('title', $portfolio->meta_title ?? $portfolio->title . ' - ' . config('app.name'))
@section('meta_description', $portfolio->description ?? '')

@section('content')
    <!-- Project Header -->
    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl">
                <a href="{{ url('/portfolio') }}" class="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 mb-6">
                    <svg class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to Portfolio
                </a>

                @if($portfolio->category)
                    <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 rounded-full mb-4">
                        {{ $portfolio->category }}
                    </span>
                @endif

                <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">{{ $portfolio->title }}</h1>

                @if($portfolio->description)
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">{{ $portfolio->description }}</p>
                @endif

                <div class="mt-8 flex flex-wrap gap-6 text-sm">
                    @if($portfolio->client_name)
                        <div>
                            <span class="text-gray-500 dark:text-gray-400">Client</span>
                            <p class="mt-1 font-medium text-gray-900 dark:text-white">{{ $portfolio->client_name }}</p>
                        </div>
                    @endif
                    @if($portfolio->industry)
                        <div>
                            <span class="text-gray-500 dark:text-gray-400">Industry</span>
                            <p class="mt-1 font-medium text-gray-900 dark:text-white">{{ $portfolio->industry }}</p>
                        </div>
                    @endif
                    @if($portfolio->project_date)
                        <div>
                            <span class="text-gray-500 dark:text-gray-400">Date</span>
                            <p class="mt-1 font-medium text-gray-900 dark:text-white">{{ $portfolio->project_date->format('F Y') }}</p>
                        </div>
                    @endif
                    @if($portfolio->project_url)
                        <div>
                            <span class="text-gray-500 dark:text-gray-400">Website</span>
                            <p class="mt-1">
                                <a href="{{ $portfolio->project_url }}" target="_blank" rel="noopener" class="font-medium text-primary-600 hover:text-primary-700">
                                    Visit Project
                                    <svg class="inline ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </a>
                            </p>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Image -->
    @if($portfolio->featured_image)
        <section class="bg-white dark:bg-gray-900">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="relative -mt-8 lg:-mt-16">
                    <img src="{{ asset($portfolio->featured_image) }}"
                         alt="{{ $portfolio->title }}"
                         class="w-full rounded-2xl shadow-2xl">
                </div>
            </div>
        </section>
    @endif

    <!-- Content -->
    <section class="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
                @if($portfolio->content)
                    <div class="prose prose-lg dark:prose-invert max-w-none">
                        {!! $portfolio->content !!}
                    </div>
                @endif

                <!-- Tags -->
                @if($portfolio->tags && count($portfolio->tags) > 0)
                    <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Technologies & Tags</h3>
                        <div class="flex flex-wrap gap-2">
                            @foreach($portfolio->tags as $tag)
                                <span class="px-3 py-1 text-sm bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full">
                                    {{ $tag }}
                                </span>
                            @endforeach
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </section>

    <!-- Gallery -->
    @if($portfolio->gallery && count($portfolio->gallery) > 0)
        <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Project Gallery</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    @foreach($portfolio->gallery as $image)
                        <div class="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-700">
                            <img src="{{ asset($image) }}"
                                 alt="{{ $portfolio->title }} - Gallery Image"
                                 class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
                        </div>
                    @endforeach
                </div>
            </div>
        </section>
    @endif

    <!-- Related Projects -->
    @if(isset($relatedPortfolios) && $relatedPortfolios->count() > 0)
        <section class="py-16 lg:py-24 bg-white dark:bg-gray-900">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Projects</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    @foreach($relatedPortfolios as $related)
                        <a href="{{ url('/portfolio/' . $related->slug) }}" class="group block">
                            <div class="relative overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-700 aspect-[4/3]">
                                @if($related->featured_image)
                                    <img src="{{ asset($related->featured_image) }}"
                                         alt="{{ $related->title }}"
                                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                @endif
                            </div>
                            <div class="mt-4">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                                    {{ $related->title }}
                                </h3>
                                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ $related->client_name }}</p>
                            </div>
                        </a>
                    @endforeach
                </div>
            </div>
        </section>
    @endif

    <!-- CTA -->
    <section class="py-16 lg:py-24 bg-primary-600">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-white">Like What You See?</h2>
            <p class="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">Let's discuss your project and create something amazing together.</p>
            <a href="{{ url('/contact') }}" class="mt-8 inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-white text-primary-600 hover:bg-gray-100 transition-colors">
                Start a Project
            </a>
        </div>
    </section>
@endsection
