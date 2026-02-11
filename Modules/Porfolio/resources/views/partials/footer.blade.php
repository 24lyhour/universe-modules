@php
    $footer = $footer ?? \Modules\Porfolio\Models\Footer::active()->first();
    $socialLinks = $footer?->social_links ?? [];
    $quickLinks = $footer?->quick_links ?? [];
    $columns = $footer?->columns ?? [];
@endphp

<footer class="bg-gray-900 text-gray-300">
    <!-- Main Footer -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <!-- Brand Column -->
            <div class="lg:col-span-1">
                @if($footer?->logo)
                    <img src="{{ asset($footer->logo) }}" alt="{{ config('app.name') }}" class="h-8 w-auto mb-4">
                @else
                    <span class="text-2xl font-bold text-white">{{ config('app.name') }}</span>
                @endif

                @if($footer?->description)
                    <p class="mt-4 text-sm text-gray-400 leading-relaxed">
                        {{ $footer->description }}
                    </p>
                @endif

                <!-- Social Links -->
                @if(count($socialLinks) > 0)
                    <div class="mt-6 flex space-x-4">
                        @foreach($socialLinks as $social)
                            <a href="{{ $social['url'] ?? '#' }}"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="text-gray-400 hover:text-white transition-colors"
                               aria-label="{{ $social['platform'] ?? 'Social' }}">
                                @include('porfolio::components.social-icon', ['platform' => $social['platform'] ?? ''])
                            </a>
                        @endforeach
                    </div>
                @endif
            </div>

            <!-- Quick Links -->
            <div>
                <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
                <ul class="space-y-3">
                    @foreach($quickLinks as $link)
                        <li>
                            <a href="{{ $link['url'] ?? '#' }}" class="text-sm text-gray-400 hover:text-white transition-colors">
                                {{ $link['label'] ?? '' }}
                            </a>
                        </li>
                    @endforeach
                </ul>
            </div>

            <!-- Dynamic Columns -->
            @foreach($columns as $column)
                <div>
                    <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                        {{ $column['title'] ?? '' }}
                    </h3>
                    <ul class="space-y-3">
                        @foreach($column['links'] ?? [] as $link)
                            <li>
                                <a href="{{ $link['url'] ?? '#' }}" class="text-sm text-gray-400 hover:text-white transition-colors">
                                    {{ $link['label'] ?? '' }}
                                </a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            @endforeach

            <!-- Contact Info -->
            <div>
                <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
                <ul class="space-y-3">
                    @if($footer?->contact_email)
                        <li class="flex items-start">
                            <svg class="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <a href="mailto:{{ $footer->contact_email }}" class="text-sm text-gray-400 hover:text-white transition-colors">
                                {{ $footer->contact_email }}
                            </a>
                        </li>
                    @endif
                    @if($footer?->contact_phone)
                        <li class="flex items-start">
                            <svg class="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <a href="tel:{{ $footer->contact_phone }}" class="text-sm text-gray-400 hover:text-white transition-colors">
                                {{ $footer->contact_phone }}
                            </a>
                        </li>
                    @endif
                    @if($footer?->contact_address)
                        <li class="flex items-start">
                            <svg class="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <span class="text-sm text-gray-400">{{ $footer->contact_address }}</span>
                        </li>
                    @endif
                </ul>
            </div>
        </div>

        <!-- Newsletter -->
        @if($footer?->newsletter_enabled)
            <div class="mt-12 pt-8 border-t border-gray-800">
                <div class="max-w-xl">
                    <h3 class="text-lg font-semibold text-white">{{ $footer->newsletter_title ?? 'Subscribe to our newsletter' }}</h3>
                    <p class="mt-2 text-sm text-gray-400">{{ $footer->newsletter_description ?? 'Get the latest updates delivered to your inbox.' }}</p>
                    <form class="mt-4 flex flex-col sm:flex-row gap-3">
                        <input type="email"
                               placeholder="Enter your email"
                               class="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                        <button type="submit"
                                class="px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        @endif
    </div>

    <!-- Copyright -->
    <div class="border-t border-gray-800">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p class="text-sm text-gray-400 text-center">
                {{ $footer?->copyright_text ?? '© ' . date('Y') . ' ' . config('app.name') . '. All rights reserved.' }}
            </p>
        </div>
    </div>
</footer>
