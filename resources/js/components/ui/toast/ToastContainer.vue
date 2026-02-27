<script setup lang="ts">
import { toasts, toastProgress, useToast } from '../../../composables/useToast';
import { CircleCheck, CircleX, CircleAlert, Info, Loader2 } from 'lucide-vue-next';
import { ref, onUnmounted, onMounted, computed, watch } from 'vue';

export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

const props = withDefaults(defineProps<{
    position?: ToastPosition;
}>(), {
    position: 'bottom-right',
});

const { remove } = useToast();

const positionClasses = computed(() => {
    const positions: Record<ToastPosition, string> = {
        'top-left': 'top-4 left-4',
        'top-center': 'top-4 left-1/2 -translate-x-1/2',
        'top-right': 'top-4 right-4',
        'bottom-left': 'bottom-4 left-4',
        'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
        'bottom-right': 'bottom-4 right-4',
    };
    return positions[props.position];
});

const isBottomPosition = computed(() => props.position.startsWith('bottom'));
const isRightPosition = computed(() => props.position.includes('right'));
const isCenterPosition = computed(() => props.position.includes('center'));

const icons = {
    success: CircleCheck,
    error: CircleX,
    warning: CircleAlert,
    info: Info,
    loading: Loader2,
};

const typeStyles = {
    success: {
        icon: 'text-emerald-600 dark:text-emerald-400',
        border: 'border-emerald-200/60 dark:border-emerald-800/60',
        corner: 'bg-emerald-500',
    },
    error: {
        icon: 'text-red-600 dark:text-red-400',
        border: 'border-red-200/60 dark:border-red-800/60',
        corner: 'bg-red-500',
    },
    warning: {
        icon: 'text-amber-600 dark:text-amber-400',
        border: 'border-amber-200/60 dark:border-amber-800/60',
        corner: 'bg-amber-500',
    },
    info: {
        icon: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200/60 dark:border-blue-800/60',
        corner: 'bg-blue-500',
    },
    loading: {
        icon: 'text-zinc-600 dark:text-zinc-400',
        border: 'border-zinc-200/60 dark:border-zinc-700/60',
        corner: 'bg-zinc-500',
    },
};

const intervals = ref<Record<number, ReturnType<typeof setInterval>>>({});
const hoveredToast = ref<number | null>(null);

/**
 * Start progress bar for toast (uses global toastProgress)
 */
const startProgress = (id: number, duration: number) => {
    // Initialize progress if not exists
    if (toastProgress.value[id] === undefined) {
        toastProgress.value[id] = 100;
    }

    // Don't start new interval if one already exists
    if (intervals.value[id]) return;

    const step = 100 / (duration / 50);

    intervals.value[id] = setInterval(() => {
        if (hoveredToast.value === id) return;

        toastProgress.value[id] -= step;
        if (toastProgress.value[id] <= 0) {
            clearInterval(intervals.value[id]);
            delete intervals.value[id];
            delete toastProgress.value[id];
        }
    }, 50);
};

/**
 * Handle toast enter animation
 * 
 * @param el 
 */
const onEnter = (el: Element) => {
    const id = Number(el.getAttribute('data-id'));
    const toast = toasts.value.find((t) => t.id === id);
    if (toast) {
        startProgress(id, toast.duration);
    }
};

// Initialize progress for existing toasts on mount
onMounted(() => {
    toasts.value.forEach((t) => {
        if (!intervals.value[t.id]) {
            startProgress(t.id, t.duration);
        }
    });
});

// Watch for new toasts and start progress
watch(toasts, (newToasts) => {
    newToasts.forEach((t) => {
        if (!intervals.value[t.id]) {
            startProgress(t.id, t.duration);
        }
    });
}, { deep: true });

onUnmounted(() => {
    Object.values(intervals.value).forEach(clearInterval);
});
</script>

<template>
    <Teleport to="body">
        <div
            :class="[
                'fixed z-99999 flex pointer-events-none gap-2',
                positionClasses,
                isBottomPosition ? 'flex-col-reverse' : 'flex-col'
            ]"
        >
            <TransitionGroup
                :name="isCenterPosition ? 'toast-center' : isRightPosition ? 'toast-right' : 'toast-left'"
                @enter="onEnter"
            >
                <div
                    v-for="t in toasts"
                    :key="t.id"
                    :data-id="t.id"
                    @mouseenter="hoveredToast = t.id"
                    @mouseleave="hoveredToast = null"
                    :class="[
                        'pointer-events-auto w-[360px] relative overflow-hidden',
                        'rounded-xl border shadow-lg',
                        'bg-white dark:bg-zinc-900',
                        typeStyles[t.type]?.border || typeStyles.info.border,
                    ]"
                >
                    <!-- Corner Pattern - Top Left -->
                    <div
                        :class="[
                            'absolute -top-6 -left-6 w-16 h-16 rounded-full blur-2xl opacity-30',
                            typeStyles[t.type]?.corner || typeStyles.info.corner,
                        ]"
                    />
                    <!-- Corner Pattern - Bottom Right -->
                    <div
                        :class="[
                            'absolute -bottom-4 -right-4 w-12 h-12 rounded-full blur-xl opacity-20',
                            typeStyles[t.type]?.corner || typeStyles.info.corner,
                        ]"
                    />

                    <div class="relative flex items-start gap-3 p-3.5">
                        <!-- Icon -->
                        <component
                            :is="icons[t.type] || icons.info"
                            :class="[
                                'shrink-0 w-5 h-5 mt-0.5',
                                typeStyles[t.type]?.icon || typeStyles.info.icon,
                                t.type === 'loading' ? 'animate-spin' : ''
                            ]"
                        />

                        <!-- Content -->
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                {{ t.title }}
                            </p>
                            <p
                                v-if="t.description"
                                class="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5"
                            >
                                {{ t.description }}
                            </p>
                        </div>

                        <!-- Close -->
                        <button
                            @click="remove(t.id)"
                            class="shrink-0 p-1 -m-1 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                        >
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <!-- Progress Bar -->
                    <div class="h-1 bg-zinc-100 dark:bg-zinc-800">
                        <div
                            :class="[
                                'h-full transition-all rounded-full',
                                typeStyles[t.type]?.corner || typeStyles.info.corner,
                            ]"
                            :style="{
                                width: `${toastProgress[t.id] ?? 100}%`,
                                transitionDuration: hoveredToast === t.id ? '0ms' : '50ms',
                                transitionTimingFunction: 'linear',
                            }"
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
    transition: all 0.3s ease-out;
}

.toast-left-leave-active,
.toast-right-leave-active,
.toast-center-leave-active {
    transition: all 0.2s ease-in;
}

.toast-left-enter-from {
    opacity: 0;
    transform: translateX(-100%);
}

.toast-left-leave-to {
    opacity: 0;
    transform: translateX(-50%);
}

.toast-right-enter-from {
    opacity: 0;
    transform: translateX(100%);
}

.toast-right-leave-to {
    opacity: 0;
    transform: translateX(50%);
}

.toast-center-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.toast-center-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.toast-left-move,
.toast-right-move,
.toast-center-move {
    transition: transform 0.3s ease-out;
}
</style>
