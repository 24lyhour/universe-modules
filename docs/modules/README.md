# Universe Modules Documentation

## Overview

Universe is a Laravel 11 application built with the **nwidart/laravel-modules** package, using **Inertia.js + Vue 3 + TypeScript** for the frontend.

---

## Available Modules

| Module | Description | Status |
|--------|-------------|--------|
| [Employee](./employee-module.md) | Employee management, attendance tracking, QR scanning, analytics | ✅ Complete |
| [School](./school-module.md) | Schools, departments, classrooms, geofencing | ✅ Complete |

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Frontend (Vue 3)                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Scanner    │  │   Analytics  │  │   Employee   │          │
│  │   (QR Scan)  │  │  Dashboard   │  │   Show Page  │          │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘          │
└─────────┼─────────────────┼─────────────────┼──────────────────┘
          │                 │                 │
          ▼                 ▼                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Inertia.js Bridge                          │
└─────────────────────────────────────────────────────────────────┘
          │                 │                 │
          ▼                 ▼                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Laravel Controllers                          │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              Action Classes (Clean Architecture)         │  │
│  │  ┌─────────────────┐  ┌──────────────────────────────┐  │  │
│  │  │ ProcessQrScan   │  │ GetAttendanceAnalytics       │  │  │
│  │  │ Action          │  │ Action                       │  │  │
│  │  └────────┬────────┘  └──────────────┬───────────────┘  │  │
│  └───────────┼──────────────────────────┼──────────────────┘  │
└──────────────┼──────────────────────────┼─────────────────────┘
               │                          │
               ▼                          ▼
┌─────────────────────────────────────────────────────────────────┐
│                         Models                                   │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌──────────┐  │
│  │  Employee  │  │ Attendance │  │ Department │  │ Location │  │
│  └─────┬──────┘  └─────┬──────┘  └─────┬──────┘  └────┬─────┘  │
│        │               │               │              │         │
│        └───────────────┴───────────────┴──────────────┘         │
│                              │                                   │
└──────────────────────────────┼──────────────────────────────────┘
                               ▼
                    ┌──────────────────┐
                    │     Database     │
                    │      (MySQL)     │
                    └──────────────────┘
```

---

## Module Integration

### Employee ↔ School Integration

```
┌─────────────────────────────────────────────────────────────────┐
│                      School Module                               │
│  ┌──────────┐                      ┌────────────┐               │
│  │  School  │──────────────────────│ Department │               │
│  └──────────┘                      └─────┬──────┘               │
│                                          │                       │
│                                    geofence_radius               │
│                                    latitude/longitude            │
│                                    enforce_geofence              │
│                                          │                       │
└──────────────────────────────────────────┼──────────────────────┘
                                           │
                                           │ FK: department_id
                                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Employee Module                              │
│  ┌──────────┐                      ┌────────────────┐           │
│  │ Employee │──────────────────────│   Attendance   │           │
│  └──────────┘                      └───────┬────────┘           │
│                                            │                     │
│                                    ┌───────┴────────┐           │
│                                    │ AttendanceScan │           │
│                                    └────────────────┘           │
│                                    - GPS coordinates            │
│                                    - geofence verification      │
│                                    - device info                │
└─────────────────────────────────────────────────────────────────┘
```

### Key Relationships

```php
// Employee belongs to Department (School module)
Employee::belongsTo(Department::class);

// Attendance belongs to Department (School module)
Attendance::belongsTo(Department::class);

// Department has many Employees (Employee module)
Department::hasMany(Employee::class);

// Department has many Attendances (Employee module)
Department::hasMany(Attendance::class);
```

---

## Attendance Flow

### QR Code Scan Flow

```
┌──────────────┐    ┌──────────────┐    ┌──────────────────────┐
│  Employee    │    │   Scanner    │    │  ProcessQrScanAction │
│  scans QR    │───▶│   captures   │───▶│                      │
│  at dept     │    │   GPS + QR   │    │  1. Validate QR      │
└──────────────┘    └──────────────┘    │  2. Find employee    │
                                        │  3. Verify geofence  │
                                        │  4. Create/update    │
                                        │     attendance       │
                                        │  5. Create scan log  │
                                        └──────────┬───────────┘
                                                   │
                    ┌──────────────────────────────┘
                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Database Updates                            │
│  ┌────────────────┐        ┌─────────────────────┐              │
│  │   Attendance   │        │   AttendanceScan    │              │
│  ├────────────────┤        ├─────────────────────┤              │
│  │ check_in_time  │        │ latitude/longitude  │              │
│  │ check_out_time │        │ within_geofence     │              │
│  │ status         │        │ distance_from_loc   │              │
│  │ work_hours     │        │ verification_status │              │
│  └────────────────┘        └─────────────────────┘              │
└─────────────────────────────────────────────────────────────────┘
```

### Geofence Verification Flow

```
┌─────────────────┐
│ Employee GPS    │
│ Coordinates     │
│ (lat, lng)      │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────┐
│ Department has geofence configured? │
└────────┬───────────────┬────────────┘
         │ YES           │ NO
         ▼               ▼
┌─────────────────┐    ┌─────────────────┐
│ Calculate       │    │ Return:         │
│ distance from   │    │ is_within: true │
│ center          │    │ status: no_loc  │
└────────┬────────┘    └─────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│ Distance <= geofence_radius?        │
└────────┬───────────────┬────────────┘
         │ YES           │ NO
         ▼               ▼
┌─────────────────┐    ┌─────────────────────────┐
│ Return:         │    │ enforce_geofence = true?│
│ is_within: true │    └────────┬───────────┬────┘
│ status: verified│             │ YES       │ NO
└─────────────────┘             ▼           ▼
                    ┌───────────────┐  ┌───────────────┐
                    │ Block scan    │  │ Allow scan    │
                    │ with error    │  │ with warning  │
                    └───────────────┘  └───────────────┘
```

---

## Common Patterns

### Action Classes

All business logic is encapsulated in Action classes for reusability and testing:

```php
// Location: Modules/{Module}/app/Actions/Dashboard/V1/

// Pattern
class DoSomethingAction
{
    public function execute(array $data): array
    {
        // Business logic here
        return $result;
    }
}

// Usage in Controller
public function store(Request $request, DoSomethingAction $action)
{
    $result = $action->execute($request->validated());
    return Inertia::render('module::Page', $result);
}
```

### Resource Serialization for Inertia

```php
// CORRECT: Convert resource to array for Inertia
return Inertia::render('module::Show', [
    'item' => (new ItemResource($model))->toArray(request()),
]);

// For collections with pagination
return Inertia::render('module::Index', [
    'items' => ItemResource::collection($models)->response()->getData(true),
]);
```

### TypeScript Prop Types

```typescript
// Define props interface
interface Props {
    item: Item;
    options: SelectOption[];
}

// Use with defineProps
const props = defineProps<Props>();
```

---

## File Naming Conventions

### Backend

| Type | Pattern | Example |
|------|---------|---------|
| Controller | `{Model}Controller.php` | `EmployeeController.php` |
| Action | `{Verb}{Model}Action.php` | `ProcessQrScanAction.php` |
| Request | `{Store\|Update}{Model}Request.php` | `StoreEmployeeRequest.php` |
| Resource | `{Model}Resource.php` | `EmployeeResource.php` |

### Frontend

| Type | Pattern | Example |
|------|---------|---------|
| Page | `{Action}.vue` | `Index.vue`, `Create.vue`, `Edit.vue`, `Show.vue` |
| Component | `{Feature}{Component}.vue` | `GeofenceMap.vue`, `QrCodeModal.vue` |
| Types | `types/index.ts` | Module-specific interfaces |
| Validation | `validation/{module}Schema.ts` | `employeeSchema.ts` |

---

## Environment Setup

### Required Environment Variables

```env
# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=universe
DB_USERNAME=root
DB_PASSWORD=

# Application
APP_URL=http://universe.test
VITE_APP_URL="${APP_URL}"
```

### Development Commands

```bash
# Run development server
npm run dev
php artisan serve

# Run tests
php artisan test

# Generate module
php artisan module:make ModuleName

# Create module migration
php artisan module:make-migration create_table_name Module

# Run module migrations
php artisan module:migrate Module
```

---

## API Reference

See individual module documentation for complete API details:

- [Employee Module API](./employee-module.md#api-endpoints)
- [School Module API](./school-module.md#routes)

---

## Contributing

When adding new features to these modules:

1. Create Action classes for business logic
2. Add proper TypeScript types
3. Use Zod schemas for frontend validation
4. Follow existing naming conventions
5. Update documentation as needed
