import { ref, computed, type Ref } from 'vue';
import type { z } from 'zod';
import type { InertiaForm } from '@inertiajs/vue3';

/**
 * Composable for Zod-based form validation
 * DRY approach - reusable across all modules
 */
export function useFormValidation<T extends z.ZodObject<z.ZodRawShape>>(
    schema: T,
    requiredFields: (keyof z.infer<T>)[] = []
) {
    const validationErrors = ref<Record<string, string>>({}) as Ref<Record<string, string>>;

    /**
     * Validate form data against the Zod schema
     * @param formData - The form data to validate
     * @returns boolean indicating if validation passed
     */
    const validateForm = (formData: Record<string, unknown>): boolean => {
        const result = schema.safeParse(formData);

        if (!result.success) {
            const errors: Record<string, string> = {};
            result.error.errors.forEach((err) => {
                const field = err.path[0] as string;
                if (!errors[field]) {
                    errors[field] = err.message;
                }
            });
            validationErrors.value = errors;
            return false;
        }

        validationErrors.value = {};
        return true;
    };

    /**
     * Copy validation errors to Inertia form errors
     * @param form - The Inertia form instance
     */
    const copyErrorsToForm = <F>(form: InertiaForm<F>): void => {
        Object.keys(validationErrors.value).forEach((key) => {
            form.setError(key as keyof F, validationErrors.value[key]);
        });
    };

    /**
     * Check if required fields are filled
     * @param formData - The form data to check
     * @returns boolean indicating if required fields are empty
     */
    const isFormInvalid = (formData: Record<string, unknown>): boolean => {
        return requiredFields.some((field) => {
            const value = formData[field as string];
            if (value === null || value === undefined) return true;
            if (typeof value === 'string') return value.trim() === '';
            return false;
        });
    };

    /**
     * Create a computed property for form invalid state
     * @param getFormData - Function that returns current form data
     * @returns Computed ref
     */
    const createIsFormInvalid = (getFormData: () => Record<string, unknown>) => {
        return computed(() => isFormInvalid(getFormData()));
    };

    /**
     * Validate and submit form
     * @param formData - The form data to validate
     * @param form - The Inertia form instance
     * @param submitFn - Function to call if validation passes
     */
    const validateAndSubmit = <F>(
        formData: Record<string, unknown>,
        form: InertiaForm<F>,
        submitFn: () => void
    ): void => {
        if (!validateForm(formData)) {
            copyErrorsToForm(form);
            return;
        }
        submitFn();
    };

    return {
        validationErrors,
        validateForm,
        copyErrorsToForm,
        isFormInvalid,
        createIsFormInvalid,
        validateAndSubmit,
    };
}
