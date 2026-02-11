@extends('porfolio::layouts.master')

@section('title', $service->meta_title ?? $service->title . ' - ' . config('app.name'))
@section('meta_description', $service->description ?? '')

@section('content')
    <!-- Hero Section -->
    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl">
                <a href="{{ url('/services') }}" class="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 mb-6">
                    <svg class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to Services
                </a>

                <div class="flex items-center gap-4 mb-6">
                    <div class="w-16 h-16 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                        @include('porfolio::components.service-icon', ['icon' => $service->icon])
                    </div>
                </div>

                <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">{{ $service->title }}</h1>

                @if($service->description)
                    <p class="mt-6 text-lg text-gray-600 dark:text-gray-400">{{ $service->description }}</p>
                @endif
            </div>
        </div>
    </section>

    <!-- Service Image -->
    @if($service->image)
        <section class="bg-white dark:bg-gray-900">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="relative -mt-8 lg:-mt-16">
                    <img src="{{ asset($service->image) }}"
                         alt="{{ $service->title }}"
                         class="w-full rounded-2xl shadow-2xl">
                </div>
            </div>
        </section>
    @endif

    <!-- Content -->
    <section class="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
                @if($service->content)
                    <div class="prose prose-lg dark:prose-invert max-w-none">
                        {!! $service->content !!}
                    </div>
                @endif

                <!-- Features -->
                @if($service->features && count($service->features) > 0)
                    <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            @foreach($service->features as $feature)
                                <div class="flex items-start gap-3">
                                    <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span class="text-gray-700 dark:text-gray-300">{{ $feature }}</span>
                                </div>
                            @endforeach
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </section>

    <!-- Other Services -->
    @if(isset($otherServices) && $otherServices->count() > 0)
        <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Other Services</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    @foreach($otherServices as $other)
                        <a href="{{ url('/services/' . $other->slug) }}" class="group block p-6 bg-white dark:bg-gray-900 rounded-2xl hover:shadow-lg transition-shadow">
                            <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                @include('porfolio::components.service-icon', ['icon' => $other->icon])
                            </div>
                            <h3 class="mt-4 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                                {{ $other->title }}
                            </h3>
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{{ $other->description }}</p>
                        </a>
                    @endforeach
                </div>
            </div>
        </section>
    @endif

    <!-- CTA Section -->
    <section class="py-16 lg:py-24 bg-primary-600">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-white">Interested in {{ $service->title }}?</h2>
            <p class="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">Let's discuss how we can help you with this service.</p>
            <a href="{{ url('/contact') }}" class="mt-8 inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-white text-primary-600 hover:bg-gray-100 transition-colors">
                Get in Touch
            </a>
        </div>
    </section>
@endsection
