# Outlet Module Relationship Summary

## Model Relationships

| Model | Relationship | Type | Target |
|-------|-------------|------|--------|
| Outlet | products | HasMany | Product |
| Outlet | menus | HasMany | Menu |
| Outlet | company | BelongsTo | Company |
| Outlet | typeOutlet | BelongsTo | TypeOutlet |
| Outlet | productTypes | HasMany | ProductType |
| Outlet | brands | HasMany | Brand |
| Outlet | carts | HasMany | Cart |
| Outlet | orders | HasMany | Order |
| Outlet | reviews | HasMany | OutletReview |
| TypeOutlet | outlet | BelongsTo | Outlet |
| TypeOutlet | createdBy | BelongsTo | User |
| TypeOutlet | updatedBy | BelongsTo | User |
| OutletCategory | outlets | HasMany | Outlet |

## Cross-Module Dependencies

```
Outlet Module
│
├── Used by Order Module:
│   ├── Order.outlet (BelongsTo)
│   ├── Cart.outlet (BelongsTo)
│   ├── ShippingZone.outlet_id
│   ├── ProductReview (via products)
│   └── OutletReview
│
├── Used by Product Module:
│   ├── Product.outlet_id
│   ├── ProductType.outlet_id
│   └── Brand.outlet_id
│
├── Used by Menu Module:
│   └── Menu.outlet_id
│
├── Used by Payment Module:
│   ├── PayWayService.forOutlet()
│   ├── OutletPayWayController
│   └── PayWay Actions (Update, Remove, Test)
│
└── Uses from App:
    ├── Company model
    └── User model (audit trails)
```

## Outlet Ecosystem Diagram

```
                    ┌──────────────┐
                    │   Company    │
                    └──────┬───────┘
                           │ belongsTo
                    ┌──────┴───────┐
            ┌───────│   Outlet     │───────┐
            │       └──────┬───────┘       │
            │              │               │
    ┌───────┴──────┐  ┌────┴────┐  ┌───────┴──────┐
    │  TypeOutlet  │  │ Product │  │    Menu      │
    └──────────────┘  └────┬────┘  └──────────────┘
                           │
                    ┌──────┴───────┐
                    │    Brand     │
                    │ ProductType  │
                    └──────────────┘

    ┌──────────────┐  ┌────────────┐  ┌──────────────┐
    │    Cart      │  │   Order    │  │ ShippingZone │
    │  outlet_id   │  │ outlet_id  │  │  outlet_id   │
    └──────────────┘  └─────┬──────┘  └──────────────┘
                            │
                     ┌──────┴───────┐
                     │ Transaction  │
                     │ (Payment)    │
                     └──────────────┘

    PayWay Integration:
    ┌──────────────┐     ┌──────────────┐
    │   Outlet     │────>│ PayWayService│
    │ merchant_id  │     │ .forOutlet() │
    │ api_key      │     └──────┬───────┘
    │ enabled      │            │
    └──────────────┘     ┌──────┴───────┐
                         │  PayWay API  │
                         └──────────────┘
```
