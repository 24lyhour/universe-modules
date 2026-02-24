# Railway CLI Commands

## Important Note

`railway run` executes commands **locally** with Railway's environment variables. However, Railway's internal database hostname (`mysql-zsp.railway.internal`) is **only accessible from within Railway's network**.

This means database commands like `php artisan migrate` or `php artisan db:seed` **will NOT work** with `railway run` from your local machine.

## Solutions for Running Database Commands

### Option 1: Automatic via Deployment (Recommended)

All seeders are configured to run automatically during deployment via `docker/entrypoint.sh`:

```bash
# Just push your code - seeders run on deploy
git push origin main
```

Seeders included in `DatabaseSeeder.php`:
- RolesAndPermissionsSeeder
- UserSeeder
- SettingsSeeder
- WidgetSeeder
- SchoolDatabaseSeeder
- BlogDatabaseSeeder
- CompanyDatabaseSeeder
- CustomerDatabaseSeeder
- EmployeeDatabaseSeeder
- HotelDatabaseSeeder
- MenuDatabaseSeeder
- OutletDatabaseSeeder
- ProductDatabaseSeeder
- PorfolioDatabaseSeeder

### Option 2: Railway Web UI

1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Select **universe-projects** → **universe-modules** service
3. Click **"Shell"** tab (or find "Execute Command")
4. Run your commands directly in the container

### Option 3: Trigger a Redeploy

1. Railway Dashboard → Deployments
2. Click **"Redeploy"** on the latest deployment
3. All seeders will run during startup

---

## Railway CLI Setup

### Link to Project

```bash
railway link
```

Select:
- Workspace: `SievChhing's Projects`
- Project: `universe-projects`
- Environment: `production`
- Service: `universe-modules` (NOT MySQL!)

### Check Link Status

```bash
railway status
```

---

## Commands That Work with `railway run`

These commands don't need database access:

```bash
# Check Laravel version
railway run php artisan --version

# List routes
railway run php artisan route:list

# Clear caches (use with caution)
railway run php artisan config:clear
railway run php artisan cache:clear

# Check environment
railway run php artisan env
```

---

## Commands That DON'T Work with `railway run`

These require database access (use Railway Web UI instead):

```bash
# ❌ Won't work - needs DB
railway run php artisan migrate
railway run php artisan db:seed
railway run php artisan tinker
railway run php artisan module:seed School
```

---

## Local Development Seeder Commands

For local development (with local database):

```bash
# Run all seeders
php artisan db:seed

# Run specific seeder
php artisan db:seed --class=UserSeeder

# Run module seeder
php artisan module:seed School --force

# Run specific class in module
php artisan module:seed School --class=SchoolSeeder --force

# Fresh migration + seed
php artisan migrate:fresh --seed
```

---

## Troubleshooting

### Error: `getaddrinfo for mysql-zsp.railway.internal failed`

This means you're trying to run a database command locally. Use Railway Web UI instead.

### Error: `Target class [Database\Seeders\X] does not exist`

For module seeders, use the full namespace or `module:seed` command:

```bash
# Correct for modules
php artisan module:seed School --force

# Or use full namespace in DatabaseSeeder.php
\Modules\School\Database\Seeders\SchoolDatabaseSeeder::class
```

### Login credentials after seeding

- **Email:** `kouchlyhour@gmail.com`
- **Password:** `12345678`
