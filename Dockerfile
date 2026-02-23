FROM php:8.2-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git curl libpng-dev libonig-dev libxml2-dev libzip-dev \
    zip unzip nodejs npm && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Install Composer & Yarn
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN npm install -g yarn

WORKDIR /app
COPY . .

# Setup Laravel
RUN mkdir -p bootstrap/cache storage/logs storage/framework/{cache,sessions,views} \
    && chmod -R 775 bootstrap/cache storage \
    && cp .env.example .env || echo "APP_KEY=" > .env

# Install dependencies
RUN composer install --optimize-autoloader --no-dev --no-interaction
RUN yarn install --frozen-lockfile

# Build assets (NODE_ENV=production skips wayfinder plugin)
RUN NODE_ENV=production yarn build

# Cache config
RUN php artisan key:generate --force || true \
    && php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

EXPOSE 8080
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
