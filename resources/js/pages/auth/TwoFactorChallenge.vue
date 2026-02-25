<script setup lang="ts">
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ui/theme';
import { Head, useForm } from '@inertiajs/vue3';
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { Mail, Smartphone, RefreshCw, ShieldCheck, KeyRound, ArrowLeft, ShieldAlert, Clock } from 'lucide-vue-next';
import axios from 'axios';

declare function route(name: string, params?: Record<string, unknown>): string;

interface LockoutInfo {
    locked: boolean;
    remaining_minutes: number;
    message: string;
}

interface Props {
    twoFactorMethod?: 'email' | 'totp';
    email?: string;
    lockout?: LockoutInfo | null;
}

const props = withDefaults(defineProps<Props>(), {
    twoFactorMethod: 'email',
    email: '',
    lockout: null,
});

interface AuthConfigContent {
    title: string;
    description: string;
    toggleText: string;
    icon: typeof Mail | typeof Smartphone | typeof KeyRound;
    iconBgClass: string;
    iconClass: string;
}

const showRecoveryInput = ref<boolean>(false);
const resendCooldown = ref<number>(0);
const resending = ref<boolean>(false);
const verifying = ref<boolean>(false);
const errorMessage = ref<string>('');

// IP Lockout state
const isLocked = ref<boolean>(false);
const lockoutMinutes = ref<number>(0);
const lockoutSeconds = ref<number>(0);
let lockoutInterval: ReturnType<typeof setInterval> | null = null;

const authConfigContent = computed<AuthConfigContent>(() => {
    if (showRecoveryInput.value) {
        return {
            title: 'Recovery Code',
            description: 'Enter one of your emergency recovery codes to regain access to your account.',
            toggleText: 'Use authentication code instead',
            icon: KeyRound,
            iconBgClass: 'bg-amber-500/10',
            iconClass: 'text-amber-500',
        };
    }

    if (props.twoFactorMethod === 'email') {
        return {
            title: 'Check Your Email',
            description: props.email
                ? `We sent a 6-digit verification code to ${props.email}`
                : 'We sent a 6-digit verification code to your email address.',
            toggleText: 'Use recovery code instead',
            icon: Mail,
            iconBgClass: 'bg-blue-500/10',
            iconClass: 'text-blue-500',
        };
    }

    return {
        title: 'Authenticator Code',
        description: 'Enter the 6-digit code from your authenticator app.',
        toggleText: 'Use recovery code instead',
        icon: Smartphone,
        iconBgClass: 'bg-green-500/10',
        iconClass: 'text-green-500',
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

// Start lockout countdown
const startLockoutCountdown = (minutes: number) => {
    isLocked.value = true;
    lockoutMinutes.value = minutes;
    lockoutSeconds.value = 0;

    // Clear existing interval
    if (lockoutInterval) {
        clearInterval(lockoutInterval);
    }

    // Convert to total seconds for countdown
    let totalSeconds = minutes * 60;

    lockoutInterval = setInterval(() => {
        totalSeconds--;

        if (totalSeconds <= 0) {
            isLocked.value = false;
            lockoutMinutes.value = 0;
            lockoutSeconds.value = 0;
            errorMessage.value = '';
            if (lockoutInterval) {
                clearInterval(lockoutInterval);
            }
        } else {
            lockoutMinutes.value = Math.floor(totalSeconds / 60);
            lockoutSeconds.value = totalSeconds % 60;
        }
    }, 1000);
};

// Formatted lockout time
const formattedLockoutTime = computed(() => {
    const mins = lockoutMinutes.value.toString().padStart(2, '0');
    const secs = lockoutSeconds.value.toString().padStart(2, '0');
    return `${mins}:${secs}`;
});

// Resend email OTP
const resendCode = async () => {
    if (resendCooldown.value > 0 || resending.value || isLocked.value) return;

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
        if (axios.isAxiosError(error) && error.response?.data) {
            errorMessage.value = error.response.data.message;

            // Handle lockout
            if (error.response.data.locked && error.response.data.remaining_minutes) {
                startLockoutCountdown(error.response.data.remaining_minutes);
            } else if (error.response.data.retry_after) {
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
    if (verifying.value || code.value.length !== 6 || isLocked.value) return;

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
        if (axios.isAxiosError(error) && error.response?.data) {
            errorMessage.value = error.response.data.message;

            // Handle lockout
            if (error.response.data.locked && error.response.data.remaining_minutes) {
                startLockoutCountdown(error.response.data.remaining_minutes);
            }
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
    if (isLocked.value) return;

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
    // Initialize lockout from props if present
    if (props.lockout?.locked && props.lockout.remaining_minutes > 0) {
        startLockoutCountdown(props.lockout.remaining_minutes);
    }

    if (props.twoFactorMethod === 'email') {
        startCooldown(60);
    }
});

// Cleanup on unmount
onUnmounted(() => {
    if (lockoutInterval) {
        clearInterval(lockoutInterval);
    }
});

// Masked email for display
const maskedEmail = computed(() => {
    if (!props.email) return '';
    const [localPart, domain] = props.email.split('@');
    if (!domain) return props.email;
    const maskedLocal = localPart.length > 3
        ? localPart.slice(0, 2) + '***' + localPart.slice(-1)
        : localPart.slice(0, 1) + '***';
    return `${maskedLocal}@${domain}`;
});
</script>

<template>
    <div class="relative flex min-h-svh flex-col items-center justify-center bg-background p-6 md:p-10">
        <Head title="Two-Factor Authentication" />

        <!-- Theme Toggle -->
        <div class="absolute right-4 top-4">
            <ThemeToggle />
        </div>

        <div class="w-full max-w-md mx-auto">
            <Card class="border-0 shadow-xl bg-card/95 backdrop-blur-sm">
                <!-- Lockout State -->
                <template v-if="isLocked">
                    <CardHeader class="text-center pb-2 pt-8">
                        <div class="flex justify-center mb-4">
                            <div class="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-red-500/20 to-rose-500/20 shadow-lg">
                                <div class="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
                                    <ShieldAlert class="h-7 w-7 text-red-500" />
                                </div>
                            </div>
                        </div>

                        <CardTitle class="text-2xl font-bold tracking-tight text-red-600 dark:text-red-400">
                            Account Locked
                        </CardTitle>
                        <CardDescription class="text-base mt-2 px-4">
                            Too many failed verification attempts. Please wait before trying again.
                        </CardDescription>
                    </CardHeader>

                    <CardContent class="pt-6 pb-8 px-8">
                        <div class="flex flex-col items-center space-y-6">
                            <!-- Countdown Timer -->
                            <div class="p-8 rounded-2xl bg-red-500/5 border border-red-500/20 w-full">
                                <div class="flex flex-col items-center gap-3">
                                    <Clock class="h-8 w-8 text-red-500" />
                                    <p class="text-sm text-muted-foreground">Time remaining</p>
                                    <p class="text-4xl font-mono font-bold text-red-600 dark:text-red-400">
                                        {{ formattedLockoutTime }}
                                    </p>
                                </div>
                            </div>

                            <!-- Info Box -->
                            <div class="p-4 rounded-xl bg-muted/50 border border-border/50 w-full">
                                <p class="text-sm text-muted-foreground text-center">
                                    Your IP address has been temporarily locked for security reasons.
                                    This helps protect your account from unauthorized access.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </template>

                <!-- Normal State -->
                <template v-else>
                    <!-- Header with gradient -->
                    <CardHeader class="text-center pb-2 pt-8">
                        <!-- Icon with gradient background -->
                        <div class="flex justify-center mb-4">
                            <div :class="[
                                'flex h-20 w-20 items-center justify-center rounded-full',
                                'bg-linear-to-br shadow-lg',
                                twoFactorMethod === 'email' && !showRecoveryInput
                                    ? 'from-blue-500/20 to-indigo-500/20'
                                    : showRecoveryInput
                                        ? 'from-amber-500/20 to-orange-500/20'
                                        : 'from-green-500/20 to-emerald-500/20'
                            ]">
                                <div :class="[
                                    'flex h-14 w-14 items-center justify-center rounded-full',
                                    authConfigContent.iconBgClass
                                ]">
                                    <component
                                        :is="authConfigContent.icon"
                                        :class="['h-7 w-7', authConfigContent.iconClass]"
                                    />
                                </div>
                            </div>
                        </div>

                        <CardTitle class="text-2xl font-bold tracking-tight">
                            {{ authConfigContent.title }}
                        </CardTitle>
                        <CardDescription class="text-base mt-2 px-4">
                            {{ authConfigContent.description }}
                        </CardDescription>
                    </CardHeader>

                    <CardContent class="pt-6 pb-8 px-8">
                        <!-- Code Input Form -->
                        <template v-if="!showRecoveryInput">
                            <form class="space-y-6" @submit.prevent="submitCode">
                                <!-- OTP Input -->
                                <div class="flex flex-col items-center space-y-4">
                                    <div class="p-6 rounded-2xl bg-muted/50 border border-border/50">
                                        <InputOTP
                                            id="otp"
                                            v-model="code"
                                            :maxlength="6"
                                            :disabled="codeForm.processing || verifying"
                                            autofocus
                                        >
                                            <InputOTPGroup class="gap-2">
                                                <InputOTPSlot
                                                    v-for="index in 6"
                                                    :key="index"
                                                    :index="index - 1"
                                                    class="h-14 w-12 text-xl font-semibold border-2 rounded-lg transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"
                                                />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </div>

                                    <!-- Error message with better styling -->
                                    <div v-if="codeForm.errors.code || errorMessage" class="w-full">
                                        <div class="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                                            <ShieldAlert class="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                                            <p class="text-sm text-destructive font-medium">
                                                {{ codeForm.errors.code || errorMessage }}
                                            </p>
                                        </div>
                                    </div>

                                    <!-- Resend section for email -->
                                    <div v-if="twoFactorMethod === 'email'" class="w-full">
                                        <div class="flex flex-col items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border/30">
                                            <span class="text-sm text-muted-foreground">
                                                Didn't receive the code?
                                            </span>
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                :disabled="resendCooldown > 0 || resending"
                                                class="gap-2"
                                                @click="resendCode"
                                            >
                                                <RefreshCw
                                                    :class="[
                                                        'h-4 w-4',
                                                        resending ? 'animate-spin' : ''
                                                    ]"
                                                />
                                                <span v-if="resending">Sending...</span>
                                                <span v-else-if="resendCooldown > 0">
                                                    Resend in {{ resendCooldown }}s
                                                </span>
                                                <span v-else>Resend Code</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <!-- Submit Button -->
                                <Button
                                    type="submit"
                                    class="w-full h-12 text-base font-semibold gap-2"
                                    :disabled="codeForm.processing || verifying || code.length !== 6"
                                >
                                    <ShieldCheck v-if="!verifying" class="h-5 w-5" />
                                    <RefreshCw v-else class="h-5 w-5 animate-spin" />
                                    {{ verifying ? 'Verifying...' : 'Verify & Continue' }}
                                </Button>

                                <!-- Recovery toggle -->
                                <div class="pt-2 text-center">
                                    <button
                                        type="button"
                                        class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        @click="toggleRecoveryMode"
                                    >
                                        <KeyRound class="h-4 w-4" />
                                        {{ authConfigContent.toggleText }}
                                    </button>
                                </div>
                            </form>
                        </template>

                        <!-- Recovery Code Form -->
                        <template v-else>
                            <form class="space-y-6" @submit.prevent="submitRecovery">
                                <div class="space-y-4">
                                    <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                                        <p class="text-sm text-amber-600 dark:text-amber-400">
                                            Recovery codes are single-use. After using one, it cannot be used again.
                                        </p>
                                    </div>

                                    <div class="space-y-2">
                                        <label class="text-sm font-medium text-foreground">
                                            Recovery Code
                                        </label>
                                        <Input
                                            v-model="recoveryForm.recovery_code"
                                            type="text"
                                            placeholder="xxxxx-xxxxx"
                                            class="h-14 text-center text-lg font-mono tracking-widest"
                                            :autofocus="showRecoveryInput"
                                            required
                                        />
                                    </div>

                                    <InputError :message="recoveryForm.errors.recovery_code" />
                                </div>

                                <!-- Submit Button -->
                                <Button
                                    type="submit"
                                    class="w-full h-12 text-base font-semibold gap-2"
                                    :disabled="recoveryForm.processing"
                                >
                                    <ShieldCheck v-if="!recoveryForm.processing" class="h-5 w-5" />
                                    <RefreshCw v-else class="h-5 w-5 animate-spin" />
                                    {{ recoveryForm.processing ? 'Verifying...' : 'Verify Recovery Code' }}
                                </Button>

                                <!-- Back to code toggle -->
                                <div class="pt-2 text-center">
                                    <button
                                        type="button"
                                        class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        @click="toggleRecoveryMode"
                                    >
                                        <ArrowLeft class="h-4 w-4" />
                                        {{ authConfigContent.toggleText }}
                                    </button>
                                </div>
                            </form>
                        </template>
                    </CardContent>
                </template>
            </Card>

            <!-- Security footer -->
            <p class="mt-6 text-center text-xs text-muted-foreground">
                Secured by two-factor authentication
            </p>
        </div>
    </div>
</template>
