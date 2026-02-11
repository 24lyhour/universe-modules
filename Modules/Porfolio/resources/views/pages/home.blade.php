@extends('porfolio::layouts.master')

@section('title', $page->meta_title ?? 'Home - ' . config('app.name'))
@section('meta_description', $page->meta_description ?? '')

@section('content')
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div class="absolute inset-0 opacity-30">
            <div class="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div class="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    Building <span class="text-primary-600">Exceptional</span> Digital Experiences
                </h1>
                <p class="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    We create stunning websites, mobile apps, and digital solutions that help businesses grow and succeed in the digital age.
                </p>
                <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="{{ url('/portfolio') }}" class="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30">
                        View Our Work
                        <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                    <a href="{{ url('/contact') }}" class="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors">
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    @if(isset($services) && $services->count() > 0)
        <section class="py-20 lg:py-28 bg-white dark:bg-gray-900">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-2xl mx-auto mb-16">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Our Services</h2>
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">We offer a comprehensive range of digital services to help your business thrive.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    @foreach($services as $service)
                        <div class="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-primary-600 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/20">
                            <div class="w-14 h-14 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600 group-hover:bg-white group-hover:text-primary-600 transition-colors">
                                @include('porfolio::components.service-icon', ['icon' => $service->icon])
                            </div>
                            <h3 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors">
                                {{ $service->title }}
                            </h3>
                            <p class="mt-3 text-gray-600 dark:text-gray-400 group-hover:text-primary-100 transition-colors">
                                {{ $service->description }}
                            </p>
                            <a href="{{ url('/services/' . $service->slug) }}" class="mt-6 inline-flex items-center text-primary-600 group-hover:text-white font-medium transition-colors">
                                Learn more
                                <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    @endforeach
                </div>
            </div>
        </section>
    @endif

    <!-- Featured Portfolio Section -->
    @if(isset($featuredPortfolios) && $featuredPortfolios->count() > 0)
        <section class="py-20 lg:py-28 bg-gray-50 dark:bg-gray-800">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-16">
                    <div>
                        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Featured Work</h2>
                        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">Check out some of our recent projects.</p>
                    </div>
                    <a href="{{ url('/portfolio') }}" class="mt-4 sm:mt-0 inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                        View all projects
                        <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    @foreach($featuredPortfolios as $portfolio)
                        <a href="{{ url('/portfolio/' . $portfolio->slug) }}" class="group block">
                            <div class="relative overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-700 aspect-[4/3]">
                                @if($portfolio->featured_image)
                                    <img src="{{ asset($portfolio->featured_image) }}"
                                         alt="{{ $portfolio->title }}"
                                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                @endif
                                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div class="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-600 text-white rounded-full mb-2">
                                        {{ $portfolio->category }}
                                    </span>
                                    <h3 class="text-xl font-semibold text-white">{{ $portfolio->title }}</h3>
                                </div>
                            </div>
                            <div class="mt-4">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                                    {{ $portfolio->title }}
                                </h3>
                                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ $portfolio->client_name }}</p>
                            </div>
                        </a>
                    @endforeach
                </div>
            </div>
        </section>
    @endif

    <!-- Testimonials Section -->
    @if(isset($testimonials) && $testimonials->count() > 0)
        <section class="py-20 lg:py-28 bg-white dark:bg-gray-900">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-2xl mx-auto mb-16">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">What Our Clients Say</h2>
                    <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">Don't just take our word for it - hear from our satisfied clients.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    @foreach($testimonials as $testimonial)
                        <div class="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                            <!-- Stars -->
                            <div class="flex gap-1 mb-4">
                                @for($i = 0; $i < 5; $i++)
                                    <svg class="h-5 w-5 {{ $i < $testimonial->rating ? 'text-yellow-400' : 'text-gray-300' }}" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                @endfor
                            </div>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                                "{{ $testimonial->content }}"
                            </p>
                            <div class="mt-6 flex items-center">
                                @if($testimonial->avatar)
                                    <img src="{{ asset($testimonial->avatar) }}" alt="{{ $testimonial->name }}" class="w-12 h-12 rounded-full object-cover">
                                @else
                                    <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                                        <span class="text-primary-600 font-semibold text-lg">{{ substr($testimonial->name, 0, 1) }}</span>
                                    </div>
                                @endif
                                <div class="ml-4">
                                    <p class="font-semibold text-gray-900 dark:text-white">{{ $testimonial->name }}</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ $testimonial->position }}{{ $testimonial->company ? ', ' . $testimonial->company : '' }}</p>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </section>
    @endif

    <!-- CTA Section -->
    <section class="py-20 lg:py-28 bg-primary-600">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-3xl sm:text-4xl font-bold text-white">Ready to Start Your Project?</h2>
                <p class="mt-4 text-lg text-primary-100">Let's work together to create something amazing. Get in touch with us today.</p>
                <a href="{{ url('/contact') }}" class="mt-8 inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-white text-primary-600 hover:bg-gray-100 transition-colors">
                    Start a Project
                    <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
@endsection

@push('styles')
<style>
    @keyframes blob {
        0%, 100% { transform: translate(0, 0) scale(1); }
        25% { transform: translate(20px, -30px) scale(1.1); }
        50% { transform: translate(-20px, 20px) scale(0.9); }
        75% { transform: translate(30px, 10px) scale(1.05); }
    }
    .animate-blob { animation: blob 7s infinite; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-4000 { animation-delay: 4s; }
</style>
@endpush
