declare global {
    interface Window {
        turnstile: {
            render: (
                container: HTMLElement,
                options: {
                    sitekey: string;
                    theme?: 'light' | 'dark' | 'auto';
                    size?: 'normal' | 'compact';
                    // Callbacks
                    callback?: (token: string) => void;
                    'error-callback'?: () => void;
                    'expired-callback'?: () => void;
                    'timeout-callback'?: () => void;
                    // Advanced options
                    retry?: 'auto' | 'never';
                    'retry-interval'?: number;
                    'refresh-expired'?: 'auto' | 'manual' | 'never';
                    'response-field'?: boolean;
                    'response-field-name'?: string;
                    action?: string;
                    cData?: string;
                    tabindex?: number;
                    appearance?: 'always' | 'execute' | 'interaction-only';
                    language?: string;
                }
            ) => string;
            reset: (widgetId: string) => void;
            remove: (widgetId: string) => void;
            getResponse: (widgetId: string) => string | undefined;
            isExpired: (widgetId: string) => boolean;
        };
    }
}

export {};
