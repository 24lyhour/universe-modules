// Stub file for wayfinder - used in production when wayfinder plugin is disabled

export type RouteQueryOptions = {
    query?: Record<string, string | number | boolean | null | undefined>;
    mergeQuery?: Record<string, string | number | boolean | null | undefined>;
};

export type RouteDefinition<T extends string | string[] = string> = {
    url: string;
    method: T extends string[] ? T[number] : T;
};

export type RouteFormDefinition<T extends string> = {
    action: string;
    method: T;
};

export function queryParams(options?: RouteQueryOptions): string {
    if (!options?.query && !options?.mergeQuery) return '';
    const params = options.query ?? options.mergeQuery ?? {};
    const entries = Object.entries(params).filter(([, v]) => v != null);
    if (entries.length === 0) return '';
    return '?' + new URLSearchParams(entries.map(([k, v]) => [k, String(v)])).toString();
}

export function applyUrlDefaults<T extends Record<string, unknown>>(
    url: string,
    defaults: T,
    params?: Partial<T>
): string {
    let result = url;
    const merged = { ...defaults, ...params };
    for (const [key, value] of Object.entries(merged)) {
        result = result.replace(`{${key}}`, String(value));
        result = result.replace(`{${key}?}`, value ? String(value) : '');
    }
    return result;
}

export function validateParameters<T extends Record<string, unknown>>(
    params: T,
    required: (keyof T)[]
): void {
    for (const key of required) {
        if (params[key] === undefined || params[key] === null) {
            throw new Error(`Missing required parameter: ${String(key)}`);
        }
    }
}
