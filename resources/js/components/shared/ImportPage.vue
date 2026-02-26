<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import ImportLoadingOverlay from '@/components/shared/ImportLoadingOverlay.vue';
import { useImport, type DuplicateOption } from '@/composables/useImport';
import {
    ArrowLeft,
    Upload,
    Download,
    FileSpreadsheet,
    AlertCircle,
    CheckCircle,
    XCircle,
    AlertTriangle,
    RefreshCcw,
    ChevronRight,
    ChevronLeft,
    Eye,
    Loader2,
} from 'lucide-vue-next';
import type { BreadcrumbItem } from '@/types';

export interface TableColumn {
    key: string;
    label: string;
    minWidth?: string;
    render?: (row: Record<string, unknown>) => string;
}

export interface ImportPageProps {
    title: string;
    entityName: string;
    entityNamePlural: string;
    breadcrumbs: BreadcrumbItem[];
    duplicateOptions: DuplicateOption[];
    previewUrl: string;
    importUrl: string;
    listUrl: string;
    templateUrl: string;
    requiredFieldsText: string;
    availableColumns: string[];
    previewColumns: TableColumn[];
}

const props = defineProps<ImportPageProps>();

const {
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
    canProceedToPreview,
    canImport,
    importCount,
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
} = useImport({
    previewUrl: props.previewUrl,
    importUrl: props.importUrl,
    listUrl: props.listUrl,
    templateUrl: props.templateUrl,
});

const getStatusBadge = (status: string) => {
    switch (status) {
        case 'ready':
            return { variant: 'default' as const, label: 'Ready', icon: CheckCircle };
        case 'update':
            return { variant: 'secondary' as const, label: 'Update', icon: RefreshCcw };
        case 'skip':
            return { variant: 'outline' as const, label: 'Skip', icon: AlertTriangle };
        case 'error':
            return { variant: 'destructive' as const, label: 'Error', icon: XCircle };
        default:
            return { variant: 'default' as const, label: status, icon: CheckCircle };
    }
};

const getCellValue = (row: Record<string, unknown>, column: TableColumn): string => {
    if (column.render) {
        return column.render(row);
    }
    const value = row[column.key];
    if (value === null || value === undefined || value === '') {
        return '-';
    }
    return String(value);
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <Head :title="`Import ${entityNamePlural}`" />

        <!-- Loading Overlay -->
        <ImportLoadingOverlay
            :is-loading="previewLoading"
            title="Analyzing File"
            :description="`Please wait while we validate your ${entityName} data...`"
            :steps="loadingSteps"
        />

        <div class="flex h-full flex-1 flex-col gap-6 p-6">
            <!-- Header -->
            <div class="flex items-center gap-4">
                <Button variant="ghost" size="icon" @click="handleBack">
                    <ArrowLeft class="h-4 w-4" />
                </Button>
                <div>
                    <h1 class="text-2xl font-bold">{{ title }}</h1>
                    <p class="text-sm text-muted-foreground">
                        Upload an Excel or CSV file to import {{ entityNamePlural.toLowerCase() }}
                    </p>
                </div>
            </div>

            <!-- Step Indicator -->
            <div class="flex items-center justify-center gap-2">
                <div :class="['flex items-center gap-2 px-4 py-2 rounded-full text-sm', currentStep === 'upload' ? 'bg-primary text-primary-foreground' : 'bg-muted']">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-background text-foreground text-xs font-medium">1</span>
                    <span class="hidden sm:inline">Upload</span>
                </div>
                <ChevronRight class="h-4 w-4 text-muted-foreground" />
                <div :class="['flex items-center gap-2 px-4 py-2 rounded-full text-sm', currentStep === 'preview' ? 'bg-primary text-primary-foreground' : 'bg-muted']">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-background text-foreground text-xs font-medium">2</span>
                    <span class="hidden sm:inline">Preview</span>
                </div>
                <ChevronRight class="h-4 w-4 text-muted-foreground" />
                <div :class="['flex items-center gap-2 px-4 py-2 rounded-full text-sm', currentStep === 'importing' || currentStep === 'complete' ? 'bg-primary text-primary-foreground' : 'bg-muted']">
                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-background text-foreground text-xs font-medium">3</span>
                    <span class="hidden sm:inline">Import</span>
                </div>
            </div>

            <!-- Step: Upload -->
            <div v-if="currentStep === 'upload'" class="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Upload File</CardTitle>
                        <CardDescription>
                            Select an Excel (.xlsx, .xls) or CSV file to import {{ entityNamePlural.toLowerCase() }}
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <!-- Drop Zone -->
                        <div
                            :class="[
                                'border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer',
                                dragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25 hover:border-primary/50',
                                selectedFile ? 'bg-muted/50' : '',
                            ]"
                            @click="fileInput?.click()"
                            @drop="handleDrop"
                            @dragover="handleDragOver"
                            @dragleave="handleDragLeave"
                        >
                            <input
                                ref="fileInput"
                                type="file"
                                class="hidden"
                                accept=".xlsx,.xls,.csv"
                                @change="handleFileSelect"
                            />
                            <div v-if="!selectedFile" class="space-y-2">
                                <Upload class="mx-auto h-10 w-10 text-muted-foreground" />
                                <p class="text-sm text-muted-foreground">
                                    Drag and drop your file here, or click to browse
                                </p>
                                <p class="text-xs text-muted-foreground">
                                    Supported formats: .xlsx, .xls, .csv (max 10MB)
                                </p>
                            </div>
                            <div v-else class="space-y-2">
                                <FileSpreadsheet class="mx-auto h-10 w-10 text-green-600" />
                                <p class="font-medium">{{ selectedFile.name }}</p>
                                <p class="text-sm text-muted-foreground">
                                    {{ formatFileSize(selectedFile.size) }}
                                </p>
                                <Button variant="outline" size="sm" @click.stop="removeFile">
                                    Remove File
                                </Button>
                            </div>
                        </div>

                        <!-- Duplicate Handling -->
                        <div class="space-y-2">
                            <Label>Duplicate Handling</Label>
                            <Select :model-value="duplicateHandling" @update:model-value="handleDuplicateChange">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select duplicate handling" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem
                                        v-for="option in duplicateOptions"
                                        :key="option.value"
                                        :value="option.value"
                                    >
                                        <div class="flex flex-col">
                                            <span>{{ option.label }}</span>
                                            <span class="text-xs text-muted-foreground">{{ option.description }}</span>
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <!-- Error -->
                        <Alert v-if="errors.file || previewError" variant="destructive">
                            <AlertCircle class="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{{ errors.file || previewError }}</AlertDescription>
                        </Alert>

                        <!-- Actions -->
                        <div class="flex items-center gap-2">
                            <Button
                                :disabled="!canProceedToPreview || previewLoading"
                                @click="handlePreview"
                            >
                                <Loader2 v-if="previewLoading" class="mr-2 h-4 w-4 animate-spin" />
                                <Eye v-else class="mr-2 h-4 w-4" />
                                {{ previewLoading ? 'Analyzing...' : 'Preview Import' }}
                            </Button>
                            <Button variant="outline" @click="handleBack">
                                Cancel
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <!-- Instructions Card -->
                <Card>
                    <CardHeader>
                        <CardTitle>Import Instructions</CardTitle>
                        <CardDescription>
                            Follow these steps for a successful import
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <ol class="list-decimal list-inside space-y-2 text-sm">
                            <li>Download the import template using the button below</li>
                            <li>Fill in the {{ entityName }} data following the template format</li>
                            <li>Save the file as .xlsx, .xls, or .csv</li>
                            <li>Upload the file and preview before importing</li>
                        </ol>

                        <Alert>
                            <AlertCircle class="h-4 w-4" />
                            <AlertTitle>Required Fields</AlertTitle>
                            <AlertDescription>{{ requiredFieldsText }}</AlertDescription>
                        </Alert>

                        <div class="space-y-2">
                            <Label class="text-sm font-medium">Available Columns</Label>
                            <div class="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                                <span v-for="col in availableColumns" :key="col">{{ col }}</span>
                            </div>
                        </div>

                        <Button variant="outline" class="w-full" @click="handleDownloadTemplate">
                            <Download class="mr-2 h-4 w-4" />
                            Download Template
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <!-- Step: Preview -->
            <Card v-if="currentStep === 'preview'" class="w-full">
                <CardHeader>
                    <div class="flex items-center justify-between">
                        <div>
                            <CardTitle>Preview Import Data</CardTitle>
                            <CardDescription>
                                Review the data before importing. Fix any errors and try again if needed.
                            </CardDescription>
                        </div>
                        <div v-if="previewStats" class="flex gap-2">
                            <Badge variant="default">{{ previewStats.ready }} Ready</Badge>
                            <Badge v-if="previewStats.update > 0" variant="secondary">{{ previewStats.update }} Update</Badge>
                            <Badge v-if="previewStats.skip > 0" variant="outline">{{ previewStats.skip }} Skip</Badge>
                            <Badge v-if="previewStats.error > 0" variant="destructive">{{ previewStats.error }} Errors</Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div class="overflow-x-auto rounded-md border bg-white dark:bg-zinc-950">
                        <div class="max-h-[400px] overflow-y-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead class="w-16 sticky top-0 bg-white dark:bg-zinc-950 z-10 border-b">Row</TableHead>
                                        <TableHead class="w-24 sticky top-0 bg-white dark:bg-zinc-950 z-10 border-b">Status</TableHead>
                                        <TableHead
                                            v-for="column in previewColumns"
                                            :key="column.key"
                                            :class="[
                                                'sticky top-0 bg-white dark:bg-zinc-950 z-10 border-b',
                                                column.minWidth ? `min-w-[${column.minWidth}]` : 'min-w-[120px]'
                                            ]"
                                            :style="column.minWidth ? { minWidth: column.minWidth } : {}"
                                        >
                                            {{ column.label }}
                                        </TableHead>
                                        <TableHead class="min-w-[200px] sticky top-0 bg-white dark:bg-zinc-950 z-10 border-b">Issues</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow
                                        v-for="row in previewData"
                                        :key="row.row_number"
                                        :class="{ 'bg-destructive/10': row.status === 'error' }"
                                    >
                                        <TableCell class="font-medium">{{ row.row_number }}</TableCell>
                                        <TableCell>
                                            <Badge :variant="getStatusBadge(row.status).variant" class="gap-1">
                                                <component :is="getStatusBadge(row.status).icon" class="h-3 w-3" />
                                                {{ getStatusBadge(row.status).label }}
                                            </Badge>
                                        </TableCell>
                                        <TableCell v-for="column in previewColumns" :key="column.key">
                                            <div class="flex items-center gap-1">
                                                {{ getCellValue(row as unknown as Record<string, unknown>, column) }}
                                                <Badge v-if="column.key === 'code' && row.is_duplicate" variant="outline" class="text-xs">Duplicate</Badge>
                                                <Badge v-if="column.key === 'name' && row.is_duplicate && !previewColumns.find(c => c.key === 'code')" variant="outline" class="text-xs">Duplicate</Badge>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div v-if="row.errors.length" class="text-xs text-destructive whitespace-nowrap">
                                                {{ row.errors.join(', ') }}
                                            </div>
                                            <div v-if="row.warnings.length" class="text-xs text-orange-600 whitespace-nowrap">
                                                {{ row.warnings.join(', ') }}
                                            </div>
                                            <span v-if="!row.errors.length && !row.warnings.length" class="text-muted-foreground">-</span>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </CardContent>
                <CardFooter class="flex justify-between">
                    <Button variant="outline" @click="handleBackToUpload">
                        <ChevronLeft class="mr-2 h-4 w-4" />
                        Back to Upload
                    </Button>
                    <div class="flex gap-2">
                        <Button variant="outline" @click="handleBack">Cancel</Button>
                        <Button :disabled="!canImport" @click="handleImport">
                            <Upload class="mr-2 h-4 w-4" />
                            Import {{ importCount }} {{ entityNamePlural }}
                        </Button>
                    </div>
                </CardFooter>
            </Card>

        </div>

        <!-- Full Page Importing Overlay -->
        <Teleport to="body">
            <Transition
                enter-active-class="transition-opacity duration-200"
                leave-active-class="transition-opacity duration-150"
                enter-from-class="opacity-0"
                leave-to-class="opacity-0"
            >
                <div
                    v-if="currentStep === 'importing'"
                    class="fixed inset-0 z-100 flex items-center justify-center bg-background/95 backdrop-blur-sm"
                >
                    <div class="flex flex-col items-center gap-6 p-8 rounded-xl bg-card border shadow-lg max-w-sm w-full mx-4">
                        <!-- Animated Spinner -->
                        <div class="relative flex items-center justify-center">
                            <div class="absolute h-16 w-16 rounded-full border-[3px] border-muted" />
                            <div class="absolute h-16 w-16 rounded-full border-[3px] border-transparent border-t-primary animate-spin" />
                            <Upload class="h-7 w-7 text-primary" />
                        </div>

                        <!-- Title & Description -->
                        <div class="text-center space-y-1.5">
                            <h3 class="text-lg font-semibold text-foreground">Importing {{ entityNamePlural }}</h3>
                            <p class="text-sm text-muted-foreground">Please wait while we import your data...</p>
                        </div>

                        <!-- Progress -->
                        <div class="w-full space-y-2">
                            <Progress :model-value="importProgress" class="w-full h-2" />
                            <p class="text-center text-sm font-medium text-foreground">{{ importProgress }}%</p>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>

        <!-- Full Page Complete Overlay -->
        <Teleport to="body">
            <Transition
                enter-active-class="transition-opacity duration-200"
                leave-active-class="transition-opacity duration-150"
                enter-from-class="opacity-0"
                leave-to-class="opacity-0"
            >
                <div
                    v-if="currentStep === 'complete'"
                    class="fixed inset-0 z-100 flex items-center justify-center bg-background/95 backdrop-blur-sm"
                >
                    <div class="flex flex-col items-center gap-6 p-8 rounded-xl bg-card border shadow-lg max-w-sm w-full mx-4">
                        <!-- Success Icon -->
                        <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                            <CheckCircle class="h-8 w-8 text-green-600 dark:text-green-400" />
                        </div>

                        <!-- Title & Description -->
                        <div class="text-center space-y-1.5">
                            <h3 class="text-lg font-semibold text-foreground">Import Complete</h3>
                            <p class="text-sm text-muted-foreground">Redirecting to {{ entityName }} list...</p>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </AppLayout>
</template>
