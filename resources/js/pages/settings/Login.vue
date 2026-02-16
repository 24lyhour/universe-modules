<script setup lang="ts">
import { Head, useForm, router } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { ImageUpload } from '@/components/shared';
import { LogIn, Quote, Settings2, Save, Eye, Trash2 } from 'lucide-vue-next';
import { ref, watch } from 'vue';
import { toast } from 'vue-sonner';
import type { BreadcrumbItem } from '@/types';

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

interface Props {
    loginSettings: LoginSettings;
}

const props = defineProps<Props>();

const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/dashboard/settings' },
    { title: 'Login Settings', href: '/dashboard/settings/login' },
];

// Form for text settings
const form = useForm({
    app_name: props.loginSettings.app_name,
    title: props.loginSettings.title,
    subtitle: props.loginSettings.subtitle,
    quote_text: props.loginSettings.quote_text,
    quote_author: props.loginSettings.quote_author,
    quote_company: props.loginSettings.quote_company,
    show_social_login: props.loginSettings.show_social_login,
    show_remember_me: props.loginSettings.show_remember_me,
});

// Image arrays for ImageUpload component
const backgroundImages = ref<string[]>(props.loginSettings.image ? [props.loginSettings.image] : []);
const logoImages = ref<string[]>(props.loginSettings.logo ? [props.loginSettings.logo] : []);

// Watch for image changes and save automatically
watch(backgroundImages, (newVal, oldVal) => {
    if (newVal.length > 0 && newVal[0] !== props.loginSettings.image) {
        saveImageUrl(newVal[0]);
    }
}, { deep: true });

watch(logoImages, (newVal, oldVal) => {
    if (newVal.length === 0 && props.loginSettings.logo) {
        // Logo was removed
        removeLogo();
    } else if (newVal.length > 0 && newVal[0] !== props.loginSettings.logo) {
        saveLogoUrl(newVal[0]);
    }
}, { deep: true });

const saveImageUrl = (imageUrl: string) => {
    router.post('/dashboard/settings/login', {
        app_name: form.app_name || '',
        title: form.title,
        subtitle: form.subtitle,
        image_url: imageUrl,
        quote_text: form.quote_text || '',
        quote_author: form.quote_author || '',
        quote_company: form.quote_company || '',
        show_social_login: form.show_social_login ? '1' : '0',
        show_remember_me: form.show_remember_me ? '1' : '0',
    }, {
        preserveScroll: true,
        onSuccess: () => {
            toast.success('Background image updated.');
        },
        onError: () => {
            toast.error('Failed to update background image.');
        },
    });
};

const saveLogoUrl = (logoUrl: string) => {
    router.post('/dashboard/settings/login', {
        app_name: form.app_name || '',
        title: form.title,
        subtitle: form.subtitle,
        logo_url: logoUrl,
        quote_text: form.quote_text || '',
        quote_author: form.quote_author || '',
        quote_company: form.quote_company || '',
        show_social_login: form.show_social_login ? '1' : '0',
        show_remember_me: form.show_remember_me ? '1' : '0',
    }, {
        preserveScroll: true,
        onSuccess: () => {
            toast.success('Logo updated.');
        },
        onError: () => {
            toast.error('Failed to update logo.');
        },
    });
};

const removeLogo = () => {
    router.delete('/dashboard/settings/login/logo', {
        preserveScroll: true,
        onSuccess: () => {
            toast.success('Logo removed.');
        },
    });
};

const resetBackgroundImage = () => {
    if (confirm('Are you sure you want to reset to the default image?')) {
        router.delete('/dashboard/settings/login/image', {
            preserveScroll: true,
            onSuccess: () => {
                backgroundImages.value = ['/img/3.jpg'];
                toast.success('Image reset to default.');
            },
        });
    }
};

const handleSave = () => {
    router.post('/dashboard/settings/login', {
        app_name: form.app_name || '',
        title: form.title,
        subtitle: form.subtitle,
        quote_text: form.quote_text || '',
        quote_author: form.quote_author || '',
        quote_company: form.quote_company || '',
        show_social_login: form.show_social_login ? '1' : '0',
        show_remember_me: form.show_remember_me ? '1' : '0',
    }, {
        preserveScroll: true,
        onSuccess: () => {
            toast.success('Login settings saved successfully.');
        },
        onError: () => {
            toast.error('Failed to save login settings.');
        },
    });
};

const previewLogin = () => {
    window.open('/login', '_blank');
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="Login Settings" />

        <div class="flex h-full flex-1 flex-col gap-6 p-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <LogIn class="h-6 w-6" />
                        Login Settings
                    </h1>
                    <p class="text-muted-foreground">
                        Customize your login page appearance
                    </p>
                </div>
                <Button variant="outline" @click="previewLogin">
                    <Eye class="mr-2 h-4 w-4" />
                    Preview Login
                </Button>
            </div>

            <div class="grid gap-6 lg:grid-cols-2">
                <!-- Text Settings -->
                <Card>
                    <CardHeader>
                        <CardTitle class="flex items-center gap-2">
                            <Settings2 class="h-5 w-5" />
                            Page Text
                        </CardTitle>
                        <CardDescription>
                            Customize the login page title and subtitle
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="space-y-2">
                            <Label for="title">Title</Label>
                            <Input
                                id="title"
                                v-model="form.title"
                                placeholder="Welcome back"
                                maxlength="100"
                            />
                            <p v-if="form.errors.title" class="text-sm text-destructive">
                                {{ form.errors.title }}
                            </p>
                        </div>

                        <div class="space-y-2">
                            <Label for="subtitle">Subtitle</Label>
                            <Input
                                id="subtitle"
                                v-model="form.subtitle"
                                placeholder="Enter your credentials to access your account"
                                maxlength="200"
                            />
                            <p v-if="form.errors.subtitle" class="text-sm text-destructive">
                                {{ form.errors.subtitle }}
                            </p>
                        </div>

                        <Separator />

                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <div class="space-y-0.5">
                                    <Label>Show Social Login</Label>
                                    <p class="text-xs text-muted-foreground">
                                        Display social login buttons (Apple, Google, GitHub)
                                    </p>
                                </div>
                                <Switch v-model:checked="form.show_social_login" />
                            </div>

                            <div class="flex items-center justify-between">
                                <div class="space-y-0.5">
                                    <Label>Show Remember Me</Label>
                                    <p class="text-xs text-muted-foreground">
                                        Display "Remember me" checkbox
                                    </p>
                                </div>
                                <Switch v-model:checked="form.show_remember_me" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Quote Settings -->
                <Card>
                    <CardHeader>
                        <CardTitle class="flex items-center gap-2">
                            <Quote class="h-5 w-5" />
                            Testimonial Quote
                        </CardTitle>
                        <CardDescription>
                            Add a testimonial quote displayed on the login page
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="space-y-2">
                            <Label for="quote_text">Quote Text</Label>
                            <Textarea
                                id="quote_text"
                                v-model="form.quote_text"
                                placeholder="Enter a testimonial quote..."
                                rows="4"
                                maxlength="500"
                            />
                            <p v-if="form.errors.quote_text" class="text-sm text-destructive">
                                {{ form.errors.quote_text }}
                            </p>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <Label for="quote_author">Author Name</Label>
                                <Input
                                    id="quote_author"
                                    v-model="form.quote_author"
                                    placeholder="John Doe"
                                    maxlength="100"
                                />
                            </div>

                            <div class="space-y-2">
                                <Label for="quote_company">Company/Title</Label>
                                <Input
                                    id="quote_company"
                                    v-model="form.quote_company"
                                    placeholder="CEO at Company"
                                    maxlength="100"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Branding -->
                <Card>
                    <CardHeader>
                        <CardTitle>Branding</CardTitle>
                        <CardDescription>
                            Customize your app name and logo
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="space-y-2">
                            <Label for="app_name">App Name</Label>
                            <Input
                                id="app_name"
                                v-model="form.app_name"
                                placeholder="Universe"
                                maxlength="50"
                            />
                            <p class="text-xs text-muted-foreground">
                                Displayed in the sidebar and login page
                            </p>
                            <p v-if="form.errors.app_name" class="text-sm text-destructive">
                                {{ form.errors.app_name }}
                            </p>
                        </div>

                        <Separator />

                        <div class="space-y-2">
                            <Label>Logo</Label>
                            <p class="text-xs text-muted-foreground mb-2">
                                Upload a custom logo (recommended: transparent PNG)
                            </p>
                            <ImageUpload
                                v-model="logoImages"
                                label=""
                                :multiple="false"
                                :max-files="1"
                                :max-size="2"
                            />
                        </div>
                    </CardContent>
                </Card>

                <!-- Background Image -->
                <Card>
                    <CardHeader>
                        <CardTitle>Background Image</CardTitle>
                        <CardDescription>
                            Upload a custom background image for the login page (recommended: 1920x1080 or larger)
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <ImageUpload
                            v-model="backgroundImages"
                            label=""
                            :multiple="false"
                            :max-files="1"
                            :max-size="5"
                        />

                        <Button
                            variant="outline"
                            type="button"
                            class="w-full"
                            @click="resetBackgroundImage"
                            :disabled="props.loginSettings.image === '/img/3.jpg'"
                        >
                            <Trash2 class="mr-2 h-4 w-4" />
                            Reset to Default
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <!-- Save Button -->
            <div class="flex justify-end">
                <Button
                    size="lg"
                    @click="handleSave"
                    :disabled="form.processing"
                >
                    <Save class="mr-2 h-4 w-4" />
                    {{ form.processing ? 'Saving...' : 'Save Settings' }}
                </Button>
            </div>
        </div>
    </AppLayout>
</template>
