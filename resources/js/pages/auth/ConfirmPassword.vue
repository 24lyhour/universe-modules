<script setup lang="ts">
import InputError from '@/components/InputError.vue';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { store } from '@/routes/password/confirm';
import { Form, Head, Link } from '@inertiajs/vue3';
import { Lock, Loader2, ShieldCheck, ArrowLeft } from 'lucide-vue-next';
</script>

<template>
    <Head title="Confirm Password" />

    <div class="flex min-h-screen items-center justify-center bg-linear-to-br from-background via-background to-muted/20 p-4">
        <div class="w-full max-w-md">
            <Card class="border-border/50 shadow-lg">
                <CardHeader class="space-y-4 text-center">
                    <!-- Security Icon -->
                    <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ring-8 ring-primary/5">
                        <ShieldCheck class="h-8 w-8 text-primary" />
                    </div>

                    <div class="space-y-2">
                        <CardTitle class="text-2xl font-semibold tracking-tight">
                            Confirm Password
                        </CardTitle>
                        <CardDescription class="text-muted-foreground">
                            This is a secure area. Please confirm your password before continuing.
                        </CardDescription>
                    </div>
                </CardHeader>

                <Form
                    v-bind="store.form()"
                    reset-on-success
                    v-slot="{ errors, processing }"
                >
                    <CardContent class="space-y-4">
                        <!-- Security Notice -->
                        <Alert variant="default" class="border-amber-200 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-950/20">
                            <Lock class="h-4 w-4 text-amber-600 dark:text-amber-500" />
                            <AlertDescription class="text-amber-700 dark:text-amber-400">
                                For your security, please enter your password to verify your identity.
                            </AlertDescription>
                        </Alert>

                        <!-- Password Field -->
                        <div class="space-y-2">
                            <Label for="password" class="text-sm font-medium">
                                Password
                            </Label>
                            <div class="relative">
                                <Lock class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    class="pl-10"
                                    required
                                    autocomplete="current-password"
                                    autofocus
                                />
                            </div>
                            <InputError :message="errors.password" />
                        </div>
                    </CardContent>

                    <CardFooter class="flex flex-col gap-4">
                        <Button
                            type="submit"
                            class="w-full"
                            size="lg"
                            :disabled="processing"
                        >
                            <Loader2 v-if="processing" class="mr-2 h-4 w-4 animate-spin" />
                            <Lock v-else class="mr-2 h-4 w-4" />
                            {{ processing ? 'Verifying...' : 'Confirm & Continue' }}
                        </Button>

                        <Link
                            href="/dashboard"
                            class="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <ArrowLeft class="h-4 w-4" />
                            Back to Dashboard
                        </Link>
                    </CardFooter>
                </Form>
            </Card>

            <!-- Footer Text -->
            <p class="mt-6 text-center text-xs text-muted-foreground">
                Your session is protected with end-to-end encryption
            </p>
        </div>
    </div>
</template>
