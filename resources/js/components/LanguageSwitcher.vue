<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePage, router } from '@inertiajs/vue3';
import { ChevronDown, Check, Languages } from 'lucide-vue-next';
import { computed } from 'vue';

interface Locale {
    code: string;
    name: string;
    native: string;
    flag: string;
}

const page = usePage();
const currentLocale = computed(() => page.props.locale as string);
const availableLocales = computed(() => page.props.availableLocales as Locale[]);

// Get the current locale object
const currentLocaleData = computed(() => {
    return availableLocales.value?.find(l => l.code === currentLocale.value);
});

// Check if current locale is English (show icon instead of flag)
const isEnglish = computed(() => currentLocale.value === 'en');

const switchLanguage = (locale: string) => {
    if (locale === currentLocale.value) return;

    router.post(`/language/${locale}`, {}, {
        preserveScroll: true,
        preserveState: false,
    });
};
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button
                variant="outline"
                size="sm"
                class="group h-9 gap-1.5 px-2.5 cursor-pointer"
            >
                <!-- Show Languages icon for English, flag for other languages -->
                <Languages v-if="isEnglish" class="h-4 w-4" />
                <span v-else class="text-base leading-none">{{ currentLocaleData?.flag }}</span>
                <span class="hidden sm:inline text-xs font-medium uppercase">
                    {{ currentLocale }}
                </span>
                <ChevronDown class="h-3.5 w-3.5 opacity-50 transition-transform group-data-[state=open]:rotate-180" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="min-w-[140px]">
            <DropdownMenuItem
                v-for="locale in availableLocales"
                :key="locale.code"
                @click="switchLanguage(locale.code)"
                class="cursor-pointer gap-2"
                :class="{ 'bg-accent': locale.code === currentLocale }"
            >
                <span class="text-base leading-none">{{ locale.flag }}</span>
                <span class="flex-1 text-sm">{{ locale.native }}</span>
                <Check
                    v-if="locale.code === currentLocale"
                    class="h-4 w-4 text-primary"
                />
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
