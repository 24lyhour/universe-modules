#!/bin/bash
set -e

echo "🚀 Starting Universe Application..."

# Create required directories
mkdir -p /var/www/html/storage/logs
mkdir -p /var/www/html/storage/framework/{cache,sessions,views}
mkdir -p /var/www/html/bootstrap/cache
mkdir -p /var/log/supervisor

# Set permissions (more permissive for container)
chown -R www-data:www-data /var/www/html/storage
chown -R www-data:www-data /var/www/html/bootstrap/cache
chmod -R 777 /var/www/html/storage
chmod -R 777 /var/www/html/bootstrap/cache

# Touch log file and set permissions
touch /var/www/html/storage/logs/laravel.log
chmod 666 /var/www/html/storage/logs/laravel.log
chown www-data:www-data /var/www/html/storage/logs/laravel.log

# Generate APP_KEY if not set
if [ -z "$APP_KEY" ]; then
    echo "⚠️ APP_KEY not set, generating..."
    php artisan key:generate --force
fi

# Create storage link
echo "🔗 Creating storage link..."
php artisan storage:link --force 2>/dev/null || true

# Clear any cached config first
echo "🧹 Clearing cached config..."
rm -f /var/www/html/bootstrap/cache/config.php 2>/dev/null || true
php artisan config:clear 2>/dev/null || true

# Wait for database to be ready with retry logic
echo "⏳ Waiting for database..."
MAX_RETRIES=30
RETRY_COUNT=0
DB_READY=false

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    if php artisan tinker --execute="DB::connection()->getPdo();" 2>/dev/null; then
        DB_READY=true
        echo "✅ Database connected!"
        break
    fi
    RETRY_COUNT=$((RETRY_COUNT + 1))
    echo "Waiting for database... (attempt $RETRY_COUNT/$MAX_RETRIES)"
    sleep 2
done

if [ "$DB_READY" = false ]; then
    echo "⚠️ Database not available after $MAX_RETRIES attempts. Starting anyway..."
fi

# Run migrations (only if DB is ready)
if [ "$DB_READY" = true ]; then
    echo "📦 Running migrations..."
    php artisan migrate --force || echo "⚠️ Migration failed (continuing anyway)"

    # Run seeders if tables are empty
    echo "🌱 Running seeders..."
    php artisan db:seed --force 2>/dev/null || echo "⚠️ Seeding skipped"
fi

# Clear and cache config
echo "⚡ Optimizing application..."
php artisan config:clear || true
php artisan route:clear || true
php artisan view:clear || true
php artisan cache:clear || true

echo "✅ Application ready!"
echo "🌐 Starting services..."

# Start supervisor (nginx + php-fpm)
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
