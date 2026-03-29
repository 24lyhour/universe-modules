<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import {
    Circle,
    Hexagon,
    Navigation,
    Trash2,
    RotateCcw,
    MapPin,
    Crosshair,
    Search,
    X,
    Loader2,
} from 'lucide-vue-next';
import type { GeofenceType, GeofenceData, LatLng } from './types';
import 'leaflet/dist/leaflet.css';

interface Props {
    height?: string;
    zoom?: number;
    readonly?: boolean;
    /** Mode: 'location' = simple pin picker (for Outlet), 'geofence' = full zone editor (for ShippingZone) */
    mode?: 'location' | 'geofence';
    geofenceType?: GeofenceType;
    latitude?: number | null;
    longitude?: number | null;
    radius?: number;
    polygonCoordinates?: [number, number][] | null;
    referenceLatitude?: number | null;
    referenceLongitude?: number | null;
    dynamicRadius?: number;
}

const props = withDefaults(defineProps<Props>(), {
    height: '400px',
    zoom: 16,
    readonly: false,
    mode: 'geofence',
    geofenceType: 'circle',
    latitude: null,
    longitude: null,
    radius: 100,
    polygonCoordinates: null,
    referenceLatitude: null,
    referenceLongitude: null,
    dynamicRadius: 100,
});

// Computed: is location-only mode (simple pin picker)
const isLocationMode = computed(() => props.mode === 'location');

const emit = defineEmits<{
    'update:latitude': [value: number | null];
    'update:longitude': [value: number | null];
    'update:radius': [value: number];
    'update:polygonCoordinates': [value: [number, number][]];
    'update:geofenceType': [value: GeofenceType];
    geofenceChange: [geofence: GeofenceData];
}>();

// Map state - using 'any' for Leaflet types due to dynamic import
const mapContainer = ref<HTMLDivElement | null>(null);
const map = ref<any>(null);
const isLoading = ref(true);
const isGettingLocation = ref(false);
const locationError = ref<string | null>(null);
const currentLayer = ref<'street' | 'satellite' | 'terrain' | 'dark'>('satellite');
const tileLayer = ref<any>(null);

// Search state
const searchQuery = ref('');
const searchResults = ref<Array<{ display_name: string; lat: string; lon: string }>>([]);
const isSearching = ref(false);
const showSearchResults = ref(false);
let searchTimeout: ReturnType<typeof setTimeout> | null = null;

// Available map layers
const mapLayers = {
    street: {
        name: 'Street Map',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
    satellite: {
        name: 'Satellite',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attribution: '&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    },
    terrain: {
        name: 'Terrain',
        url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
    },
    dark: {
        name: 'Dark Mode',
        url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    },
};

// Drawing state - using 'any' for Leaflet types due to dynamic import
const drawMode = ref<'none' | 'circle' | 'polygon'>('none');
const isEditing = ref(false);
const currentCircle = ref<any>(null);
const currentPolygon = ref<any>(null);
const centerMarker = ref<any>(null);
const polygonMarkers = ref<any[]>([]);

// Local state for manual input
const localRadius = ref(props.radius);
const radiusSliderValue = computed({
    get: () => [localRadius.value],
    set: (val: number[]) => {
        localRadius.value = val[0];
        updateCircleRadius(val[0]);
    },
});

// Temporary polygon points during drawing
const tempPolygonPoints = ref<LatLng[]>([]);

// Import Leaflet dynamically (client-side only)
let L: any = null;

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

const initMap = async () => {
    if (!mapContainer.value || !L) return;

    // Default center (Cambodia)
    const defaultCenter: [number, number] = [11.5564, 104.9282];
    // Priority: 1) Zone coordinates, 2) Reference coordinates (outlet), 3) Default
    let center: [number, number];
    if (props.latitude != null && props.longitude != null) {
        center = [props.latitude, props.longitude];
    } else if (props.referenceLatitude != null && props.referenceLongitude != null) {
        center = [props.referenceLatitude, props.referenceLongitude];
    } else {
        center = defaultCenter;
    }

    // Determine zoom level: use props.zoom if we have coordinates, otherwise 12 for default view
    const hasCoordinates = (props.latitude != null && props.longitude != null) ||
                           (props.referenceLatitude != null && props.referenceLongitude != null);

    // Create map
    map.value = L.map(mapContainer.value, {
        center,
        zoom: hasCoordinates ? props.zoom : 12,
        zoomControl: true,
    });

    // Add tile layer (default: street)
    const layer = mapLayers[currentLayer.value];
    tileLayer.value = L.tileLayer(layer.url, {
        attribution: layer.attribution,
        maxZoom: 19,
    }).addTo(map.value);

    // Fix Leaflet default icon issue
    delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    });

    // Initialize based on mode
    if (isLocationMode.value) {
        // Location mode: just show a marker if coordinates exist
        if (props.latitude != null && props.longitude != null) {
            createLocationMarker(props.latitude, props.longitude, true); // Center on initial load
        }
    } else {
        // Geofence mode: show circle/polygon
        if (props.geofenceType === 'circle' && props.latitude != null && props.longitude != null) {
            createCircle(props.latitude, props.longitude, props.radius || 100);
        } else if (props.geofenceType === 'polygon' && props.polygonCoordinates?.length) {
            createPolygon(props.polygonCoordinates);
        }
    }

    // Add click handler for drawing
    if (!props.readonly) {
        map.value.on('click', handleMapClick);
    }

    isLoading.value = false;
};

const handleMapClick = (e: any) => {
    if (props.readonly || !L) return;

    const { lat, lng } = e.latlng;

    // Location mode: just place/move marker
    if (isLocationMode.value) {
        clearGeofence();
        createLocationMarker(lat, lng, false); // Don't auto-center on click
        emit('update:latitude', lat);
        emit('update:longitude', lng);
        return;
    }

    // Handle circle mode - works both when drawMode is 'circle' or when geofenceType is 'circle'
    if (drawMode.value === 'circle' || (props.geofenceType === 'circle' && drawMode.value === 'none')) {
        clearGeofence();
        createCircle(lat, lng, localRadius.value);
        emitChange();
        drawMode.value = 'none';
    } else if (drawMode.value === 'polygon') {
        addPolygonPoint(lat, lng);
    }
};

/**
 * Create a simple location marker (for location mode - Outlet)
 */
const createLocationMarker = (lat: number, lng: number, shouldCenter: boolean = true) => {
    if (!map.value || !L) return;

    // Create marker icon - pin tip at bottom center
    const markerIcon = L.divIcon({
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width:40px;height:40px;color:#ef4444;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
        </svg>`,
        className: 'location-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 40], // Pin tip at bottom-center
    });

    centerMarker.value = L.marker([lat, lng], {
        icon: markerIcon,
        draggable: !props.readonly,
    }).addTo(map.value);

    // Handle marker drag
    if (!props.readonly) {
        centerMarker.value.on('dragend', (e: any) => {
            const marker = e.target;
            const pos = marker.getLatLng();
            emit('update:latitude', pos.lat);
            emit('update:longitude', pos.lng);
        });
    }

    // Only center map when explicitly requested (not on every click)
    if (shouldCenter) {
        map.value.setView([lat, lng], map.value.getZoom()); // Keep current zoom level
    }
};

const createCircle = (lat: number, lng: number, radius: number) => {
    if (!map.value || !L) return;

    // Ensure radius is valid (minimum 10 meters)
    const safeRadius = Math.max(radius || 100, 10);

    // Create circle with more visible styling
    currentCircle.value = L.circle([lat, lng], {
        radius: safeRadius,
        color: '#3b82f6',
        fillColor: '#3b82f6',
        fillOpacity: 0.25,
        weight: 3,
    }).addTo(map.value);

    // Create center marker (draggable if not readonly)
    const markerIcon = L.divIcon({
        html: `<div class="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full border-2 border-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>`,
        className: 'custom-marker',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
    });

    centerMarker.value = L.marker([lat, lng], {
        icon: markerIcon,
        draggable: !props.readonly,
    }).addTo(map.value);

    // Handle marker drag
    if (!props.readonly) {
        centerMarker.value.on('drag', (e: any) => {
            const marker = e.target;
            const pos = marker.getLatLng();
            currentCircle.value?.setLatLng(pos);
        });

        centerMarker.value.on('dragend', (e: any) => {
            const marker = e.target;
            const pos = marker.getLatLng();
            emit('update:latitude', pos.lat);
            emit('update:longitude', pos.lng);
            emitChange();
        });
    }

    // Update state
    emit('update:latitude', lat);
    emit('update:longitude', lng);

    // Fit bounds
    map.value.fitBounds(currentCircle.value.getBounds(), { padding: [50, 50] });
};

const updateCircleRadius = (radius: number) => {
    if (currentCircle.value) {
        currentCircle.value.setRadius(radius);
        emit('update:radius', radius);
        emitChange();
    }
};

const addPolygonPoint = (lat: number, lng: number) => {
    if (!map.value || !L) return;

    tempPolygonPoints.value.push({ lat, lng });
    const pointIndex = tempPolygonPoints.value.length - 1;

    // Add marker for this point
    const markerIcon = L.divIcon({
        html: `<div class="polygon-vertex" style="width: 16px; height: 16px; background: #22c55e; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.4); cursor: grab;"></div>`,
        className: 'polygon-point-marker',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
    });

    const marker = L.marker([lat, lng], {
        icon: markerIcon,
        draggable: true,
        zIndexOffset: 2000,
    }).addTo(map.value);

    // Add drag handlers
    marker.on('dragstart', () => {
        marker.getElement()?.querySelector('.polygon-vertex')?.classList.add('dragging');
    });

    marker.on('drag', () => {
        const pos = marker.getLatLng();
        tempPolygonPoints.value[pointIndex] = { lat: pos.lat, lng: pos.lng };
        updatePolygonPreview();
    });

    marker.on('dragend', () => {
        marker.getElement()?.querySelector('.polygon-vertex')?.classList.remove('dragging');
        const pos = marker.getLatLng();
        tempPolygonPoints.value[pointIndex] = { lat: pos.lat, lng: pos.lng };
    });

    polygonMarkers.value.push(marker);

    // Update temporary polygon preview
    updatePolygonPreview();
};

const updatePolygonPreview = () => {
    if (!map.value || !L || tempPolygonPoints.value.length < 2) return;

    // Remove existing polygon
    if (currentPolygon.value) {
        currentPolygon.value.remove();
    }

    // Create polygon from points
    const latlngs = tempPolygonPoints.value.map(p => [p.lat, p.lng] as [number, number]);
    currentPolygon.value = L.polygon(latlngs, {
        color: '#22c55e',
        fillColor: '#22c55e',
        fillOpacity: 0.2,
        weight: 2,
        dashArray: tempPolygonPoints.value.length < 3 ? '5, 5' : undefined,
    }).addTo(map.value);
};

const finishPolygon = () => {
    if (tempPolygonPoints.value.length < 3) {
        locationError.value = 'Polygon needs at least 3 points';
        return;
    }

    drawMode.value = 'none';
    const coords: [number, number][] = tempPolygonPoints.value.map(p => [p.lat, p.lng]);

    // Clear temp markers and recreate with proper drag handlers
    polygonMarkers.value.forEach(m => m.remove());
    polygonMarkers.value = [];
    if (currentPolygon.value) {
        currentPolygon.value.remove();
        currentPolygon.value = null;
    }

    // Recreate polygon with draggable markers
    createPolygon(coords);
    tempPolygonPoints.value = [];

    emit('update:polygonCoordinates', coords);
    emitChange();
};

const createPolygon = (coordinates: [number, number][]) => {
    if (!map.value || !L || coordinates.length < 3) return;

    currentPolygon.value = L.polygon(coordinates, {
        color: '#22c55e',
        fillColor: '#22c55e',
        fillOpacity: 0.2,
        weight: 2,
        // Allow clicks to pass through to markers underneath
        interactive: props.readonly,
    }).addTo(map.value);

    // Add draggable markers for each vertex
    coordinates.forEach((coord) => {
        const markerIcon = L.divIcon({
            html: `<div class="polygon-vertex" style="width: 16px; height: 16px; background: #22c55e; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.4); cursor: ${props.readonly ? 'default' : 'grab'};"></div>`,
            className: 'polygon-point-marker',
            iconSize: [16, 16],
            iconAnchor: [8, 8],
        });

        const marker = L.marker(coord, {
            icon: markerIcon,
            draggable: !props.readonly,
            zIndexOffset: 2000,
        }).addTo(map.value!);

        if (!props.readonly) {
            marker.on('dragstart', () => {
                // Visual feedback when dragging starts
                marker.getElement()?.querySelector('.polygon-vertex')?.classList.add('dragging');
            });

            marker.on('drag', () => {
                const latlngs = polygonMarkers.value.map(m => m.getLatLng());
                currentPolygon.value?.setLatLngs(latlngs);
            });

            marker.on('dragend', () => {
                marker.getElement()?.querySelector('.polygon-vertex')?.classList.remove('dragging');
                const coords: [number, number][] = polygonMarkers.value.map(m => {
                    const pos = m.getLatLng();
                    return [pos.lat, pos.lng];
                });
                emit('update:polygonCoordinates', coords);
                emitChange();
            });
        }

        polygonMarkers.value.push(marker);
    });

    // Fit bounds
    map.value.fitBounds(currentPolygon.value.getBounds(), { padding: [50, 50] });
};

const clearGeofence = () => {
    if (currentCircle.value) {
        currentCircle.value.remove();
        currentCircle.value = null;
    }
    if (centerMarker.value) {
        centerMarker.value.remove();
        centerMarker.value = null;
    }
    if (currentPolygon.value) {
        currentPolygon.value.remove();
        currentPolygon.value = null;
    }
    polygonMarkers.value.forEach(m => m.remove());
    polygonMarkers.value = [];
    tempPolygonPoints.value = [];
};

const startDrawCircle = () => {
    drawMode.value = 'circle';
    clearGeofence();
    emit('update:geofenceType', 'circle');
};

const startDrawPolygon = () => {
    drawMode.value = 'polygon';
    clearGeofence();
    emit('update:geofenceType', 'polygon');
};

const cancelDraw = () => {
    drawMode.value = 'none';
    tempPolygonPoints.value = [];
    polygonMarkers.value.forEach(m => m.remove());
    polygonMarkers.value = [];
    if (currentPolygon.value) {
        currentPolygon.value.remove();
        currentPolygon.value = null;
    }
};

const getCurrentLocation = () => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
        locationError.value = 'Geolocation is not supported by your browser';
        return;
    }

    // Check if we're in a secure context (HTTPS required for geolocation)
    if (typeof window !== 'undefined' && window.isSecureContext === false) {
        locationError.value = 'Geolocation requires HTTPS. Please use a secure connection.';
        return;
    }

    isGettingLocation.value = true;
    locationError.value = null;

    navigator.geolocation.getCurrentPosition(
        (position) => {
            isGettingLocation.value = false;
            const { latitude, longitude } = position.coords;

            if (map.value) {
                map.value.setView([latitude, longitude], props.zoom);
            }

            // Location mode: just place marker
            if (isLocationMode.value) {
                clearGeofence();
                createLocationMarker(latitude, longitude, false); // Map already centered by setView above
                emit('update:latitude', latitude);
                emit('update:longitude', longitude);
                return;
            }

            // Geofence mode: create circle or just pan for polygon
            if (props.geofenceType === 'circle' || props.geofenceType === 'polygon') {
                if (props.geofenceType === 'circle') {
                    clearGeofence();
                    createCircle(latitude, longitude, localRadius.value);
                    emitChange();
                }
                // For polygon, user needs to click points manually
                // Just emit the location for reference
                emit('update:latitude', latitude);
                emit('update:longitude', longitude);
            }
        },
        (error) => {
            isGettingLocation.value = false;
            // Use numeric codes for better browser compatibility
            // 1 = PERMISSION_DENIED, 2 = POSITION_UNAVAILABLE, 3 = TIMEOUT
            switch (error.code) {
                case 1: // PERMISSION_DENIED
                    locationError.value = 'Location permission denied. Please allow location access in your browser settings.';
                    break;
                case 2: // POSITION_UNAVAILABLE
                    locationError.value = 'Location unavailable. Please check your device GPS settings.';
                    break;
                case 3: // TIMEOUT
                    locationError.value = 'Location request timed out. Please try again.';
                    break;
                default:
                    locationError.value = error.message || 'Failed to get location. Please try again.';
            }
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
};

const resetView = () => {
    if (!map.value) return;

    if (currentCircle.value) {
        map.value.fitBounds(currentCircle.value.getBounds(), { padding: [50, 50] });
    } else if (currentPolygon.value) {
        map.value.fitBounds(currentPolygon.value.getBounds(), { padding: [50, 50] });
    } else {
        map.value.setView([11.5564, 104.9282], 12);
    }
};

const emitChange = () => {
    const geofence: GeofenceData = {
        type: props.geofenceType,
    };

    if (props.geofenceType === 'circle' && centerMarker.value) {
        const pos = centerMarker.value.getLatLng();
        geofence.center = { lat: pos.lat, lng: pos.lng };
        geofence.radius = localRadius.value;
    } else if (props.geofenceType === 'polygon' && polygonMarkers.value.length >= 3) {
        geofence.coordinates = polygonMarkers.value.map(m => {
            const pos = m.getLatLng();
            return [pos.lat, pos.lng];
        });
    }

    emit('geofenceChange', geofence);
};

const switchLayer = (layerKey: 'street' | 'satellite' | 'terrain' | 'dark') => {
    if (!map.value || !L || currentLayer.value === layerKey) return;

    // Remove current layer
    if (tileLayer.value) {
        tileLayer.value.remove();
    }

    // Add new layer
    const layer = mapLayers[layerKey];
    tileLayer.value = L.tileLayer(layer.url, {
        attribution: layer.attribution,
        maxZoom: 19,
    }).addTo(map.value);

    currentLayer.value = layerKey;
};

// Search location using Nominatim (OpenStreetMap)
const searchLocation = async () => {
    if (!searchQuery.value.trim() || searchQuery.value.length < 2) {
        searchResults.value = [];
        showSearchResults.value = false;
        return;
    }

    isSearching.value = true;
    try {
        // Build search URL with proper parameters
        const params = new URLSearchParams({
            format: 'json',
            q: searchQuery.value,
            limit: '10',
            addressdetails: '1',
            extratags: '1',
        });

        // Search globally without country restriction
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?${params.toString()}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Accept-Language': 'en',
                },
            }
        );

        if (!response.ok) {
            throw new Error('Search request failed');
        }

        const data = await response.json();
        searchResults.value = data;
        showSearchResults.value = true; // Show dropdown (either results or "no results" message)
    } catch (error) {
        console.error('Search error:', error);
        searchResults.value = [];
        showSearchResults.value = false;
    } finally {
        isSearching.value = false;
    }
};

const handleSearchInput = () => {
    if (searchTimeout) {
        clearTimeout(searchTimeout);
    }
    searchTimeout = setTimeout(searchLocation, 500);
};

const selectSearchResult = (result: { display_name: string; lat: string; lon: string }) => {
    const lat = parseFloat(result.lat);
    const lng = parseFloat(result.lon);

    if (map.value) {
        map.value.setView([lat, lng], 17);
    }

    // Location mode: place marker
    if (isLocationMode.value) {
        clearGeofence();
        createLocationMarker(lat, lng, false); // Map already centered by setView above
        emit('update:latitude', lat);
        emit('update:longitude', lng);
    }
    // Geofence mode: create circle if circle mode
    else if (props.geofenceType === 'circle') {
        clearGeofence();
        createCircle(lat, lng, localRadius.value);
        emitChange();
    }

    searchQuery.value = result.display_name.split(',')[0];
    showSearchResults.value = false;
    searchResults.value = [];
};

const clearSearch = () => {
    searchQuery.value = '';
    searchResults.value = [];
    showSearchResults.value = false;
};

// Watch for prop changes
watch(() => props.radius, (newRadius) => {
    if (newRadius !== localRadius.value) {
        localRadius.value = newRadius;
        updateCircleRadius(newRadius);
    }
});

// Watch for reference coordinates (outlet location) to center map when outlet changes
// This only centers the map - it does NOT create a zone (user must click to draw)
watch(
    () => [props.referenceLatitude, props.referenceLongitude] as const,
    ([newRefLat, newRefLng]) => {
        if (!map.value || !L || isLoading.value) return;

        // Only center if we don't have zone coordinates yet (Create mode)
        // and the outlet has a valid location
        if (props.latitude == null && props.longitude == null &&
            newRefLat != null && newRefLng != null) {
            map.value.setView([newRefLat, newRefLng], props.zoom);
        }
    }
);

// Watch for latitude/longitude/polygon changes to render zone on Edit page
watch(
    () => [props.latitude, props.longitude, props.geofenceType, props.polygonCoordinates] as const,
    ([newLat, newLng, newType, newPolygon]) => {
        // Only proceed if map is ready and no zone exists yet
        if (!map.value || !L || isLoading.value) return;

        // Skip if we already have a geofence drawn
        if (currentCircle.value || currentPolygon.value || centerMarker.value) return;

        // Render zone based on type
        if (isLocationMode.value) {
            // Location mode: show marker
            if (newLat != null && newLng != null) {
                createLocationMarker(newLat, newLng, true);
            }
        } else {
            // Geofence mode: show circle or polygon
            if (newType === 'circle' && newLat != null && newLng != null) {
                createCircle(newLat, newLng, localRadius.value);
            } else if (newType === 'polygon' && newPolygon?.length && newPolygon.length >= 3) {
                createPolygon(newPolygon);
            }
        }
    },
    { immediate: true }
);

// Computed
const hasGeofence = computed(() => {
    return currentCircle.value !== null || currentPolygon.value !== null;
});

const drawModeLabel = computed(() => {
    if (drawMode.value === 'circle') return 'Click on map to place circle center';
    if (drawMode.value === 'polygon') return 'Click to add points, then click "Finish" to complete';
    return '';
});

// Calculate polygon area in square meters using Shoelace formula
const polygonArea = computed(() => {
    const coords = polygonMarkers.value.length >= 3
        ? polygonMarkers.value.map(m => {
            const pos = m.getLatLng();
            return [pos.lat, pos.lng];
        })
        : [];

    if (coords.length < 3) return 0;

    const n = coords.length;
    const avgLat = coords.reduce((sum, c) => sum + c[0], 0) / n;
    const latScale = 111000; // meters per degree latitude
    const lngScale = 111000 * Math.cos((avgLat * Math.PI) / 180);

    let area = 0;
    for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        const x1 = coords[i][1] * lngScale;
        const y1 = coords[i][0] * latScale;
        const x2 = coords[j][1] * lngScale;
        const y2 = coords[j][0] * latScale;
        area += (x1 * y2) - (x2 * y1);
    }

    return Math.abs(area / 2);
});

// Format area to display with more detail
const formattedArea = computed(() => {
    const area = polygonArea.value;
    const sqFeet = area * 10.7639; // Convert m² to ft²

    if (area >= 1000000) {
        return `${(area / 1000000).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} km²`;
    }
    return `${area.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} m² (${sqFeet.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ft²)`;
});

// Calculate polygon perimeter in meters
const polygonPerimeter = computed(() => {
    if (polygonMarkers.value.length < 2) return 0;

    let perimeter = 0;
    const coords = polygonMarkers.value.map(m => {
        const pos = m.getLatLng();
        return { lat: pos.lat, lng: pos.lng };
    });

    for (let i = 0; i < coords.length; i++) {
        const j = (i + 1) % coords.length;
        perimeter += haversineDistance(coords[i].lat, coords[i].lng, coords[j].lat, coords[j].lng);
    }

    return perimeter;
});

// Haversine distance calculation
const haversineDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371000; // Earth's radius in meters
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

// Format perimeter
const formattedPerimeter = computed(() => {
    const perimeter = polygonPerimeter.value;
    if (perimeter >= 1000) {
        return `${(perimeter / 1000).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} km`;
    }
    return `${perimeter.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} m`;
});
</script>

<template>
    <div class="space-y-4">
        <!-- Search Location -->
        <div v-if="!readonly" class="relative">
            <div class="relative">
                <Search class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    v-model="searchQuery"
                    placeholder="Search location (e.g. Royal University of Phnom Penh, 123 Street...)"
                    class="pl-10 pr-10"
                    @input="handleSearchInput"
                    @focus="showSearchResults = searchQuery.length >= 2"
                />
                <button
                    v-if="searchQuery"
                    type="button"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    @click="clearSearch"
                >
                    <X v-if="!isSearching" class="h-4 w-4" />
                    <Loader2 v-else class="h-4 w-4 animate-spin" />
                </button>
            </div>
            <!-- Search Results Dropdown -->
            <div
                v-if="showSearchResults && searchResults.length > 0"
                class="absolute z-9999 w-full mt-1 bg-background border rounded-lg shadow-lg max-h-60 overflow-auto"
            >
                <button
                    v-for="(result, index) in searchResults"
                    :key="index"
                    type="button"
                    class="w-full px-4 py-2 text-left text-sm hover:bg-accent flex items-start gap-2"
                    @click="selectSearchResult(result)"
                >
                    <MapPin class="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
                    <span class="line-clamp-2">{{ result.display_name }}</span>
                </button>
            </div>
            <!-- No Results -->
            <div
                v-else-if="searchQuery.length >= 2 && !isSearching && searchResults.length === 0 && showSearchResults"
                class="absolute z-9999 w-full mt-1 bg-background border rounded-lg shadow-lg p-4 text-center text-sm text-muted-foreground"
            >
                No locations found. Try a more specific search like "University of Phnom Penh" or include the city name.
            </div>
        </div>

        <!-- Clean Toolbar -->
        <div v-if="!readonly" class="flex items-center justify-between gap-2">
            <!-- Draw Tools (hidden in location mode) -->
            <div v-if="!isLocationMode" class="flex items-center gap-1 bg-background border rounded-lg p-1">
                <button
                    type="button"
                    :class="[
                        'flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md transition-all',
                        drawMode === 'circle'
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                    ]"
                    @click="startDrawCircle"
                >
                    <Circle class="h-4 w-4" />
                    <span>Circle</span>
                </button>
                <button
                    type="button"
                    :class="[
                        'flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md transition-all',
                        drawMode === 'polygon'
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                    ]"
                    @click="startDrawPolygon"
                >
                    <Hexagon class="h-4 w-4" />
                    <span>Polygon</span>
                </button>
            </div>

            <!-- Location mode hint -->
            <div v-else class="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin class="h-4 w-4" />
                <span>Click on the map to set location</span>
            </div>

            <!-- Actions -->
            <div class="flex items-center gap-1">
                <button
                    type="button"
                    class="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border bg-background hover:bg-muted transition-all"
                    :disabled="isGettingLocation"
                    @click="getCurrentLocation"
                >
                    <Navigation :class="['h-4 w-4', isGettingLocation ? 'animate-spin' : '']" />
                    <span class="hidden sm:inline">{{ isGettingLocation ? 'Getting...' : 'My Location' }}</span>
                </button>
                <button
                    v-if="hasGeofence || centerMarker"
                    type="button"
                    class="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border bg-background hover:bg-destructive hover:text-destructive-foreground transition-all"
                    @click="clearGeofence"
                >
                    <Trash2 class="h-4 w-4" />
                    <span class="hidden sm:inline">Clear</span>
                </button>
                <button
                    type="button"
                    class="p-1.5 rounded-md border bg-background hover:bg-muted transition-all"
                    @click="resetView"
                >
                    <RotateCcw class="h-4 w-4" />
                </button>
            </div>

            <!-- Layer Switcher -->
            <div class="hidden md:flex items-center gap-1 bg-background border rounded-lg p-1">
                <button
                    v-for="(layer, key) in mapLayers"
                    :key="key"
                    type="button"
                    :class="[
                        'px-2.5 py-1 text-xs rounded-md transition-all',
                        currentLayer === key
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                    ]"
                    @click="switchLayer(key as 'street' | 'satellite' | 'terrain' | 'dark')"
                >
                    {{ layer.name.replace(' Map', '').replace(' Mode', '') }}
                </button>
            </div>
        </div>

        <!-- Draw mode indicator (hidden in location mode) -->
        <div v-if="!isLocationMode && drawMode !== 'none'" class="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400">
            <Crosshair class="h-4 w-4 animate-pulse" />
            <span class="text-sm font-medium">{{ drawModeLabel }}</span>
            <div class="flex-1" />
            <button
                v-if="drawMode === 'polygon' && tempPolygonPoints.length >= 3"
                type="button"
                class="px-3 py-1 text-sm font-medium bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                @click="finishPolygon"
            >
                Finish
            </button>
            <button
                type="button"
                class="px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                @click="cancelDraw"
            >
                Cancel
            </button>
        </div>

        <!-- Error message -->
        <div
            v-if="locationError"
            class="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400"
        >
            <MapPin class="h-4 w-4" />
            <span class="text-sm">{{ locationError }}</span>
            <button type="button" class="ml-auto text-xs hover:underline" @click="locationError = null">Dismiss</button>
        </div>

        <!-- Map container -->
        <div
            ref="mapContainer"
            :style="{ height }"
            class="rounded-lg overflow-hidden relative"
        >
            <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
        </div>

        <!-- Circle radius control (hidden in location mode) -->
        <div v-if="!isLocationMode && geofenceType === 'circle' && !readonly && hasGeofence" class="flex items-center gap-4 px-4 py-3 bg-muted/50 rounded-lg">
            <div class="flex items-center gap-2 shrink-0">
                <Circle class="h-4 w-4 text-blue-500" />
                <span class="text-sm font-medium">Radius</span>
            </div>
            <div class="flex-1 px-2">
                <Slider
                    v-model="radiusSliderValue"
                    :min="10"
                    :max="10000"
                    :step="10"
                />
            </div>
            <Badge variant="outline" class="font-mono text-sm">{{ localRadius >= 1000 ? (localRadius / 1000).toFixed(1) + 'km' : localRadius + 'm' }}</Badge>
        </div>

        <!-- Polygon info (hidden in location mode) -->
        <div v-if="!isLocationMode && geofenceType === 'polygon' && polygonMarkers.length >= 3" class="px-4 py-3 bg-green-500/10 rounded-lg space-y-2">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <Hexagon class="h-4 w-4" />
                    <span class="text-sm font-medium">{{ polygonMarkers.length }} points</span>
                </div>
                <span class="text-xs text-muted-foreground">Drag points to adjust</span>
            </div>
            <div class="grid grid-cols-2 gap-3 text-sm">
                <div>
                    <p class="text-xs text-muted-foreground mb-0.5">Total Area</p>
                    <p class="font-medium text-green-600 dark:text-green-400">{{ formattedArea }}</p>
                </div>
                <div>
                    <p class="text-xs text-muted-foreground mb-0.5">Total Distance</p>
                    <p class="font-medium text-green-600 dark:text-green-400">{{ formattedPerimeter }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.custom-marker,
.location-marker {
    background: transparent !important;
    border: none !important;
}

.polygon-point-marker {
    background: transparent !important;
    border: none !important;
    z-index: 2000 !important;
}

.polygon-point-marker > div {
    pointer-events: auto !important;
}

.polygon-vertex {
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.polygon-vertex:hover {
    transform: scale(1.2);
    box-shadow: 0 4px 12px rgba(0,0,0,0.5) !important;
    cursor: grab !important;
}

.polygon-vertex.dragging {
    transform: scale(1.3);
    box-shadow: 0 6px 16px rgba(34, 197, 94, 0.6) !important;
    cursor: grabbing !important;
}

.leaflet-container {
    font-family: inherit;
}

.leaflet-marker-draggable {
    cursor: grab !important;
}

.leaflet-marker-draggable:active {
    cursor: grabbing !important;
}
</style>
