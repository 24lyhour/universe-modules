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
import { Head, useForm, router } from '@inertiajs/vue3';
import { computed, ref, onMounted } from 'vue';
import { Mail, Smartphone, RefreshCw } from 'lucide-vue-next';
import axios from 'axios';

declare function route(name: string, params?: Record<string, unknown>): string;

interface Props {
    twoFactorMethod?: 'email' | 'totp';
    email?: string;
}

const props = withDefaults(defineProps<Props>(), {
    twoFactorMethod: 'email',
    email: '',
});

interface AuthConfigContent {
    title: string;
    description: string;
    toggleText: string;
    icon: typeof Mail | typeof Smartphone;
}

const showRecoveryInput = ref<boolean>(false);
const resendCooldown = ref<number>(0);
const resending = ref<boolean>(false);
const verifying = ref<boolean>(false);
const errorMessage = ref<string>('');

const authConfigContent = computed<AuthConfigContent>(() => {
    if (showRecoveryInput.value) {
        return {
            title: 'Recovery Code',
            description:
                'Please confirm access to your account by entering one of your emergency recovery codes.',
            toggleText: 'login using an authentication code',
            icon: Smartphone,
        };
    }

    if (props.twoFactorMethod === 'email') {
        return {
            title: 'Check Your Email',
            description: props.email
                ? `We sent a verification code to ${props.email}`
                : 'We sent a verification code to your email address.',
            toggleText: 'login using a recovery code',
            icon: Mail,
        };
    }

    return {
        title: 'Authentication Code',
        description:
            'Enter the authentication code provided by your authenticator application.',
        toggleText: 'login using a recovery code',
        icon: Smartphone,
    };
});

const toggleRecoveryMode = (): void => {
    showRecoveryInput.value = !showRecoveryInput.value;
    codeForm.clearErrors();
    recoveryForm.clearErrors();
    errorMessage.value = '';
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

// Start cooldown timer
const startCooldown = (seconds: number) => {
    resendCooldown.value = seconds;
    const interval = setInterval(() => {
        resendCooldown.value--;
        if (resendCooldown.value <= 0) {
            clearInterval(interval);
        }
    }, 1000);
};

// Resend email OTP
const resendCode = async () => {
    if (resendCooldown.value > 0 || resending.value) return;

    resending.value = true;
    errorMessage.value = '';

    try {
        const response = await axios.post('/two-factor/email/send');
        if (response.data.success) {
            startCooldown(60);
        } else {
            errorMessage.value = response.data.message;
            if (response.data.retry_after) {
                startCooldown(response.data.retry_after);
            }
        }
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response?.data?.message) {
            errorMessage.value = error.response.data.message;
            if (error.response.data.retry_after) {
                startCooldown(error.response.data.retry_after);
            }
        } else {
            errorMessage.value = 'Failed to resend code. Please try again.';
        }
    } finally {
        resending.value = false;
    }
};

// Submit code for email OTP
const submitEmailCode = async () => {
    if (verifying.value || code.value.length !== 6) return;

    verifying.value = true;
    errorMessage.value = '';

    try {
        const response = await axios.post('/two-factor/email/verify', {
            code: code.value,
        });

        if (response.data.success) {
            window.location.href = response.data.redirect || '/dashboard';
        } else {
            errorMessage.value = response.data.message;
            code.value = '';
        }
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response?.data?.message) {
            errorMessage.value = error.response.data.message;
        } else {
            errorMessage.value = 'Verification failed. Please try again.';
        }
        code.value = '';
    } finally {
        verifying.value = false;
    }
};

// Submit code for TOTP
const submitTotpCode = () => {
    codeForm.code = code.value;
    codeForm.post(route('two-factor.login'), {
        onError: () => {
            code.value = '';
        },
    });
};

const submitCode = () => {
    if (props.twoFactorMethod === 'email') {
        submitEmailCode();
    } else {
        submitTotpCode();
    }
};

const submitRecovery = () => {
    recoveryForm.post(route('two-factor.login'));
};

// Start with cooldown for email (code was already sent)
onMounted(() => {
    if (props.twoFactorMethod === 'email') {
        startCooldown(60);
    }
});
</script>

<template>
    <AuthLayout :title="authConfigContent.title" :description="authConfigContent.description">

        <Head title="Two-Factor Authentication" />

        <div class="space-y-6">
            <template v-if="!showRecoveryInput">
                <form class="space-y-4" @submit.prevent="submitCode">
                    <div class="flex flex-col items-center justify-center space-y-3 text-center">
                        <!-- Icon -->
                        <div class="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <component :is="authConfigContent.icon" class="h-6 w-6 text-primary" />
                        </div>

                        <!-- OTP Input -->
                        <div class="flex w-full items-center justify-center">
                            <InputOTP id="otp" v-model="code" :maxlength="6" :disabled="codeForm.processing || verifying" autofocus>
                                <InputOTPGroup>
                                    <InputOTPSlot v-for="index in 6" :key="index" :index="index - 1" />
                                </InputOTPGroup>
                            </InputOTP>
                        </div>

                        <!-- Error messages -->
                        <InputError :message="codeForm.errors.code || errorMessage" />

                        <!-- Resend button for email OTP -->
                        <div v-if="twoFactorMethod === 'email'" class="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Didn't receive the code?</span>
                            <button
                                type="button"
                                :disabled="resendCooldown > 0 || resending"
                                class="inline-flex items-center gap-1 text-primary hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                                @click="resendCode"
                            >
                                <RefreshCw v-if="resending" class="h-3 w-3 animate-spin" />
                                <span v-if="resendCooldown > 0">Resend in {{ resendCooldown }}s</span>
                                <span v-else>Resend code</span>
                            </button>
                        </div>
                    </div>

                    <Button type="submit" class="w-full" :disabled="codeForm.processing || verifying || code.length !== 6">
                        {{ verifying ? 'Verifying...' : 'Continue' }}
                    </Button>

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
