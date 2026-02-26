<script setup lang="ts">
import { toasts, useToast } from '../../../composables/useToast';
import { Check, X as XIcon, AlertTriangle, Info } from 'lucide-vue-next';
import { ref, onUnmounted } from 'vue';

const { remove } = useToast();

const icons = {
    success: Check,
    error: XIcon,
    warning: AlertTriangle,
    info: Info,
};

const styles = {
    success: {
        icon: 'bg-green-500 text-white',
        progress: 'bg-green-500',
        border: 'border-l-green-500',
    },
    error: {
        icon: 'bg-red-500 text-white',
        progress: 'bg-red-500',
        border: 'border-l-red-500',
    },
    warning: {
        icon: 'bg-yellow-500 text-white',
        progress: 'bg-yellow-500',
        border: 'border-l-yellow-500',
    },
    info: {
        icon: 'bg-blue-500 text-white',
        progress: 'bg-blue-500',
        border: 'border-l-blue-500',
    },
};

// Progress tracking
const progress = ref<Record<number, number>>({});
const intervals = ref<Record<number, ReturnType<typeof setInterval>>>({});

const startProgress = (id: number, duration: number) => {
    progress.value[id] = 100;
    const step = 100 / (duration / 50);

    intervals.value[id] = setInterval(() => {
        progress.value[id] -= step;
        if (progress.value[id] <= 0) {
            clearInterval(intervals.value[id]);
            delete intervals.value[id];
            delete progress.value[id];
        }
    }, 50);
};

const onEnter = (el: Element) => {
    const id = Number(el.getAttribute('data-id'));
    const toast = toasts.value.find((t) => t.id === id);
    if (toast) {
        startProgress(id, toast.duration);
    }
};

onUnmounted(() => {
    Object.values(intervals.value).forEach(clearInterval);
});
</script>

<template>
    <Teleport to="body">
        <div class="fixed top-4 left-4 z-99999 flex flex-col gap-2 pointer-events-none">
            <TransitionGroup name="toast" @enter="onEnter">
                <div
                    v-for="t in toasts"
                    :key="t.id"
                    :data-id="t.id"
                    :class="[
                        'pointer-events-auto relative overflow-hidden bg-white dark:bg-zinc-900 rounded-lg shadow-xl w-[380px] border-l-4',
                        styles[t.type].border
                    ]"
                >
                    <!-- Content wrapper -->
                    <div class="flex items-start gap-3 p-4">
                        <!-- Icon -->
                        <div :class="['shrink-0 w-6 h-6 rounded-full flex items-center justify-center', styles[t.type].icon]">
                            <component :is="icons[t.type]" class="w-3.5 h-3.5" />
                        </div>

                        <!-- Content -->
                        <div class="flex-1 min-w-0 pt-0.5">
                            <p class="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {{ t.title }}
                            </p>
                            <p v-if="t.description" class="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                                {{ t.description }}
                            </p>
                        </div>

                        <!-- Close button -->
                        <button
                            @click="remove(t.id)"
                            class="shrink-0 p-1 rounded-md text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                            <XIcon class="h-4 w-4" />
                        </button>
                    </div>

                    <!-- Progress bar -->
                    <div class="h-1 bg-zinc-100 dark:bg-zinc-800">
                        <div
                            :class="['h-full transition-all duration-50 ease-linear', styles[t.type].progress]"
                            :style="{ width: `${progress[t.id] ?? 100}%` }"
                        />
                    </div>
                </div>
            </TransitionGroup>
        </div>
    </Teleport>
</template>

<style scoped>
.toast-enter-active {
    transition: all 0.35s cubic-bezier(0.21, 1.02, 0.73, 1);
}

.toast-leave-active {
    transition: all 0.2s ease-in;
}

.toast-enter-from {
    opacity: 0;
    transform: translateX(-100%);
}

.toast-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}

.toast-move {
    transition: transform 0.35s cubic-bezier(0.21, 1.02, 0.73, 1);
}
</style>
