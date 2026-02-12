<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\Widget;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WidgetController extends Controller
{
    public function index(Request $request): Response
    {
        $status = $request->get('status');

        $query = Widget::dashboard()->orderBy('sort_order');

        if ($status === 'active') {
            $query->where('status', true);
        } elseif ($status === 'inactive') {
            $query->where('status', false);
        }

        $widgets = $query->get();

        $stats = [
            'total' => Widget::dashboard()->count(),
            'active' => Widget::dashboard()->where('status', true)->count(),
            'inactive' => Widget::dashboard()->where('status', false)->count(),
        ];

        return Inertia::render('dashboard/Settings', [
            'widgetItems' => $widgets,
            'stats' => $stats,
            'currentStatus' => $status,
        ]);
    }

    public function update(Request $request, Widget $widget)
    {
        $validated = $request->validate([
            'status' => 'sometimes|boolean',
            'sort_order' => 'sometimes|integer|min:0',
        ]);

        $widget->update($validated);

        return back()->with('success', 'Widget updated successfully.');
    }

    public function updateOrder(Request $request)
    {
        $validated = $request->validate([
            'widgets' => 'required|array',
            'widgets.*.id' => 'required|exists:widgets,id',
            'widgets.*.sort_order' => 'required|integer|min:0',
        ]);

        foreach ($validated['widgets'] as $item) {
            Widget::where('id', $item['id'])->update(['sort_order' => $item['sort_order']]);
        }

        return back()->with('success', 'Widget order updated successfully.');
    }

    public function toggleModule(Request $request)
    {
        $validated = $request->validate([
            'module' => 'required|string',
            'status' => 'required|boolean',
        ]);

        Widget::dashboard()
            ->where('module', $validated['module'])
            ->update(['status' => $validated['status']]);

        return back()->with('success', 'Module widgets updated successfully.');
    }
}
