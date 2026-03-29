# Delivery Route Map Documentation

## Overview

The Delivery Route Map feature displays shipping routes from outlets to customers in the Order Management system. It shows real-time routing with distance and duration estimates.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Order Management                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────┐     ┌──────────────┐     ┌─────────────────┐  │
│  │   Outlet    │     │    Order     │     │    Shipping     │  │
│  │  (FROM)     │────▶│              │◀────│     (TO)        │  │
│  │             │     │              │     │                 │  │
│  │ • latitude  │     │ • outlet_id  │     │ • latitude      │  │
│  │ • longitude │     │ • customer_id│     │ • longitude     │  │
│  │ • address   │     │ • status     │     │ • street_1      │  │
│  └─────────────┘     └──────────────┘     └─────────────────┘  │
│         │                                          │            │
│         └──────────────────┬───────────────────────┘            │
│                            │                                     │
│                            ▼                                     │
│              ┌─────────────────────────┐                        │
│              │   DeliveryRouteMap      │                        │
│              │   Component             │                        │
│              │                         │                        │
│              │  • fromLatitude/Lng     │                        │
│              │  • toLatitude/Lng       │                        │
│              │  • OSRM Routing API     │                        │
│              └─────────────────────────┘                        │
│                            │                                     │
│                            ▼                                     │
│              ┌─────────────────────────┐                        │
│              │   Leaflet Map           │                        │
│              │   + Route Line          │                        │
│              │   + Markers             │                        │
│              │   + Distance/Duration   │                        │
│              └─────────────────────────┘                        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow

### 1. Outlet Coordinates Setup

```
Outlet Form (Create/Edit)
        │
        ▼
┌─────────────────┐
│  GeofenceMap    │ ◀── User clicks on map
│  Component      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ latitude/       │
│ longitude       │
│ saved to DB     │
└─────────────────┘
```

**Files involved:**
- `Modules/Outlet/resources/js/Components/Dashboard/OutletForm.vue`
- `Modules/Outlet/app/Models/Outlet.php`
- `Modules/Outlet/database/migrations/2026_03_25_033300_add_coordinates_to_outlets_table.php`

### 2. Customer/Shipping Coordinates

Shipping coordinates come from:
- Order checkout process (customer delivery address)
- GPS location from mobile app
- Manual entry in shipping form

**Files involved:**
- `Modules/Order/app/Models/OrderShipping.php`
- `Modules/Order/app/Http/Resources/OrderResource.php`

### 3. Route Display Flow

```
Order Modal Opened
        │
        ▼
┌─────────────────────┐
│ OrderActionForm.vue │
│                     │
│ Loads order with:   │
│ • outlet (with lat/lng)
│ • shipping (with lat/lng)
│ • customer          │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────────┐
│ OrderShippingWidget.vue │
│                         │
│ Props:                  │
│ • outlet                │
│ • shipping              │
│ • customer              │
│ • status                │
└─────────┬───────────────┘
          │
          ▼
┌─────────────────────────┐
│ DeliveryRouteMap.vue    │
│                         │
│ Props:                  │
│ • fromLatitude/Lng      │
│ • toLatitude/Lng        │
│ • fromLabel             │
│ • toLabel               │
└─────────┬───────────────┘
          │
          ▼
┌─────────────────────────┐
│ OSRM Routing API        │
│ (router.project-osrm.org)
│                         │
│ Returns:                │
│ • Route coordinates     │
│ • Distance (meters)     │
│ • Duration (seconds)    │
└─────────┬───────────────┘
          │
          ▼
┌─────────────────────────┐
│ Leaflet Map Renders:    │
│ • Orange marker (FROM)  │
│ • Red pin marker (TO)   │
│ • Route polyline        │
│ • Distance/duration badge
└─────────────────────────┘
```

## Components

### DeliveryRouteMap

**Location:** `resources/js/components/shared/DeliveryRouteMap/DeliveryRouteMap.vue`

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| height | string | '200px' | Map container height |
| fromLatitude | number \| null | null | Outlet latitude |
| fromLongitude | number \| null | null | Outlet longitude |
| fromLabel | string | 'Outlet' | FROM marker popup label |
| toLatitude | number \| null | null | Customer latitude |
| toLongitude | number \| null | null | Customer longitude |
| toLabel | string | 'Customer' | TO marker popup label |

**Usage:**
```vue
<DeliveryRouteMap
    height="250px"
    :from-latitude="outlet?.latitude"
    :from-longitude="outlet?.longitude"
    :from-label="outlet?.name"
    :to-latitude="shipping?.latitude"
    :to-longitude="shipping?.longitude"
    :to-label="shipping?.recipient_name"
/>
```

### OrderShippingWidget

**Location:** `Modules/Order/resources/js/Components/Dashboard/V1/Widgets/OrderActionFormWidget/OrderShippingWidget.vue`

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| shipping | OrderShippingInfo \| null | Shipping record with address and coordinates |
| outlet | OutletInfo \| null | Outlet with address and coordinates |
| customer | CustomerInfo \| null | Customer info (fallback address) |
| status | string | Order status for conditional display |

**Visibility Logic:**
- **FROM/TO addresses**: Always shown (from pending status)
- **Shipping details** (carrier, tracking): Only when status is `delivering`, `delivered`, or `completed`
- **Map**: Shows when outlet OR shipping has coordinates

## Database Schema

### outlets table
```sql
ALTER TABLE outlets ADD COLUMN latitude DECIMAL(10, 7) NULL;
ALTER TABLE outlets ADD COLUMN longitude DECIMAL(10, 7) NULL;
```

### order_shippings table
```sql
-- Already has these columns:
latitude DECIMAL(10, 7) NULL
longitude DECIMAL(10, 7) NULL
```

## OSRM Routing API

The component uses [OSRM (Open Source Routing Machine)](http://project-osrm.org/) for routing calculations.

**API Endpoint:**
```
GET https://router.project-osrm.org/route/v1/driving/{from_lng},{from_lat};{to_lng},{to_lat}?overview=full&geometries=geojson
```

**Response:**
```json
{
  "code": "Ok",
  "routes": [
    {
      "distance": 5234.5,      // meters
      "duration": 842.3,       // seconds
      "geometry": {
        "type": "LineString",
        "coordinates": [[lng, lat], [lng, lat], ...]
      }
    }
  ]
}
```

**Rate Limits:** Free tier, no authentication required. For production, consider self-hosting OSRM or using a commercial routing service.

## Fallback Behavior

If OSRM fails or is unavailable:
1. Component catches the error
2. Falls back to straight dashed line between points
3. No distance/duration badge shown

## Status-Based Display

| Order Status | FROM/TO Address | Map | Shipping Details |
|--------------|-----------------|-----|------------------|
| pending | ✅ | ✅ | ❌ |
| confirmed | ✅ | ✅ | ❌ |
| preparing | ✅ | ✅ | ❌ |
| ready | ✅ | ✅ | ❌ |
| delivering | ✅ | ✅ | ✅ |
| delivered | ✅ | ✅ | ✅ |
| completed | ✅ | ✅ | ✅ |
| cancelled | ✅ | ✅ | ❌ |

## Setup Instructions

### 1. Run Migration
```bash
php artisan migrate
```

### 2. Seed Outlet Coordinates
```bash
php artisan db:seed --class=Modules\\Outlet\\Database\\Seeders\\OutletSeeder
```

Or update existing outlets:
```php
// In tinker
Outlet::where('name', 'Main Branch')->update([
    'latitude' => 11.5564,
    'longitude' => 104.9282
]);
```

### 3. Set Outlet Location via UI
1. Go to Dashboard → Outlets
2. Edit an outlet
3. Scroll to "Location" section
4. Click on the map or search for location
5. Save

## Troubleshooting

### Map Not Showing
1. Check outlet has `latitude` and `longitude` values
2. Check shipping has coordinates (for route line)
3. Hard refresh browser (`Ctrl+Shift+R`)
4. Check browser console for errors

### Route Line Not Showing
- Requires BOTH outlet AND shipping to have coordinates
- Check OSRM API is accessible (not blocked by firewall)
- Check browser console for fetch errors

### Markers Not Visible
- Leaflet CSS must be loaded (`import 'leaflet/dist/leaflet.css'`)
- Check z-index conflicts with modal

## Related Files

```
Modules/Outlet/
├── app/Models/Outlet.php                    # latitude, longitude fillable
├── app/Http/Resources/OutletResource.php    # Returns lat/lng in API
├── database/migrations/
│   └── 2026_03_25_033300_add_coordinates_to_outlets_table.php
├── database/seeders/OutletSeeder.php        # Includes coordinates
└── resources/js/
    ├── Components/Dashboard/OutletForm.vue  # GeofenceMap for picking location
    ├── pages/dashboard/outlet/Create.vue
    ├── pages/dashboard/outlet/Edit.vue
    └── types/index.ts                       # OutletFormData with lat/lng

Modules/Order/
├── app/Http/Resources/OrderResource.php     # Returns outlet.lat/lng
└── resources/js/Components/Dashboard/V1/
    ├── OrderActionForm.vue                  # Passes data to widgets
    └── Widgets/OrderActionFormWidget/
        └── OrderShippingWidget.vue          # Contains DeliveryRouteMap

resources/js/components/shared/
├── DeliveryRouteMap/
│   ├── DeliveryRouteMap.vue                # Main map component
│   └── index.ts
├── GeofenceMap/
│   ├── GeofenceMap.vue                     # For picking locations
│   ├── types.ts
│   └── index.ts
└── index.ts                                # Exports both maps
```
