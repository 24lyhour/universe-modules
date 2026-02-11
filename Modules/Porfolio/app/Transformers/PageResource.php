<?php

namespace Modules\Porfolio\Transformers;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PageResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'content' => $this->content,
            'meta_title' => $this->meta_title,
            'meta_description' => $this->meta_description,
            'meta_keywords' => $this->meta_keywords,
            'featured_image' => $this->featured_image,
            'template' => $this->template,
            'layout' => $this->layout,
            'settings' => $this->settings,
            'is_homepage' => $this->is_homepage,
            'is_active' => $this->is_active,
            'is_in_menu' => $this->is_in_menu,
            'menu_order' => $this->menu_order,
            'published_at' => $this->published_at?->toISOString(),
            'header' => new HeaderResource($this->whenLoaded('header')),
            'footer' => new FooterResource($this->whenLoaded('footer')),
            'sections' => SectionResource::collection($this->whenLoaded('sections')),
            'parent' => new PageResource($this->whenLoaded('parent')),
            'children' => PageResource::collection($this->whenLoaded('children')),
            'created_at' => $this->created_at?->toISOString(),
            'updated_at' => $this->updated_at?->toISOString(),
        ];
    }
}
