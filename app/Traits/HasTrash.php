<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;

/**
 * HasTrash Trait
 *
 * Add this trait to models that use SoftDeletes and need trash functionality.
 * Provides helper methods and scopes for trash operations.
 *
 * Usage:
 * 1. Ensure your model uses SoftDeletes trait
 * 2. Add this trait: use HasTrash;
 * 3. Use scopes and methods for trash operations
 */
trait HasTrash
{
    /**
     * Get the display name for trash listing.
     * Override this method in your model to customize the display name.
     */
    public function getTrashDisplayName(): string
    {
        // Try common name attributes
        if (isset($this->name)) {
            return $this->name;
        }

        if (isset($this->title)) {
            return $this->title;
        }

        // For models with first_name/last_name
        if (isset($this->first_name) && isset($this->last_name)) {
            return trim($this->first_name . ' ' . $this->last_name);
        }

        // Fallback to ID
        return (string) $this->getKey();
    }

    /**
     * Get the type label for trash listing.
     * Override this method to customize the type label.
     */
    public function getTrashTypeLabel(): string
    {
        return class_basename($this);
    }

    /**
     * Convert model to trash item array.
     */
    public function toTrashItem(): array
    {
        return [
            'id' => $this->getKey(),
            'uuid' => $this->uuid ?? null,
            'display_name' => $this->getTrashDisplayName(),
            'type' => $this->getTrashTypeLabel(),
            'deleted_at' => $this->deleted_at?->toISOString(),
            'created_at' => $this->created_at?->toISOString(),
            'updated_at' => $this->updated_at?->toISOString(),
        ];
    }

    /**
     * Scope to get trashed items with trash data.
     */
    public function scopeTrashList(Builder $query): Builder
    {
        return $query->onlyTrashed()->latest('deleted_at');
    }

    /**
     * Check if this model can be restored.
     * Override to add custom validation logic.
     */
    public function canRestore(): bool
    {
        return $this->trashed();
    }

    /**
     * Check if this model can be permanently deleted.
     * Override to add custom validation logic.
     */
    public function canForceDelete(): bool
    {
        return true;
    }

    /**
     * Restore with custom logic.
     * Override to add pre/post restore hooks.
     */
    public function restoreFromTrash(): bool
    {
        if (!$this->canRestore()) {
            return false;
        }

        return $this->restore();
    }

    /**
     * Force delete with custom logic.
     * Override to add pre/post delete hooks.
     */
    public function permanentlyDelete(): bool
    {
        if (!$this->canForceDelete()) {
            return false;
        }

        return $this->forceDelete();
    }
}
