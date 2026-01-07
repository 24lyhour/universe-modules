<script lang="ts">
import {
    FieldContext,
    useField,
} from "vee-validate"

import {
    InjectionKey,
    provide,
} from "vue"

export const FORM_ITEM_INJECTION_KEY = Symbol() as InjectionKey<string>
</script>

<script setup lang="ts">
import { toValue } from "vue"
import { useId } from "radix-vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
    name: string
}>()

const id = useId()
const {
    value,
    errorMessage,
    handleBlur,
    handleChange,
    meta,
} = useField(props.name, undefined, {
    validateOnMount: false,
})

provide(FORM_ITEM_INJECTION_KEY, id)
</script>

<template>
    <div :class="cn('space-y-2', $attrs.class ?? '')">
        <slot :id="id" :value="value" :error-message="errorMessage" :handle-change="handleChange"
            :handle-blur="handleBlur" :meta="meta" />
    </div>
</template>