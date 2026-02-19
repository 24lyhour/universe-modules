import { ref, watch, onMounted } from 'vue';

interface AnimatedCounterOptions {
    duration?: number;
    easing?: (t: number) => number;
    delay?: number;
}

// Easing function for smooth animation
const easeOutExpo = (t: number): number => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export function useAnimatedCounter(
    targetValue: () => number,
    options: AnimatedCounterOptions = {}
) {
    const { duration = 1500, easing = easeOutExpo, delay = 0 } = options;

    const displayValue = ref(0);
    const isAnimating = ref(false);

    const animate = (from: number, to: number) => {
        if (from === to) return;

        isAnimating.value = true;
        const startTime = performance.now();
        const diff = to - from;

        const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easing(progress);

            displayValue.value = Math.round(from + diff * easedProgress);

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                displayValue.value = to;
                isAnimating.value = false;
            }
        };

        requestAnimationFrame(step);
    };

    // Watch for changes in target value
    watch(
        targetValue,
        (newValue, oldValue) => {
            if (typeof newValue === 'number' && !isNaN(newValue)) {
                animate(oldValue ?? 0, newValue);
            }
        },
        { immediate: false }
    );

    // Initial animation on mount
    onMounted(() => {
        const target = targetValue();
        if (typeof target === 'number' && !isNaN(target)) {
            setTimeout(() => {
                animate(0, target);
            }, delay);
        }
    });

    return {
        displayValue,
        isAnimating,
    };
}
