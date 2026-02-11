@extends('porfolio::layouts.master')

@section('title', $page->meta_title ?? 'Our Services - ' . config('app.name'))
@section('meta_description', $page->meta_description ?? 'Explore our comprehensive range of digital services.')

@section('content')
    <!-- Hero Section -->
    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">Our Services</h1>
                <p class="mt-6 text-lg text-gray-600 dark:text-gray-400">
                    {{ $page->description ?? 'We offer a comprehensive range of digital services to help your business thrive in the digital landscape.' }}
                </p>
            </div>
        </div>
    </section>

    <!-- Services Grid -->
    <section class="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            @if(isset($services) && $services->count() > 0)
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
                            @if($service->slug)
                                <a href="{{ url('/services/' . $service->slug) }}" class="mt-6 inline-flex items-center text-primary-600 group-hover:text-white font-medium transition-colors">
                                    Learn more
                                    <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </a>
                            @endif
                        </div>
                    @endforeach
                </div>
            @else
                <div class="text-center py-16">
                    <svg class="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                    <h3 class="mt-4 text-xl font-semibold text-gray-900 dark:text-white">No services available</h3>
                    <p class="mt-2 text-gray-600 dark:text-gray-400">Check back later for our available services.</p>
                </div>
            @endif
        </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Why Choose Us?</h2>
                <p class="mt-4 text-gray-600 dark:text-gray-400">We bring expertise, dedication, and passion to every project.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="text-center">
                    <div class="w-16 h-16 mx-auto bg-primary-600 rounded-full flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="mt-6 text-lg font-semibold text-gray-900 dark:text-white">Fast Delivery</h3>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">We deliver projects on time, every time.</p>
                </div>
                <div class="text-center">
                    <div class="w-16 h-16 mx-auto bg-primary-600 rounded-full flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                    </div>
                    <h3 class="mt-6 text-lg font-semibold text-gray-900 dark:text-white">Quality Assured</h3>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">High standards in everything we create.</p>
                </div>
                <div class="text-center">
                    <div class="w-16 h-16 mx-auto bg-primary-600 rounded-full flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                    </div>
                    <h3 class="mt-6 text-lg font-semibold text-gray-900 dark:text-white">24/7 Support</h3>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Always here when you need us.</p>
                </div>
                <div class="text-center">
                    <div class="w-16 h-16 mx-auto bg-primary-600 rounded-full flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                        </svg>
                    </div>
                    <h3 class="mt-6 text-lg font-semibold text-gray-900 dark:text-white">Fair Pricing</h3>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Competitive rates for premium services.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 lg:py-24 bg-primary-600">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-white">Ready to Get Started?</h2>
            <p class="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">Contact us today to discuss your project requirements.</p>
            <a href="{{ url('/contact') }}" class="mt-8 inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg bg-white text-primary-600 hover:bg-gray-100 transition-colors">
                Contact Us
            </a>
        </div>
    </section>
@endsection
