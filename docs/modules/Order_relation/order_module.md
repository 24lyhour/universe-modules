Order Module Relationship Summary
Model Relationship Type Target
Order customer BelongsTo Customer
Order outlet BelongsTo Outlet
Order cart BelongsTo Cart
Order items HasMany OrderItem
Order shipping HasOne OrderShipping
Order shippingZone HasOneThrough ShippingZone
Order productReviews HasMany ProductReview
Order outletReview HasOne OutletReview
Order refunds HasMany Refund
Order transactions HasMany Transaction
ShippingZone orders HasManyThrough Order
ShippingZone shippings HasMany OrderShipping
Refund order BelongsTo Order
Refund customer BelongsTo Customer
Transaction order BelongsTo Order
Transaction refund BelongsTo Refund
Transaction customer BelongsTo Customer

Shipping Zone Detection Flow

┌─────────────┐ GPS Coordinates ┌──────────────────┐
│ Order │ ────────────────────► │ ShippingZone │
│ Creation │ │ getBestZoneForPoint()
└─────────────┘ └──────────────────┘
│ │
│ ▼
│ ┌──────────────────┐
│ │ Check if point │
│ │ is in zone │
│ │ (circle/polygon) │
│ └──────────────────┘
│ │
▼ ▼
┌─────────────────┐ ┌──────────────────┐
│ OrderShipping │◄──────────────────│ Calculate: │
│ - shipping_zone_id │ - distance_km │
│ - distance_km │ │ - delivery_fee │
│ - shipping_cost │ └──────────────────┘
└─────────────────┘
