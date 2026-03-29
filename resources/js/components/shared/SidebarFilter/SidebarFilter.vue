<script setup lang="ts">
import { computed } from 'vue';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export interface FilterItem {
    key: string;
    label: string;
    count: number;
    icon: any;
    color: string;      // e.g., 'text-blue-600'
    bgColor: string;    // e.g., 'bg-blue-100'
}

interface Props {
    title?: string;
    items: FilterItem[];
    modelValue: string;
    sticky?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Filter',
    sticky: true,
});

const emit = defineEmits<{
    'update:modelValue': [value: string];
}>();

const selectedValue = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
});

const handleClick = (key: string) => {
    selectedValue.value = key;
};
</script>

<template>
    <div :class="[sticky && 'lg:sticky lg:top-20']">
        <Card class="overflow-hidden">
            <CardContent class="p-0">
                <h3 v-if="title" class="text-sm font-medium text-muted-foreground p-4 pb-2 border-b">{{ title }}</h3>
                <div class="grid grid-cols-2 lg:grid-cols-1 gap-1.5 p-3 lg:max-h-[calc(100vh-180px)] lg:overflow-y-auto">
                <button
                    v-for="item in items"
                    :key="item.key"
                    @click="handleClick(item.key)"
                    class="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group"
                    :class="[
                        selectedValue === item.key
                            ? `${item.bgColor} ${item.color} shadow-sm ring-1 ring-inset ring-current/10`
                            : 'hover:bg-muted/80'
                    ]"
                >
                    <div class="flex items-center gap-2.5">
                        <div
                            class="flex items-center justify-center w-7 h-7 rounded-md transition-colors"
                            :class="selectedValue === item.key ? item.bgColor : 'bg-muted'"
                        >
                            <component
                                :is="item.icon"
                                class="h-3.5 w-3.5"
                                :class="selectedValue === item.key ? item.color : 'text-muted-foreground'"
                            />
                        </div>
                        <span class="text-sm" :class="selectedValue === item.key ? '' : 'text-foreground'">
                            {{ item.label }}
                        </span>
                    </div>
                    <Badge
                        class="h-5 min-w-[24px] px-1.5 text-xs font-semibold"
                        :class="[
                            selectedValue === item.key
                                ? `${item.bgColor} ${item.color} border border-current/20`
                                : 'bg-muted text-muted-foreground'
                        ]"
                    >
                        {{ item.count }}
                    </Badge>
                </button>
                </div>
            </CardContent>
        </Card>
    </div>
</template>
