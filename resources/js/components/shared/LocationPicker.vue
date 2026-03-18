<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
    MapPin,
    RefreshCw,
    Navigation,
    ExternalLink,
    Map,
    Crosshair,
} from 'lucide-vue-next';

interface Props {
    latitude?: number | null;
    longitude?: number | null;
    accuracy?: number | null;
    showAccuracy?: boolean;
    showTimezone?: boolean;
    readonly?: boolean;
    height?: string;
}

const props = withDefaults(defineProps<Props>(), {
    latitude: null,
    longitude: null,
    accuracy: null,
    showAccuracy: true,
    showTimezone: true,
    readonly: false,
    height: '200px',
});

const emit = defineEmits<{
    'update:latitude': [value: number | null];
    'update:longitude': [value: number | null];
    'update:accuracy': [value: number | null];
    locationChange: [location: { latitude: number | null; longitude: number | null; accuracy: number | null }];
}>();

// Local state
const isGettingLocation = ref(false);
const locationError = ref<string | null>(null);
const latInput = ref<string>(props.latitude?.toString() || '');
const lngInput = ref<string>(props.longitude?.toString() || '');

// Get user's timezone
const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Computed
const googleMapsEmbedUrl = computed(() => {
    if (!props.latitude || !props.longitude) {
        return null;
    }
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${props.latitude},${props.longitude}&zoom=15`;
});

const googleMapsUrl = computed(() => {
    if (!props.latitude || !props.longitude) {
        return null;
    }
    return `https://www.google.com/maps?q=${props.latitude},${props.longitude}`;
});

const openStreetMapUrl = computed(() => {
    if (!props.latitude || !props.longitude) {
        return null;
    }
    return `https://www.openstreetmap.org/?mlat=${props.latitude}&mlon=${props.longitude}&zoom=15`;
});

// Watch for prop changes
watch(() => props.latitude, (val) => {
    latInput.value = val?.toString() || '';
});

watch(() => props.longitude, (val) => {
    lngInput.value = val?.toString() || '';
});

// Methods
const getCurrentLocation = async () => {
    if (!navigator.geolocation) {
        locationError.value = 'Geolocation is not supported by this browser.';
        return;
    }

    isGettingLocation.value = true;
    locationError.value = null;

    navigator.geolocation.getCurrentPosition(
        (position) => {
            isGettingLocation.value = false;
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const acc = position.coords.accuracy;

            latInput.value = lat.toFixed(8);
            lngInput.value = lng.toFixed(8);

            emit('update:latitude', lat);
            emit('update:longitude', lng);
            emit('update:accuracy', acc);
            emit('locationChange', { latitude: lat, longitude: lng, accuracy: acc });
        },
        (error) => {
            isGettingLocation.value = false;
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    locationError.value = 'Location permission denied.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    locationError.value = 'Location information unavailable.';
                    break;
                case error.TIMEOUT:
                    locationError.value = 'Location request timed out.';
                    break;
                default:
                    locationError.value = 'Unable to get location.';
            }
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000,
        }
    );
};

const updateLatitude = () => {
    const val = parseFloat(latInput.value);
    if (!isNaN(val) && val >= -90 && val <= 90) {
        emit('update:latitude', val);
        emit('locationChange', {
            latitude: val,
            longitude: props.longitude,
            accuracy: props.accuracy,
        });
    } else if (latInput.value === '') {
        emit('update:latitude', null);
        emit('locationChange', {
            latitude: null,
            longitude: props.longitude,
            accuracy: props.accuracy,
        });
    }
};

const updateLongitude = () => {
    const val = parseFloat(lngInput.value);
    if (!isNaN(val) && val >= -180 && val <= 180) {
        emit('update:longitude', val);
        emit('locationChange', {
            latitude: props.latitude,
            longitude: val,
            accuracy: props.accuracy,
        });
    } else if (lngInput.value === '') {
        emit('update:longitude', null);
        emit('locationChange', {
            latitude: props.latitude,
            longitude: null,
            accuracy: props.accuracy,
        });
    }
};

const openInGoogleMaps = () => {
    if (googleMapsUrl.value) {
        window.open(googleMapsUrl.value, '_blank');
    }
};

// Get initial location on mount if no coordinates provided
onMounted(() => {
    if (!props.latitude && !props.longitude && !props.readonly) {
        getCurrentLocation();
    }
});
</script>

<template>
    <Card class="overflow-hidden">
        <CardContent class="p-0">
            <!-- Map Preview -->
            <div v-if="latitude && longitude" class="relative" :style="{ height }">
                <iframe
                    v-if="googleMapsEmbedUrl"
                    :src="googleMapsEmbedUrl"
                    class="w-full h-full border-0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                />
                <!-- Fallback: OpenStreetMap static image -->
                <div v-else class="w-full h-full bg-muted flex items-center justify-center">
                    <div class="text-center text-muted-foreground">
                        <Map class="h-8 w-8 mx-auto mb-2" />
                        <p class="text-sm">Map preview unavailable</p>
                        <a
                            :href="openStreetMapUrl || '#'"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-xs text-blue-600 hover:underline"
                        >
                            View on OpenStreetMap
                        </a>
                    </div>
                </div>

                <!-- Map Overlay Actions -->
                <div class="absolute top-2 right-2 flex gap-1">
                    <Button
                        v-if="!readonly"
                        variant="secondary"
                        size="icon"
                        class="h-8 w-8 bg-white/90 hover:bg-white shadow-sm"
                        @click="getCurrentLocation"
                        :disabled="isGettingLocation"
                        title="Get current location"
                    >
                        <RefreshCw :class="['h-4 w-4', isGettingLocation ? 'animate-spin' : '']" />
                    </Button>
                    <Button
                        variant="secondary"
                        size="icon"
                        class="h-8 w-8 bg-white/90 hover:bg-white shadow-sm"
                        @click="openInGoogleMaps"
                        title="Open in Google Maps"
                    >
                        <ExternalLink class="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <!-- No Location Placeholder -->
            <div
                v-else
                class="flex flex-col items-center justify-center bg-muted/50"
                :style="{ height }"
            >
                <Crosshair class="h-10 w-10 text-muted-foreground mb-3" />
                <p class="text-sm text-muted-foreground mb-3">No location set</p>
                <Button
                    v-if="!readonly"
                    variant="outline"
                    size="sm"
                    @click="getCurrentLocation"
                    :disabled="isGettingLocation"
                >
                    <Navigation v-if="!isGettingLocation" class="h-4 w-4 mr-2" />
                    <RefreshCw v-else class="h-4 w-4 mr-2 animate-spin" />
                    {{ isGettingLocation ? 'Getting location...' : 'Use Current Location' }}
                </Button>
            </div>

            <!-- Location Details -->
            <div class="p-4 space-y-4 border-t">
                <!-- Error Message -->
                <div
                    v-if="locationError"
                    class="flex items-center gap-2 text-sm text-yellow-600 bg-yellow-50 p-2 rounded-md"
                >
                    <MapPin class="h-4 w-4" />
                    {{ locationError }}
                </div>

                <!-- Coordinate Inputs -->
                <div class="grid gap-4 sm:grid-cols-2">
                    <div class="space-y-2">
                        <Label for="latitude" class="text-xs">Latitude</Label>
                        <div class="relative">
                            <MapPin class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                id="latitude"
                                v-model="latInput"
                                type="text"
                                inputmode="decimal"
                                placeholder="-90 to 90"
                                class="pl-9"
                                :readonly="readonly"
                                @blur="updateLatitude"
                                @keyup.enter="updateLatitude"
                            />
                        </div>
                    </div>
                    <div class="space-y-2">
                        <Label for="longitude" class="text-xs">Longitude</Label>
                        <div class="relative">
                            <MapPin class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                id="longitude"
                                v-model="lngInput"
                                type="text"
                                inputmode="decimal"
                                placeholder="-180 to 180"
                                class="pl-9"
                                :readonly="readonly"
                                @blur="updateLongitude"
                                @keyup.enter="updateLongitude"
                            />
                        </div>
                    </div>
                </div>

                <!-- Additional Info -->
                <div v-if="(showAccuracy && accuracy) || showTimezone" class="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <div v-if="showAccuracy && accuracy" class="flex items-center gap-1">
                        <Crosshair class="h-3 w-3" />
                        <span>Accuracy: {{ accuracy.toFixed(0) }}m</span>
                    </div>
                    <div v-if="showTimezone" class="flex items-center gap-1">
                        <Map class="h-3 w-3" />
                        <span>Timezone: {{ userTimezone }}</span>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div v-if="!readonly && latitude && longitude" class="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        class="flex-1"
                        @click="getCurrentLocation"
                        :disabled="isGettingLocation"
                    >
                        <Navigation class="h-4 w-4 mr-2" />
                        Update to Current
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        @click="openInGoogleMaps"
                    >
                        <ExternalLink class="h-4 w-4 mr-2" />
                        Google Maps
                    </Button>
                </div>
            </div>
        </CardContent>
    </Card>
</template>
