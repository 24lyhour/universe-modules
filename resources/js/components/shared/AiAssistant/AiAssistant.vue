<script setup lang="ts">
import { ref, computed, nextTick, watch, onMounted, onUnmounted } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, X, Send, Loader2, Trash2, Maximize2, Minimize2 } from 'lucide-vue-next';

interface Props {
    /**
     * API endpoint that accepts { message, history } and returns { reply }.
     * Wire this up later — defaults to a no-op echo for now.
     */
    endpoint?: string;
    title?: string;
    placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
    endpoint: '',
    title: 'Universe AI Assistant',
    placeholder: 'Ask me anything…',
});

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const STORAGE_KEY = 'ai-assistant.history';

const open = ref(false);
const maximized = ref(false);
const draft = ref('');
const sending = ref(false);
const messages = ref<Message[]>([]);
const scrollEl = ref<HTMLElement | null>(null);

const panelClasses = computed(() =>
    maximized.value
        ? 'h-[calc(100vh-3rem)] w-[min(960px,calc(100vw-3rem))]'
        : 'h-[680px] max-h-[calc(100vh-3rem)] w-[460px] max-w-[calc(100vw-3rem)]',
);

// ─── Persist history across pages so the conversation isn't lost on navigation
const loadHistory = () => {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (raw) messages.value = JSON.parse(raw);
    } catch {
        messages.value = [];
    }
};
const saveHistory = () => {
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.value));
    } catch { /* quota / disabled */ }
};

watch(messages, saveHistory, { deep: true });

onMounted(() => {
    loadHistory();
    window.addEventListener('keydown', handleKeydown);
});
onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
});

// Esc to close
const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && open.value) open.value = false;
};

const scrollToBottom = async () => {
    await nextTick();
    if (scrollEl.value) {
        scrollEl.value.scrollTop = scrollEl.value.scrollHeight;
    }
};

watch(open, (val) => { if (val) scrollToBottom(); });

const canSend = computed(() => draft.value.trim().length > 0 && !sending.value);

/**
 * send to the api key ai
 */
const send = async () => {
    if (!canSend.value) return;

    const text = draft.value.trim();
    messages.value.push({ role: 'user', content: text });
    draft.value = '';
    scrollToBottom();

    sending.value = true;
    try {
        if (props.endpoint) {
            const res = await fetch(props.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content ?? '',
                },
                body: JSON.stringify({ message: text, history: messages.value.slice(-10) }),
                credentials: 'same-origin',
            });
            const data = await res.json().catch(() => ({}));
            messages.value.push({
                role: 'assistant',
                content: data?.reply ?? 'Sorry, I could not parse a response.',
            });
        } else {
            // No endpoint wired — friendly placeholder so the UI is testable.
            await new Promise((r) => setTimeout(r, 400));
            messages.value.push({
                role: 'assistant',
                content: 'AI endpoint not configured yet. Pass an `endpoint` prop to enable replies.',
            });
        }
    } catch {
        messages.value.push({
            role: 'assistant',
            content: 'Something went wrong. Please try again.',
        });
    } finally {
        sending.value = false;
        scrollToBottom();
    }
};

const clearHistory = () => {
    messages.value = [];
    sessionStorage.removeItem(STORAGE_KEY);
};

const handleEnter = (e: KeyboardEvent) => {
    if (e.shiftKey) return;
    e.preventDefault();
    send();
};
</script>

<template>
    <!-- Floating launcher -->
    <button
        v-if="!open"
        type="button"
        :aria-label="title"
        class="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 print:hidden"
        @click="open = true"
    >
        <Sparkles class="h-6 w-6" />
    </button>

    <!-- Chat panel -->
    <div
        v-else
        :class="['fixed bottom-6 right-6 z-40 flex flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl print:hidden transition-all', panelClasses]"
        role="dialog"
        :aria-label="title"
    >
        <!-- Header -->
        <div class="flex items-center justify-between border-b bg-muted/40 px-4 py-3">
            <div class="flex items-center gap-2">
                <span class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles class="h-4 w-4" />
                </span>
                <div class="leading-tight">
                    <p class="text-sm font-semibold">{{ title }}</p>
                    <p class="text-[11px] text-muted-foreground">Press Esc to close</p>
                </div>
            </div>
            <div class="flex items-center gap-1">
                <Button
                    v-if="messages.length"
                    variant="ghost"
                    size="icon"
                    class="h-8 w-8"
                    title="Clear conversation"
                    @click="clearHistory"
                >
                    <Trash2 class="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    class="h-8 w-8"
                    :title="maximized ? 'Shrink' : 'Expand'"
                    @click="maximized = !maximized"
                >
                    <Minimize2 v-if="maximized" class="h-4 w-4" />
                    <Maximize2 v-else class="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    class="h-8 w-8"
                    title="Close"
                    @click="open = false"
                >
                    <X class="h-4 w-4" />
                </Button>
            </div>
        </div>

        <!-- Messages -->
        <div
            ref="scrollEl"
            class="flex-1 space-y-3 overflow-y-auto px-4 py-4"
        >
            <div v-if="!messages.length" class="flex h-full flex-col items-center justify-center text-center">
                <span class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles class="h-6 w-6" />
                </span>
                <p class="text-sm font-medium">How can I help?</p>
                <p class="mt-1 text-xs text-muted-foreground">
                    Ask about a booking, a menu item, or anything in the dashboard.
                </p>
            </div>

            <div
                v-for="(msg, i) in messages"
                :key="i"
                class="flex"
                :class="msg.role === 'user' ? 'justify-end' : 'justify-start'"
            >
                <div
                    class="max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed"
                    :class="msg.role === 'user'
                        ? 'rounded-br-sm bg-primary text-primary-foreground'
                        : 'rounded-bl-sm bg-muted text-foreground'"
                >
                    {{ msg.content }}
                </div>
            </div>

            <div v-if="sending" class="flex justify-start">
                <div class="flex items-center gap-2 rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-sm text-muted-foreground">
                    <Loader2 class="h-4 w-4 animate-spin" />
                    Thinking…
                </div>
            </div>
        </div>

        <!-- Composer -->
        <div class="border-t bg-background p-3">
            <div class="flex items-end gap-2">
                <Input
                    v-model="draft"
                    :placeholder="placeholder"
                    class="h-10"
                    :disabled="sending"
                    @keydown.enter="handleEnter"
                />
                <Button
                    type="button"
                    size="icon"
                    class="h-10 w-10 shrink-0"
                    :disabled="!canSend"
                    @click="send"
                >
                    <Loader2 v-if="sending" class="h-4 w-4 animate-spin" />
                    <Send v-else class="h-4 w-4" />
                </Button>
            </div>
        </div>
    </div>
</template>
