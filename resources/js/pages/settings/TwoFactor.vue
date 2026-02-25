<script setup lang="ts">
import HeadingSmall from '@/components/HeadingSmall.vue';
import TwoFactorRecoveryCodes from '@/components/TwoFactorRecoveryCodes.vue';
import TwoFactorSetupModal from '@/components/TwoFactorSetupModal.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTwoFactorAuth } from '@/composables/useTwoFactorAuth';
import AppLayout from '@/layouts/AppLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { disable, enable, show } from '@/routes/two-factor';
import { update as methodUpdate } from '@/routes/two-factor/method';
import { BreadcrumbItem } from '@/types';
import { Form, Head, router, useForm } from '@inertiajs/vue3';
import { Mail, ShieldBan, ShieldCheck, Smartphone } from 'lucide-vue-next';
import { onUnmounted, ref, computed } from 'vue';

interface Props {
    requiresConfirmation?: boolean;
    twoFactorEnabled?: boolean;
    twoFactorMethod?: 'email' | 'totp';
}

const props = withDefaults(defineProps<Props>(), {
    requiresConfirmation: false,
    twoFactorEnabled: false,
    twoFactorMethod: 'email',
});

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Two-Factor Authentication',
        href: show.url(),
    },
];

const { hasSetupData, clearTwoFactorAuthData } = useTwoFactorAuth();
const showSetupModal = ref<boolean>(false);
const selectedMethod = ref<'email' | 'totp'>(props.twoFactorMethod);

const methodForm = useForm({
    method: props.twoFactorMethod,
});

const isEmailMethod = computed(() => selectedMethod.value === 'email');
const isTotpMethod = computed(() => selectedMethod.value === 'totp');

const selectMethod = (method: 'email' | 'totp') => {
    selectedMethod.value = method;
};

const enableEmailTwoFactor = () => {
    methodForm.method = 'email';
    methodForm.put(methodUpdate.url(), {
        preserveScroll: true,
        onSuccess: () => {
            router.reload();
        },
    });
};

onUnmounted(() => {
    clearTwoFactorAuthData();
});
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <Head title="Two-Factor Authentication" />
        <SettingsLayout>
            <div class="space-y-6">
                <HeadingSmall
                    title="Two-Factor Authentication"
                    description="Add an extra layer of security to your account"
                />

                <!-- Status Badge -->
                <div class="flex items-center gap-3">
                    <Badge :variant="twoFactorEnabled ? 'default' : 'destructive'">
                        {{ twoFactorEnabled ? 'Enabled' : 'Disabled' }}
                    </Badge>
                    <span v-if="twoFactorEnabled" class="text-sm text-muted-foreground">
                        Using {{ twoFactorMethod === 'email' ? 'Email' : 'Authenticator App' }}
                    </span>
                </div>

                <!-- Method Selection Cards -->
                <div v-if="!twoFactorEnabled" class="grid gap-4 md:grid-cols-2">
                    <!-- Email OTP Card -->
                    <Card
                        :class="[
                            'cursor-pointer transition-all hover:border-primary/50',
                            isEmailMethod ? 'border-primary ring-2 ring-primary/20' : ''
                        ]"
                        @click="selectMethod('email')"
                    >
                        <CardHeader class="pb-3">
                            <div class="flex items-center gap-3">
                                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
                                    <Mail class="h-5 w-5 text-blue-500" />
                                </div>
                                <div>
                                    <CardTitle class="text-base">Email Code</CardTitle>
                                    <CardDescription class="text-xs">Recommended</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p class="text-sm text-muted-foreground">
                                Receive a 6-digit verification code via email each time you log in.
                                Simple and secure.
                            </p>
                        </CardContent>
                    </Card>

                    <!-- TOTP Card -->
                    <Card
                        :class="[
                            'cursor-pointer transition-all hover:border-primary/50',
                            isTotpMethod ? 'border-primary ring-2 ring-primary/20' : ''
                        ]"
                        @click="selectMethod('totp')"
                    >
                        <CardHeader class="pb-3">
                            <div class="flex items-center gap-3">
                                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                                    <Smartphone class="h-5 w-5 text-green-500" />
                                </div>
                                <div>
                                    <CardTitle class="text-base">Authenticator App</CardTitle>
                                    <CardDescription class="text-xs">Most secure</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p class="text-sm text-muted-foreground">
                                Use Google Authenticator, Authy, or similar apps to generate codes.
                                Works offline.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <!-- Enable Button -->
                <div v-if="!twoFactorEnabled" class="pt-2">
                    <!-- Email Method - Simple Enable -->
                    <Button
                        v-if="isEmailMethod"
                        @click="enableEmailTwoFactor"
                        :disabled="methodForm.processing"
                        class="gap-2"
                    >
                        <ShieldCheck class="h-4 w-4" />
                        Enable Email 2FA
                    </Button>

                    <!-- TOTP Method - Setup Modal -->
                    <div v-else>
                        <Button
                            v-if="hasSetupData"
                            @click="showSetupModal = true"
                            class="gap-2"
                        >
                            <ShieldCheck class="h-4 w-4" />
                            Continue Setup
                        </Button>
                        <Form
                            v-else
                            v-bind="enable.form()"
                            @success="showSetupModal = true"
                            #default="{ processing }"
                        >
                            <Button type="submit" :disabled="processing" class="gap-2">
                                <ShieldCheck class="h-4 w-4" />
                                Set Up Authenticator
                            </Button>
                        </Form>
                    </div>
                </div>

                <!-- Enabled State -->
                <div v-if="twoFactorEnabled" class="space-y-6">
                    <!-- Current Method Info -->
                    <Card>
                        <CardHeader class="pb-3">
                            <div class="flex items-center gap-3">
                                <div :class="[
                                    'flex h-10 w-10 items-center justify-center rounded-full',
                                    twoFactorMethod === 'email' ? 'bg-blue-500/10' : 'bg-green-500/10'
                                ]">
                                    <Mail v-if="twoFactorMethod === 'email'" class="h-5 w-5 text-blue-500" />
                                    <Smartphone v-else class="h-5 w-5 text-green-500" />
                                </div>
                                <div>
                                    <CardTitle class="text-base">
                                        {{ twoFactorMethod === 'email' ? 'Email Verification' : 'Authenticator App' }}
                                    </CardTitle>
                                    <CardDescription class="text-xs">Currently active</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p class="text-sm text-muted-foreground">
                                <template v-if="twoFactorMethod === 'email'">
                                    A verification code will be sent to your email address when you sign in.
                                </template>
                                <template v-else>
                                    Open your authenticator app to view your verification code when signing in.
                                </template>
                            </p>
                        </CardContent>
                    </Card>

                    <!-- Recovery Codes (for TOTP only) -->
                    <TwoFactorRecoveryCodes v-if="twoFactorMethod === 'totp'" />

                    <!-- Disable Button -->
                    <div class="pt-2">
                        <Form v-bind="disable.form()" #default="{ processing }">
                            <Button
                                variant="destructive"
                                type="submit"
                                :disabled="processing"
                                class="gap-2"
                            >
                                <ShieldBan class="h-4 w-4" />
                                Disable 2FA
                            </Button>
                        </Form>
                    </div>
                </div>

                <TwoFactorSetupModal
                    v-model:isOpen="showSetupModal"
                    :requiresConfirmation="requiresConfirmation"
                    :twoFactorEnabled="twoFactorEnabled"
                />
            </div>
        </SettingsLayout>
    </AppLayout>
</template>
