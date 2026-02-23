#!/bin/bash
set -e

echo "🚀 Starting Universe Application..."

# Create required directories
mkdir -p /var/www/html/storage/logs
mkdir -p /var/www/html/storage/framework/{cache,sessions,views}
mkdir -p /var/www/html/bootstrap/cache
mkdir -p /var/log/supervisor

# Set permissions
chown -R www-data:www-data /var/www/html/storage
chown -R www-data:www-data /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage
chmod -R 775 /var/www/html/bootstrap/cache

# Wait for database to be ready
echo "⏳ Waiting for database connection..."
max_tries=30
counter=0
until php artisan db:monitor --max=1 > /dev/null 2>&1; do
    counter=$((counter + 1))
    if [ $counter -gt $max_tries ]; then
        echo "❌ Database connection failed after $max_tries attempts"
        exit 1
    fi
    echo "Waiting for database... ($counter/$max_tries)"
    sleep 2
done
echo "✅ Database connected!"

# Run migrations
echo "📦 Running migrations..."
php artisan migrate --force

# Clear and cache config
echo "⚡ Optimizing application..."
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

# Create storage link
echo "🔗 Creating storage link..."
php artisan storage:link --force 2>/dev/null || true

# Module migrations
echo "📦 Running module migrations..."
php artisan module:migrate --force 2>/dev/null || echo "No module migrations to run"

echo "✅ Application ready!"
echo "🌐 Starting services..."

# Start supervisor (nginx + php-fpm + queue + scheduler)
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
