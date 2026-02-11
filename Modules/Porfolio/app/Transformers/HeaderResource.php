<?php

namespace Modules\Porfolio\Transformers;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HeaderResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'title' => $this->title,
            'logo' => $this->logo,
            'logo_alt' => $this->logo_alt,
            'navigation' => $this->navigation,
            'actions' => $this->actions,
            'style' => $this->style,
            'position' => $this->position,
            'background_color' => $this->background_color,
            'text_color' => $this->text_color,
            'is_transparent' => $this->is_transparent,
            'show_search' => $this->show_search,
            'show_language_switcher' => $this->show_language_switcher,
            'is_active' => $this->is_active,
            'sort_order' => $this->sort_order,
            'created_at' => $this->created_at?->toISOString(),
            'updated_at' => $this->updated_at?->toISOString(),
        ];
    }
}
