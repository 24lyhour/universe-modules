import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

interface Translations {
    [key: string]: string;
}

/**
 * Translation composable for Vue components
 * Uses Laravel's JSON translations shared via Inertia
 */
export function useTranslation() {
    const page = usePage();
    const translations = computed(() => (page.props.translations as Translations) || {});
    const locale = computed(() => (page.props.locale as string) || 'en');

    /**
     * Translate a key with optional replacements
     * @param key - The translation key
     * @param replacements - Optional object with replacement values
     */
    const t = (key: string, replacements?: Record<string, string | number>): string => {
        let translation = translations.value[key] || key;

        if (replacements) {
            Object.entries(replacements).forEach(([placeholder, value]) => {
                translation = translation.replace(`:${placeholder}`, String(value));
            });
        }

        return translation;
    };

    /**
     * Alias for t() - matches Laravel's __() helper
     */
    const __ = t;

    return {
        t,
        __,
        locale,
        translations,
    };
}

/**
 * Simple translation function for use outside of setup()
 * Note: This requires the page props to be available
 */
export function trans(key: string, replacements?: Record<string, string | number>): string {
    const page = usePage();
    const translations = (page.props.translations as Translations) || {};
    let translation = translations[key] || key;

    if (replacements) {
        Object.entries(replacements).forEach(([placeholder, value]) => {
            translation = translation.replace(`:${placeholder}`, String(value));
        });
    }

    return translation;
}
