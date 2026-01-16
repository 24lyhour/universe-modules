<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { useAppearance } from '@/composables/useAppearance';
import { Monitor, Moon, Sun } from 'lucide-vue-next';
import { computed } from 'vue';

const { appearance, updateAppearance } = useAppearance();

const nextTheme = computed(() => {
    if (appearance.value === 'light') return 'dark';
    if (appearance.value === 'dark') return 'system';
    return 'light';
});

const toggleTheme = () => {
    updateAppearance(nextTheme.value);
};

const Icon = computed(() => {
    if (appearance.value === 'light') return Sun;
    if (appearance.value === 'dark') return Moon;
    return Monitor;
});
</script>

<template>
    <Button variant="outline" size="icon" @click="toggleTheme">
        <component
            :is="Icon"
            class="h-[1.2rem] w-[1.2rem] transition-all"
        />
        <span class="sr-only">Toggle theme ({{ appearance }})</span>
    </Button>
</template>
