<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from '@inertiajs/vue3';
import { type VNode, computed, ref } from 'vue';
import { Save, Settings, Globe, Palette, Mail, Shield, Users, BarChart3, Phone } from 'lucide-vue-next';
import * as settingsRoutes from '@/routes/porfolio/settings';

interface Setting {
    id: number;
    group: string;
    key: string;
    value: string | number | boolean | object | null;
    type: string;
    label: string;
    description: string | null;
    options: { value: string; label: string }[] | null;
    is_public: boolean;
    sort_order: number;
}

interface Props {
    settings: Record<string, Setting[]>;
    groups: { value: string; label: string }[];
    types: { value: string; label: string }[];
}

const props = defineProps<Props>();

defineOptions({
    layout: (h: (type: unknown, props: unknown, children: unknown) => VNode, page: VNode) =>
        h(AppLayout, { breadcrumbs: [
            { title: 'Dashboard', href: '/dashboard' },
            { title: 'Settings', href: '/dashboard/settings' },
        ]}, () => page),
});

// Active tab
const activeTab = ref(Object.keys(props.settings)[0] || 'general');

// Flatten settings for form
const flattenedSettings = computed(() => {
    const result: { key: string; value: string | number | boolean | object | null }[] = [];
    Object.values(props.settings).forEach((groupSettings) => {
        groupSettings.forEach((setting) => {
            result.push({ key: setting.key, value: setting.value });
        });
    });
    return result;
});

const form = useForm({
    settings: flattenedSettings.value,
});

const getSettingValue = (key: string) => {
    const setting = form.settings.find((s) => s.key === key);
    return setting?.value;
};

const setSettingValue = (key: string, value: string | number | boolean | object | null) => {
    const setting = form.settings.find((s) => s.key === key);
    if (setting) {
        setting.value = value;
    }
};

const handleSubmit = () => {
    form.put(settingsRoutes.update.url());
};

const groupIcons: Record<string, typeof Settings> = {
    general: Settings,
    seo: Globe,
    appearance: Palette,
    email: Mail,
    security: Shield,
    contact: Phone,
    social: Users,
    analytics: BarChart3,
};

const getGroupIcon = (group: string) => {
    return groupIcons[group.toLowerCase()] || Settings;
};
</script>

<template>
    <div class="flex flex-1 flex-col gap-4 p-4">
        <Card>
            <CardHeader>
                <div class="flex items-center justify-between">
                    <div>
                        <CardTitle>Site Settings</CardTitle>
                        <CardDescription>Configure your website settings</CardDescription>
                    </div>
                    <Button :disabled="form.processing" @click="handleSubmit">
                        <Save class="mr-2 h-4 w-4" />
                        {{ form.processing ? 'Saving...' : 'Save Changes' }}
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <!-- Custom Tabs -->
                <div v-if="Object.keys(settings).length > 0" class="w-full">
                    <!-- Tab List -->
                    <div class="mb-6 flex flex-wrap gap-2 border-b pb-4">
                        <button
                            v-for="(groupSettings, group) in settings"
                            :key="group"
                            type="button"
                            :class="[
                                'flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors',
                                activeTab === group
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                            ]"
                            @click="activeTab = String(group)"
                        >
                            <component :is="getGroupIcon(String(group))" class="h-4 w-4" />
                            {{ groups.find(g => g.value === group)?.label || group }}
                        </button>
                    </div>

                    <!-- Tab Content -->
                    <div
                        v-for="(groupSettings, group) in settings"
                        v-show="activeTab === group"
                        :key="group"
                    >
                        <div class="space-y-6">
                            <div
                                v-for="setting in groupSettings"
                                :key="setting.key"
                                class="space-y-2"
                            >
                                <!-- Text Input -->
                                <template v-if="setting.type === 'text' || setting.type === 'string'">
                                    <Label :for="setting.key">{{ setting.label }}</Label>
                                    <Input
                                        :id="setting.key"
                                        :model-value="String(getSettingValue(setting.key) || '')"
                                        :placeholder="setting.label"
                                        @update:model-value="setSettingValue(setting.key, $event)"
                                    />
                                    <p v-if="setting.description" class="text-sm text-muted-foreground">
                                        {{ setting.description }}
                                    </p>
                                </template>

                                <!-- Textarea -->
                                <template v-else-if="setting.type === 'textarea'">
                                    <Label :for="setting.key">{{ setting.label }}</Label>
                                    <textarea
                                        :id="setting.key"
                                        :value="String(getSettingValue(setting.key) || '')"
                                        :placeholder="setting.label"
                                        rows="3"
                                        class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                        @input="setSettingValue(setting.key, ($event.target as HTMLTextAreaElement).value)"
                                    />
                                    <p v-if="setting.description" class="text-sm text-muted-foreground">
                                        {{ setting.description }}
                                    </p>
                                </template>

                                <!-- Number Input -->
                                <template v-else-if="setting.type === 'number' || setting.type === 'integer'">
                                    <Label :for="setting.key">{{ setting.label }}</Label>
                                    <Input
                                        :id="setting.key"
                                        type="number"
                                        :model-value="Number(getSettingValue(setting.key) || 0)"
                                        :placeholder="setting.label"
                                        @update:model-value="setSettingValue(setting.key, Number($event))"
                                    />
                                    <p v-if="setting.description" class="text-sm text-muted-foreground">
                                        {{ setting.description }}
                                    </p>
                                </template>

                                <!-- Boolean Checkbox -->
                                <template v-else-if="setting.type === 'boolean'">
                                    <div class="flex items-center space-x-2">
                                        <Checkbox
                                            :id="setting.key"
                                            :checked="Boolean(getSettingValue(setting.key))"
                                            @update:checked="setSettingValue(setting.key, $event)"
                                        />
                                        <Label :for="setting.key" class="cursor-pointer">{{ setting.label }}</Label>
                                    </div>
                                    <p v-if="setting.description" class="text-sm text-muted-foreground ml-6">
                                        {{ setting.description }}
                                    </p>
                                </template>

                                <!-- Select (as native select) -->
                                <template v-else-if="setting.type === 'select' && setting.options">
                                    <Label :for="setting.key">{{ setting.label }}</Label>
                                    <select
                                        :id="setting.key"
                                        :value="String(getSettingValue(setting.key) || '')"
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                        @change="setSettingValue(setting.key, ($event.target as HTMLSelectElement).value)"
                                    >
                                        <option value="" disabled>Select {{ setting.label }}</option>
                                        <option
                                            v-for="option in setting.options"
                                            :key="option.value"
                                            :value="option.value"
                                        >
                                            {{ option.label }}
                                        </option>
                                    </select>
                                    <p v-if="setting.description" class="text-sm text-muted-foreground">
                                        {{ setting.description }}
                                    </p>
                                </template>

                                <!-- URL Input -->
                                <template v-else-if="setting.type === 'url'">
                                    <Label :for="setting.key">{{ setting.label }}</Label>
                                    <Input
                                        :id="setting.key"
                                        type="url"
                                        :model-value="String(getSettingValue(setting.key) || '')"
                                        placeholder="https://example.com"
                                        @update:model-value="setSettingValue(setting.key, $event)"
                                    />
                                    <p v-if="setting.description" class="text-sm text-muted-foreground">
                                        {{ setting.description }}
                                    </p>
                                </template>

                                <!-- Email Input -->
                                <template v-else-if="setting.type === 'email'">
                                    <Label :for="setting.key">{{ setting.label }}</Label>
                                    <Input
                                        :id="setting.key"
                                        type="email"
                                        :model-value="String(getSettingValue(setting.key) || '')"
                                        placeholder="email@example.com"
                                        @update:model-value="setSettingValue(setting.key, $event)"
                                    />
                                    <p v-if="setting.description" class="text-sm text-muted-foreground">
                                        {{ setting.description }}
                                    </p>
                                </template>

                                <!-- Color Picker -->
                                <template v-else-if="setting.type === 'color'">
                                    <Label :for="setting.key">{{ setting.label }}</Label>
                                    <div class="flex items-center gap-2">
                                        <Input
                                            :id="setting.key"
                                            type="color"
                                            :model-value="String(getSettingValue(setting.key) || '#000000')"
                                            class="h-10 w-14 cursor-pointer p-1"
                                            @update:model-value="setSettingValue(setting.key, $event)"
                                        />
                                        <Input
                                            :model-value="String(getSettingValue(setting.key) || '')"
                                            placeholder="#000000"
                                            class="flex-1"
                                            @update:model-value="setSettingValue(setting.key, $event)"
                                        />
                                    </div>
                                    <p v-if="setting.description" class="text-sm text-muted-foreground">
                                        {{ setting.description }}
                                    </p>
                                </template>

                                <!-- Image Input (URL-based for now) -->
                                <template v-else-if="setting.type === 'image'">
                                    <Label :for="setting.key">{{ setting.label }}</Label>
                                    <div class="space-y-2">
                                        <Input
                                            :id="setting.key"
                                            type="text"
                                            :model-value="String(getSettingValue(setting.key) || '')"
                                            placeholder="/images/logo.png or https://..."
                                            @update:model-value="setSettingValue(setting.key, $event)"
                                        />
                                        <div v-if="getSettingValue(setting.key)" class="mt-2">
                                            <img
                                                :src="String(getSettingValue(setting.key))"
                                                :alt="setting.label"
                                                class="h-20 w-auto rounded border object-contain"
                                            />
                                        </div>
                                    </div>
                                    <p v-if="setting.description" class="text-sm text-muted-foreground">
                                        {{ setting.description }}
                                    </p>
                                </template>

                                <!-- JSON Editor (simplified as textarea) -->
                                <template v-else-if="setting.type === 'json' || setting.type === 'array'">
                                    <Label :for="setting.key">{{ setting.label }}</Label>
                                    <textarea
                                        :id="setting.key"
                                        :value="typeof getSettingValue(setting.key) === 'object' ? JSON.stringify(getSettingValue(setting.key), null, 2) : String(getSettingValue(setting.key) || '')"
                                        :placeholder="setting.label"
                                        rows="4"
                                        class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                        @input="setSettingValue(setting.key, ($event.target as HTMLTextAreaElement).value)"
                                    />
                                    <p v-if="setting.description" class="text-sm text-muted-foreground">
                                        {{ setting.description }}
                                    </p>
                                </template>

                                <!-- Default: Text Input -->
                                <template v-else>
                                    <Label :for="setting.key">{{ setting.label }}</Label>
                                    <Input
                                        :id="setting.key"
                                        :model-value="String(getSettingValue(setting.key) || '')"
                                        :placeholder="setting.label"
                                        @update:model-value="setSettingValue(setting.key, $event)"
                                    />
                                    <p v-if="setting.description" class="text-sm text-muted-foreground">
                                        {{ setting.description }}
                                    </p>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Empty State -->
                <div v-else class="flex flex-col items-center justify-center py-12 text-center">
                    <Settings class="h-12 w-12 text-muted-foreground" />
                    <h3 class="mt-4 text-lg font-medium">No Settings Found</h3>
                    <p class="text-sm text-muted-foreground">
                        No settings have been configured yet.
                    </p>
                </div>
            </CardContent>
        </Card>
    </div>
</template>
