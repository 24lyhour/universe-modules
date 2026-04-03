# Schedule Flow - CLI Commands

## Check Schedule Status

```bash
# Check all outlet open/close status
php artisan outlet:schedule-check

# Output:
# +------------------+--------+---------------------+--------+-----------+
# | Outlet           | Mode   | Hours               | Status | Currently |
# +------------------+--------+---------------------+--------+-----------+
# | Main Branch      | daily  | 06:00:00 - 22:00:00 | active | OPEN      |
# | Airport Branch   | always | 24/7                | active | OPEN      |
# | Mall Outlet      | daily  | 10:00:00 - 21:00:00 | active | CLOSED    |
# +------------------+--------+---------------------+--------+-----------+

# Check all menu availability status
php artisan menu:schedule-check

# Output:
# +-----------------------------+-------------+-----------+--------+---------------------+-------------+
# | Menu                        | Outlet      | Type      | Mode   | Hours               | Currently   |
# +-----------------------------+-------------+-----------+--------+---------------------+-------------+
# | Morning Special             | Main Branch | Breakfast | daily  | 06:00:00 - 11:00:00 | AVAILABLE   |
# | Drinks Menu                 | Main Branch | Beverages | always | 24/7                | AVAILABLE   |
# +-----------------------------+-------------+-----------+--------+---------------------+-------------+
```

---

## Test Schedule via Tinker

```bash
php artisan tinker

# Check single outlet
>>> $outlet = Modules\Outlet\Models\Outlet::first();
>>> $resource = new Modules\Outlet\Http\Resources\OutletResource($outlet);
>>> $resource->resolve()['is_open'];
# true or false

# Check all outlets
>>> Modules\Outlet\Models\Outlet::all()->each(fn($o) => print($o->name . ': ' . $o->schedule_mode . ' → ' . $o->schedule_status . "\n"));

# Simulate different time
>>> Carbon\Carbon::setTestNow(Carbon\Carbon::today()->setTime(10, 0));
>>> $resource = new Modules\Outlet\Http\Resources\OutletResource(Modules\Outlet\Models\Outlet::first());
>>> $resource->resolve()['is_open'];  // true (10:00 AM within 06:00-22:00)
>>> Carbon\Carbon::setTestNow();  // reset
```

---

## Update Schedule via Tinker

```bash
php artisan tinker

# Update outlet schedule
>>> $outlet = Modules\Outlet\Models\Outlet::where('name', 'Main Branch')->first();
>>> $outlet->update([
...     'schedule_mode' => 'weekly',
...     'schedule_days' => json_encode(['monday','tuesday','wednesday','thursday','friday']),
...     'schedule_start_time' => '09:00:00',
...     'schedule_end_time' => '18:00:00',
...     'schedule_status' => 'active',
... ]);

# Set to always open
>>> $outlet->update(['schedule_mode' => 'always', 'schedule_status' => 'active']);

# Disable schedule
>>> $outlet->update(['schedule_status' => 'inactive']);
```

---

## Test API Response

```bash
# Check outlet API includes is_open
curl http://universe.test/api/v1/outlets | jq '.data[0] | {name, schedule_mode, is_open}'

# Output:
# {
#   "name": "Main Branch",
#   "schedule_mode": "daily",
#   "is_open": true
# }
```

---

## Scheduled Tasks (Laravel Scheduler)

```bash
# View all scheduled tasks
php artisan schedule:list

# Output:
#   0 * * * *  php artisan menu:schedule-check
#   0 * * * *  php artisan outlet:schedule-check
#   0 2 * * *  php artisan backup:run --only-db
#   ...

# Run scheduler locally (development)
php artisan schedule:work

# Run all due tasks now
php artisan schedule:run
```

---

## Quick Reference

| Task | Command |
|------|---------|
| Check outlets open/closed | `php artisan outlet:schedule-check` |
| Check menus available | `php artisan menu:schedule-check` |
| Test is_open in tinker | `(new OutletResource($outlet))->resolve()['is_open']` |
| Update schedule via tinker | `$outlet->update(['schedule_mode' => 'daily', ...])` |
| API test | `curl http://universe.test/api/v1/outlets \| jq` |
| View scheduler | `php artisan schedule:list` |
| Run scheduler locally | `php artisan schedule:work` |
