import { ref, computed } from 'vue';
import { router } from '@inertiajs/vue3';

export interface LoadingStep {
    label: string;
    completed: boolean;
}

export interface PreviewStats {
    total: number;
    ready: number;
    update: number;
    skip: number;
    error: number;
}

export interface DuplicateOption {
    value: string;
    label: string;
    description: string;
}

export interface UseImportOptions {
    previewUrl: string;
    importUrl: string;
    listUrl: string;
    templateUrl: string;
}

export function useImport<T extends { row_number: number; status: string; errors: string[]; warnings: string[]; is_duplicate?: boolean }>(
    options: UseImportOptions
) {
    // State
    const currentStep = ref<'upload' | 'preview' | 'importing' | 'complete'>('upload');
    const selectedFile = ref<File | null>(null);
    const fileInput = ref<HTMLInputElement | null>(null);
    const dragActive = ref(false);
    const duplicateHandling = ref<string>('skip');
    const errors = ref<{ file?: string }>({});

    // Preview state
    const previewLoading = ref(false);
    const previewData = ref<T[]>([]);
    const previewStats = ref<PreviewStats | null>(null);
    const previewError = ref<string | null>(null);

    // Loading steps
    const loadingSteps = ref<LoadingStep[]>([
        { label: 'Reading file contents', completed: false },
        { label: 'Validating data format', completed: false },
        { label: 'Checking for duplicates', completed: false },
        { label: 'Preparing preview', completed: false },
    ]);

    // Import state
    const importProgress = ref(0);
    const importProcessing = ref(false);

    // Computed
    const canProceedToPreview = computed(() => selectedFile.value !== null);
    const canImport = computed(() => previewStats.value && previewStats.value.ready + previewStats.value.update > 0);
    const importCount = computed(() => previewStats.value ? previewStats.value.ready + previewStats.value.update : 0);

    // Loading helpers
    const resetLoadingSteps = () => {
        loadingSteps.value = loadingSteps.value.map(step => ({ ...step, completed: false }));
    };

    const simulateLoadingSteps = () => {
        const delays = [300, 600, 900, 1200];
        delays.forEach((delay, index) => {
            setTimeout(() => {
                if (previewLoading.value && index < loadingSteps.value.length) {
                    loadingSteps.value[index].completed = true;
                }
            }, delay);
        });
    };

    const startLoading = () => {
        previewLoading.value = true;
        resetLoadingSteps();
        simulateLoadingSteps();
    };

    const stopLoading = () => {
        previewLoading.value = false;
    };

    // File handling
    const handleFileSelect = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files[0]) {
            selectedFile.value = target.files[0];
            errors.value = {};
            previewData.value = [];
            previewStats.value = null;
            previewError.value = null;
        }
    };

    const handleDrop = (event: DragEvent) => {
        event.preventDefault();
        dragActive.value = false;
        if (event.dataTransfer?.files && event.dataTransfer.files[0]) {
            const file = event.dataTransfer.files[0];
            if (isValidFile(file)) {
                selectedFile.value = file;
                errors.value = {};
                previewData.value = [];
                previewStats.value = null;
                previewError.value = null;
            }
        }
    };

    const handleDragOver = (event: DragEvent) => {
        event.preventDefault();
        dragActive.value = true;
    };

    const handleDragLeave = () => {
        dragActive.value = false;
    };

    const isValidFile = (file: File): boolean => {
        const validTypes = [
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.ms-excel',
            'text/csv',
        ];
        return validTypes.includes(file.type) || file.name.endsWith('.xlsx') || file.name.endsWith('.xls') || file.name.endsWith('.csv');
    };

    const removeFile = () => {
        selectedFile.value = null;
        errors.value = {};
        previewData.value = [];
        previewStats.value = null;
        if (fileInput.value) {
            fileInput.value.value = '';
        }
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    // Preview
    const handlePreview = async () => {
        if (!selectedFile.value) return;

        startLoading();
        previewError.value = null;

        const formData = new FormData();
        formData.append('file', selectedFile.value);
        formData.append('duplicate_handling', duplicateHandling.value);

        try {
            const response = await fetch(options.previewUrl, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                    'Accept': 'application/json',
                },
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                previewData.value = data.preview;
                previewStats.value = data.stats;
                currentStep.value = 'preview';
            } else {
                previewError.value = data.message || 'Preview failed';
            }
        } catch (e) {
            previewError.value = 'Failed to preview file. Please try again.';
        } finally {
            stopLoading();
        }
    };

    // Import
    const handleImport = () => {
        if (!selectedFile.value) return;

        importProcessing.value = true;
        currentStep.value = 'importing';
        importProgress.value = 0;

        const progressInterval = setInterval(() => {
            if (importProgress.value < 90) {
                importProgress.value += 10;
            }
        }, 200);

        router.post(options.importUrl, {
            file: selectedFile.value,
            duplicate_handling: duplicateHandling.value,
        }, {
            forceFormData: true,
            onSuccess: () => {
                clearInterval(progressInterval);
                importProgress.value = 100;
                currentStep.value = 'complete';
            },
            onError: (errs) => {
                clearInterval(progressInterval);
                errors.value = errs as { file?: string };
                currentStep.value = 'preview';
            },
            onFinish: () => {
                importProcessing.value = false;
            },
        });
    };

    // Navigation
    const handleBack = () => {
        router.visit(options.listUrl);
    };

    const handleBackToUpload = () => {
        currentStep.value = 'upload';
        previewData.value = [];
        previewStats.value = null;
    };

    const handleDownloadTemplate = () => {
        window.location.href = options.templateUrl;
    };

    // Duplicate handling
    const handleDuplicateChange = (value: string | number | boolean | bigint | Record<string, unknown> | null | undefined) => {
        if (typeof value === 'string') {
            duplicateHandling.value = value;
        }
    };

    return {
        // State
        currentStep,
        selectedFile,
        fileInput,
        dragActive,
        duplicateHandling,
        errors,
        previewLoading,
        previewData,
        previewStats,
        previewError,
        loadingSteps,
        importProgress,
        importProcessing,

        // Computed
        canProceedToPreview,
        canImport,
        importCount,

        // Methods
        handleFileSelect,
        handleDrop,
        handleDragOver,
        handleDragLeave,
        removeFile,
        formatFileSize,
        handlePreview,
        handleImport,
        handleBack,
        handleBackToUpload,
        handleDownloadTemplate,
        handleDuplicateChange,
    };
}
