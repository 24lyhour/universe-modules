# Employee Module Documentation

## Overview

The Employee module provides comprehensive employee management, attendance tracking with QR code scanning, geofence verification, and analytics reporting.

## Features

- **Employee Management**: CRUD operations for employee records
- **Attendance Tracking**: Check-in/check-out with multiple methods
- **QR Code Scanning**: Department-based QR code attendance
- **Geofence Verification**: GPS-based location verification
- **Analytics Dashboard**: Comprehensive attendance reports and charts
- **Employee Statistics**: Individual attendance stats on employee profiles

---

## Module Structure

```
Modules/Employee/
├── app/
│   ├── Actions/
│   │   └── Dashboard/V1/
│   │       ├── Attendance/
│   │       │   ├── GetAttendanceAnalyticsAction.php
│   │       │   └── ProcessQrScanAction.php
│   │       ├── GetEmployeeShowDataAction.php
│   │       └── ...
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── Dashboard/V1/
│   │   │       ├── AttendanceController.php
│   │   │       └── EmployeeController.php
│   │   ├── Requests/
│   │   │   └── Dashboard/V1/
│   │   │       ├── StoreAttendanceRequest.php
│   │   │       └── StoreEmployeeRequest.php
│   │   └── Resources/
│   │       └── Dashboard/V1/
│   │           ├── AttendanceResource.php
│   │           └── EmployeeResource.php
│   └── Models/
│       ├── Attendance.php
│       ├── AttendanceScan.php
│       └── Employee.php
├── resources/js/
│   ├── pages/Dashboard/V1/
│   │   ├── Attendance/
│   │   │   ├── Index.vue
│   │   │   ├── Create.vue
│   │   │   ├── Edit.vue
│   │   │   ├── Show.vue
│   │   │   ├── Scanner.vue
│   │   │   └── Analytics.vue
│   │   └── Employee/
│   │       ├── Index.vue
│   │       ├── Create.vue
│   │       ├── Edit.vue
│   │       └── Show.vue
│   └── types/index.ts
└── routes/
    ├── dashboard.php
    └── api.php
```

---

## Models

### Employee Model

```php
// Modules/Employee/app/Models/Employee.php

// Key Fields
- id, uuid
- first_name, last_name, full_name (accessor)
- employee_code (unique)
- email, phone
- department_id (FK to Department)
- school_id (FK to School)
- employee_type_id
- job_title
- hire_date
- salary
- status (boolean)
- avatar, avatar_url (accessor)
- certificate_image

// Relationships
- department(): BelongsTo Department
- school(): BelongsTo School
- employeeType(): BelongsTo EmployeeType
- attendances(): HasMany Attendance

// Scopes
- scopeActive($query): Where status = true
```

### Attendance Model

```php
// Modules/Employee/app/Models/Attendance.php

// Key Fields
- id, uuid
- employee_id (FK)
- department_id (FK)
- classroom_id (FK, nullable)
- attendance_date
- check_in_time, check_out_time
- status (present, late, absent, on_leave, early_leave)
- check_in_method, check_out_method (manual, qr_scan, biometric)
- check_in_location, check_out_location
- check_in_latitude, check_in_longitude
- check_out_latitude, check_out_longitude
- work_hours (calculated)
- overtime_hours
- notes

// Status Constants
const STATUS_PRESENT = 'present';
const STATUS_LATE = 'late';
const STATUS_ABSENT = 'absent';
const STATUS_ON_LEAVE = 'on_leave';
const STATUS_EARLY_LEAVE = 'early_leave';

// Method Constants
const METHOD_MANUAL = 'manual';
const METHOD_QR_SCAN = 'qr_scan';
const METHOD_BIOMETRIC = 'biometric';

// Relationships
- employee(): BelongsTo Employee
- department(): BelongsTo Department
- scans(): HasMany AttendanceScan
```

### AttendanceScan Model

```php
// Modules/Employee/app/Models/AttendanceScan.php

// Key Fields
- id
- attendance_id (FK)
- scan_type (check_in, check_out)
- scanned_at
- latitude, longitude, accuracy
- timezone
- device_info
- ip_address
- scan_method
- location_type (department, classroom)
- location_id
- is_verified
- within_geofence (boolean)
- distance_from_location
- verification_status (verified, outside_geofence, no_location)
- verification_note
- designated_location_id

// Type Constants
const TYPE_CHECK_IN = 'check_in';
const TYPE_CHECK_OUT = 'check_out';
```

---

## Controllers

### AttendanceController

```php
// Dashboard Routes
GET    /dashboard/attendances                  -> index()
GET    /dashboard/attendances/create           -> create()
POST   /dashboard/attendances                  -> store()
GET    /dashboard/attendances/{uuid}           -> show()
GET    /dashboard/attendances/{uuid}/edit      -> edit()
PUT    /dashboard/attendances/{uuid}           -> update()
DELETE /dashboard/attendances/{uuid}           -> destroy()
GET    /dashboard/attendances/analytics        -> analytics()
GET    /dashboard/attendances/scanner          -> scanner()
POST   /dashboard/attendances/scan             -> processScan()
```

### EmployeeController

```php
// Dashboard Routes
GET    /dashboard/employees                    -> index()
GET    /dashboard/employees/create             -> create()
POST   /dashboard/employees                    -> store()
GET    /dashboard/employees/{uuid}             -> show()
GET    /dashboard/employees/{uuid}/edit        -> edit()
PUT    /dashboard/employees/{uuid}             -> update()
DELETE /dashboard/employees/{uuid}             -> destroy()
```

---

## Actions

### ProcessQrScanAction

Handles QR code scanning for attendance with geofence verification.

```php
// Usage
$action = new ProcessQrScanAction();
$result = $action->execute([
    'qr_data' => '{"type":"department","department_id":1}',
    'employee_id' => 1,
    'latitude' => 11.5564,
    'longitude' => 104.9282,
    'accuracy' => 10,
    'device_info' => 'Mozilla/5.0...',
    'ip_address' => '192.168.1.1',
    'timezone' => 'Asia/Phnom_Penh',
]);

// Response
[
    'success' => true,
    'message' => 'Check-in successful at IT Department (08:30)',
    'action' => 'check_in',
    'data' => [
        'employee' => [...],
        'attendance' => [...],
        'geofence' => [
            'is_within' => true,
            'verified' => true,
            'distance' => 45.2,
            'distance_formatted' => '45m',
            'radius' => 100,
            'status' => 'verified',
            'message' => 'Location verified (45m from center)',
        ],
    ],
]
```

### GetAttendanceAnalyticsAction

Generates analytics data for the attendance dashboard.

```php
// Usage
$action = new GetAttendanceAnalyticsAction();
$analytics = $action->execute([
    'start_date' => '2026-03-01',
    'end_date' => '2026-03-12',
    'department_id' => 1,      // Optional
    'employee_id' => 5,        // Optional
]);

// Response includes:
- summary: Total records, present, late, absent, work hours
- daily_attendance: Daily breakdown for charts
- status_distribution: Pie chart data
- department_stats: Per-department statistics
- top_employees: Employees with most hours
- work_hours_trend: Weekly averages
- late_arrivals: Employees with late arrivals
```

### GetEmployeeShowDataAction

Provides employee details with attendance statistics.

```php
// Usage
$action = new GetEmployeeShowDataAction();
$data = $action->execute($employee);

// Response
[
    'employee' => [...],
    'attendanceStats' => [
        'this_month' => [
            'total' => 15,
            'present' => 12,
            'late' => 2,
            'absent' => 1,
            'work_hours' => 120.5,
            'work_hours_formatted' => '120h 30m',
        ],
        'this_year' => [...],
        'all_time' => [...],
        'recent' => [...], // Last 5 attendance records
    ],
]
```

---

## Frontend Pages

### Scanner.vue

QR code scanning page with GPS and geofence verification.

**Features:**
- Camera-based QR scanning using `html5-qrcode`
- Real-time GPS location tracking
- Geofence verification feedback
- Recent scans display
- Google Maps integration

**Props:**
```typescript
interface AttendanceScannerProps {
    // No required props - uses API
}
```

### Analytics.vue

Comprehensive analytics dashboard.

**Features:**
- Date range filter
- Department filter
- Employee filter
- Summary statistics cards
- Daily attendance chart
- Status distribution chart
- Top employees table
- Late arrivals table
- Work hours trend

**Props:**
```typescript
interface Props {
    analytics: Analytics;
    departmentOptions: SelectOption[];
    employeeOptions: SelectOption[];
}
```

### Employee/Show.vue

Employee detail page with attendance statistics.

**Features:**
- Employee profile display
- QR code display
- This month statistics (total, present, late, absent, work hours)
- Year/all-time summary
- Recent attendance records with links

**Props:**
```typescript
interface EmployeeShowProps {
    employee: Employee;
    attendanceStats: EmployeeDetailedAttendanceStats;
}
```

### Attendance/Show.vue

Attendance record detail page.

**Features:**
- Employee info with avatar
- Attendance details (date, status, times, hours)
- Location & method info
- Device information
- GPS coordinates with Google Maps links

---

## TypeScript Types

```typescript
// Modules/Employee/resources/js/types/index.ts

interface Employee {
    id: number;
    uuid: string;
    first_name: string;
    last_name: string;
    full_name: string;
    employee_code: string;
    email: string | null;
    phone: string | null;
    department_id: number | null;
    department_name: string | null;
    job_title: string | null;
    hire_date: string | null;
    salary: number | null;
    status: boolean;
    avatar_url: string | null;
}

interface Attendance {
    id: number;
    uuid: string;
    employee_id: number;
    employee_name: string | null;
    employee_code: string | null;
    employee_avatar: string | null;
    department_id: number | null;
    department_name: string | null;
    attendance_date: string;
    attendance_date_formatted: string | null;
    check_in_time: string | null;
    check_out_time: string | null;
    status: string;
    status_label: string;
    work_hours: number | null;
    work_hours_formatted: string | null;
    check_in_method_label: string | null;
    check_out_method_label: string | null;
    check_in_location: string | null;
    check_out_location: string | null;
    check_in_coordinates: { lat: number; lng: number } | null;
    check_out_coordinates: { lat: number; lng: number } | null;
    device_info: string | null;
    ip_address: string | null;
    notes: string | null;
}

interface EmployeeDetailedAttendanceStats {
    this_month: EmployeeAttendanceStatsPeriod;
    this_year: EmployeeAttendanceStatsPeriod;
    all_time: {
        total: number;
        work_hours: number;
        work_hours_formatted: string;
    };
    recent: RecentAttendance[];
}

interface GeofenceVerification {
    is_within: boolean;
    verified: boolean;
    has_location: boolean;
    distance: number | null;
    distance_formatted: string | null;
    radius: number;
    geofence_type: string;
    enforce: boolean;
    location_data?: {
        id: number;
        name: string;
        latitude: number;
        longitude: number;
    };
    message: string;
    status: 'verified' | 'outside_geofence' | 'no_location';
}
```

---

## Geofence Verification

The module supports GPS-based geofence verification during QR scanning.

### How It Works

1. **Employee scans QR code** at department location
2. **Browser captures GPS** coordinates with accuracy
3. **Backend verifies** if coordinates are within department's geofence
4. **Result returned** with verification status

### Verification Statuses

| Status | Description |
|--------|-------------|
| `verified` | Employee is within the allowed geofence radius |
| `outside_geofence` | Employee is outside the allowed area |
| `no_location` | GPS location not available or department has no geofence |

### Geofence Data Stored

```php
// AttendanceScan fields for geofence
'within_geofence' => true/false,
'distance_from_location' => 45.2, // meters
'verification_status' => 'verified',
'verification_note' => 'Location verified (45m from center)',
'designated_location_id' => 1,
```

---

## API Endpoints

### Scan QR Code

```http
POST /dashboard/attendances/scan

Request:
{
    "qr_data": "{\"type\":\"department\",\"department_id\":1}",
    "latitude": 11.5564,
    "longitude": 104.9282,
    "accuracy": 10,
    "device_info": "Mozilla/5.0...",
    "timezone": "Asia/Phnom_Penh"
}

Response (Success):
{
    "success": true,
    "message": "Check-in successful at IT Department (08:30)",
    "action": "check_in",
    "data": {
        "employee": {...},
        "attendance": {...},
        "geofence": {...}
    }
}

Response (Error - Outside Geofence):
{
    "success": false,
    "message": "You are outside the allowed area",
    "geofence_blocked": true,
    "data": {
        "employee": {...},
        "geofence": {
            "is_within": false,
            "distance_formatted": "150m",
            "status": "outside_geofence"
        }
    }
}
```

---

## Configuration

### Attendance Status Configuration

```php
// In Attendance model
public static function getStatuses(): array
{
    return [
        self::STATUS_PRESENT => 'Present',
        self::STATUS_LATE => 'Late',
        self::STATUS_ABSENT => 'Absent',
        self::STATUS_ON_LEAVE => 'On Leave',
        self::STATUS_EARLY_LEAVE => 'Early Leave',
    ];
}
```

### Work Hours Calculation

Work hours are automatically calculated when check-out is recorded:

```php
// In Attendance model boot method
static::saving(function ($attendance) {
    if ($attendance->check_in_time && $attendance->check_out_time) {
        $checkIn = Carbon::parse($attendance->check_in_time);
        $checkOut = Carbon::parse($attendance->check_out_time);
        $attendance->work_hours = $checkIn->diffInMinutes($checkOut) / 60;
    }
});
```

---

## Usage Examples

### Creating an Attendance Record

```php
use Modules\Employee\Models\Attendance;

$attendance = Attendance::create([
    'employee_id' => 1,
    'department_id' => 1,
    'attendance_date' => now()->toDateString(),
    'check_in_time' => '08:30:00',
    'status' => Attendance::STATUS_PRESENT,
    'check_in_method' => Attendance::METHOD_QR_SCAN,
    'check_in_location' => 'IT Department',
    'check_in_latitude' => 11.5564,
    'check_in_longitude' => 104.9282,
]);
```

### Processing Check-out

```php
$attendance->update([
    'check_out_time' => '17:30:00',
    'check_out_method' => Attendance::METHOD_QR_SCAN,
    'check_out_location' => 'IT Department',
    'check_out_latitude' => 11.5564,
    'check_out_longitude' => 104.9282,
    // work_hours calculated automatically
]);
```

### Querying Attendance Analytics

```php
use Modules\Employee\Actions\Dashboard\V1\Attendance\GetAttendanceAnalyticsAction;

$action = new GetAttendanceAnalyticsAction();
$analytics = $action->execute([
    'start_date' => now()->startOfMonth()->toDateString(),
    'end_date' => now()->toDateString(),
    'department_id' => 1,
]);

// Access summary
$presentCount = $analytics['summary']['present'];
$attendanceRate = $analytics['summary']['attendance_rate'];
```

---

## Self-Service Attendance

The Self-Service Attendance feature allows employees to check-in and check-out directly from the web application without needing admin assistance.

### Overview

Similar to mobile app functionality, the self-service attendance provides:
- **Real-time clock display** with live updates
- **Employee profile card** with avatar and job details
- **Today's attendance status** with check-in/out times
- **Live work duration** calculation during work hours
- **GPS location capture** for check-in/out verification
- **Simple check-in/out buttons** based on current state

### Architecture

```
Modules/Employee/
├── app/
│   ├── Actions/Dashboard/V1/Attendance/
│   │   ├── GetSelfServiceAttendanceAction.php
│   │   ├── SelfServiceCheckInAction.php
│   │   └── SelfServiceCheckOutAction.php
│   └── Http/Controllers/Dashboard/V1/
│       └── SelfServiceAttendanceController.php
├── resources/js/pages/Dashboard/V1/Attendance/
│   └── SelfService.vue
└── routes/dashboard.php
```

### Routes

```php
// Self-Service Attendance Routes
GET  /dashboard/attendances/self-service           -> index()      // Display page
POST /dashboard/attendances/self-service/check-in  -> checkIn()    // Process check-in
POST /dashboard/attendances/self-service/check-out -> checkOut()   // Process check-out
```

### Controller: SelfServiceAttendanceController

```php
namespace Modules\Employee\Http\Controllers\Dashboard\V1;

class SelfServiceAttendanceController extends Controller
{
    /**
     * Get the authenticated employee or throw 403.
     * Only users linked to an Employee record can access.
     */
    private function getAuthenticatedEmployee(): Employee;

    /**
     * Display self-service attendance page.
     * Returns employee info, today's attendance, state, and config.
     */
    public function index(): Response;

    /**
     * Handle self-service check-in.
     * Validates request, executes check-in action.
     */
    public function checkIn(SelfServiceCheckInRequest $request): RedirectResponse;

    /**
     * Handle self-service check-out.
     * Validates request, executes check-out action.
     */
    public function checkOut(SelfServiceCheckOutRequest $request): RedirectResponse;
}
```

### Actions

#### GetSelfServiceAttendanceAction

Gets all data needed for the self-service page.

```php
$action = new GetSelfServiceAttendanceAction();
$data = $action->execute($employeeId);

// Response
[
    'employee' => [
        'id' => 1,
        'uuid' => '...',
        'full_name' => 'John Doe',
        'employee_code' => 'EMP001',
        'avatar_url' => '/storage/avatars/john.jpg',
        'job_title' => 'Software Engineer',
        'department_name' => 'IT Department',
        'employee_type_name' => 'Full Time',
    ],
    'todayAttendance' => [
        'id' => 1,
        'uuid' => '...',
        'check_in_time' => '08:30:00',
        'check_out_time' => null,
        'status' => 'present',
        'status_label' => 'Present',
        'work_hours' => null,
        'work_hours_formatted' => '0h 0m',
        'check_in_location' => 'Self Service',
        'check_out_location' => null,
        'notes' => null,
    ],
    'state' => [
        'canCheckIn' => false,   // Already checked in
        'canCheckOut' => true,   // Can check out now
        'isCompleted' => false,  // Not yet done for the day
    ],
    'config' => [
        'allowManualCheckIn' => true,
        'requireLocation' => false,
        'workStartTime' => '08:00',
        'workEndTime' => '17:00',
        'lateThresholdMinutes' => 30,
    ],
]
```

#### SelfServiceCheckInAction

Processes employee self-service check-in.

```php
$action = new SelfServiceCheckInAction();
$result = $action->execute($employeeId, [
    'method' => 'self_service',
    'latitude' => 11.5564,
    'longitude' => 104.9282,
    'location' => 'Self Service',
    'notes' => 'Working from office',
]);

// Success Response
[
    'success' => true,
    'message' => 'Checked in successfully at 08:30.',
    'attendance' => [...],
]

// Error Response (Already checked in)
[
    'success' => false,
    'message' => 'Already checked in today.',
    'attendance' => [...],
]
```

#### SelfServiceCheckOutAction

Processes employee self-service check-out with work hours calculation.

```php
$action = new SelfServiceCheckOutAction();
$result = $action->execute($employeeId, [
    'method' => 'self_service',
    'latitude' => 11.5564,
    'longitude' => 104.9282,
    'location' => 'Self Service',
    'notes' => 'Finished for the day',
]);

// Success Response
[
    'success' => true,
    'message' => 'Checked out successfully. Worked: 8h 30m',
    'attendance' => [
        'id' => 1,
        'uuid' => '...',
        'check_in_time' => '08:30:00',
        'check_out_time' => '17:00:00',
        'status' => 'present',
        'status_label' => 'Present',
        'work_hours' => 8.5,
        'work_hours_formatted' => '8h 30m',
    ],
]

// Error Response (No check-in)
[
    'success' => false,
    'message' => 'You must check in before checking out.',
    'attendance' => null,
]
```

### Frontend: SelfService.vue

```typescript
// TypeScript Types
interface SelfServiceProps {
    employee: SelfServiceEmployee;
    todayAttendance: SelfServiceAttendance | null;
    state: SelfServiceState;
    config: SelfServiceConfig;
}

interface SelfServiceEmployee {
    id: number;
    uuid: string;
    full_name: string;
    employee_code: string;
    avatar_url: string | null;
    job_title: string | null;
    department_name: string | null;
    employee_type_name: string | null;
}

interface SelfServiceState {
    canCheckIn: boolean;
    canCheckOut: boolean;
    isCompleted: boolean;
}

interface SelfServiceConfig {
    allowManualCheckIn: boolean;
    requireLocation: boolean;
    workStartTime: string;
    workEndTime: string;
    lateThresholdMinutes: number;
}
```

**Key Features:**

1. **Real-time Clock**: Updates every second using `setInterval`
2. **Live Work Duration**: Calculates work hours in real-time while checked in
3. **GPS Location**: Captures coordinates via browser Geolocation API
4. **State-based UI**: Shows appropriate buttons based on `state` object
5. **Flash Messages**: Displays success/error messages after actions

### State Flow

```
┌─────────────────┐
│    Not Checked  │ canCheckIn: true
│        In       │ canCheckOut: false
│                 │ isCompleted: false
└────────┬────────┘
         │ Check In
         ▼
┌─────────────────┐
│    Working      │ canCheckIn: false
│   (Checked In)  │ canCheckOut: true
│                 │ isCompleted: false
└────────┬────────┘
         │ Check Out
         ▼
┌─────────────────┐
│    Completed    │ canCheckIn: false
│   (Checked Out) │ canCheckOut: false
│                 │ isCompleted: true
└─────────────────┘
```

### Late Detection

The system automatically marks attendance as "late" if the employee checks in after the configured threshold:

```php
// In SelfServiceCheckInAction
$lateThreshold = $employee->employeeType?->time_start
    ?? Carbon::createFromTimeString('09:00:00');

if ($now->gt($lateThreshold)) {
    $attendance->status = Attendance::STATUS_LATE;
}
```

### Access Control

- **Authentication**: Route requires `auth` and `verified` middleware
- **Employee Verification**: User must be linked to an Employee record
- **Error Handling**: 403 error if user is not an employee

```php
// In controller
$user = auth()->user();
$employee = Employee::where('user_id', $user->id)->first();

if (!$employee) {
    throw new AccessDeniedHttpException('You are not registered as an employee.');
}
```

### Sidebar Menu

Self-service is added to the Employee module sidebar:

```php
// In EmployeeServiceProvider
MenuService::addSubmenuItem(
    'primary',
    'employee',
    __('Self Service'),
    route('employee.attendances.self-service'),
    70,
    null, // No special permission - authenticated employees only
    'employee.attendances.self-service',
    'LogIn'
);
```

---

## Dependencies

- `html5-qrcode`: QR code scanning
- `leaflet` / `@vue-leaflet/vue-leaflet`: Map display
- `qrcode`: QR code generation
- `recharts` / chart components: Analytics charts
