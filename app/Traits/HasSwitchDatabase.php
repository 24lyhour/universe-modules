<?php

namespace App\Traits;

trait HasSwitchDatabase
{
    /**
     * database name for the configure
     */
    public function getConnectionName()
    {
        return config('database.environment_connection', 'mysql');
    }

    /**
     * switch database name for the configure
     */
    public function switchDatabase($database)
    {
        config(['database.environment_connection' => $database]);
    }
}
