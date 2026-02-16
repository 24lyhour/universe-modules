<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const page = usePage();

const appBranding = computed(() => page.props.appBranding as { logo: string; name: string } | undefined);
const hasCustomLogo = computed(() => appBranding.value?.logo && appBranding.value.logo.length > 0);
const appName = computed(() => appBranding.value?.name || 'Universe');
</script>

<template>
    <div
        class="flex aspect-square size-8 items-center justify-center rounded-md"
        :class="hasCustomLogo ? 'bg-transparent' : 'bg-sidebar-primary text-sidebar-primary-foreground'"
    >
        <img
            v-if="hasCustomLogo"
            :src="appBranding?.logo"
            :alt="appName"
            class="size-8 object-contain"
        />
        <AppLogoIcon v-else class="size-5 fill-current text-white dark:text-black" />
    </div>
    <div class="ml-1 grid flex-1 text-left text-sm">
        <span class="mb-0.5 truncate leading-tight font-semibold">{{ appName }}</span>
    </div>
</template>
