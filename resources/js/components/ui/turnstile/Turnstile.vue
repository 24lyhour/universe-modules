<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

interface Props {
    siteKey: string;
    theme?: 'light' | 'dark' | 'auto';
    size?: 'normal' | 'compact';
    modelValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
    theme: 'auto',
    size: 'normal',
    modelValue: '',
});

const emit = defineEmits<{
    'update:modelValue': [value: string];
    'verify': [token: string];
    'error': [];
    'expire': [];
}>();

const turnstileContainer = ref<HTMLElement | null>(null);
const widgetId = ref<string | null>(null);

const loadTurnstileScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (window.turnstile) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Turnstile script'));
        document.head.appendChild(script);
    });
};

const renderWidget = () => {
    if (!turnstileContainer.value || !window.turnstile) return;

    // Remove existing widget if any
    if (widgetId.value) {
        window.turnstile.remove(widgetId.value);
    }

    try {
        widgetId.value = window.turnstile.render(turnstileContainer.value, {
            sitekey: props.siteKey,
            theme: props.theme,
            size: props.size,
            // Industry best practices
            retry: 'auto',                    // Auto-retry on failure
            'retry-interval': 3000,           // 3 second retry interval
            'refresh-expired': 'auto',        // Auto-refresh expired tokens
            'response-field': false,          // Don't create hidden input (we use v-model)
            'response-field-name': 'cf_turnstile_response',
            callback: (token: string) => {
                emit('update:modelValue', token);
                emit('verify', token);
            },
            'error-callback': () => {
                emit('update:modelValue', '');
                emit('error');
            },
            'expired-callback': () => {
                emit('update:modelValue', '');
                emit('expire');
            },
            'timeout-callback': () => {
                emit('update:modelValue', '');
            },
        });
    } catch (error) {
        // Widget render failed silently
    }
};

const reset = () => {
    if (widgetId.value && window.turnstile) {
        window.turnstile.reset(widgetId.value);
        emit('update:modelValue', '');
    }
};

// Expose reset method
defineExpose({ reset });

onMounted(async () => {
    try {
        await loadTurnstileScript();
        renderWidget();
    } catch (error) {
        // Script load failed silently
    }
});

onUnmounted(() => {
    if (widgetId.value && window.turnstile) {
        window.turnstile.remove(widgetId.value);
    }
});

// Re-render if siteKey changes
watch(() => props.siteKey, () => {
    if (props.siteKey) {
        renderWidget();
    }
});
</script>

<template>
    <div ref="turnstileContainer" class="cf-turnstile"></div>
</template>
