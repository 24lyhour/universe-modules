@php
    $header = $header ?? \Modules\Porfolio\Models\Header::active()->first();
    $navigation = $header?->navigation ?? [];
    $actions = $header?->actions ?? [];
@endphp

<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {{ $header?->is_transparent ? 'bg-transparent' : 'bg-white dark:bg-gray-900 shadow-sm' }}" x-data="{ mobileMenuOpen: false, scrolled: false }" @scroll.window="scrolled = window.scrollY > 50">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
            <!-- Logo -->
            <div class="flex-shrink-0">
                <a href="{{ url('/') }}" class="flex items-center">
                    @if($header?->logo)
                        <img src="{{ asset($header->logo) }}" alt="{{ $header->logo_alt ?? config('app.name') }}" class="h-8 w-auto">
                    @else
                        <span class="text-2xl font-bold text-primary-600">{{ config('app.name') }}</span>
                    @endif
                </a>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden lg:flex lg:items-center lg:gap-x-8">
                @foreach($navigation as $item)
                    <a href="{{ $item['url'] ?? '#' }}"
                       target="{{ $item['target'] ?? '_self' }}"
                       class="text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400 transition-colors {{ request()->is(ltrim($item['url'] ?? '', '/')) ? 'text-primary-600 dark:text-primary-400' : '' }}">
                        {{ $item['label'] ?? '' }}
                    </a>
                @endforeach
            </div>

            <!-- Desktop Actions -->
            <div class="hidden lg:flex lg:items-center lg:gap-x-4">
                @foreach($actions as $action)
                    <a href="{{ $action['url'] ?? '#' }}"
                       class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-colors
                              {{ ($action['style'] ?? 'primary') === 'primary'
                                 ? 'bg-primary-600 text-white hover:bg-primary-700'
                                 : 'border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800' }}">
                        {{ $action['label'] ?? '' }}
                    </a>
                @endforeach
            </div>

            <!-- Mobile menu button -->
            <div class="flex lg:hidden">
                <button type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                        @click="mobileMenuOpen = !mobileMenuOpen"
                        aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg x-show="!mobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg x-show="mobileMenuOpen" x-cloak class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile menu -->
        <div x-show="mobileMenuOpen"
             x-transition:enter="transition ease-out duration-200"
             x-transition:enter-start="opacity-0 -translate-y-1"
             x-transition:enter-end="opacity-100 translate-y-0"
             x-transition:leave="transition ease-in duration-150"
             x-transition:leave-start="opacity-100 translate-y-0"
             x-transition:leave-end="opacity-0 -translate-y-1"
             x-cloak
             class="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4">
            <div class="space-y-1">
                @foreach($navigation as $item)
                    <a href="{{ $item['url'] ?? '#' }}"
                       class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800 rounded-lg {{ request()->is(ltrim($item['url'] ?? '', '/')) ? 'text-primary-600 bg-primary-50 dark:text-primary-400 dark:bg-primary-900/20' : '' }}">
                        {{ $item['label'] ?? '' }}
                    </a>
                @endforeach
            </div>
            <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                @foreach($actions as $action)
                    <a href="{{ $action['url'] ?? '#' }}"
                       class="block w-full text-center px-4 py-2 text-sm font-medium rounded-lg transition-colors
                              {{ ($action['style'] ?? 'primary') === 'primary'
                                 ? 'bg-primary-600 text-white hover:bg-primary-700'
                                 : 'border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800' }}">
                        {{ $action['label'] ?? '' }}
                    </a>
                @endforeach
            </div>
        </div>
    </nav>
</header>

<!-- Spacer for fixed header -->
<div class="h-16 lg:h-20"></div>
