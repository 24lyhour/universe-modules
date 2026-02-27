<script setup lang="ts">
import AlertError from '@/components/AlertError.vue';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import { Spinner } from '@/components/ui/spinner';
import { useTwoFactorAuth } from '@/composables/useTwoFactorAuth';
import { confirm } from '@/routes/two-factor';
import { Form } from '@inertiajs/vue3';
import { useClipboard } from '@vueuse/core';
import { Check, Copy, Download, Mail, MessageCircle, ScanLine, Send, Share2 } from 'lucide-vue-next';
import { computed, nextTick, ref, useTemplateRef, watch } from 'vue';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Props {
    requiresConfirmation: boolean;
    twoFactorEnabled: boolean;
}

const props = defineProps<Props>();
const isOpen = defineModel<boolean>('isOpen');

const { copy, copied } = useClipboard();
const { qrCodeSvg, manualSetupKey, clearSetupData, fetchSetupData, errors } =
    useTwoFactorAuth();

const showVerificationStep = ref(false);
const code = ref<string>('');

const pinInputContainerRef = useTemplateRef('pinInputContainerRef');

const modalConfig = computed<{
    title: string;
    description: string;
    buttonText: string;
}>(() => {
    if (props.twoFactorEnabled) {
        return {
            title: 'Two-Factor Authentication Enabled',
            description:
                'Two-factor authentication is now enabled. Scan the QR code or enter the setup key in your authenticator app.',
            buttonText: 'Close',
        };
    }

    if (showVerificationStep.value) {
        return {
            title: 'Verify Authentication Code',
            description: 'Enter the 6-digit code from your authenticator app',
            buttonText: 'Continue',
        };
    }

    return {
        title: 'Enable Two-Factor Authentication',
        description:
            'To finish enabling two-factor authentication, scan the QR code or enter the setup key in your authenticator app',
        buttonText: 'Continue',
    };
});

const handleModalNextStep = () => {
    if (props.requiresConfirmation) {
        showVerificationStep.value = true;

        nextTick(() => {
            pinInputContainerRef.value?.querySelector('input')?.focus();
        });

        return;
    }

    clearSetupData();
    isOpen.value = false;
};

const resetModalState = () => {
    if (props.twoFactorEnabled) {
        clearSetupData();
    }

    showVerificationStep.value = false;
    code.value = '';
};

watch(
    () => isOpen.value,
    async (isOpen) => {
        if (!isOpen) {
            resetModalState();
            return;
        }

        if (!qrCodeSvg.value) {
            await fetchSetupData();
        }
    },
);

// QR Code sharing functionality
const qrContainerRef = useTemplateRef('qrContainerRef');

const convertSvgToBlob = async (): Promise<Blob | null> => {
    if (!qrCodeSvg.value) return null;

    const svgElement = qrContainerRef.value?.querySelector('svg');
    if (!svgElement) return null;

    // Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Set canvas size
    canvas.width = 512;
    canvas.height = 512;

    // Fill white background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Convert SVG to image
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            // Draw with padding
            const padding = 40;
            ctx.drawImage(
                img,
                padding,
                padding,
                canvas.width - padding * 2,
                canvas.height - padding * 2
            );
            URL.revokeObjectURL(url);

            canvas.toBlob((blob) => {
                resolve(blob);
            }, 'image/png');
        };
        img.onerror = () => {
            URL.revokeObjectURL(url);
            resolve(null);
        };
        img.src = url;
    });
};

const downloadQrCode = async () => {
    const blob = await convertSvgToBlob();
    if (!blob) return;

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = '2fa-qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

const shareQrCode = async () => {
    const blob = await convertSvgToBlob();
    if (!blob) return;

    const file = new File([blob], '2fa-qr-code.png', { type: 'image/png' });

    try {
        await navigator.share({
            title: 'Two-Factor Authentication QR Code',
            text: 'Scan this QR code with your authenticator app',
            files: [file],
        });
    } catch (error) {
        // User cancelled or share failed
        console.log('Share cancelled or failed');
    }
};

const copyQrCodeToClipboard = async () => {
    const blob = await convertSvgToBlob();
    if (!blob) return;

    try {
        await navigator.clipboard.write([
            new ClipboardItem({
                'image/png': blob,
            }),
        ]);
        // Show copied feedback
        qrCopied.value = true;
        setTimeout(() => {
            qrCopied.value = false;
        }, 2000);
    } catch (error) {
        console.log('Failed to copy QR code to clipboard');
    }
};

const qrCopied = ref(false);
const isUploading = ref(false);
const sharedQrUrl = ref<string | null>(null);

// Convert blob to base64
const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};

// Upload QR image and get shareable URL
const uploadQrForSharing = async (): Promise<string | null> => {
    if (sharedQrUrl.value) return sharedQrUrl.value;

    const blob = await convertSvgToBlob();
    if (!blob) return null;

    try {
        isUploading.value = true;
        const base64 = await blobToBase64(blob);

        const response = await fetch('/settings/two-factor/qr-share', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
            },
            body: JSON.stringify({ image: base64 }),
        });

        const data = await response.json();

        if (data.success && data.url) {
            sharedQrUrl.value = data.url;
            return data.url;
        }
        return null;
    } catch (error) {
        console.error('Failed to upload QR:', error);
        return null;
    } finally {
        isUploading.value = false;
    }
};

// Platform sharing functions
const getShareText = (qrUrl?: string | null) => {
    const appName = document.title.split(' - ')[0] || 'Universe';
    let text = `🔐 My 2FA Setup Key for ${appName}:\n\n${manualSetupKey.value}`;
    if (qrUrl) {
        text += `\n\n📱 QR Code: ${qrUrl}`;
    }
    text += '\n\nScan the QR code or enter this key in your authenticator app.';
    return text;
};

const shareToTelegram = async () => {
    const url = await uploadQrForSharing();
    const text = encodeURIComponent(getShareText(url));
    if (url) {
        // Telegram supports sharing URL with text
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${text}`, '_blank');
    } else {
        window.open(`https://t.me/share/url?text=${text}`, '_blank');
    }
};

const shareToWhatsApp = async () => {
    const url = await uploadQrForSharing();
    const text = encodeURIComponent(getShareText(url));
    window.open(`https://wa.me/?text=${text}`, '_blank');
};

const shareToEmail = async () => {
    const url = await uploadQrForSharing();
    const subject = encodeURIComponent('My 2FA Setup Key');
    const body = encodeURIComponent(getShareText(url));
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
};

const shareToFacebook = async () => {
    const url = await uploadQrForSharing();
    if (url) {
        // Facebook shares the image URL directly
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else {
        const text = encodeURIComponent(getShareText());
        window.open(`https://www.facebook.com/sharer/sharer.php?quote=${text}`, '_blank');
    }
};

// Check if native sharing with files is supported
const canShareFiles = computed(() => {
    return typeof navigator.share === 'function' && navigator.canShare;
});
</script>

<template>
    <Dialog :open="isOpen" @update:open="isOpen = $event">
        <DialogContent class="sm:max-w-md">
            <DialogHeader class="flex items-center justify-center">
                <div
                    class="mb-3 w-auto rounded-full border border-border bg-card p-0.5 shadow-sm"
                >
                    <div
                        class="relative overflow-hidden rounded-full border border-border bg-muted p-2.5"
                    >
                        <div
                            class="absolute inset-0 grid grid-cols-5 opacity-50"
                        >
                            <div
                                v-for="i in 5"
                                :key="`col-${i}`"
                                class="border-r border-border last:border-r-0"
                            />
                        </div>
                        <div
                            class="absolute inset-0 grid grid-rows-5 opacity-50"
                        >
                            <div
                                v-for="i in 5"
                                :key="`row-${i}`"
                                class="border-b border-border last:border-b-0"
                            />
                        </div>
                        <ScanLine
                            class="relative z-20 size-6 text-foreground"
                        />
                    </div>
                </div>
                <DialogTitle>{{ modalConfig.title }}</DialogTitle>
                <DialogDescription class="text-center">
                    {{ modalConfig.description }}
                </DialogDescription>
            </DialogHeader>

            <div
                class="relative flex w-auto flex-col items-center justify-center space-y-5"
            >
                <template v-if="!showVerificationStep">
                    <AlertError v-if="errors?.length" :errors="errors" />
                    <template v-else>
                        <div
                            class="relative mx-auto flex max-w-md flex-col items-center overflow-hidden"
                        >
                            <div
                                class="relative mx-auto aspect-square w-64 overflow-hidden rounded-lg border border-border"
                            >
                                <div
                                    v-if="!qrCodeSvg"
                                    class="absolute inset-0 z-10 flex aspect-square h-auto w-full animate-pulse items-center justify-center bg-background"
                                >
                                    <Spinner class="size-6" />
                                </div>
                                <div
                                    v-else
                                    ref="qrContainerRef"
                                    class="relative z-10 overflow-hidden border p-5"
                                >
                                    <div
                                        v-html="qrCodeSvg"
                                        class="aspect-square w-full justify-center rounded-lg bg-white p-2 [&_svg]:size-full"
                                    />
                                </div>
                            </div>

                            <!-- Share/Download Options -->
                            <div
                                v-if="qrCodeSvg"
                                class="mt-3 flex items-center justify-center gap-2"
                            >
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    @click="downloadQrCode"
                                    class="gap-1.5"
                                >
                                    <Download class="size-4" />
                                    Download
                                </Button>

                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    @click="copyQrCodeToClipboard"
                                    class="gap-1.5"
                                >
                                    <Check v-if="qrCopied" class="size-4 text-green-500" />
                                    <Copy v-else class="size-4" />
                                    {{ qrCopied ? 'Copied!' : 'Copy' }}
                                </Button>

                                <DropdownMenu>
                                    <DropdownMenuTrigger as-child>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            class="gap-1.5"
                                            :disabled="isUploading"
                                        >
                                            <Spinner v-if="isUploading" class="size-4" />
                                            <Share2 v-else class="size-4" />
                                            {{ isUploading ? 'Uploading...' : 'Share' }}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" class="w-48">
                                        <!-- Share QR Image (Native Share) -->
                                        <DropdownMenuItem v-if="canShareFiles" @click="shareQrCode" class="gap-2 cursor-pointer font-medium">
                                            <Share2 class="size-4 text-primary" />
                                            Share QR Image
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator v-if="canShareFiles" />

                                        <!-- Share with QR Code URL -->
                                        <DropdownMenuLabel class="text-xs text-muted-foreground">Share with QR Code</DropdownMenuLabel>
                                        <DropdownMenuItem @click="shareToTelegram" class="gap-2 cursor-pointer" :disabled="isUploading">
                                            <Send class="size-4 text-blue-500" />
                                            Telegram
                                        </DropdownMenuItem>
                                        <DropdownMenuItem @click="shareToWhatsApp" class="gap-2 cursor-pointer" :disabled="isUploading">
                                            <MessageCircle class="size-4 text-green-500" />
                                            WhatsApp
                                        </DropdownMenuItem>
                                        <DropdownMenuItem @click="shareToFacebook" class="gap-2 cursor-pointer" :disabled="isUploading">
                                            <svg class="size-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                            </svg>
                                            Facebook
                                        </DropdownMenuItem>
                                        <DropdownMenuItem @click="shareToEmail" class="gap-2 cursor-pointer" :disabled="isUploading">
                                            <Mail class="size-4 text-orange-500" />
                                            Email
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>

                        <div class="flex w-full items-center space-x-5">
                            <Button class="w-full" @click="handleModalNextStep">
                                {{ modalConfig.buttonText }}
                            </Button>
                        </div>

                        <div
                            class="relative flex w-full items-center justify-center"
                        >
                            <div
                                class="absolute inset-0 top-1/2 h-px w-full bg-border"
                            />
                            <span class="relative bg-card px-2 py-1"
                                >or, enter the code manually</span
                            >
                        </div>

                        <div
                            class="flex w-full items-center justify-center space-x-2"
                        >
                            <div
                                class="flex w-full items-stretch overflow-hidden rounded-xl border border-border"
                            >
                                <div
                                    v-if="!manualSetupKey"
                                    class="flex h-full w-full items-center justify-center bg-muted p-3"
                                >
                                    <Spinner />
                                </div>
                                <template v-else>
                                    <input
                                        type="text"
                                        readonly
                                        :value="manualSetupKey"
                                        class="h-full w-full bg-background p-3 text-foreground"
                                    />
                                    <button
                                        @click="copy(manualSetupKey || '')"
                                        class="relative block h-auto border-l border-border px-3 hover:bg-muted"
                                    >
                                        <Check
                                            v-if="copied"
                                            class="w-4 text-green-500"
                                        />
                                        <Copy v-else class="w-4" />
                                    </button>
                                </template>
                            </div>
                        </div>
                    </template>
                </template>

                <template v-else>
                    <Form
                        ref="formRef"
                        v-bind="confirm.form()"
                        reset-on-error
                        @finish="code = ''"
                        @success="isOpen = false"
                        v-slot="{ errors: formErrors, processing }"
                    >
                        <input type="hidden" name="code" :value="code" />
                        <div
                            ref="pinInputContainerRef"
                            class="relative w-full space-y-3"
                        >
                            <div
                                class="flex w-full flex-col items-center justify-center space-y-3 py-2"
                            >
                                <InputOTP
                                    id="otp"
                                    v-model="code"
                                    :maxlength="6"
                                    :disabled="processing"
                                >
                                    <InputOTPGroup>
                                        <InputOTPSlot
                                            v-for="index in 6"
                                            :key="index"
                                            :index="index - 1"
                                        />
                                    </InputOTPGroup>
                                </InputOTP>
                                <InputError
                                    :message="(formErrors as unknown as Record<string, Record<string, string>>)?.confirmTwoFactorAuthentication?.code"
                                />
                            </div>

                            <div class="flex w-full items-center space-x-5">
                                <Button
                                    type="button"
                                    variant="outline"
                                    class="w-auto flex-1"
                                    @click="showVerificationStep = false"
                                    :disabled="processing"
                                >
                                    Back
                                </Button>
                                <Button
                                    type="submit"
                                    class="w-auto flex-1"
                                    :disabled="processing || code.length < 6"
                                >
                                    Confirm
                                </Button>
                            </div>
                        </div>
                    </Form>
                </template>
            </div>
        </DialogContent>
    </Dialog>
</template>
