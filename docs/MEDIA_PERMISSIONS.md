# Updated seeder - Added media module to RolesAndPermissionsSeeder.php

New artisan command - AddMediaPermissions.php to add media permissions to existing roles
To Test Locally:
Step 1: Run the command

php artisan permissions:add-media
Step 2: Clear cache

php artisan cache:clear
php artisan permission:cache-reset
Step 3: Test

Log in as "lyhour store" (Outlet Admin)
Go to User Management → Edit
Try to open MediaLibraryModal
Should work now (no more 403)
To Deploy to Production (after testing):

RolesAndPermissionsSeeder.php - Added media module
AddMediaPermissions.php - New command (created)

# for the on the production railway

railway run php artisan permissions:add-media
railway run php artisan cache:clear
railway run php artisan permission:cache-reset
