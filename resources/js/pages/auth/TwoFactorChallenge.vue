<script setup lang="ts">
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';
import { computed, ref } from 'vue';

declare function route(name: string, params?: Record<string, unknown>): string;

interface AuthConfigContent {
    title: string;
    description: string;
    toggleText: string;
}

const authConfigContent = computed<AuthConfigContent>(() => {
    if (showRecoveryInput.value) {
        return {
            title: 'Recovery Code',
            description:
                'Please confirm access to your account by entering one of your emergency recovery codes.',
            toggleText: 'login using an authentication code',
        };
    }

    return {
        title: 'Authentication Code',
        description:
            'Enter the authentication code provided by your authenticator application.',
        toggleText: 'login using a recovery code',
    };
});

const showRecoveryInput = ref<boolean>(false);

const toggleRecoveryMode = (): void => {
    showRecoveryInput.value = !showRecoveryInput.value;
    codeForm.clearErrors();
    recoveryForm.clearErrors();
    code.value = '';
    recoveryForm.recovery_code = '';
};

const code = ref<string>('');

const codeForm = useForm({
    code: '',
});

const recoveryForm = useForm({
    recovery_code: '',
});

const submitCode = () => {
    codeForm.code = code.value;
    codeForm.post(route('two-factor.login'), {
        onError: () => {
            code.value = '';
        },
    });
};

const submitRecovery = () => {
    recoveryForm.post(route('two-factor.login'));
};
</script>

<template>
    <AuthLayout :title="authConfigContent.title" :description="authConfigContent.description">

        <Head title="Two-Factor Authentication" />

        <div class="space-y-6">
            <template v-if="!showRecoveryInput">
                <form class="space-y-4" @submit.prevent="submitCode">
                    <div class="flex flex-col items-center justify-center space-y-3 text-center">
                        <div class="flex w-full items-center justify-center">
                            <InputOTP id="otp" v-model="code" :maxlength="6" :disabled="codeForm.processing" autofocus>
                                <InputOTPGroup>
                                    <InputOTPSlot v-for="index in 6" :key="index" :index="index - 1" />
                                </InputOTPGroup>
                            </InputOTP>
                        </div>
                        <InputError :message="codeForm.errors.code" />
                    </div>
                    <Button type="submit" class="w-full" :disabled="codeForm.processing">Continue</Button>
                    <div class="text-center text-sm text-muted-foreground">
                        <span>or you can </span>
                        <button type="button"
                            class="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                            @click="toggleRecoveryMode">
                            {{ authConfigContent.toggleText }}
                        </button>
                    </div>
                </form>
            </template>

            <template v-else>
                <form class="space-y-4" @submit.prevent="submitRecovery">
                    <Input v-model="recoveryForm.recovery_code" type="text" placeholder="Enter recovery code"
                        :autofocus="showRecoveryInput" required />
                    <InputError :message="recoveryForm.errors.recovery_code" />
                    <Button type="submit" class="w-full" :disabled="recoveryForm.processing">Continue</Button>

                    <div class="text-center text-sm text-muted-foreground">
                        <span>or you can </span>
                        <button type="button"
                            class="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                            @click="toggleRecoveryMode">
                            {{ authConfigContent.toggleText }}
                        </button>
                    </div>
                </form>
            </template>
        </div>
    </AuthLayout>
</template>
