<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { computed, type Component } from 'vue';
import { useAnimatedCounter } from '@/composables/useAnimatedCounter';

export interface StatsCardProps {
    title: string;
    value: number | string;
    icon?: Component;
    iconColor?: string;
    valueColor?: string;
    description?: string;
    animate?: boolean;
    animationDuration?: number;
    animationDelay?: number;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    variant?: 'default' | 'success' | 'warning' | 'danger' | 'destructive' | 'info' | 'secondary';
}

const props = withDefaults(defineProps<StatsCardProps>(), {
    iconColor: 'text-muted-foreground',
    valueColor: '',
    animate: true,
    animationDuration: 1500,
    animationDelay: 0,
    variant: 'default',
});

// Use animated counter for numeric values
const { displayValue } = useAnimatedCounter(
    () => (typeof props.value === 'number' ? props.value : 0),
    {
        duration: props.animationDuration,
        delay: props.animationDelay,
    }
);

const formattedValue = computed(() => {
    if (typeof props.value === 'number' && props.animate) {
        return displayValue.value.toLocaleString();
    }
    if (typeof props.value === 'number') {
        return props.value.toLocaleString();
    }
    return props.value;
});

// Variant-based icon colors
const iconColorClass = computed(() => {
    if (props.iconColor !== 'text-muted-foreground') {
        return props.iconColor;
    }
    switch (props.variant) {
        case 'success':
            return 'text-green-500';
        case 'warning':
            return 'text-yellow-500';
        case 'danger':
        case 'destructive':
            return 'text-red-500';
        case 'info':
            return 'text-blue-500';
        case 'secondary':
            return 'text-muted-foreground';
        default:
            return 'text-muted-foreground';
    }
});
</script>

<template>
    <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle class="text-sm font-medium">{{ title }}</CardTitle>
            <component
                :is="icon"
                v-if="icon"
                class="h-4 w-4"
                :class="iconColorClass"
            />
        </CardHeader>
        <CardContent>
            <div class="text-2xl font-bold" :class="valueColor">
                {{ formattedValue }}
            </div>
            <p v-if="description" class="text-xs text-muted-foreground">
                {{ description }}
            </p>
            <div v-if="trend" class="mt-1 flex items-center text-xs">
                <span :class="trend.isPositive ? 'text-green-600' : 'text-red-600'">
                    {{ trend.isPositive ? '+' : '' }}{{ trend.value }}%
                </span>
                <span class="ml-1 text-muted-foreground">from last month</span>
            </div>
        </CardContent>
    </Card>
</template>
