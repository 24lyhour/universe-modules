<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { computed, type Component } from 'vue';

export interface StatsCardProps {
    title: string;
    value: number | string;
    icon?: Component;
    iconColor?: string;
    valueColor?: string;
    description?: string;
    trend?: {
        value: number;
        isPositive: boolean;
    };
}

const props = withDefaults(defineProps<StatsCardProps>(), {
    iconColor: 'text-muted-foreground',
    valueColor: '',
});

const formattedValue = computed(() => {
    if (typeof props.value === 'number') {
        return props.value.toLocaleString();
    }
    return props.value;
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
                :class="iconColor"
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
