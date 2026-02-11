<?php

namespace Modules\Porfolio\Providers;

use App\Services\MenuService;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use Modules\Porfolio\Contracts\PortfolioRepositoryInterface;
use Modules\Porfolio\Repositories\PortfolioRepository;
use Nwidart\Modules\Traits\PathNamespace;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;

class PorfolioServiceProvider extends ServiceProvider
{
    use PathNamespace;

    protected string $name = 'Porfolio';

    protected string $nameLower = 'porfolio';

    /**
     * Boot the application events.
     */
    public function boot(): void
    {
        $this->registerCommands();
        $this->registerCommandSchedules();
        $this->registerTranslations();
        $this->registerConfig();
        $this->registerViews();
        $this->loadMigrationsFrom(module_path($this->name, 'database/migrations'));
        $this->registerMenuItems();
    }

    /**
     * Register menu items for the Portfolio module.
     * Deferred until app is booted so routes are available.
     */
    protected function registerMenuItems(): void
    {
        $this->app->booted(function () {
            // Register Portfolio menu in primary navigation
            MenuService::addMenuItem(
                menu: 'primary',
                id: 'portfolio',
                title: __('Portfolio'),
                url: route('porfolio.index'),
                icon: 'Briefcase',
                order: 200,
                permissions: null,
                route: 'porfolio.*'
            );

            MenuService::addSubmenuItem('primary', 'portfolio', __('Portfolios'), route('porfolio.index'), 10, null, 'porfolio.index', 'Briefcase');
            MenuService::addSubmenuItem('primary', 'portfolio', __('Headers'), route('porfolio.headers.index'), 20, null, 'porfolio.headers.*', 'PanelTop');
            MenuService::addSubmenuItem('primary', 'portfolio', __('Footers'), route('porfolio.footers.index'), 30, null, 'porfolio.footers.*', 'PanelBottom');
            MenuService::addSubmenuItem('primary', 'portfolio', __('Pages'), route('porfolio.pages.index'), 40, null, 'porfolio.pages.*', 'FileText');
            MenuService::addSubmenuItem('primary', 'portfolio', __('Services'), route('porfolio.services.index'), 50, null, 'porfolio.services.*', 'Wrench');
            MenuService::addSubmenuItem('primary', 'portfolio', __('Testimonials'), route('porfolio.testimonials.index'), 60, null, 'porfolio.testimonials.*', 'MessageSquareQuote');
            MenuService::addSubmenuItem('primary', 'portfolio', __('Messages'), route('porfolio.messages.index'), 70, null, 'porfolio.messages.*', 'Mail');

            // Register Settings menu in footer navigation
            MenuService::addMenuItem(
                menu: 'footer',
                id: 'settings',
                title: __('Settings'),
                url: route('porfolio.settings.index'),
                icon: 'Settings',
                order: 100,
                permissions: null,
                route: 'porfolio.settings.*'
            );

            MenuService::addSubmenuItem('footer', 'settings', __('Portfolio Settings'), route('porfolio.settings.index'), 10, null, 'porfolio.settings.*', 'Settings');
        });
    }

    /**
     * Register the service provider.
     */
    public function register(): void
    {
        $this->app->register(EventServiceProvider::class);
        $this->app->register(RouteServiceProvider::class);

        $this->registerRepositories();
    }

    /**
     * Register repository bindings.
     */
    protected function registerRepositories(): void
    {
        $this->app->bind(PortfolioRepositoryInterface::class, PortfolioRepository::class);
    }

    /**
     * Register commands in the format of Command::class
     */
    protected function registerCommands(): void
    {
        // $this->commands([]);
    }

    /**
     * Register command Schedules.
     */
    protected function registerCommandSchedules(): void
    {
        // $this->app->booted(function () {
        //     $schedule = $this->app->make(Schedule::class);
        //     $schedule->command('inspire')->hourly();
        // });
    }

    /**
     * Register translations.
     */
    public function registerTranslations(): void
    {
        $langPath = resource_path('lang/modules/'.$this->nameLower);

        if (is_dir($langPath)) {
            $this->loadTranslationsFrom($langPath, $this->nameLower);
            $this->loadJsonTranslationsFrom($langPath);
        } else {
            $this->loadTranslationsFrom(module_path($this->name, 'lang'), $this->nameLower);
            $this->loadJsonTranslationsFrom(module_path($this->name, 'lang'));
        }
    }

    /**
     * Register config.
     */
    protected function registerConfig(): void
    {
        $configPath = module_path($this->name, config('modules.paths.generator.config.path'));

        if (is_dir($configPath)) {
            $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($configPath));

            foreach ($iterator as $file) {
                if ($file->isFile() && $file->getExtension() === 'php') {
                    $config = str_replace($configPath.DIRECTORY_SEPARATOR, '', $file->getPathname());
                    $config_key = str_replace([DIRECTORY_SEPARATOR, '.php'], ['.', ''], $config);
                    $segments = explode('.', $this->nameLower.'.'.$config_key);

                    // Remove duplicated adjacent segments
                    $normalized = [];
                    foreach ($segments as $segment) {
                        if (end($normalized) !== $segment) {
                            $normalized[] = $segment;
                        }
                    }

                    $key = ($config === 'config.php') ? $this->nameLower : implode('.', $normalized);

                    $this->publishes([$file->getPathname() => config_path($config)], 'config');
                    $this->merge_config_from($file->getPathname(), $key);
                }
            }
        }
    }

    /**
     * Merge config from the given path recursively.
     */
    protected function merge_config_from(string $path, string $key): void
    {
        $existing = config($key, []);
        $module_config = require $path;

        config([$key => array_replace_recursive($existing, $module_config)]);
    }

    /**
     * Register views.
     */
    public function registerViews(): void
    {
        $viewPath = resource_path('views/modules/'.$this->nameLower);
        $sourcePath = module_path($this->name, 'resources/views');

        $this->publishes([$sourcePath => $viewPath], ['views', $this->nameLower.'-module-views']);

        $this->loadViewsFrom(array_merge($this->getPublishableViewPaths(), [$sourcePath]), $this->nameLower);

        Blade::componentNamespace(config('modules.namespace').'\\' . $this->name . '\\View\\Components', $this->nameLower);
    }

    /**
     * Get the services provided by the provider.
     */
    public function provides(): array
    {
        return [];
    }

    private function getPublishableViewPaths(): array
    {
        $paths = [];
        foreach (config('view.paths') as $path) {
            if (is_dir($path.'/modules/'.$this->nameLower)) {
                $paths[] = $path.'/modules/'.$this->nameLower;
            }
        }

        return $paths;
    }
}
