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

# Set working directory
WORKDIR /var/www/html

# Copy all files from build context
COPY . .

# Clone all module repos directly (they are public)
RUN rm -rf Modules/* && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-Blog.git Modules/Blog && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-Booking.git Modules/Booking && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-Company.git Modules/Company && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-Customer.git Modules/Customer && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-Employee.git Modules/Employee && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-Hotel.git Modules/Hotel && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-Media.git Modules/Media && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-Menu.git Modules/Menu && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-Movice.git Modules/Movice && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-Order.git Modules/Order && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-Outlet.git Modules/Outlet && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-Payment.git Modules/Payment && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-Porfolio.git Modules/Porfolio && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-Product.git Modules/Product && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-Report.git Modules/Report && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-School.git Modules/School && \
    git clone --depth 1 https://github.com/24lyhour/universe-modules-Wallet.git Modules/Wallets && \
    rm -rf Modules/*/.git

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

# Copy configs to system directories
COPY docker/nginx.conf /etc/nginx/sites-available/default
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY docker/php.ini /usr/local/etc/php/conf.d/app.ini
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Expose port
EXPOSE 8080

# Start with entrypoint
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
