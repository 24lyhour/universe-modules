<?php

namespace App\Traits;

trait HasSwitchDatabase
{
    /**
     * database name for the configure
     */
    public function getConnectionName()
    {
        return config('database.order_connection', 'mysql');
    }

    /**
     * switch database name for the configure
     */
    public function switchDatabase($database)
    {
        config(['database.order_connection' => $database]);
    }
}
