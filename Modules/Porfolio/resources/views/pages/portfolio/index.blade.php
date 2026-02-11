@extends('porfolio::layouts.master')

@section('title', $page->meta_title ?? 'Portfolio - ' . config('app.name'))
@section('meta_description', $page->meta_description ?? 'Explore our portfolio of successful projects')

@section('content')
    <!-- Page Header -->
    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl">
                <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">Our Portfolio</h1>
                <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Explore our collection of successful projects and digital experiences we've crafted for our clients.
                </p>
            </div>
        </div>
    </section>

    <!-- Filter -->
    @if(isset($categories) && count($categories) > 0)
        <section class="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-16 lg:top-20 z-40">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-wrap gap-2">
                    <a href="{{ url('/portfolio') }}"
                       class="px-4 py-2 text-sm font-medium rounded-full transition-colors {{ !request('category') ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700' }}">
                        All
                    </a>
                    @foreach($categories as $category)
                        <a href="{{ url('/portfolio?category=' . urlencode($category)) }}"
                           class="px-4 py-2 text-sm font-medium rounded-full transition-colors {{ request('category') === $category ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700' }}">
                            {{ $category }}
                        </a>
                    @endforeach
                </div>
            </div>
        </section>
    @endif

    <!-- Portfolio Grid -->
    <section class="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            @if($portfolios->count() > 0)
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    @foreach($portfolios as $portfolio)
                        <a href="{{ url('/portfolio/' . $portfolio->slug) }}" class="group block">
                            <div class="relative overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-700 aspect-[4/3]">
                                @if($portfolio->featured_image)
                                    <img src="{{ asset($portfolio->featured_image) }}"
                                         alt="{{ $portfolio->title }}"
                                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                @else
                                    <div class="w-full h-full flex items-center justify-center">
                                        <svg class="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                    </div>
                                @endif
                                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div>
                                        @if($portfolio->category)
                                            <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-600 text-white rounded-full mb-2">
                                                {{ $portfolio->category }}
                                            </span>
                                        @endif
                                        <h3 class="text-xl font-semibold text-white">{{ $portfolio->title }}</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                                    {{ $portfolio->title }}
                                </h3>
                                @if($portfolio->client_name)
                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ $portfolio->client_name }}</p>
                                @endif
                                @if($portfolio->description)
                                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{{ $portfolio->description }}</p>
                                @endif
                            </div>
                        </a>
                    @endforeach
                </div>

                <!-- Pagination -->
                @if($portfolios->hasPages())
                    <div class="mt-12">
                        {{ $portfolios->links() }}
                    </div>
                @endif
            @else
                <div class="text-center py-16">
                    <svg class="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                    <h3 class="mt-4 text-lg font-semibold text-gray-900 dark:text-white">No projects found</h3>
                    <p class="mt-2 text-gray-600 dark:text-gray-400">We're working on adding new projects. Check back soon!</p>
                </div>
            @endif
        </div>
    </section>
@endsection
