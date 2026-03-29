import { ref, onMounted, onUnmounted } from 'vue';

/**
 * Format a date string to relative time (e.g., "just now", "5 minutes ago")
 */
export const formatRelativeTime = (date: string | Date): string => {
    const now = new Date();
    const targetDate = typeof date === 'string' ? new Date(date) : date;
    const diffInSeconds = Math.floor((now.getTime() - targetDate.getTime()) / 1000);

    // Future dates
    if (diffInSeconds < 0) {
        return formatFutureTime(Math.abs(diffInSeconds));
    }

    // Past dates
    if (diffInSeconds < 10) {
        return 'just now';
    }

    if (diffInSeconds < 60) {
        return `${diffInSeconds} seconds ago`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return diffInMinutes === 1 ? '1 minute ago' : `${diffInMinutes} minutes ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
        return diffInDays === 1 ? 'yesterday' : `${diffInDays} days ago`;
    }

    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
        return diffInWeeks === 1 ? '1 week ago' : `${diffInWeeks} weeks ago`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
        return diffInMonths === 1 ? '1 month ago' : `${diffInMonths} months ago`;
    }

    const diffInYears = Math.floor(diffInDays / 365);
    return diffInYears === 1 ? '1 year ago' : `${diffInYears} years ago`;
};

/**
 * Format future time (e.g., "in 5 minutes", "in 2 hours")
 */
const formatFutureTime = (diffInSeconds: number): string => {
    if (diffInSeconds < 60) {
        return 'in a moment';
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return diffInMinutes === 1 ? 'in 1 minute' : `in ${diffInMinutes} minutes`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return diffInHours === 1 ? 'in 1 hour' : `in ${diffInHours} hours`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
        return diffInDays === 1 ? 'tomorrow' : `in ${diffInDays} days`;
    }

    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
        return diffInWeeks === 1 ? 'in 1 week' : `in ${diffInWeeks} weeks`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    return diffInMonths === 1 ? 'in 1 month' : `in ${diffInMonths} months`;
};

/**
 * Check if a date is recent (within specified minutes, default 60)
 */
export const isRecentDate = (date: string | Date, withinMinutes: number = 60): boolean => {
    const now = new Date();
    const targetDate = typeof date === 'string' ? new Date(date) : date;
    const diffInMinutes = Math.floor((now.getTime() - targetDate.getTime()) / (1000 * 60));
    return diffInMinutes >= 0 && diffInMinutes < withinMinutes;
};

/**
 * Check if a date is "just now" (within last 60 seconds)
 */
export const isJustNow = (date: string | Date): boolean => {
    const now = new Date();
    const targetDate = typeof date === 'string' ? new Date(date) : date;
    const diffInSeconds = Math.floor((now.getTime() - targetDate.getTime()) / 1000);
    return diffInSeconds >= 0 && diffInSeconds < 60;
};

/**
 * Composable that provides reactive relative time with auto-refresh
 */
export const useRelativeTime = (refreshIntervalMs: number = 60000) => {
    const currentTime = ref(new Date());
    let intervalId: ReturnType<typeof setInterval> | null = null;

    onMounted(() => {
        // Update current time periodically for reactive relative times
        intervalId = setInterval(() => {
            currentTime.value = new Date();
        }, refreshIntervalMs);
    });

    onUnmounted(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
    });

    return {
        currentTime,
        formatRelativeTime,
        isRecentDate,
        isJustNow,
    };
};

export default useRelativeTime;
