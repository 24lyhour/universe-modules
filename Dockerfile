# Railway Dockerfile for Laravel + Inertia + Vue
FROM php:8.2-fpm

# Arguments for build
ARG NODE_VERSION=20

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    libpq-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libwebp-dev \
    libexif-dev \
    zip \
    unzip \
    nginx \
    supervisor \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip opcache

# Install Redis extension
RUN pecl install redis && docker-php-ext-enable redis

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install Node.js and Yarn
RUN curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g yarn

# Set working directory and clone repo with submodules
WORKDIR /var/www
RUN rm -rf html && \
    git clone --recurse-submodules --shallow-submodules --depth 1 \
    https://github.com/24lyhour/universe-modules.git html && \
    rm -rf html/.git html/Modules/*/.git

WORKDIR /var/www/html

# Install PHP dependencies (no dev)
RUN composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader --no-scripts

# Install Node dependencies
RUN yarn install --frozen-lockfile

# Run composer scripts
RUN composer dump-autoload --optimize

# Build frontend assets
RUN yarn build

# Set permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage \
    && chmod -R 755 /var/www/html/bootstrap/cache

# Copy configs from cloned repo to system directories
RUN cp docker/nginx.conf /etc/nginx/sites-available/default && \
    cp docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf && \
    cp docker/php.ini /usr/local/etc/php/conf.d/app.ini && \
    cp docker/entrypoint.sh /usr/local/bin/entrypoint.sh && \
    chmod +x /usr/local/bin/entrypoint.sh

# Expose port
EXPOSE 8080

# Start with entrypoint
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
