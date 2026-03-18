export type GeofenceType = 'circle' | 'polygon' | 'dynamic';

export interface LatLng {
    lat: number;
    lng: number;
}

export interface GeofenceData {
    type: GeofenceType;
    // Circle
    center?: LatLng;
    radius?: number;
    // Polygon
    coordinates?: [number, number][];
    area?: number;
    // Dynamic
    referenceEmployeeId?: number;
    dynamicRadius?: number;
}

export interface GeofenceMapProps {
    // Map display
    height?: string;
    zoom?: number;
    readonly?: boolean;
    // Geofence type
    geofenceType?: GeofenceType;
    // Circle geofence
    latitude?: number | null;
    longitude?: number | null;
    radius?: number;
    // Polygon geofence
    polygonCoordinates?: [number, number][] | null;
    // Dynamic geofence (read-only display)
    referenceLatitude?: number | null;
    referenceLongitude?: number | null;
    dynamicRadius?: number;
}

export interface GeofenceMapEmits {
    'update:latitude': [value: number | null];
    'update:longitude': [value: number | null];
    'update:radius': [value: number];
    'update:polygonCoordinates': [value: [number, number][]];
    'update:geofenceType': [value: GeofenceType];
    geofenceChange: [geofence: GeofenceData];
}
