<?php

namespace Modules\Porfolio\Transformers;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FooterResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'title' => $this->title,
            'description' => $this->description,
            'copyright_text' => $this->copyright_text,
            'logo' => $this->logo,
            'social_links' => $this->social_links,
            'contact_email' => $this->contact_email,
            'contact_phone' => $this->contact_phone,
            'contact_address' => $this->contact_address,
            'quick_links' => $this->quick_links,
            'newsletter_enabled' => $this->newsletter_enabled,
            'newsletter_title' => $this->newsletter_title,
            'newsletter_description' => $this->newsletter_description,
            'columns' => $this->columns,
            'is_active' => $this->is_active,
            'sort_order' => $this->sort_order,
            'created_at' => $this->created_at?->toISOString(),
            'updated_at' => $this->updated_at?->toISOString(),
        ];
    }
}
