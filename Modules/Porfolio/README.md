# Portfolio Module

A Laravel module for managing portfolio projects with repository pattern architecture.

## Structure

```
Porfolio/
├── app/
│   ├── Contracts/
│   │   └── PortfolioRepositoryInterface.php
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── PorfolioController.php
│   │   └── Requests/
│   │       ├── StorePortfolioRequest.php
│   │       └── UpdatePortfolioRequest.php
│   ├── Models/
│   │   └── Portfolio.php
│   ├── Providers/
│   │   └── PorfolioServiceProvider.php
│   ├── Repositories/
│   │   └── PortfolioRepository.php
│   └── Services/
│       └── PortfolioService.php
├── config/
├── database/
│   └── migrations/
├── resources/
├── routes/
└── tests/
```

## Installation

1. Clone this repository into `Modules/Porfolio` directory
2. Register the module in `config/modules.php`
3. Run migrations: `php artisan migrate`

## Architecture

This module follows the **Repository Pattern**:

- **Controller** → Handles HTTP requests
- **Service** → Contains business logic
- **Repository** → Data access layer
- **Model** → Eloquent ORM

## API

### PortfolioService Methods

- `getAllPortfolios()` - Get all portfolios
- `getPaginatedPortfolios($perPage)` - Get paginated portfolios
- `getPortfolioById($id)` - Get portfolio by ID
- `getPortfolioBySlug($slug)` - Get portfolio by slug
- `createPortfolio($data)` - Create a new portfolio
- `updatePortfolio($id, $data)` - Update a portfolio
- `deletePortfolio($id)` - Delete a portfolio
- `getPublishedPortfolios($perPage)` - Get published portfolios
- `getPortfoliosByCategory($category, $perPage)` - Get by category
- `getCategories()` - Get all categories
