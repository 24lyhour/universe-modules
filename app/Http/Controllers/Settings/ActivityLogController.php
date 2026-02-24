<?php

namespace App\Http\Controllers\Settings;

use App\Events\UserSuspended;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Activitylog\Models\Activity;

class ActivityLogController extends Controller
{
    /**
     * Display activity log listing.
     */
    public function index(Request $request): Response
    {
        $perPage = $request->input('per_page', 20);

        $query = Activity::with('causer:id,name,email,avatar,suspended_at')
            ->where('log_name', 'auth')
            ->latest();

        // Filter by event type
        if ($request->filled('event')) {
            $query->where('event', $request->event);
        }

        // Filter by user
        if ($request->filled('user_id')) {
            $query->where('causer_id', $request->user_id)
                  ->where('causer_type', 'App\Models\User');
        }

        // Filter by date range
        if ($request->filled('date_from')) {
            $query->whereDate('created_at', '>=', $request->date_from);
        }
        if ($request->filled('date_to')) {
            $query->whereDate('created_at', '<=', $request->date_to);
        }

        $activities = $query->paginate($perPage)->withQueryString();

        // Get unique users who have activity logs for filter dropdown
        $users = Activity::where('log_name', 'auth')
            ->whereNotNull('causer_id')
            ->with('causer:id,name,email,suspended_at')
            ->select('causer_id', 'causer_type')
            ->distinct()
            ->get()
            ->map(fn ($activity) => $activity->causer)
            ->filter()
            ->unique('id')
            ->values();

        // Get users with recent failed login attempts (last 24 hours)
        $suspiciousUsers = Activity::where('log_name', 'auth')
            ->where('event', 'failed_login')
            ->where('created_at', '>=', now()->subDay())
            ->selectRaw('properties->>"$.email" as email, count(*) as failed_count')
            ->groupBy('email')
            ->having('failed_count', '>=', 3)
            ->orderByDesc('failed_count')
            ->limit(10)
            ->get();

        // Get stats
        $stats = [
            'total_logins' => Activity::where('log_name', 'auth')
                ->where('event', 'login')
                ->count(),
            'total_logouts' => Activity::where('log_name', 'auth')
                ->where('event', 'logout')
                ->count(),
            'failed_logins' => Activity::where('log_name', 'auth')
                ->where('event', 'failed_login')
                ->count(),
            'today_logins' => Activity::where('log_name', 'auth')
                ->where('event', 'login')
                ->whereDate('created_at', today())
                ->count(),
        ];

        return Inertia::render('dashboard/settings/activity-log/Index', [
            'activities' => [
                'data' => $activities->items(),
                'meta' => [
                    'current_page' => $activities->currentPage(),
                    'last_page' => $activities->lastPage(),
                    'per_page' => $activities->perPage(),
                    'total' => $activities->total(),
                ],
            ],
            'users' => $users,
            'stats' => $stats,
            'suspiciousUsers' => $suspiciousUsers,
            'filters' => [
                'event' => $request->event,
                'user_id' => $request->user_id,
                'date_from' => $request->date_from,
                'date_to' => $request->date_to,
            ],
        ]);
    }

    /**
     * Suspend a user.
     */
    public function suspendUser(Request $request, User $user): RedirectResponse
    {
        $request->validate([
            'reason' => 'nullable|string|max:255',
        ]);

        if ($user->id === $request->user()->id) {
            return back()->with('error', 'You cannot suspend yourself.');
        }

        if ($user->isSuspended()) {
            return back()->with('error', 'User is already suspended.');
        }

        $user->suspend($request->reason, $request->user()->id);

        UserSuspended::dispatch($user, $request->user(), 'suspended', $request->reason);

        return back()->with('success', "User {$user->name} has been suspended.");
    }

    /**
     * Unsuspend a user.
     */
    public function unsuspendUser(Request $request, User $user): RedirectResponse
    {
        if (!$user->isSuspended()) {
            return back()->with('error', 'User is not suspended.');
        }

        $user->unsuspend();

        UserSuspended::dispatch($user, $request->user(), 'unsuspended');

        return back()->with('success', "User {$user->name} has been unsuspended.");
    }

    /**
     * Force logout a user by invalidating their sessions.
     */
    public function forceLogout(Request $request, User $user): RedirectResponse
    {
        if ($user->id === $request->user()->id) {
            return back()->with('error', 'You cannot force logout yourself.');
        }

        // Delete all sessions for this user
        DB::table('sessions')
            ->where('user_id', $user->id)
            ->delete();

        // Log this action
        activity()
            ->causedBy($request->user())
            ->performedOn($user)
            ->useLog('auth')
            ->event('force_logout')
            ->withProperties([
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'target_user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                ],
            ])
            ->log("User {$user->name} was force logged out by {$request->user()->name}");

        return back()->with('success', "User {$user->name} has been logged out from all sessions.");
    }

    /**
     * Delete a user.
     */
    public function deleteUser(Request $request, User $user): RedirectResponse
    {
        if ($user->id === $request->user()->id) {
            return back()->with('error', 'You cannot delete yourself.');
        }

        $userName = $user->name;
        $userEmail = $user->email;

        // Delete all sessions for this user first
        DB::table('sessions')
            ->where('user_id', $user->id)
            ->delete();

        // Log this action before deleting the user
        activity()
            ->causedBy($request->user())
            ->useLog('auth')
            ->event('user_deleted')
            ->withProperties([
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'deleted_user' => [
                    'id' => $user->id,
                    'name' => $userName,
                    'email' => $userEmail,
                ],
            ])
            ->log("User {$userName} was deleted by {$request->user()->name}");

        // Delete the user
        $user->delete();

        return back()->with('success', "User {$userName} has been deleted.");
    }

    /**
     * Export activity logs.
     */
    public function export(Request $request)
    {
        $query = Activity::with('causer')
            ->where('log_name', 'auth')
            ->latest();

        if ($request->filled('event')) {
            $query->where('event', $request->event);
        }
        if ($request->filled('user_id')) {
            $query->where('causer_id', $request->user_id)
                  ->where('causer_type', 'App\Models\User');
        }
        if ($request->filled('date_from')) {
            $query->whereDate('created_at', '>=', $request->date_from);
        }
        if ($request->filled('date_to')) {
            $query->whereDate('created_at', '<=', $request->date_to);
        }

        $activities = $query->get();

        $csv = "ID,User,Email,Event,IP Address,Browser,Platform,Date\n";
        foreach ($activities as $activity) {
            $csv .= implode(',', [
                $activity->id,
                '"' . ($activity->causer?->name ?? 'Unknown') . '"',
                '"' . ($activity->causer?->email ?? $activity->properties['email'] ?? '') . '"',
                $activity->event,
                $activity->properties['ip_address'] ?? '',
                $activity->properties['browser'] ?? '',
                $activity->properties['platform'] ?? '',
                $activity->created_at->format('Y-m-d H:i:s'),
            ]) . "\n";
        }

        return response($csv)
            ->header('Content-Type', 'text/csv')
            ->header('Content-Disposition', 'attachment; filename="activity-log-' . now()->format('Y-m-d') . '.csv"');
    }

    /**
     * Clear old activity logs.
     */
    public function clear(Request $request): RedirectResponse
    {
        $request->validate([
            'days' => 'required|integer|min:1|max:365',
        ]);

        $deleted = Activity::where('log_name', 'auth')
            ->where('created_at', '<', now()->subDays($request->days))
            ->delete();

        // Log this action
        activity()
            ->causedBy($request->user())
            ->useLog('auth')
            ->event('clear_logs')
            ->withProperties([
                'ip_address' => $request->ip(),
                'deleted_count' => $deleted,
                'older_than_days' => $request->days,
            ])
            ->log("Cleared {$deleted} activity logs older than {$request->days} days");

        return back()->with('success', "Cleared {$deleted} activity logs.");
    }
}
