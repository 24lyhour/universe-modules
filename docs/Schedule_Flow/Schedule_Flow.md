# Schedule Flow - Outlet & Menu

## Overview

The schedule system controls when outlets and menus are available. It is **NOT** a Laravel cron task — it is a **real-time business logic** that computes `is_open` / `is_available` on every API/page request.

---

## Architecture Flow

```
Dashboard (Admin)                         API (Mobile App)
     │                                         │
     ▼                                         ▼
Schedule Modal (Vue)                    GET /api/v1/outlets
     │                                         │
     ▼                                         ▼
PUT /dashboard/outlets/{uuid}/schedule  OutletPublicController
     │                                         │
     ▼                                         ▼
UpdateOutletScheduleAction              OutletResource
     │                                         │
     ▼                                         ▼
Database (outlets table)                isCurrentlyOpen()
     │                                         │
     ▼                                         ▼
schedule_mode, schedule_days,           Computes is_open: true/false
schedule_start_time, schedule_end_time  based on current time + schedule data
schedule_start_date, schedule_end_date
schedule_status
```

---

## Schedule Modes

| Mode | Description | Fields Used | Example |
|------|-------------|-------------|---------|
| `always` | Open 24/7 | None | Airport Branch |
| `daily` | Same hours every day | `schedule_start_time`, `schedule_end_time` | 06:00 - 22:00 |
| `weekly` | Specific days + hours | `schedule_days`, `schedule_start_time`, `schedule_end_time` | Mon-Fri 09:00-18:00 |
| `date_range` | Temporary schedule | `schedule_start_date`, `schedule_end_date`, `schedule_start_time`, `schedule_end_time` | Dec 24 - Jan 2, 10:00-16:00 |

---

## Database Schema

### Outlet Table

```
schedule_mode           VARCHAR  → always, daily, weekly, date_range
schedule_days           VARCHAR  → JSON: ["monday","tuesday","wednesday"]
schedule_start_time     VARCHAR  → 06:00:00
schedule_end_time       VARCHAR  → 22:00:00
schedule_start_date     DATE     → 2026-12-24
schedule_end_date       DATE     → 2026-01-02
schedule_status         VARCHAR  → active, inactive
```

### Menu Table

```
schedule_mode           VARCHAR  → always, daily, weekly, date_range
schedule_days           VARCHAR  → JSON: ["monday","tuesday","wednesday"]
schedule_start_time     VARCHAR  → 06:00:00
schedule_end_time       VARCHAR  → 11:00:00
schedule_start_date     DATE     → 2026-12-24
schedule_end_date       DATE     → 2026-01-02
schedule_status         BOOLEAN  → true, false
```

> **Note:** Outlet uses `string` for `schedule_status` (`'active'`/`'inactive'`), Menu uses `boolean` (`true`/`false`).

---

## is_open / is_available Logic

```
isCurrentlyOpen():
│
├── schedule_status !== 'active' → return FALSE
│
├── schedule_mode === 'always' → return TRUE
│
├── schedule_mode === 'date_range'
│   ├── before start_date → return FALSE
│   └── after end_date → return FALSE
│
├── schedule_mode === 'weekly'
│   └── current day NOT in schedule_days → return FALSE
│
├── schedule_start_time && schedule_end_time
│   └── current time NOT between start-end → return FALSE
│
└── return TRUE
```

---

## API Response

### Outlet API (`GET /api/v1/outlets`)

```json
{
    "data": [
        {
            "uuid": "b34d11bd-...",
            "name": "Main Branch",
            "schedule_mode": "daily",
            "schedule_status": "active",
            "schedule_start_time": "06:00:00",
            "schedule_end_time": "22:00:00",
            "schedule_days": null,
            "is_open": true
        },
        {
            "uuid": "1dbe324a-...",
            "name": "Airport Branch",
            "schedule_mode": "always",
            "schedule_status": "active",
            "is_open": true
        }
    ]
}
```

The `is_open` field is **computed on every request** based on the server's current time. Mobile apps should use this field to show open/closed status.

---

## Dashboard Flow

### Update Schedule (Admin)

```
1. Admin clicks "Schedule" button on outlet → GET /dashboard/outlets/{uuid}/schedule
2. Momentum Modal opens with Schedule.vue
3. Admin selects mode, sets hours/days/dates
4. Admin clicks "Save Schedule" → PUT /dashboard/outlets/{uuid}/schedule
5. UpdateOutletScheduleRequest validates data
6. UpdateOutletScheduleAction saves to database
7. Redirect back to outlet list
```

### Files Involved

| Layer | Outlet | Menu |
|-------|--------|------|
| **Route** | `PUT dashboard/outlets/{outlet}/schedule` | `PUT dashboard/menus/{menu}/schedule` |
| **Controller** | `OutletScheduleController@update` | `MenuScheduleController@update` |
| **Request** | `UpdateOutletScheduleRequest` | `UpdateMenuScheduleRequest` |
| **Action** | `UpdateOutletScheduleAction` | `UpdateMenuScheduleAction` |
| **Modal** | `outlet::dashboard/outlet/Schedule.vue` | `menu::dashboard/Menu/Schedule.vue` |
| **Resource** | `OutletResource` (computes `is_open`) | `MenuResource` (has schedule fields) |
| **API Controller** | `OutletPublicController` | `MenuController` (API) |

---

## Mobile Integration

### How mobile should use the schedule

```
1. Fetch outlets: GET /api/v1/outlets
2. Each outlet has is_open: true/false
3. Display open/closed badge based on is_open
4. Optionally show schedule_start_time / schedule_end_time for hours display
5. No need for client-side time calculation — server handles it
```

### When schedule changes are visible

Schedule changes are visible **immediately** on the next API request. There is no caching or delay. The `isCurrentlyOpen()` method runs on every request.

---

## Schedule Check Commands (CLI)

For monitoring, there are artisan commands that check schedule status:

```bash
# Check outlet open/close status
php artisan outlet:schedule-check

# Check menu availability status
php artisan menu:schedule-check
```

These run hourly via Laravel scheduler and output a table with current status of all outlets/menus.

---

## Common Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| `is_open` always false | `schedule_status` is `inactive` or not set | Set `schedule_status` to `active` in Schedule modal |
| `is_open` missing from API | `schedule_status` is null | Outlet has no schedule configured yet |
| Schedule saves but no change | Outlet model `$fillable` missing schedule fields | All schedule fields must be in `$fillable` |
| Wrong timezone | Server timezone differs from business timezone | Set `APP_TIMEZONE` in `.env` |
| `always` mode shows closed | Missing `always` check in `isCurrentlyOpen()` | Fixed — `always` mode now returns `true` immediately |
| Weekly mode ignores days | `schedule_days` stored as string not JSON | Must be JSON encoded: `["monday","friday"]` |
