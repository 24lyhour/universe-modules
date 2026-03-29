<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, computed, watch } from 'vue';
import { Loader2, Map, Satellite, Mountain } from 'lucide-vue-next';
import 'leaflet/dist/leaflet.css';

interface Props {
    height?: string;
    fromLatitude?: number | null;
    fromLongitude?: number | null;
    fromLabel?: string;
    toLatitude?: number | null;
    toLongitude?: number | null;
    toLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
    height: '200px',
    fromLatitude: null,
    fromLongitude: null,
    fromLabel: 'Outlet',
    toLatitude: null,
    toLongitude: null,
    toLabel: 'Customer',
});

const mapContainer = ref<HTMLDivElement | null>(null);
const map = ref<any>(null);
const isLoading = ref(true);
const routeDistance = ref<string | null>(null);
const routeDuration = ref<string | null>(null);
const activeLayer = ref<'street' | 'satellite' | 'terrain'>('satellite');

let L: any = null;
let fromMarker: any = null;
let toMarker: any = null;
let routeLine: any = null;
let tileLayers: Record<string, any> = {};

const hasFrom = computed(() => props.fromLatitude !== null && props.fromLongitude !== null);
const hasTo = computed(() => props.toLatitude !== null && props.toLongitude !== null);
const hasBoth = computed(() => hasFrom.value && hasTo.value);

onMounted(async () => {
    if (typeof window !== 'undefined') {
        L = await import('leaflet');
        await nextTick();
        initMap();
    }
});

onUnmounted(() => {
    if (map.value) {
        map.value.remove();
    }
});

const initMap = () => {
    if (!mapContainer.value || !L) return;

    // Default center (Cambodia)
    let center: [number, number] = [11.5564, 104.9282];
    let zoom = 12;

    if (hasBoth.value) {
        center = [
            (props.fromLatitude! + props.toLatitude!) / 2,
            (props.fromLongitude! + props.toLongitude!) / 2,
        ];
    } else if (hasFrom.value) {
        center = [props.fromLatitude!, props.fromLongitude!];
        zoom = 15;
    } else if (hasTo.value) {
        center = [props.toLatitude!, props.toLongitude!];
        zoom = 15;
    }

    map.value = L.map(mapContainer.value, {
        center,
        zoom,
        zoomControl: true,
        scrollWheelZoom: false,
    });

    // Create tile layers
    tileLayers = {
        street: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            maxZoom: 19,
        }),
        satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '&copy; <a href="https://www.esri.com/">Esri</a>',
            maxZoom: 19,
        }),
        terrain: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
            maxZoom: 17,
        }),
    };

    // Add default layer
    tileLayers[activeLayer.value].addTo(map.value);

    // Fix Leaflet icon issue
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    });

    addMarkers();
    isLoading.value = false;
};

// Switch map layer
const switchLayer = (layerType: 'street' | 'satellite' | 'terrain') => {
    if (!map.value || !tileLayers[layerType]) return;

    // Remove current layer
    Object.values(tileLayers).forEach((layer: any) => {
        if (map.value.hasLayer(layer)) {
            map.value.removeLayer(layer);
        }
    });

    // Add new layer
    tileLayers[layerType].addTo(map.value);
    activeLayer.value = layerType;
};

// Fetch route from OSRM (free routing service)
const fetchRoute = async () => {
    if (!hasBoth.value) return null;

    try {
        const url = `https://router.project-osrm.org/route/v1/driving/${props.fromLongitude},${props.fromLatitude};${props.toLongitude},${props.toLatitude}?overview=full&geometries=geojson`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.code === 'Ok' && data.routes?.length > 0) {
            const route = data.routes[0];
            // Convert meters to km and seconds to minutes
            routeDistance.value = (route.distance / 1000).toFixed(1) + ' km';
            routeDuration.value = Math.round(route.duration / 60) + ' min';
            return route.geometry.coordinates;
        }
    } catch (error) {
        console.warn('Failed to fetch route, using straight line:', error);
    }
    return null;
};

const addMarkers = async () => {
    if (!map.value || !L) return;

    // Clear existing
    if (fromMarker) fromMarker.remove();
    if (toMarker) toMarker.remove();
    if (routeLine) routeLine.remove();

    // FROM marker (Orange - Outlet) with start dot style
    if (hasFrom.value) {
        const fromIcon = L.divIcon({
            html: `<div class="relative">
                <div class="w-6 h-6 bg-orange-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
            </div>`,
            className: 'custom-marker',
            iconSize: [24, 24],
            iconAnchor: [12, 12],
        });

        fromMarker = L.marker([props.fromLatitude!, props.fromLongitude!], { icon: fromIcon })
            .addTo(map.value)
            .bindPopup(`<strong class="text-orange-600">FROM: ${props.fromLabel}</strong>`);
    }

    // TO marker (Red pin - Customer) like in the reference image
    if (hasTo.value) {
        const toIcon = L.divIcon({
            html: `<div class="relative">
                <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0C7.164 0 0 7.164 0 16c0 12 16 24 16 24s16-12 16-24c0-8.836-7.164-16-16-16z" fill="#EF4444"/>
                    <circle cx="16" cy="16" r="6" fill="white"/>
                </svg>
            </div>`,
            className: 'custom-marker',
            iconSize: [32, 40],
            iconAnchor: [16, 40],
        });

        toMarker = L.marker([props.toLatitude!, props.toLongitude!], { icon: toIcon })
            .addTo(map.value)
            .bindPopup(`<strong class="text-red-600">TO: ${props.toLabel}</strong>`);
    }

    // Route line between markers
    if (hasBoth.value) {
        // Try to get actual route from OSRM
        const routeCoords = await fetchRoute();

        if (routeCoords) {
            // Convert [lng, lat] to [lat, lng] for Leaflet
            const latLngs = routeCoords.map((coord: [number, number]) => [coord[1], coord[0]]);

            routeLine = L.polyline(latLngs, {
                color: '#EF4444',
                weight: 4,
                opacity: 0.9,
            }).addTo(map.value);
        } else {
            // Fallback to straight dashed line
            routeLine = L.polyline(
                [
                    [props.fromLatitude!, props.fromLongitude!],
                    [props.toLatitude!, props.toLongitude!],
                ],
                {
                    color: '#EF4444',
                    weight: 3,
                    opacity: 0.8,
                    dashArray: '10, 10',
                }
            ).addTo(map.value);
        }

        // Fit bounds to show both markers with padding
        const bounds = L.latLngBounds([
            [props.fromLatitude!, props.fromLongitude!],
            [props.toLatitude!, props.toLongitude!],
        ]);
        map.value.fitBounds(bounds, { padding: [50, 50] });
    } else if (hasFrom.value) {
        map.value.setView([props.fromLatitude!, props.fromLongitude!], 15);
    } else if (hasTo.value) {
        map.value.setView([props.toLatitude!, props.toLongitude!], 15);
    }
};

watch(
    () => [props.fromLatitude, props.fromLongitude, props.toLatitude, props.toLongitude],
    () => {
        if (map.value && L) addMarkers();
    }
);
</script>

<template>
    <div class="relative">
        <div
            ref="mapContainer"
            :style="{ height }"
            class="rounded-lg overflow-hidden border"
        >
            <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
                <Loader2 class="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
        </div>
        <!-- Layer switcher -->
        <div class="absolute top-2 right-2 z-1000 flex gap-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-1 shadow-md border">
            <button
                type="button"
                :class="[
                    'p-1.5 rounded transition-colors',
                    activeLayer === 'street'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted text-muted-foreground'
                ]"
                :title="'Street'"
                @click="switchLayer('street')"
            >
                <Map class="h-4 w-4" />
            </button>
            <button
                type="button"
                :class="[
                    'p-1.5 rounded transition-colors',
                    activeLayer === 'satellite'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted text-muted-foreground'
                ]"
                :title="'Satellite'"
                @click="switchLayer('satellite')"
            >
                <Satellite class="h-4 w-4" />
            </button>
            <button
                type="button"
                :class="[
                    'p-1.5 rounded transition-colors',
                    activeLayer === 'terrain'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted text-muted-foreground'
                ]"
                :title="'Terrain'"
                @click="switchLayer('terrain')"
            >
                <Mountain class="h-4 w-4" />
            </button>
        </div>
        <!-- Route info badge -->
        <div v-if="routeDistance && routeDuration" class="absolute bottom-2 left-2 z-1000 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md border text-xs font-medium">
            <span class="text-muted-foreground">{{ routeDistance }}</span>
            <span class="mx-1.5 text-muted-foreground/50">•</span>
            <span class="text-primary">{{ routeDuration }}</span>
        </div>
    </div>
</template>

<style>
.custom-marker {
    background: transparent !important;
    border: none !important;
}
</style>
