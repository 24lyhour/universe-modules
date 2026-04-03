# Route Rules - CLI Commands

## List Routes

```bash
# All routes
php artisan route:list

# Filter by path
php artisan route:list --path=api/v1/customer/wallet
php artisan route:list --path=dashboard/orders
php artisan route:list --path=dashboard/menus

# Filter by name (recommended for grouped routes)
php artisan route:list --name=api.wallets
php artisan route:list --name=order.orders
php artisan route:list --name=menu.menus
php artisan route:list --name=wallets.transactions

# Filter by module
php artisan route:list --name=order
php artisan route:list --name=menu
php artisan route:list --name=wallets
php artisan route:list --name=product
php artisan route:list --name=customer
php artisan route:list --name=employee
php artisan route:list --name=outlet

# Filter by method
php artisan route:list --method=GET
php artisan route:list --method=POST

# API routes only
php artisan route:list --path=api

# Dashboard routes only
php artisan route:list --path=dashboard

# Specific controller
php artisan route:list --path=toggle
php artisan route:list --path=trash
php artisan route:list --path=schedule
```

---

## Cache Routes

```bash
# Cache routes (production)
php artisan route:cache

# Clear route cache
php artisan route:clear

# Clear all caches
php artisan optimize:clear
```

---

## Generate Wayfinder Routes (TypeScript)

```bash
# Generate route/action TypeScript files
php artisan wayfinder:generate --with-form

# Files generated at:
# resources/js/actions/
# resources/js/routes/
```

---

## Quick Reference

| What | Command |
|------|---------|
| All routes | `php artisan route:list` |
| Module API routes | `php artisan route:list --name=api.{module}` |
| Module dashboard routes | `php artisan route:list --path=dashboard/{resource}` |
| By name | `php artisan route:list --name={module}` |
| By path | `php artisan route:list --path={path}` |
| By method | `php artisan route:list --method=GET` |
| Cache | `php artisan route:cache` |
| Clear cache | `php artisan route:clear` |
| Generate TS | `php artisan wayfinder:generate --with-form` |

---

## Examples

```bash
# Wallet API routes
php artisan route:list --name=api.wallets

# Output:
#   GET   api/v1/customer/wallet               api.wallets.show
#   GET   api/v1/customer/wallet/balance        api.wallets.balance
#   GET   api/v1/customer/wallet/transactions   api.wallets.transactions.index
#   POST  api/v1/customer/wallet/top-up         api.wallets.top-up
#   POST  api/v1/customer/wallet/pay            api.wallets.pay
#   POST  api/v1/customer/wallet/transfer       api.wallets.transfer

# Menu dashboard routes
php artisan route:list --name=menu.menus

# Order all routes
php artisan route:list --name=order

# All toggle routes
php artisan route:list --path=toggle

# All trash routes
php artisan route:list --path=trash
```
