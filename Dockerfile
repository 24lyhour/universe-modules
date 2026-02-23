FROM php:8.2-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    zip \
    unzip \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install Yarn
RUN npm install -g yarn

WORKDIR /app

# Cache bust arg - BEFORE COPY to invalidate cached layers
# Change this value to force complete rebuild
ARG CACHE_BUST=v5-force-rebuild
RUN echo "Cache bust: $CACHE_BUST - forcing fresh COPY"

# Copy application files (Modules/ excluded by .dockerignore)
COPY . .

# Accept GITHUB_TOKEN as build argument for cloning private repos
ARG GITHUB_TOKEN
ENV GITHUB_TOKEN=$GITHUB_TOKEN

# Clone modules (always cloned fresh since Modules/ is in .dockerignore)
RUN chmod +x scripts/clone-modules.sh && bash scripts/clone-modules.sh

# Ensure Laravel directories exist and are writable
RUN mkdir -p bootstrap/cache storage/logs storage/framework/cache storage/framework/sessions storage/framework/views \
    && chmod -R 775 bootstrap/cache storage

# Install PHP dependencies
RUN composer install --optimize-autoloader --no-dev --no-interaction --ignore-platform-req=ext-exif

# Install Node dependencies
RUN yarn install --frozen-lockfile

# Build assets
RUN yarn build

# Cache Laravel config
RUN php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache

EXPOSE 8080

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
