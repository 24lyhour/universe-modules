<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm, Head, Link } from '@inertiajs/vue3';
import { Loader2 } from 'lucide-vue-next';

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

const props = defineProps<{
    class?: HTMLAttributes["class"]
    canResetPassword?: boolean
    canRegister?: boolean
    status?: string
    loginSettings: LoginSettings
}>()

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post('/login', {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Login" />

    <div :class="cn('flex min-h-screen items-center justify-center p-4 md:p-8', props.class)">
        <Card class="w-full max-w-5xl overflow-hidden shadow-xl">
            <CardContent class="grid p-0 md:grid-cols-2">
                <!-- Form Section -->
                <div class="p-8 md:p-12">
                    <form @submit.prevent="submit" class="space-y-6">
                        <!-- Logo & App Name -->
                        <div class="flex flex-col items-center gap-2">
                            <img
                                v-if="loginSettings.logo"
                                :src="loginSettings.logo"
                                :alt="loginSettings.app_name"
                                class="h-12 w-auto object-contain"
                            />
                            <span v-if="loginSettings.app_name && !loginSettings.logo" class="text-xl font-bold">
                                {{ loginSettings.app_name }}
                            </span>
                        </div>

                        <!-- Header -->
                        <div class="space-y-2 text-center">
                            <h1 class="text-3xl font-bold tracking-tight">
                                {{ loginSettings.title }}
                            </h1>
                            <p class="text-muted-foreground">
                                {{ loginSettings.subtitle }}
                            </p>
                        </div>

                        <!-- Status Message -->
                        <div v-if="status" class="rounded-lg bg-green-50 p-4 text-sm text-green-600 dark:bg-green-900/20 dark:text-green-400">
                            {{ status }}
                        </div>

                        <!-- Email Field -->
                        <div class="space-y-2">
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                required
                                autofocus
                                autocomplete="username"
                                v-model="form.email"
                                :class="{ 'border-red-500 focus-visible:ring-red-500': form.errors.email }"
                            />
                            <p v-if="form.errors.email" class="text-sm text-red-500">
                                {{ form.errors.email }}
                            </p>
                        </div>

                        <!-- Password Field -->
                        <div class="space-y-2">
                            <div class="flex items-center justify-between">
                                <Label for="password">Password</Label>
                                <Link
                                    v-if="canResetPassword"
                                    href="/forgot-password"
                                    class="text-sm font-medium text-primary hover:underline"
                                >
                                    Forgot password?
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
                            <p v-if="form.errors.password" class="text-sm text-red-500">
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

                        <!-- Submit Button -->
                        <Button
                            type="submit"
                            class="w-full h-11 text-base font-medium"
                            :disabled="form.processing"
                        >
                            <Loader2 v-if="form.processing" class="mr-2 h-4 w-4 animate-spin" />
                            {{ form.processing ? 'Signing in...' : 'Sign in' }}
                        </Button>

                        <!-- Social Login -->
                        <template v-if="loginSettings.show_social_login">
                            <!-- Divider -->
                            <div class="relative">
                                <div class="absolute inset-0 flex items-center">
                                    <span class="w-full border-t" />
                                </div>
                                <div class="relative flex justify-center text-xs uppercase">
                                    <span class="bg-background px-2 text-muted-foreground">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            <!-- Social Login Buttons -->
                            <div class="grid grid-cols-3 gap-3">
                                <Button variant="outline" type="button" class="h-11">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5">
                                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="currentColor" />
                                    </svg>
                                    <span class="sr-only">Apple</span>
                                </Button>
                                <Button variant="outline" type="button" class="h-11">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5">
                                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" />
                                    </svg>
                                    <span class="sr-only">Google</span>
                                </Button>
                                <Button variant="outline" type="button" class="h-11">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/>
                                    </svg>
                                    <span class="sr-only">GitHub</span>
                                </Button>
                            </div>
                        </template>

                        <!-- Sign Up Link -->
                        <p v-if="canRegister" class="text-center text-sm text-muted-foreground">
                            Don't have an account?
                            <Link href="/register" class="font-medium text-primary hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>

                <!-- Image Section -->
                <div class="relative hidden bg-muted md:block">
                    <img
                        :src="loginSettings.image"
                        alt="Login illustration"
                        class="absolute inset-0 h-full w-full object-cover"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div v-if="loginSettings.quote_text" class="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <blockquote class="space-y-2">
                            <p class="text-lg font-medium leading-relaxed">
                                "{{ loginSettings.quote_text }}"
                            </p>
                            <footer v-if="loginSettings.quote_author" class="text-sm text-white/80">
                                - {{ loginSettings.quote_author }}<span v-if="loginSettings.quote_company">, {{ loginSettings.quote_company }}</span>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </CardContent>
        </Card>

        <!-- Terms -->
        <p class="absolute bottom-4 text-center text-xs text-muted-foreground">
            By signing in, you agree to our
            <a href="#" class="underline underline-offset-4 hover:text-primary">Terms of Service</a>
            and
            <a href="#" class="underline underline-offset-4 hover:text-primary">Privacy Policy</a>
        </p>
    </div>
</template>
