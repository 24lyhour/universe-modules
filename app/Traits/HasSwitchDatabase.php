<?php

namespace App\Traits;

trait HasSwitchDatabase
{
    public function getConnectionName()
    {
        return config('database.order_connection', 'mysql');
    }
}
