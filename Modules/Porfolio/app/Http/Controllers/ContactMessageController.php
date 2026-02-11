<?php

namespace Modules\Porfolio\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Momentum\Modal\Modal;
use Modules\Porfolio\Models\ContactMessage;

class ContactMessageController extends Controller
{
    public function index(Request $request): Response
    {
        $query = ContactMessage::query()
            ->orderBy('created_at', 'desc');

        if ($request->has('filter') && $request->filter === 'unread') {
            $query->unread();
        }

        $messages = $query->paginate(15);

        return Inertia::render('porfolio::dashboard/messages/Index', [
            'messages' => $messages,
            'unreadCount' => ContactMessage::unread()->count(),
        ]);
    }

    public function show(int $id): Modal
    {
        $message = ContactMessage::findOrFail($id);

        if (!$message->is_read) {
            $message->markAsRead();
        }

        return Inertia::modal('porfolio::dashboard/messages/Show', [
            'message' => $message,
        ])->baseRoute('porfolio.messages.index');
    }

    public function destroy(int $id): RedirectResponse
    {
        $message = ContactMessage::findOrFail($id);
        $message->delete();

        return redirect()->route('porfolio.messages.index')
            ->with('success', 'Message deleted successfully.');
    }

    public function markAsRead(int $id): RedirectResponse
    {
        $message = ContactMessage::findOrFail($id);
        $message->markAsRead();

        return redirect()->back()
            ->with('success', 'Message marked as read.');
    }

    public function markAsReplied(int $id): RedirectResponse
    {
        $message = ContactMessage::findOrFail($id);
        $message->markAsReplied();

        return redirect()->back()
            ->with('success', 'Message marked as replied.');
    }
}
