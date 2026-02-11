@extends('porfolio::layouts.master')

@section('title', $page->meta_title ?? 'About Us - ' . config('app.name'))
@section('meta_description', $page->meta_description ?? 'Learn more about our team and our mission.')

@section('content')
    <!-- Hero Section -->
    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">About Us</h1>
                <p class="mt-6 text-lg text-gray-600 dark:text-gray-400">
                    {{ $page->description ?? 'We are a passionate team dedicated to creating exceptional digital experiences that help businesses grow and succeed.' }}
                </p>
            </div>
        </div>
    </section>

    <!-- Content Section -->
    @if($page && $page->content)
        <section class="py-16 lg:py-24 bg-white dark:bg-gray-900">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                    {!! $page->content !!}
                </div>
            </div>
        </section>
    @else
        <!-- Default About Content -->
        <section class="py-16 lg:py-24 bg-white dark:bg-gray-900">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h2>
                        <p class="mt-4 text-gray-600 dark:text-gray-400">
                            We started with a simple mission: to help businesses establish a powerful online presence.
                            Over the years, we've grown into a full-service digital agency, but our core values remain the same.
                        </p>
                        <p class="mt-4 text-gray-600 dark:text-gray-400">
                            We believe in the power of great design, clean code, and exceptional user experiences.
                            Every project we take on is an opportunity to push boundaries and create something remarkable.
                        </p>
                    </div>
                    <div class="relative">
                        <div class="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                            <svg class="w-32 h-32 text-white opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Values Section -->
        <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-2xl mx-auto mb-12">
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Our Values</h2>
                    <p class="mt-4 text-gray-600 dark:text-gray-400">The principles that guide everything we do.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl">
                        <div class="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                            <svg class="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                            </svg>
                        </div>
                        <h3 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Excellence</h3>
                        <p class="mt-3 text-gray-600 dark:text-gray-400">We strive for excellence in every project, no matter the size.</p>
                    </div>
                    <div class="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl">
                        <div class="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                            <svg class="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                        </div>
                        <h3 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Collaboration</h3>
                        <p class="mt-3 text-gray-600 dark:text-gray-400">We work closely with our clients to achieve their goals.</p>
                    </div>
                    <div class="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl">
                        <div class="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                            <svg class="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>
                        </div>
                        <h3 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Innovation</h3>
                        <p class="mt-3 text-gray-600 dark:text-gray-400">We embrace new technologies and creative solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    @endif

    <!-- Testimonials Section -->
    @if(isset($testimonials) && $testimonials->count() > 0)
        <section class="py-16 lg:py-24 bg-white dark:bg-gray-900">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-2xl mx-auto mb-12">
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">What Our Clients Say</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    @foreach($testimonials as $testimonial)
                        <div class="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                            <div class="flex gap-1 mb-4">
                                @for($i = 0; $i < 5; $i++)
                                    <svg class="h-5 w-5 {{ $i < $testimonial->rating ? 'text-yellow-400' : 'text-gray-300' }}" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                @endfor
                            </div>
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">"{{ $testimonial->content }}"</p>
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
    <section class="py-16 lg:py-24 bg-primary-600">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-white">Ready to Work Together?</h2>
            <p class="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">Let's discuss your project and create something amazing.</p>
            <a href="{{ url('/contact') }}" class="mt-8 inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-white text-primary-600 hover:bg-gray-100 transition-colors">
                Get in Touch
            </a>
        </div>
    </section>
@endsection
