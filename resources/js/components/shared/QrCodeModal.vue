<script setup lang="ts">
import { ref, watch } from 'vue';
import { router } from '@inertiajs/vue3';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QrCode, Printer, Download, MapPin, AlertTriangle, CheckCircle, Settings } from 'lucide-vue-next';
import QRCode from 'qrcode';

interface GeofenceInfo {
    hasGeofence: boolean;
    latitude?: number | null;
    longitude?: number | null;
    radius?: number;
    enforced?: boolean;
}

interface Props {
    open: boolean;
    title: string;
    subtitle?: string;
    qrData: string;
    code?: string;
    // Geofence info
    geofence?: GeofenceInfo;
    // For edit link
    entityType?: 'department' | 'classroom' | 'location';
    entityUuid?: string;
}

const props = withDefaults(defineProps<Props>(), {
    geofence: () => ({ hasGeofence: false }),
});

const emit = defineEmits<{
    (e: 'update:open', value: boolean): void;
}>();

const qrImageUrl = ref<string>('');
const qrSvg = ref<string>('');

// Generate QR when data changes
watch(() => props.qrData, async (data) => {
    if (data) {
        try {
            qrImageUrl.value = await QRCode.toDataURL(data, {
                width: 300,
                margin: 2,
                color: { dark: '#000000', light: '#ffffff' },
            });
            qrSvg.value = await QRCode.toString(data, {
                type: 'svg',
                width: 300,
                margin: 2,
            });
        } catch (err) {
            console.error('QR generation error:', err);
        }
    }
}, { immediate: true });

const handleDownload = () => {
    if (!qrImageUrl.value) return;
    const link = document.createElement('a');
    link.download = `qr-${props.title.replace(/\s+/g, '-').toLowerCase()}.png`;
    link.href = qrImageUrl.value;
    link.click();
};

const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>QR Code - ${props.title}</title>
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-height: 100vh;
                        background: #f5f5f5;
                        padding: 20px;
                    }
                    .card {
                        background: white;
                        border-radius: 16px;
                        box-shadow: 0 4px 24px rgba(0,0,0,0.1);
                        padding: 40px;
                        text-align: center;
                        max-width: 400px;
                    }
                    .title { font-size: 24px; font-weight: 700; color: #1a1a1a; margin-bottom: 8px; }
                    .subtitle { font-size: 14px; color: #666; margin-bottom: 24px; }
                    .qr-container { background: #f8f8f8; border-radius: 12px; padding: 20px; display: inline-block; margin-bottom: 24px; }
                    .qr-container svg { width: 200px; height: 200px; }
                    .instruction { background: #e8f5e9; color: #2e7d32; padding: 12px 20px; border-radius: 8px; font-size: 14px; font-weight: 500; }
                    .code { margin-top: 16px; font-size: 12px; color: #999; font-family: monospace; }
                    @media print { body { background: white; } .card { box-shadow: none; border: 1px solid #ddd; } }
                </style>
            </head>
            <body>
                <div class="card">
                    <div class="title">${props.title}</div>
                    ${props.subtitle ? `<div class="subtitle">${props.subtitle}</div>` : ''}
                    <div class="qr-container">${qrSvg.value}</div>
                    <div class="instruction">Scan to Check In / Check Out</div>
                    ${props.code ? `<div class="code">Code: ${props.code}</div>` : ''}
                </div>
                <script>window.onload = () => { window.print(); window.close(); }<\/script>
            </body>
            </html>
        `);
        printWindow.document.close();
    }
};

const goToSettings = () => {
    emit('update:open', false);
    if (props.entityType === 'department' && props.entityUuid) {
        router.visit(`/dashboard/departments/${props.entityUuid}/edit`);
    } else if (props.entityType === 'classroom' && props.entityUuid) {
        router.visit(`/dashboard/classrooms/${props.entityUuid}/edit`);
    } else if (props.entityType === 'location' && props.entityUuid) {
        router.visit(`/dashboard/locations/${props.entityUuid}/edit`);
    }
};
</script>

<template>
    <Dialog :open="open" @update:open="emit('update:open', $event)">
        <DialogContent class="sm:max-w-md">
            <DialogHeader>
                <DialogTitle class="flex items-center gap-2">
                    <QrCode class="h-5 w-5" />
                    QR Code
                </DialogTitle>
                <DialogDescription>
                    Print and place at location entrance for attendance
                </DialogDescription>
            </DialogHeader>

            <div class="flex flex-col items-center py-4">
                <!-- Location Info -->
                <div class="text-center mb-4">
                    <h3 class="text-xl font-bold">{{ title }}</h3>
                    <p v-if="subtitle" class="text-sm text-muted-foreground">{{ subtitle }}</p>
                </div>

                <!-- Geofence Status -->
                <div class="w-full mb-4 p-3 rounded-lg" :class="geofence.hasGeofence ? 'bg-green-50' : 'bg-yellow-50'">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <CheckCircle v-if="geofence.hasGeofence" class="h-4 w-4 text-green-600" />
                            <AlertTriangle v-else class="h-4 w-4 text-yellow-600" />
                            <span :class="geofence.hasGeofence ? 'text-green-700' : 'text-yellow-700'" class="text-sm font-medium">
                                {{ geofence.hasGeofence ? 'Geofence Configured' : 'No Geofence Set' }}
                            </span>
                        </div>
                        <Button v-if="entityType && entityUuid" variant="ghost" size="sm" @click="goToSettings">
                            <Settings class="h-4 w-4 mr-1" />
                            Configure
                        </Button>
                    </div>

                    <!-- Geofence Details -->
                    <div v-if="geofence.hasGeofence" class="mt-2 text-xs text-muted-foreground space-y-1">
                        <div class="flex items-center gap-2">
                            <MapPin class="h-3 w-3" />
                            <span>{{ Number(geofence.latitude).toFixed(6) }}, {{ Number(geofence.longitude).toFixed(6) }}</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <Badge variant="outline" class="text-xs">
                                Radius: {{ geofence.radius }}m
                            </Badge>
                            <Badge :variant="geofence.enforced ? 'default' : 'secondary'" class="text-xs">
                                {{ geofence.enforced ? 'Strict' : 'Optional' }}
                            </Badge>
                        </div>
                    </div>
                    <p v-else class="mt-1 text-xs text-yellow-600">
                        GPS verification disabled. Configure location to enable.
                    </p>
                </div>

                <!-- QR Code -->
                <div class="bg-white rounded-xl border-2 p-4 mb-4">
                    <img
                        v-if="qrImageUrl"
                        :src="qrImageUrl"
                        :alt="`QR Code for ${title}`"
                        class="w-48 h-48"
                    />
                    <div v-else class="w-48 h-48 flex items-center justify-center">
                        <span class="text-muted-foreground">Generating...</span>
                    </div>
                </div>

                <!-- Code Display -->
                <p v-if="code" class="text-xs text-muted-foreground font-mono mb-4">
                    Code: {{ code }}
                </p>

                <!-- Instruction -->
                <div class="bg-green-50 text-green-700 rounded-lg px-4 py-2 text-sm font-medium mb-6">
                    <MapPin class="h-4 w-4 inline mr-1" />
                    Scan to Check In / Check Out
                </div>

                <!-- Actions -->
                <div class="flex gap-3 w-full">
                    <Button variant="outline" class="flex-1" @click="handleDownload">
                        <Download class="h-4 w-4 mr-2" />
                        Download
                    </Button>
                    <Button class="flex-1" @click="handlePrint">
                        <Printer class="h-4 w-4 mr-2" />
                        Print
                    </Button>
                </div>
            </div>
        </DialogContent>
    </Dialog>
</template>
