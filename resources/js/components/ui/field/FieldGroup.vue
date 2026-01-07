<script setup lang="ts">
import { cn } from "@/lib/utils"
</script>

<template>
    <div :class="cn('flex flex-col gap-6', $attrs.class ?? '')">
        <slot />
    </div>
</template>