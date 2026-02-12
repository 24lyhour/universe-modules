import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useDark } from '@vueuse/core';

/**
 * Composable to get computed chart colors from CSS variables
 * Reacts to theme changes (light/dark mode)
 */
export function useChartColors() {
    const isDark = useDark();

    const chartColors = ref({
        chart1: '',
        chart2: '',
        chart3: '',
        chart4: '',
        chart5: '',
        primary: '',
    });

    const updateColors = () => {
        const root = document.documentElement;
        const computedStyle = getComputedStyle(root);

        chartColors.value = {
            chart1: computedStyle.getPropertyValue('--chart-1').trim() || 'oklch(0.871 0.15 154.449)',
            chart2: computedStyle.getPropertyValue('--chart-2').trim() || 'oklch(0.723 0.219 149.579)',
            chart3: computedStyle.getPropertyValue('--chart-3').trim() || 'oklch(0.627 0.194 149.214)',
            chart4: computedStyle.getPropertyValue('--chart-4').trim() || 'oklch(0.527 0.154 150.069)',
            chart5: computedStyle.getPropertyValue('--chart-5').trim() || 'oklch(0.448 0.119 151.328)',
            primary: computedStyle.getPropertyValue('--primary').trim() || 'oklch(0.648 0.2 131.684)',
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
