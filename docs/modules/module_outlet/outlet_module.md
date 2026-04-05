# Outlet Module Documentation

## Overview

The Outlet module manages physical store locations/branches with scheduling, type categorization, GPS coordinates, PayWay payment integration, and review aggregation.

## Features

- **Outlet Management**: Full CRUD with soft deletes, bulk operations, trash/restore
- **Type Categorization**: Classify outlets (restaurant, cafe, store, etc.)
- **Schedule Management**: Multiple modes (always, daily, weekly, date_range)
- **Location**: GPS coordinates, Google Maps integration
- **PayWay Integration**: Per-outlet ABA PayWay merchant accounts
- **Review System**: Review counts and average rating aggregation
- **Excel Export**: Filtered export with styled headers
- **Multi-Tenancy**: Tenant type/id fields for multi-tenant support

---

## Module Structure

```
Modules/Outlet/
├── app/
│   ├── Actions/
│   │   ├── Api/
│   │   │   ├── CreateOutletAction.php
│   │   │   ├── UpdateOutletAction.php
│   │   │   └── DeleteOutletAction.php
│   │   └── Dashboard/
│   │       ├── CreateOutletAction.php
│   │       ├── UpdateOutletAction.php
│   │       ├── DeleteOutletAction.php
│   │       ├── ToggleOutletStatusAction.php
│   │       └── UpdateOutletScheduleAction.php
│   ├── Console/Commands/
│   │   ├── OutletCommand.php
│   │   ├── OutletScheduleCheckCommand.php
│   │   └── OutletUpdateCoordsCommand.php
│   ├── Exports/
│   │   ├── OutletsExport.php
│   │   └── TypeOutletsExport.php
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Api/V1/Customer/Outlet/
│   │   │   │   ├── OutletPublicController.php
│   │   │   │   └── OutletApiController.php
│   │   │   └── Dashboard/V1/
│   │   │       ├── OutletDashboardController.php
│   │   │       ├── OutletScheduleController.php
│   │   │       ├── OutletStatusController.php
│   │   │       ├── OutletPayWayController.php
│   │   │       └── TypeOutletDashboardController.php
│   │   ├── Requests/
│   │   │   ├── Api/V1/
│   │   │   │   ├── StoreOutletRequest.php
│   │   │   │   └── UpdateOutletRequest.php
│   │   │   └── Dashboard/V1/
│   │   │       ├── StoreOutletRequest.php
│   │   │       ├── UpdateOutletRequest.php
│   │   │       └── UpdateOutletScheduleRequest.php
│   │   └── Resources/
│   │       └── OutletResource.php
│   ├── Models/
│   │   ├── Outlet.php
│   │   ├── TypeOutlet.php
│   │   └── OutletCategory.php
│   ├── Providers/
│   │   ├── OutletServiceProvider.php
│   │   ├── RouteServiceProvider.php
│   │   └── EventServiceProvider.php
│   └── Services/
│       ├── OutletService.php
│       └── TypeOutletService.php
├── config/
│   └── config.php
├── database/
│   ├── migrations/ (7 migrations)
│   └── seeders/
│       ├── OutletDatabaseSeeder.php
│       ├── OutletSeeder.php
│       └── TypeOutletSeeder.php
├── routes/
│   ├── api.php
│   ├── dashboard.php
│   └── web.php
└── resources/js/
    ├── types/index.ts
    ├── validation/
    │   ├── outletSchema.ts
    │   └── typeOutletSchema.ts
    ├── Components/Dashboard/
    │   ├── OutletForm.vue
    │   ├── TypeOutletForm.vue
    │   └── ScheduleManage.vue
    └── pages/dashboard/
        ├── outlet/
        │   ├── Index.vue
        │   ├── Create.vue
        │   ├── Show.vue
        │   ├── Edit.vue
        │   ├── Delete.vue
        │   ├── Schedule.vue
        │   ├── PayWay.vue
        │   ├── BulkDelete.vue
        │   └── Trash.vue
        └── Types/
            ├── Index.vue
            ├── Create.vue
            ├── Show.vue
            ├── Edit.vue
            ├── Delete.vue
            ├── BulkDelete.vue
            └── Trash.vue
```

---

## Models & Relationships

### Outlet

| Relationship | Type | Target |
|-------------|------|--------|
| products | HasMany | Product |
| menus | HasMany | Menu |
| company | BelongsTo | Company |
| typeOutlet | BelongsTo | TypeOutlet |
| productTypes | HasMany | ProductType |
| brands | HasMany | Brand |
| carts | HasMany | Cart |
| orders | HasMany | Order |
| reviews | HasMany | OutletReview |

**Traits**: HasFactory, IsTenant, HasUuid, SoftDeletes

**Custom Methods**:
- `hasPayWay(): bool` — checks payway_enabled + merchant_id + api_key

**Casts**:
- `payway_api_key` → encrypted
- `payway_enabled` → boolean

**Hidden**: `payway_merchant_id`, `payway_api_key` (never exposed in API)

### TypeOutlet

| Relationship | Type | Target |
|-------------|------|--------|
| outlet | BelongsTo | Outlet |
| createdBy | BelongsTo | User |
| updatedBy | BelongsTo | User |
| deletedBy | BelongsTo | User |

---

## Database Schema

### outlets

| Column | Type | Description |
|--------|------|-------------|
| id | bigint | Primary key |
| uuid | char(36) | Route key |
| tenant_type, tenant_id | string | Multi-tenancy |
| company_id | bigint FK | → companies |
| name | string | Outlet name |
| description | text | Description |
| address | string | Physical address |
| phone | string | Contact phone |
| email | string | Contact email |
| logo | string | Logo URL |
| image_url | string | Image URL |
| type_outlet_id | bigint FK | → type_outlets |
| google_map_url | string | Google Maps link |
| latitude | decimal(10,7) | GPS latitude |
| longitude | decimal(10,7) | GPS longitude |
| url_deeplink | string | Deep link URL |
| status | string | active / inactive |
| schedule_mode | string | always, daily, weekly, date_range |
| schedule_days | string | JSON array of days |
| schedule_start_time | string | Opening time |
| schedule_end_time | string | Closing time |
| schedule_start_date | date | Schedule start |
| schedule_end_date | date | Schedule end |
| schedule_status | string | active / inactive |
| payway_merchant_id | varchar(30) | ABA merchant ID |
| payway_api_key | text | Encrypted API key |
| payway_enabled | boolean | PayWay enabled |
| created_by, updated_by | bigint | Audit trail |
| created_at, updated_at, deleted_at | timestamp | Timestamps |

### type_outlets

| Column | Type | Description |
|--------|------|-------------|
| id | bigint | Primary key |
| uuid | char(36) | UUID |
| outlet_id | bigint FK | Parent outlet |
| name_type | string | Type name |
| description | text | Description |
| is_active | boolean | Active status |
| created_by, updated_by, deleted_by | bigint | Audit |

---

## Routes

### Dashboard Routes

```
Middleware: auth, verified, auto.permission
Prefix: /dashboard
Name prefix: outlet.
```

#### Outlets

| Method | URI | Name | Controller |
|--------|-----|------|------------|
| GET | /outlets | outlets.index | OutletDashboardController@index |
| GET | /outlets/create | outlets.create | @create (modal) |
| POST | /outlets | outlets.store | @store |
| GET | /outlets/{outlet} | outlets.show | @show |
| GET | /outlets/{outlet}/edit | outlets.edit | @edit (modal) |
| PUT | /outlets/{outlet} | outlets.update | @update |
| GET | /outlets/{outlet}/delete | outlets.confirm-delete | @confirmDelete (modal) |
| DELETE | /outlets/{outlet} | outlets.destroy | @destroy |
| GET | /outlets/export | outlets.export | @export |
| GET | /outlets/trash | outlets.trash | @trash |
| GET | /outlets/bulk-delete | outlets.bulk-delete | @bulkDelete |
| DELETE | /outlets/bulk-delete | outlets.process-bulk-delete | @processBulkDelete |
| POST | /outlets/{outlet}/restore | outlets.restore | @restore |
| DELETE | /outlets/{outlet}/force-delete | outlets.force-delete | @forceDelete |
| PUT | /outlets/{outlet}/toggle-status | outlets.toggle-status | OutletStatusController |
| GET | /outlets/{outlet}/schedule | outlets.schedule | OutletScheduleController@show |
| PUT | /outlets/{outlet}/schedule | outlets.update-schedule | @update |
| GET | /outlets/{outlet}/payway | outlets.payway | OutletPayWayController@show |
| PUT | /outlets/{outlet}/payway | outlets.payway.update | @update |
| POST | /outlets/{outlet}/payway/test | outlets.payway.test | @test |
| PUT | /outlets/{outlet}/payway/toggle | outlets.payway.toggle | @toggle |
| DELETE | /outlets/{outlet}/payway | outlets.payway.destroy | @destroy |

#### Outlet Types

| Method | URI | Name | Controller |
|--------|-----|------|------------|
| GET | /outlet-types | outlet-types.index | TypeOutletDashboardController@index |
| GET | /outlet-types/create | outlet-types.create | @create (modal) |
| POST | /outlet-types | outlet-types.store | @store |
| GET | /outlet-types/{outlet_type} | outlet-types.show | @show |
| GET | /outlet-types/{outlet_type}/edit | outlet-types.edit | @edit (modal) |
| PUT | /outlet-types/{outlet_type} | outlet-types.update | @update |
| GET | /outlet-types/{outlet_type}/delete | outlet-types.confirm-delete | @confirmDelete |
| DELETE | /outlet-types/{outlet_type} | outlet-types.destroy | @destroy |
| PUT | /outlet-types/{outlet_type}/toggle-status | outlet-types.toggle-status | @toggleStatus |
| GET | /outlet-types/export | outlet-types.export | @export |
| GET | /outlet-types/trash | outlet-types.trash | @trash |
| POST | /outlet-types/{id}/restore | outlet-types.restore | @restore |
| DELETE | /outlet-types/{id}/force-delete | outlet-types.force-delete | @forceDelete |

### API Routes

#### Public (no auth)

| Method | URI | Name | Description |
|--------|-----|------|-------------|
| GET | /v1/outlets | outlet.public.index | List active outlets (15/page) |
| GET | /v1/outlets-search | outlet.public.search | Search outlets (limit 10) |
| GET | /v1/outlets-featured | outlet.public.featured | Featured outlets (limit 6) |
| GET | /v1/outlet-types | outlet.public.types | Active outlet types |
| GET | /v1/outlets/{uuid} | outlet.public.show | Outlet detail |
| GET | /v1/outlets/{uuid}/products | outlet.public.products | Outlet products |

#### Protected (auth:sanctum)

| Method | URI | Name | Description |
|--------|-----|------|-------------|
| GET | /v1/admin/outlets | outlet.admin.index | List outlets |
| POST | /v1/admin/outlets | outlet.admin.store | Create outlet |
| GET | /v1/admin/outlets/{outlet} | outlet.admin.show | Show outlet |
| PUT | /v1/admin/outlets/{outlet} | outlet.admin.update | Update outlet |
| DELETE | /v1/admin/outlets/{outlet} | outlet.admin.destroy | Delete outlet |
| GET | /v1/admin/outlets-stats | outlet.admin.stats | Stats |
| PATCH | /v1/admin/outlets/{outlet}/activate | outlet.admin.activate | Activate |
| PATCH | /v1/admin/outlets/{outlet}/deactivate | outlet.admin.deactivate | Deactivate |

---

## Services

### OutletService

| Method | Description |
|--------|-------------|
| `paginate(perPage, filters)` | Paginated list with search, status, type filter. Includes review stats |
| `create(data)` | Create outlet with UUID |
| `update(outlet, data)` | Update and return fresh |
| `delete(outlet)` | Soft delete |
| `getStats()` | Cached stats: total, active, inactive (5 min TTL) |
| `clearStatsCache()` | Clear stats cache |
| `updateStatus(outlet, status)` | Change status |
| `findByUuid(uuid)` | Find by UUID |

### TypeOutletService

| Method | Description |
|--------|-------------|
| `paginate(perPage, filters)` | Paginated list with search, status filter |
| `getStats()` | Cached stats: total, active, inactive |
| `create(data)` | Create type |
| `update(typeOutlet, data)` | Update type |
| `delete(typeOutlet)` | Delete type |
| `updateStatus(typeOutlet, isActive)` | Toggle is_active |

---

## Actions

### Dashboard

| Action | Description |
|--------|-------------|
| `CreateOutletAction` | Create with UUID, set created_by, map type |
| `UpdateOutletAction` | Update, set updated_by, map type |
| `DeleteOutletAction` | Soft delete |
| `ToggleOutletStatusAction` | Toggle active/inactive |
| `UpdateOutletScheduleAction` | Update schedule fields |

### API

| Action | Description |
|--------|-------------|
| `CreateOutletAction` | Create with UUID, set created_by |
| `UpdateOutletAction` | Update, set updated_by |
| `DeleteOutletAction` | Delete with restore/forceDelete |

---

## Validation Rules

### Outlet Form (Dashboard)

| Field | Rules |
|-------|-------|
| name | required, string, max:255 |
| outlet_type | required, exists:type_outlets,id |
| address | nullable, string, max:500 |
| phone | nullable, string, max:50 |
| email | nullable, email, max:255 |
| logo, image_url | nullable, string |
| google_map_url | nullable, url, max:500 |
| latitude | nullable, numeric, between:-90,90 |
| longitude | nullable, numeric, between:-180,180 |
| url_deeplink | nullable, string, max:500 |
| status | required, in:active,inactive |
| schedule_* | nullable, string/date |

### Schedule Form

| Field | Rules |
|-------|-------|
| schedule_mode | nullable, in:always,daily,weekly,date_range |
| schedule_days | nullable, string |
| schedule_start_time, schedule_end_time | nullable, string |
| schedule_start_date, schedule_end_date | nullable, date |
| schedule_status | nullable, in:active,inactive |

---

## Schedule Logic

The `OutletResource::isCurrentlyOpen()` method determines if an outlet is open:

1. If `schedule_status != 'active'` → closed
2. If `schedule_mode == 'always'` → open
3. If `schedule_mode == 'date_range'` → check start/end dates
4. If `schedule_mode == 'weekly'` → check if current day is in schedule_days
5. For all modes (except always) → check if current time is within start_time and end_time

---

## Dashboard UI

### Outlet Index (Table View)

- **Stats**: Total, Active, Inactive
- **Table columns**: Logo, Name, Type, Phone, Email, Schedule badge, Status toggle
- **Actions dropdown**: View, Edit, Schedule, PayWay, Delete
- **Toolbar**: Type filter, status filter, clear filters
- **Bulk operations**: Bulk delete with confirmation
- **Buttons**: All/Trash toggle, Export, Add Outlet

### Outlet Show (Detail View)

- **Main card**: Logo, contact info, links
- **Sidebar cards**: Schedule, PayWay, Details (type, status, dates)

### Modals (momentum-modal)

- **Create/Edit**: OutletForm component
- **Schedule**: Schedule configuration
- **PayWay**: Merchant credentials, test connection
- **Delete/BulkDelete**: Confirmation dialogs

---

## CLI Commands

```bash
# List outlet routes
php artisan route:list --name=outlet

# Check outlet schedules
php artisan outlet:schedule-check

# Export outlets
# Via dashboard: /dashboard/outlets/export

# Seed outlets
php artisan db:seed --class=Modules\\Outlet\\Database\\Seeders\\OutletSeeder
php artisan db:seed --class=Modules\\Outlet\\Database\\Seeders\\TypeOutletSeeder
```
