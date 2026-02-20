<script setup lang="ts">
import { computed, ref } from 'vue';
import { Check, ChevronsUpDown, X } from 'lucide-vue-next';
import { cn } from '@/lib/utils';
import {
    Combobox,
    ComboboxAnchor,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxItemIndicator,
    ComboboxList,
    ComboboxTrigger,
    ComboboxViewport,
} from '@/components/ui/combobox';
import { Button } from '@/components/ui/button';

export interface SearchableSelectOption {
    value: string | number;
    label: string;
    description?: string;
}

interface Props {
    options: SearchableSelectOption[];
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    placeholder: 'Select an option...',
    searchPlaceholder: 'Search...',
    emptyMessage: 'No results found.',
    disabled: false,
});

const modelValue = defineModel<string | number | null>({ default: null });

const searchTerm = ref('');
const open = ref(false);

// Get selected option
const selectedOption = computed(() => {
    if (modelValue.value === null || modelValue.value === undefined) return null;
    return props.options.find((opt) => opt.value === modelValue.value) || null;
});

// Filter options based on search
const filteredOptions = computed(() => {
    if (!searchTerm.value) return props.options;
    const query = searchTerm.value.toLowerCase();
    return props.options.filter(
        (option) =>
            option.label.toLowerCase().includes(query) ||
            option.description?.toLowerCase().includes(query)
    );
});

// Handle selection
const handleSelect = (val: string | number | bigint | boolean | Record<string, unknown> | null | undefined) => {
    if (val !== null && val !== undefined && (typeof val === 'string' || typeof val === 'number')) {
        modelValue.value = val;
        open.value = false;
        searchTerm.value = '';
    }
};

// Clear selection
const clearSelection = (e: Event) => {
    e.stopPropagation();
    e.preventDefault();
    modelValue.value = null;
};
</script>

<template>
    <Combobox
        v-model:open="open"
        v-model:search-term="searchTerm"
        :disabled="disabled"
        :filter-function="() => filteredOptions"
        @update:model-value="handleSelect"
    >
        <ComboboxAnchor class="w-full">
            <Button
                type="button"
                variant="outline"
                role="combobox"
                :aria-expanded="open"
                :disabled="disabled"
                class="w-full justify-between font-normal"
            >
                <ComboboxTrigger class="flex-1 text-left truncate outline-none">
                    <span :class="cn(!selectedOption && 'text-muted-foreground')">
                        {{ selectedOption?.label || placeholder }}
                    </span>
                </ComboboxTrigger>
                <div class="flex items-center gap-1">
                    <X
                        v-if="selectedOption && !disabled"
                        class="h-4 w-4 shrink-0 opacity-50 hover:opacity-100 cursor-pointer"
                        @click="clearSelection"
                    />
                    <ChevronsUpDown class="h-4 w-4 shrink-0 opacity-50" />
                </div>
            </Button>
        </ComboboxAnchor>

        <ComboboxList class="w-[--reka-combobox-trigger-width]">
            <ComboboxInput :placeholder="searchPlaceholder" />
            <ComboboxViewport class="max-h-[200px] p-1">
                <ComboboxEmpty>{{ emptyMessage }}</ComboboxEmpty>
                <ComboboxItem
                    v-for="option in filteredOptions"
                    :key="option.value"
                    :value="option.value"
                >
                    <div class="flex flex-col flex-1">
                        <span>{{ option.label }}</span>
                        <span v-if="option.description" class="text-xs text-muted-foreground">
                            {{ option.description }}
                        </span>
                    </div>
                    <ComboboxItemIndicator>
                        <Check class="h-4 w-4" />
                    </ComboboxItemIndicator>
                </ComboboxItem>
            </ComboboxViewport>
        </ComboboxList>
    </Combobox>
</template>
