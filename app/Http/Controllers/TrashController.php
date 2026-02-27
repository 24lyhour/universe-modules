<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

/**
 * Base TrashController
 *
 * Provides common trash functionality for soft-deleted models.
 * Extend this controller in each module for specific trash pages.
 */
abstract class TrashController extends Controller
{
    /**
     * Get the model class for this trash controller.
     */
    abstract protected function getModelClass(): string;

    /**
     * Get the Inertia page path for trash listing.
     */
    abstract protected function getTrashPagePath(): string;

    /**
     * Get the route name prefix for this resource.
     */
    abstract protected function getRoutePrefix(): string;

    /**
     * Get the entity label for display.
     */
    abstract protected function getEntityLabel(): string;

    /**
     * Get the plural entity label for display.
     */
    abstract protected function getEntityLabelPlural(): string;

    /**
     * Transform a model to trash item array.
     */
    protected function toTrashItem(Model $model): array
    {
        $displayName = $model->name
            ?? $model->title
            ?? (isset($model->first_name) ? trim($model->first_name . ' ' . ($model->last_name ?? '')) : null)
            ?? (string) $model->getKey();

        return [
            'id' => $model->getKey(),
            'uuid' => $model->uuid ?? null,
            'display_name' => $displayName,
            'type' => $this->getEntityLabel(),
            'deleted_at' => $model->deleted_at?->toISOString(),
            'created_at' => $model->created_at?->toISOString(),
        ];
    }

    /**
     * Display a listing of trashed items.
     */
    public function index(Request $request): Response
    {
        $modelClass = $this->getModelClass();
        $perPage = $request->input('per_page', 10);
        $search = $request->input('search');

        $query = $modelClass::onlyTrashed()->latest('deleted_at');

        // Apply search if model has searchable columns
        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('code', 'like', "%{$search}%");
            });
        }

        $items = $query->paginate($perPage);

        $trashItems = $items->getCollection()->map(fn ($item) => $this->toTrashItem($item))->values();

        return Inertia::render($this->getTrashPagePath(), [
            'trashItems' => [
                'data' => $trashItems,
                'meta' => [
                    'current_page' => $items->currentPage(),
                    'last_page' => $items->lastPage(),
                    'per_page' => $items->perPage(),
                    'total' => $items->total(),
                ],
            ],
            'config' => [
                'entityLabel' => $this->getEntityLabel(),
                'entityLabelPlural' => $this->getEntityLabelPlural(),
                'routePrefix' => $this->getRoutePrefix(),
            ],
            'filters' => [
                'search' => $search,
                'per_page' => $perPage,
            ],
        ]);
    }

    /**
     * Restore a soft-deleted item.
     */
    public function restore(string $uuid): RedirectResponse
    {
        $modelClass = $this->getModelClass();
        $item = $modelClass::onlyTrashed()->where('uuid', $uuid)->firstOrFail();

        $item->restore();

        return redirect()
            ->back()
            ->with('success', "{$this->getEntityLabel()} restored successfully.");
    }

    /**
     * Permanently delete an item.
     */
    public function forceDelete(string $uuid): RedirectResponse
    {
        $modelClass = $this->getModelClass();
        $item = $modelClass::onlyTrashed()->where('uuid', $uuid)->firstOrFail();

        $item->forceDelete();

        return redirect()
            ->back()
            ->with('success', "{$this->getEntityLabel()} permanently deleted.");
    }

    /**
     * Empty all trashed items.
     */
    public function empty(): RedirectResponse
    {
        $modelClass = $this->getModelClass();
        $count = $modelClass::onlyTrashed()->count();

        $modelClass::onlyTrashed()->forceDelete();

        return redirect()
            ->back()
            ->with('success', "{$count} {$this->getEntityLabelPlural()} permanently deleted.");
    }

    /**
     * Bulk restore soft-deleted items.
     */
    public function bulkRestore(Request $request): RedirectResponse
    {
        $uuids = $request->input('uuids', []);

        if (empty($uuids)) {
            return redirect()
                ->back()
                ->with('error', 'No items selected for restore.');
        }

        $modelClass = $this->getModelClass();
        $restored = $modelClass::onlyTrashed()
            ->whereIn('uuid', $uuids)
            ->restore();

        return redirect()
            ->back()
            ->with('success', "{$restored} {$this->getEntityLabelPlural()} restored successfully.");
    }

    /**
     * Bulk permanently delete items.
     */
    public function bulkForceDelete(Request $request): RedirectResponse
    {
        $uuids = $request->input('uuids', []);

        if (empty($uuids)) {
            return redirect()
                ->back()
                ->with('error', 'No items selected for deletion.');
        }

        $modelClass = $this->getModelClass();
        $deleted = $modelClass::onlyTrashed()
            ->whereIn('uuid', $uuids)
            ->forceDelete();

        return redirect()
            ->back()
            ->with('success', "{$deleted} {$this->getEntityLabelPlural()} permanently deleted.");
    }
}
