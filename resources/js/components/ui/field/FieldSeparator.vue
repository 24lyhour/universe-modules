<script setup lang="ts">
import { cn } from "@/lib/utils"
</script>

<template>
    <div :class="cn('relative', $attrs.class ?? '')">
        <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t" />
        </div>
        <div class="relative flex justify-center text-xs uppercase">
            <span :class="cn('bg-background text-muted-foreground px-2', $attrs.class ?? '')">
                <slot />
            </span>
        </div>
    </div>
</template>