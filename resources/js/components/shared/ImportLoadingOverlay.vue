<script setup lang="ts">
import { Loader2, FileSearch, Check } from 'lucide-vue-next';

interface Props {
    isLoading: boolean;
    title?: string;
    description?: string;
    steps?: { label: string; completed: boolean }[];
    fullPage?: boolean;
}

withDefaults(defineProps<Props>(), {
    title: 'Analyzing File',
    description: 'Please wait while we validate your data...',
    steps: () => [
        { label: 'Reading file contents', completed: false },
        { label: 'Validating data format', completed: false },
        { label: 'Checking for duplicates', completed: false },
        { label: 'Preparing preview', completed: false },
    ],
    fullPage: true,
});
</script>

<template>
    <Teleport to="body">
        <Transition
            enter-active-class="transition-opacity duration-200"
            leave-active-class="transition-opacity duration-150"
            enter-from-class="opacity-0"
            leave-to-class="opacity-0"
        >
            <div
                v-if="isLoading"
                class="fixed inset-0 z-100 flex items-center justify-center bg-background/95 backdrop-blur-sm"
            >
                <div class="flex flex-col items-center gap-6 p-8 rounded-xl bg-card border shadow-lg max-w-sm w-full mx-4">
                    <!-- Animated Spinner -->
                    <div class="relative flex items-center justify-center">
                        <div class="absolute h-16 w-16 rounded-full border-[3px] border-muted" />
                        <div class="absolute h-16 w-16 rounded-full border-[3px] border-transparent border-t-primary animate-spin" />
                        <FileSearch class="h-7 w-7 text-primary" />
                    </div>

                    <!-- Title & Description -->
                    <div class="text-center space-y-1.5">
                        <h3 class="text-lg font-semibold text-foreground">{{ title }}</h3>
                        <p class="text-sm text-muted-foreground">{{ description }}</p>
                    </div>

                    <!-- Progress Steps -->
                    <div v-if="steps && steps.length > 0" class="w-full space-y-3">
                        <div
                            v-for="(step, index) in steps"
                            :key="index"
                            class="flex items-center gap-3"
                        >
                            <!-- Step Indicator -->
                            <div
                                :class="[
                                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300',
                                    step.completed
                                        ? 'bg-green-500 text-white'
                                        : 'border-2 border-muted-foreground/30 bg-transparent',
                                ]"
                            >
                                <Check
                                    v-if="step.completed"
                                    class="h-3.5 w-3.5"
                                    :stroke-width="3"
                                />
                                <Loader2
                                    v-else
                                    class="h-3.5 w-3.5 text-muted-foreground/50 animate-spin"
                                />
                            </div>

                            <!-- Step Label -->
                            <span
                                :class="[
                                    'text-sm transition-all duration-300',
                                    step.completed
                                        ? 'text-muted-foreground'
                                        : 'text-foreground font-medium',
                                ]"
                            >
                                {{ step.label }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
