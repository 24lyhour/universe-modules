<script setup lang="ts">
import { toasts, useToast } from '../../../composables/useToast';
import { CheckCircle2, X, OctagonX, TriangleAlert, Info } from 'lucide-vue-next';
import { ref, onUnmounted, computed } from 'vue';

export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

const props = withDefaults(defineProps<{
    position?: ToastPosition;
}>(), {
    position: 'top-center',
});

const { remove } = useToast();

// Position classes mapping
const positionClasses = computed(() => {
    const positions: Record<ToastPosition, string> = {
        'top-left': 'top-4 left-4 items-start',
        'top-center': 'top-4 left-1/2 -translate-x-1/2 items-center',
        'top-right': 'top-4 right-4 items-end',
        'bottom-left': 'bottom-4 left-4 items-start',
        'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 items-center',
        'bottom-right': 'bottom-4 right-4 items-end',
    };
    return positions[props.position];
});

// Animation direction based on position
const isRightPosition = computed(() => props.position.includes('right'));
const isCenterPosition = computed(() => props.position.includes('center'));

const icons = {
    success: CheckCircle2,
    error: OctagonX,
    warning: TriangleAlert,
    info: Info,
};

// Shadcn-vue style classes
const styles = {
    success: {
        container: 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800',
        icon: 'text-green-600 dark:text-green-400',
        title: 'text-green-900 dark:text-green-100',
        description: 'text-green-800 dark:text-green-200',
        progress: 'bg-green-500',
        closeBtn: 'text-green-600 hover:text-green-800 hover:bg-green-100 dark:text-green-400 dark:hover:text-green-200 dark:hover:bg-green-900',
    },
    error: {
        container: 'bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800',
        icon: 'text-red-600 dark:text-red-400',
        title: 'text-red-900 dark:text-red-100',
        description: 'text-red-800 dark:text-red-200',
        progress: 'bg-red-500',
        closeBtn: 'text-red-600 hover:text-red-800 hover:bg-red-100 dark:text-red-400 dark:hover:text-red-200 dark:hover:bg-red-900',
    },
    warning: {
        container: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800',
        icon: 'text-yellow-600 dark:text-yellow-400',
        title: 'text-yellow-900 dark:text-yellow-100',
        description: 'text-yellow-800 dark:text-yellow-200',
        progress: 'bg-yellow-500',
        closeBtn: 'text-yellow-600 hover:text-yellow-800 hover:bg-yellow-100 dark:text-yellow-400 dark:hover:text-yellow-200 dark:hover:bg-yellow-900',
    },
    info: {
        container: 'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800',
        icon: 'text-blue-600 dark:text-blue-400',
        title: 'text-blue-900 dark:text-blue-100',
        description: 'text-blue-800 dark:text-blue-200',
        progress: 'bg-blue-500',
        closeBtn: 'text-blue-600 hover:text-blue-800 hover:bg-blue-100 dark:text-blue-400 dark:hover:text-blue-200 dark:hover:bg-blue-900',
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
        <div :class="['fixed z-99999 flex flex-col gap-3 pointer-events-none', positionClasses]">
            <TransitionGroup
                :name="isCenterPosition ? 'toast-center' : isRightPosition ? 'toast-right' : 'toast-left'"
                @enter="onEnter"
            >
                <div
                    v-for="t in toasts"
                    :key="t.id"
                    :data-id="t.id"
                    :class="[
                        'pointer-events-auto relative overflow-hidden rounded-lg shadow-lg w-[380px] border',
                        styles[t.type].container
                    ]"
                >
                    <!-- Content wrapper -->
                    <div class="flex items-start gap-3 p-4">
                        <!-- Icon -->
                        <component
                            :is="icons[t.type]"
                            :class="['size-5 shrink-0 mt-0.5', styles[t.type].icon]"
                        />

                        <!-- Content -->
                        <div class="flex-1 min-w-0">
                            <p :class="['text-sm font-semibold', styles[t.type].title]">
                                {{ t.title }}
                            </p>
                            <p
                                v-if="t.description"
                                :class="['text-sm mt-1', styles[t.type].description]"
                            >
                                {{ t.description }}
                            </p>
                        </div>

                        <!-- Close button -->
                        <button
                            @click="remove(t.id)"
                            :class="[
                                'shrink-0 p-1 rounded-md transition-colors',
                                styles[t.type].closeBtn
                            ]"
                        >
                            <X class="size-4" />
                        </button>
                    </div>

                    <!-- Progress bar -->
                    <div class="h-1 bg-black/5 dark:bg-white/5">
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
.toast-left-enter-active,
.toast-right-enter-active,
.toast-center-enter-active {
    transition: all 0.35s cubic-bezier(0.21, 1.02, 0.73, 1);
}

.toast-left-leave-active,
.toast-right-leave-active,
.toast-center-leave-active {
    transition: all 0.2s ease-in;
}

.toast-left-enter-from,
.toast-left-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}

.toast-right-enter-from,
.toast-right-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

.toast-center-enter-from,
.toast-center-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}

.toast-left-move,
.toast-right-move,
.toast-center-move {
    transition: transform 0.35s cubic-bezier(0.21, 1.02, 0.73, 1);
}
</style>
