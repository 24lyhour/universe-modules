<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Module to Resources Mapping
    |--------------------------------------------------------------------------
    |
    | Maps modules to their permission resources. This is used to group
    | permissions in the UI and determine what permissions belong to each module.
    |
    */
    'module_resources' => [
        'Employee' => ['employees', 'employee_types', 'attendances'],
        'School' => ['schools', 'departments', 'classrooms', 'courses', 'programs', 'equipment'],
        'Blog' => ['posts'],
        'Company' => ['companies'],
        'Hotel' => ['hotels'],
        'Customer' => ['customers', 'customer_otps'],
        'Movie' => ['movices'],
        'Outlet' => ['outlets', 'outlet_types'],
        'Portfolio' => ['portfolios', 'pages', 'sections', 'services', 'testimonials', 'headers', 'footers', 'site_settings', 'contact_messages'],
        'Menu' => ['menus', 'menu_types', 'categories'],
        'Wallets' => ['wallets', 'transactions'],
        'Product' => ['products', 'product_variants', 'product_attributes', 'product_attribute_values', 'product_add_ons', 'product_upsells'],
        'Booking' => ['bookings'],
        'Order' => ['orders'],
        'Payment' => ['payments'],
        'Report' => ['reports'],
        'Media' => ['media'],
        'User Management' => ['users', 'roles', 'permissions'],
        'Settings' => ['settings', 'configurations', 'login_settings', 'activity_logs'],
        'Dashboard' => ['dashboard', 'dashboard_widgets', 'analytics'],
    ],

    /*
    |--------------------------------------------------------------------------
    | Tenant Type Module Access
    |--------------------------------------------------------------------------
    |
    | Defines which modules are accessible for each tenant type.
    | 'common' modules are available to all tenant users.
    | Add your tenant types and their allowed modules here.
    |
    */
    'tenant_modules' => [
        'common' => ['Dashboard', 'User Management', 'Settings', 'Report', 'Media'],
        'School' => ['School', 'Employee'],
        'Outlet' => ['Outlet', 'Menu', 'Product', 'Customer', 'Order', 'Payment', 'Wallets', 'Booking', 'Blog', 'Company', 'Hotel', 'Movie', 'Portfolio'],
    ],

    /*
    |--------------------------------------------------------------------------
    | Dashboard Widget to Module Mapping
    |--------------------------------------------------------------------------
    |
    | Maps dashboard widget permission actions to their parent modules.
    | Used to filter dashboard widget permissions based on tenant access.
    |
    */
    'widget_modules' => [
        'customer' => 'Customer',
        'menu' => 'Menu',
        'outlet' => 'Outlet',
        'product' => 'Product',
        'order' => 'Order',
        'wallets' => 'Wallets',
        'employee' => 'Employee',
        'school' => 'School',
    ],
];
