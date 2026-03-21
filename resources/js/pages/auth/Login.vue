<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Turnstile } from "@/components/ui/turnstile"
import { useForm, Head, Link } from '@inertiajs/vue3';
import { Loader2, ShieldAlert, Clock, GalleryVerticalEnd } from 'lucide-vue-next';
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { toast } from '@/composables/useToast';

interface LoginSettings {
    app_name: string;
    title: string;
    subtitle: string;
    image: string;
    logo: string;
    quote_text: string;
    quote_author: string;
    quote_company: string;
    show_social_login: boolean;
    show_remember_me: boolean;
}

interface LockoutInfo {
    locked: boolean;
    remaining_minutes: number;
    message: string;
}

const props = defineProps<{
    class?: HTMLAttributes["class"]
    canResetPassword?: boolean
    canRegister?: boolean
    status?: string
    loginSettings: LoginSettings
    lockout?: LockoutInfo | null
    debugIp?: string
    turnstileSiteKey?: string | null
}>()

const form = useForm({
    email: '',
    password: '',
    remember: false,
    cf_turnstile_response: '',
});

// Turnstile ref for reset
const turnstileRef = ref<InstanceType<typeof Turnstile> | null>(null);

// Clear turnstile error when new token is received
watch(() => form.cf_turnstile_response, (newToken) => {
    if (newToken && form.errors.cf_turnstile_response) {
        form.clearErrors('cf_turnstile_response');
    }
});

// Lockout state
const isLocked = ref<boolean>(false);
const lockoutMinutes = ref<number>(0);
const lockoutSeconds = ref<number>(0);
let lockoutInterval: ReturnType<typeof setInterval> | null = null;

// Initialize from props immediately if locked
if (props.lockout?.locked && props.lockout.remaining_minutes > 0) {
    isLocked.value = true;
    lockoutMinutes.value = props.lockout.remaining_minutes;
}

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

const submit = () => {
    if (isLocked.value) return;

    form.post('/login', {
        preserveState: false,
        preserveScroll: false,
        onSuccess: () => {
            toast.success({
                title: 'Welcome back!',
                description: 'You have successfully logged in.',
            });
            form.reset('password');
        },
        onError: (errors) => {
            form.reset('password');

            if (turnstileRef.value) {
                turnstileRef.value.reset();
            }

            const emailError = form.errors.email;
            if (emailError && emailError.toLowerCase().includes('locked')) {
                const match = emailError.match(/(\d+)\s*minutes?/i);
                if (match) {
                    startLockoutCountdown(parseInt(match[1]));
                }
            }
        },
    });
};

// Handle Turnstile token expiry
const handleTurnstileExpire = () => {
    if (turnstileRef.value) {
        turnstileRef.value.reset();
    }
};

// Initialize lockout countdown if already locked
onMounted(() => {
    if (props.lockout?.locked && props.lockout.remaining_minutes > 0) {
        startLockoutCountdown(props.lockout.remaining_minutes);
    }
    form.clearErrors();
});

// Cleanup on unmount
onUnmounted(() => {
    if (lockoutInterval) {
        clearInterval(lockoutInterval);
    }
});
</script>

<template>
    <Head title="Login" />

    <div class="grid min-h-svh lg:grid-cols-2">
        <!-- Left Side - Form -->
        <div class="flex flex-col gap-4 p-6 md:p-10">
            <!-- Logo -->
            <div class="flex justify-center gap-2 md:justify-start">
                <a href="/" class="flex items-center gap-2 font-medium">
                    <template v-if="loginSettings.logo">
                        <img
                            :src="loginSettings.logo"
                            :alt="loginSettings.app_name"
                            class="h-6 w-auto object-contain"
                        />
                    </template>
                    <template v-else>
                        <div class="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                            <GalleryVerticalEnd class="size-4" />
                        </div>
                    </template>
                    <span>{{ loginSettings.app_name }}</span>
                </a>
            </div>

            <!-- Centered Form Container -->
            <div class="flex flex-1 items-center justify-center">
                <div class="w-full max-w-xs">
                    <!-- Lockout State -->
                    <div v-if="isLocked" class="flex flex-col gap-6">
                        <!-- Lockout Icon -->
                        <div class="flex justify-center">
                            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
                                <ShieldAlert class="h-8 w-8 text-red-500" />
                            </div>
                        </div>

                        <!-- Lockout Header -->
                        <div class="flex flex-col items-center gap-1 text-center">
                            <h1 class="text-2xl font-bold text-red-600 dark:text-red-400">
                                Account Locked
                            </h1>
                            <p class="text-muted-foreground text-sm text-balance">
                                Too many failed login attempts. Please wait before trying again.
                            </p>
                        </div>

                        <!-- Countdown Timer -->
                        <div class="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                            <div class="flex flex-col items-center gap-2">
                                <Clock class="h-6 w-6 text-red-500" />
                                <p class="text-xs text-muted-foreground">Time remaining</p>
                                <p class="text-3xl font-mono font-bold text-red-600 dark:text-red-400">
                                    {{ formattedLockoutTime }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Normal Login Form -->
                    <form v-else @submit.prevent="submit" class="flex flex-col gap-6">
                        <!-- Header -->
                        <div class="flex flex-col items-center gap-1 text-center">
                            <h1 class="text-2xl font-bold">
                                {{ loginSettings.title || 'Login to your account' }}
                            </h1>
                            <p class="text-muted-foreground text-sm text-balance">
                                {{ loginSettings.subtitle || 'Enter your email below to login to your account' }}
                            </p>
                        </div>

                        <!-- Status Message -->
                        <div v-if="status" class="rounded-lg bg-green-50 p-3 text-sm text-green-600 dark:bg-green-900/20 dark:text-green-400">
                            {{ status }}
                        </div>

                        <!-- Email Field -->
                        <div class="grid gap-2">
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                autofocus
                                autocomplete="username"
                                v-model="form.email"
                                :class="{ 'border-red-500 focus-visible:ring-red-500': form.errors.email }"
                            />
                            <p v-if="form.errors.email" class="text-xs text-red-500">
                                {{ form.errors.email }}
                            </p>
                        </div>

                        <!-- Password Field -->
                        <div class="grid gap-2">
                            <div class="flex items-center">
                                <Label for="password">Password</Label>
                                <Link
                                    v-if="canResetPassword"
                                    href="/forgot-password"
                                    class="ml-auto text-sm underline-offset-4 hover:underline"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                required
                                autocomplete="current-password"
                                v-model="form.password"
                                :class="{ 'border-red-500 focus-visible:ring-red-500': form.errors.password }"
                            />
                            <p v-if="form.errors.password" class="text-xs text-red-500">
                                {{ form.errors.password }}
                            </p>
                        </div>

                        <!-- Remember Me -->
                        <div v-if="loginSettings.show_remember_me" class="flex items-center space-x-2">
                            <Checkbox id="remember" v-model:checked="form.remember" />
                            <Label for="remember" class="text-sm font-normal cursor-pointer">
                                Remember me
                            </Label>
                        </div>

                        <!-- Turnstile CAPTCHA -->
                        <div v-if="turnstileSiteKey" class="flex flex-col items-center gap-2">
                            <Turnstile
                                ref="turnstileRef"
                                :site-key="turnstileSiteKey"
                                theme="auto"
                                v-model="form.cf_turnstile_response"
                                @expire="handleTurnstileExpire"
                            />
                            <p v-if="form.errors.cf_turnstile_response" class="text-xs text-red-500">
                                {{ form.errors.cf_turnstile_response }}
                            </p>
                        </div>

                        <!-- Submit Button -->
                        <Button
                            type="submit"
                            :disabled="form.processing || (turnstileSiteKey && !form.cf_turnstile_response)"
                        >
                            <Loader2 v-if="form.processing" class="mr-2 h-4 w-4 animate-spin" />
                            {{ form.processing ? 'Logging in...' : 'Login' }}
                        </Button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Right Side - Image -->
        <div class="bg-muted relative hidden lg:block">
            <img
                v-if="loginSettings.image"
                :src="loginSettings.image"
                alt="Login illustration"
                class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
            <div v-else class="absolute inset-0 flex items-center justify-center">
                <svg class="h-32 w-32 text-muted-foreground/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                </svg>
            </div>
        </div>
    </div>
</template>
