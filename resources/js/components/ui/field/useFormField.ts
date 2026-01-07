import {
    inject,
    unref,
} from "vue"
import { FORM_ITEM_INJECTION_KEY } from "./Field.vue"
import { useFieldError } from "vee-validate"
import type { ValidationResult } from "vee-validate"

export function useFormField() {
    const formItemId = inject(FORM_ITEM_INJECTION_KEY)
    const fieldError = useFieldError(formItemId)
    const initialValue = inject("initialValue", unref(fieldError))
    const error = unref(fieldError) || unref(initialValue) ? true : false

    return {
        formItemId,
        formDescriptionId: `${formItemId}-description`,
        formMessageId: `${formItemId}-message`,
        error: error,
    }
}
