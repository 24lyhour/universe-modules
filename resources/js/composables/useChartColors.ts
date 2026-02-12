import { ref, onMounted, watch } from 'vue';
import { useDark } from '@vueuse/core';

// Default oklch colors from CSS
const DEFAULT_COLORS = {
    chart1: 'oklch(0.871 0.15 154.449)',
    chart2: 'oklch(0.723 0.219 149.579)',
    chart3: 'oklch(0.627 0.194 149.214)',
    chart4: 'oklch(0.527 0.154 150.069)',
    chart5: 'oklch(0.448 0.119 151.328)',
    primary: 'oklch(0.648 0.2 131.684)',
};

/**
 * Composable to get computed chart colors from CSS variables
 * Reacts to theme changes (light/dark mode)
 */
export function useChartColors() {
    const isDark = useDark();

    // Initialize with default colors immediately
    const chartColors = ref({ ...DEFAULT_COLORS });

    const updateColors = () => {
        if (typeof window === 'undefined') return;

        const root = document.documentElement;
        const computedStyle = getComputedStyle(root);

        chartColors.value = {
            chart1: computedStyle.getPropertyValue('--chart-1').trim() || DEFAULT_COLORS.chart1,
            chart2: computedStyle.getPropertyValue('--chart-2').trim() || DEFAULT_COLORS.chart2,
            chart3: computedStyle.getPropertyValue('--chart-3').trim() || DEFAULT_COLORS.chart3,
            chart4: computedStyle.getPropertyValue('--chart-4').trim() || DEFAULT_COLORS.chart4,
            chart5: computedStyle.getPropertyValue('--chart-5').trim() || DEFAULT_COLORS.chart5,
            primary: computedStyle.getPropertyValue('--primary').trim() || DEFAULT_COLORS.primary,
        };
    };

    onMounted(() => {
        updateColors();
    });

    // Update colors when theme changes
    watch(isDark, () => {
        // Small delay to ensure CSS variables are updated
        setTimeout(updateColors, 50);
    });

    return {
        chartColors,
        isDark,
    };
}
