<?php

namespace Modules\Porfolio\Transformers;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SectionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'page_id' => $this->page_id,
            'title' => $this->title,
            'subtitle' => $this->subtitle,
            'slug' => $this->slug,
            'type' => $this->type,
            'content' => $this->content,
            'settings' => $this->settings,
            'background_image' => $this->background_image,
            'background_color' => $this->background_color,
            'text_color' => $this->text_color,
            'padding' => $this->padding,
            'margin' => $this->margin,
            'animation' => $this->animation,
            'is_active' => $this->is_active,
            'sort_order' => $this->sort_order,
            'page' => new PageResource($this->whenLoaded('page')),
            'created_at' => $this->created_at?->toISOString(),
            'updated_at' => $this->updated_at?->toISOString(),
        ];
    }
}
