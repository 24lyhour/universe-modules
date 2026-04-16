<?php

namespace Modules\Delivery\Enums;

enum DeliveryStatusEnum: string {
    case PENDING = 'pending';
    case ACCEPTED = 'accepted';
    case REJECTED = 'rejected';
    case DELIVERED = 'delivered';
    case CANCELLED = 'cancelled';
}
