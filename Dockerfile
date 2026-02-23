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

# Cache bust - change this value to force rebuild (MUST be before COPY)
ARG CACHE_BUST=9

# Copy application files
COPY . .

# Accept GITHUB_TOKEN as build argument
ARG GITHUB_TOKEN
ENV GITHUB_TOKEN=$GITHUB_TOKEN

# Initialize submodules OR clone modules manually
RUN git config --global --add safe.directory /app && \
    git submodule update --init --recursive --depth 1 || \
    (echo "Submodule failed, using clone script" && \
     rm -rf Modules && \
     chmod +x scripts/clone-modules.sh && \
     bash scripts/clone-modules.sh)

# Verify modules exist
RUN ls -la Modules/ && ls -la Modules/Customer/resources/js/Components/

# Ensure Laravel directories exist and are writable
RUN mkdir -p bootstrap/cache storage/logs storage/framework/cache storage/framework/sessions storage/framework/views \
    && chmod -R 775 bootstrap/cache storage

# Create .env file for build (will be overwritten by Railway env vars at runtime)
RUN cp .env.example .env || echo "APP_KEY=" > .env
RUN php artisan key:generate --force || true

# Install PHP dependencies
RUN composer install --optimize-autoloader --no-dev --no-interaction --ignore-platform-req=ext-exif

# Install Node dependencies
RUN yarn install --frozen-lockfile

# Debug: Check if stub files exist before build
RUN echo "=== Checking route files ===" && \
    ls -la resources/js/routes/ | head -10 && \
    echo "=== Checking action files ===" && \
    ls -la resources/js/actions/App/Http/Controllers/Settings/ && \
    echo "=== Checking wayfinder.ts ===" && \
    cat resources/js/wayfinder.ts | head -5

# Build assets (skip wayfinder plugin to avoid segfault)
RUN SKIP_WAYFINDER=1 yarn build

# Cache Laravel config
RUN php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache

EXPOSE 8080

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]

