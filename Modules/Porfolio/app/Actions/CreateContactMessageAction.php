<?php

namespace Modules\Porfolio\Actions;

use Illuminate\Support\Str;
use Modules\Porfolio\Models\ContactMessage;

class CreateContactMessageAction
{
    public function execute(array $data): ContactMessage
    {
        $data['uuid'] = Str::uuid();
        $data['ip_address'] = request()->ip();
        $data['user_agent'] = request()->userAgent();

        return ContactMessage::create($data);
    }
}
