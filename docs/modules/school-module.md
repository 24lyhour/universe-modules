# School Module Documentation

## Overview

The School module provides educational institution management including schools, departments, classrooms, and location-based geofencing for attendance verification.

## Features

- **School Management**: Multi-school support with branding
- **Department Management**: Department CRUD with geofence configuration
- **Classroom Management**: Physical room tracking
- **QR Code Generation**: Per-department QR codes for attendance
- **Geofence Configuration**: GPS-based location boundaries
- **Location Management**: Advanced location with polygon/circle geofences

---

## Module Structure

```
Modules/School/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── Dashboard/V1/
│   │   │       ├── SchoolController.php
│   │   │       ├── DepartmentController.php
│   │   │       └── ClassroomController.php
│   │   ├── Requests/
│   │   │   └── Dashboard/V1/
│   │   │       ├── StoreDepartmentRequest.php
│   │   │       └── UpdateDepartmentRequest.php
│   │   └── Resources/
│   │       └── Dashboard/V1/
│   │           ├── SchoolResource.php
│   │           └── DepartmentResource.php
│   └── Models/
│       ├── School.php
│       ├── Department.php
│       ├── Classroom.php
│       └── Location.php
├── resources/js/
│   ├── pages/Dashboard/V1/
│   │   ├── School/
│   │   │   └── ...
│   │   ├── Department/
│   │   │   ├── Index.vue
│   │   │   ├── Create.vue
│   │   │   ├── Edit.vue
│   │   │   ├── Show.vue
│   │   │   └── QrCode.vue
│   │   └── Classroom/
│   │       └── ...
│   ├── Components/Dashboard/V1/
│   │   ├── DepartmentForm.vue
│   │   ├── GeofenceMap.vue
│   │   ├── LocationPicker.vue
│   │   └── QrCodeModal.vue
│   └── types/index.ts
└── routes/
    └── dashboard.php
```

---

## Models

### School Model

```php
// Modules/School/app/Models/School.php

// Key Fields
- id, uuid
- name
- code (unique)
- description
- address
- phone, email
- website
- logo, logo_url (accessor)
- status (boolean)

// Relationships
- departments(): HasMany Department
- employees(): HasMany Employee
- classrooms(): HasMany Classroom
```

### Department Model

```php
// Modules/School/app/Models/Department.php

// Key Fields
- id, uuid
- school_id (FK)
- name
- code (unique)
- description
- head_employee_id (FK, nullable)
- status (boolean)

// Geofence Fields
- latitude (decimal 10,8)
- longitude (decimal 11,8)
- geofence_radius (integer, default: 100 meters)
- enforce_geofence (boolean, default: false)
- timezone (string, nullable)
- location_id (FK to Location, nullable)

// Relationships
- school(): BelongsTo School
- employees(): HasMany Employee
- classrooms(): HasMany Classroom
- headEmployee(): BelongsTo Employee
- location(): BelongsTo Location
- attendances(): HasMany Attendance

// Methods
- isWithinGeofence(float $lat, float $lng): bool
- getGeofenceCenter(): array
- hasGeofenceConfigured(): bool
```

### Classroom Model

```php
// Modules/School/app/Models/Classroom.php

// Key Fields
- id, uuid
- school_id (FK)
- department_id (FK)
- name
- code (unique)
- capacity
- building
- floor
- description
- status (boolean)

// Relationships
- school(): BelongsTo School
- department(): BelongsTo Department
```

### Location Model

```php
// Modules/School/app/Models/Location.php

// Key Fields
- id, uuid
- name
- description
- latitude (decimal)
- longitude (decimal)
- address
- geofence_type (circle, polygon, dynamic)
- geofence_radius (for circle type)
- geofence_polygon (JSON for polygon type)
- status (boolean)

// Geofence Type Constants
const TYPE_CIRCLE = 'circle';
const TYPE_POLYGON = 'polygon';
const TYPE_DYNAMIC = 'dynamic';

// Methods
- isWithinGeofence(float $lat, float $lng): array
- calculateDistance(float $lat1, float $lng1, float $lat2, float $lng2): float
```

---

## Controllers

### DepartmentController

```php
// Dashboard Routes
GET    /dashboard/departments                  -> index()
GET    /dashboard/departments/create           -> create()
POST   /dashboard/departments                  -> store()
GET    /dashboard/departments/{uuid}           -> show()
GET    /dashboard/departments/{uuid}/edit      -> edit()
PUT    /dashboard/departments/{uuid}           -> update()
DELETE /dashboard/departments/{uuid}           -> destroy()
GET    /dashboard/departments/{uuid}/qr-code   -> qrCode()
```

---

## Geofence Configuration

### Department Geofence Fields

```php
// Database migration fields
$table->decimal('latitude', 10, 8)->nullable();
$table->decimal('longitude', 11, 8)->nullable();
$table->integer('geofence_radius')->default(100); // meters
$table->boolean('enforce_geofence')->default(false);
$table->string('timezone', 50)->nullable();
$table->foreignId('location_id')->nullable()->constrained();
```

### Geofence Verification Method

```php
// In Department model
public function isWithinGeofence(float $latitude, float $longitude): bool
{
    if (!$this->latitude || !$this->longitude) {
        return true; // No geofence configured
    }

    // If linked to Location model, use its verification
    if ($this->location) {
        $result = $this->location->isWithinGeofence($latitude, $longitude);
        return $result['within_geofence'];
    }

    // Simple circle geofence check
    $distance = $this->calculateDistance(
        $this->latitude,
        $this->longitude,
        $latitude,
        $longitude
    );

    return $distance <= $this->geofence_radius;
}

private function calculateDistance(
    float $lat1, float $lng1,
    float $lat2, float $lng2
): float {
    $earthRadius = 6371000; // meters

    $lat1Rad = deg2rad($lat1);
    $lat2Rad = deg2rad($lat2);
    $deltaLat = deg2rad($lat2 - $lat1);
    $deltaLng = deg2rad($lng2 - $lng1);

    $a = sin($deltaLat / 2) * sin($deltaLat / 2) +
         cos($lat1Rad) * cos($lat2Rad) *
         sin($deltaLng / 2) * sin($deltaLng / 2);

    $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

    return $earthRadius * $c;
}
```

---

## QR Code Generation

### QR Code Data Structure

```json
{
    "type": "department",
    "department_id": 1,
    "department_name": "IT Department",
    "department_code": "IT-001",
    "school_id": 1,
    "geofence": {
        "latitude": 11.5564,
        "longitude": 104.9282,
        "radius": 100,
        "enforce": true
    },
    "generated_at": "2026-03-12T10:00:00Z"
}
```

### QrCode.vue Page

Displays department QR code with geofence status.

**Features:**
- QR code display with download option
- Geofence configuration status
- Link to edit geofence settings
- Warning if geofence not configured

```vue
<template>
    <div class="qr-code-container">
        <!-- QR Code Display -->
        <QRCodeVue :value="qrData" :size="300" />

        <!-- Geofence Status -->
        <div v-if="department.latitude && department.longitude" class="geofence-configured">
            <ShieldCheck class="text-green-500" />
            <span>Geofence Configured</span>
            <span class="text-sm text-muted-foreground">
                Radius: {{ department.geofence_radius }}m
            </span>
        </div>

        <div v-else class="geofence-warning">
            <AlertTriangle class="text-yellow-500" />
            <span>No geofence configured</span>
            <Link :href="`/dashboard/departments/${department.uuid}/edit`">
                Configure Now
            </Link>
        </div>
    </div>
</template>
```

---

## Frontend Components

### GeofenceMap.vue

Interactive map for selecting geofence location and radius.

**Props:**
```typescript
interface GeofenceMapProps {
    latitude: number | null;
    longitude: number | null;
    radius: number;
    readonly?: boolean;
}
```

**Events:**
```typescript
emit('update:latitude', number);
emit('update:longitude', number);
emit('update:radius', number);
emit('location-selected', { lat: number, lng: number });
```

**Features:**
- Leaflet map integration
- Click to set center point
- Draggable marker
- Visual circle overlay showing radius
- Radius adjustment slider

### LocationPicker.vue

Component for selecting or searching locations.

**Props:**
```typescript
interface LocationPickerProps {
    modelValue: { lat: number; lng: number } | null;
    placeholder?: string;
}
```

### DepartmentForm.vue

Complete department form with geofence settings.

**Sections:**
1. Basic Information (name, code, description)
2. School Selection
3. Department Head
4. Geofence Settings
   - Map for location selection
   - Radius slider (10-5000m)
   - Enforce geofence toggle
   - Timezone selector

---

## TypeScript Types

```typescript
// Modules/School/resources/js/types/index.ts

interface School {
    id: number;
    uuid: string;
    name: string;
    code: string;
    description: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    website: string | null;
    logo_url: string | null;
    status: boolean;
}

interface Department {
    id: number;
    uuid: string;
    school_id: number;
    school_name: string | null;
    name: string;
    code: string;
    description: string | null;
    head_employee_id: number | null;
    head_employee_name: string | null;
    status: boolean;

    // Geofence fields
    latitude: number | null;
    longitude: number | null;
    geofence_radius: number;
    enforce_geofence: boolean;
    timezone: string | null;
    location_id: number | null;

    // Computed
    has_geofence: boolean;
    employee_count: number;
}

interface DepartmentFormData {
    name: string;
    code: string;
    description: string;
    school_id: number | null;
    head_employee_id: number | null;
    status: boolean;

    // Geofence
    latitude: number | null;
    longitude: number | null;
    geofence_radius: number;
    enforce_geofence: boolean;
    timezone: string | null;
}

interface Classroom {
    id: number;
    uuid: string;
    school_id: number;
    department_id: number;
    department_name: string | null;
    name: string;
    code: string;
    capacity: number | null;
    building: string | null;
    floor: string | null;
    description: string | null;
    status: boolean;
}

interface Location {
    id: number;
    uuid: string;
    name: string;
    description: string | null;
    latitude: number;
    longitude: number;
    address: string | null;
    geofence_type: 'circle' | 'polygon' | 'dynamic';
    geofence_radius: number | null;
    geofence_polygon: Array<{ lat: number; lng: number }> | null;
    status: boolean;
}
```

---

## Validation

### StoreDepartmentRequest

```php
public function rules(): array
{
    return [
        'name' => 'required|string|max:255',
        'code' => 'required|string|max:50|unique:departments,code',
        'description' => 'nullable|string',
        'school_id' => 'required|exists:schools,id',
        'head_employee_id' => 'nullable|exists:employees,id',
        'status' => 'boolean',

        // Geofence validation
        'latitude' => 'nullable|numeric|between:-90,90',
        'longitude' => 'nullable|numeric|between:-180,180',
        'geofence_radius' => 'nullable|integer|min:10|max:5000',
        'enforce_geofence' => 'boolean',
        'timezone' => 'nullable|string|max:50|timezone',
    ];
}
```

### Frontend Validation (Zod)

```typescript
// Modules/School/resources/js/validation/departmentSchema.ts
import { z } from 'zod';

export const departmentSchema = z.object({
    name: z.string().min(1, 'Name is required').max(255),
    code: z.string().min(1, 'Code is required').max(50),
    description: z.string().optional(),
    school_id: z.number({ required_error: 'School is required' }),
    head_employee_id: z.number().nullable().optional(),
    status: z.boolean().default(true),

    // Geofence
    latitude: z.number().min(-90).max(90).nullable().optional(),
    longitude: z.number().min(-180).max(180).nullable().optional(),
    geofence_radius: z.number().min(10).max(5000).default(100),
    enforce_geofence: z.boolean().default(false),
    timezone: z.string().max(50).nullable().optional(),
});
```

---

## Location Model - Advanced Geofencing

### Geofence Types

| Type | Description | Data |
|------|-------------|------|
| `circle` | Simple radius-based geofence | `geofence_radius` (meters) |
| `polygon` | Complex polygon boundary | `geofence_polygon` (JSON array of coordinates) |
| `dynamic` | Time/context-based boundaries | Custom logic |

### Polygon Geofence Verification

```php
// In Location model
public function isWithinPolygon(float $lat, float $lng): bool
{
    if (!$this->geofence_polygon) {
        return false;
    }

    $polygon = $this->geofence_polygon;
    $n = count($polygon);
    $inside = false;

    for ($i = 0, $j = $n - 1; $i < $n; $j = $i++) {
        $xi = $polygon[$i]['lng'];
        $yi = $polygon[$i]['lat'];
        $xj = $polygon[$j]['lng'];
        $yj = $polygon[$j]['lat'];

        if ((($yi > $lat) != ($yj > $lat)) &&
            ($lng < ($xj - $xi) * ($lat - $yi) / ($yj - $yi) + $xi)) {
            $inside = !$inside;
        }
    }

    return $inside;
}
```

### isWithinGeofence Response

```php
public function isWithinGeofence(float $lat, float $lng): array
{
    $distance = $this->calculateDistance(
        $this->latitude,
        $this->longitude,
        $lat,
        $lng
    );

    switch ($this->geofence_type) {
        case self::TYPE_CIRCLE:
            $withinGeofence = $distance <= $this->geofence_radius;
            break;
        case self::TYPE_POLYGON:
            $withinGeofence = $this->isWithinPolygon($lat, $lng);
            break;
        default:
            $withinGeofence = true;
    }

    return [
        'within_geofence' => $withinGeofence,
        'distance' => round($distance, 2),
        'geofence_type' => $this->geofence_type,
        'radius' => $this->geofence_radius,
        'message' => $withinGeofence
            ? "Within geofence ({$this->formatDistance($distance)} from center)"
            : "Outside geofence ({$this->formatDistance($distance)} from center)",
    ];
}
```

---

## Routes

```php
// Modules/School/routes/dashboard.php

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {
    // Schools
    Route::resource('schools', SchoolController::class);

    // Departments
    Route::resource('departments', DepartmentController::class);
    Route::get('departments/{uuid}/qr-code', [DepartmentController::class, 'qrCode'])
        ->name('departments.qr-code');

    // Classrooms
    Route::resource('classrooms', ClassroomController::class);
});
```

---

## Usage Examples

### Creating a Department with Geofence

```php
use Modules\School\Models\Department;

$department = Department::create([
    'school_id' => 1,
    'name' => 'IT Department',
    'code' => 'IT-001',
    'description' => 'Information Technology Department',
    'status' => true,

    // Geofence configuration
    'latitude' => 11.5564,
    'longitude' => 104.9282,
    'geofence_radius' => 100, // 100 meters
    'enforce_geofence' => true,
    'timezone' => 'Asia/Phnom_Penh',
]);
```

### Checking Geofence

```php
$department = Department::find(1);

// Check if coordinates are within geofence
$isWithin = $department->isWithinGeofence(11.5565, 104.9283);
// Returns: true/false

// Get detailed verification
if ($department->location) {
    $result = $department->location->isWithinGeofence(11.5565, 104.9283);
    // Returns: ['within_geofence' => true, 'distance' => 15.2, ...]
}
```

### Generating QR Code Data

```php
$department = Department::with('school')->find(1);

$qrData = json_encode([
    'type' => 'department',
    'department_id' => $department->id,
    'department_name' => $department->name,
    'department_code' => $department->code,
    'school_id' => $department->school_id,
    'geofence' => [
        'latitude' => $department->latitude,
        'longitude' => $department->longitude,
        'radius' => $department->geofence_radius,
        'enforce' => $department->enforce_geofence,
    ],
    'generated_at' => now()->toIso8601String(),
]);
```

---

## Dependencies

- `leaflet` / `@vue-leaflet/vue-leaflet`: Interactive maps
- `qrcode` / `qrcode.vue`: QR code generation
- Timezone data for timezone selector
