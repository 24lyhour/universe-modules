<?php

namespace Modules\Porfolio\Transformers;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PortfolioResource extends JsonResource
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
            'featured_image' => $this->featured_image,
            'gallery' => $this->gallery,
            'category' => $this->category,
            'industry' => $this->industry,
            'experience_level' => $this->experience_level,
            'location' => $this->location,
            'tags' => $this->tags,
            'client_name' => $this->client_name,
            'project_url' => $this->project_url,
            'project_date' => $this->project_date?->format('Y-m-d'),
            'view' => $this->view,
            'is_featured' => $this->is_featured,
            'is_active' => $this->is_active,
            'sort_order' => $this->sort_order,
            'user' => $this->whenLoaded('user', fn() => [
                'id' => $this->user->id,
                'name' => $this->user->name,
            ]),
            'header' => new HeaderResource($this->whenLoaded('header')),
            'created_at' => $this->created_at?->toISOString(),
            'updated_at' => $this->updated_at?->toISOString(),
        ];
    }
}
