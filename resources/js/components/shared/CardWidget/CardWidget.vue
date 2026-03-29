<script setup lang="ts">
import { MoreHorizontal } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export interface CardAction {
    label: string;
    icon?: any;
    onClick: () => void;
    variant?: 'default' | 'destructive';
    separator?: boolean;
}

export interface CardBadge {
    label: string;
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
    icon?: any;
    class?: string;
}

interface Props {
    clickable?: boolean;
    actions?: CardAction[];
    showActions?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    clickable: true,
    showActions: true,
});

const emit = defineEmits<{
    click: [];
}>();

const handleClick = () => {
    if (props.clickable) {
        emit('click');
    }
};

const handleActionClick = (action: CardAction, event: Event) => {
    event.stopPropagation();
    action.onClick();
};
</script>

<template>
    <Card
        :class="[
            'group transition-all duration-200',
            clickable && 'cursor-pointer hover:shadow-lg hover:border-primary/30'
        ]"
        @click="handleClick"
    >
        <CardContent class="p-4">
            <!-- Header: Title + Badge + Actions -->
            <div class="flex items-start justify-between gap-2 mb-3">
                <div class="flex items-center gap-2 min-w-0 flex-1">
                    <slot name="header-icon" />
                    <slot name="header-title" />
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <slot name="header-badge" />
                    <DropdownMenu v-if="showActions && actions && actions.length > 0">
                        <DropdownMenuTrigger as-child @click.stop>
                            <Button variant="ghost" size="icon" class="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <MoreHorizontal class="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <template v-for="(action, index) in actions" :key="index">
                                <DropdownMenuSeparator v-if="action.separator && index > 0" />
                                <DropdownMenuItem
                                    @click="(e) => handleActionClick(action, e)"
                                    :class="action.variant === 'destructive' && 'text-destructive focus:text-destructive'"
                                >
                                    <component v-if="action.icon" :is="action.icon" class="mr-2 h-4 w-4" />
                                    {{ action.label }}
                                </DropdownMenuItem>
                            </template>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <!-- Body Content -->
            <div class="space-y-2 mb-3">
                <slot name="body" />
            </div>

            <!-- Divider -->
            <div class="border-t my-3" />

            <!-- Footer -->
            <div class="flex items-center justify-between gap-2">
                <slot name="footer-left" />
                <slot name="footer-right" />
            </div>

            <!-- Sub-footer (optional) -->
            <slot name="sub-footer" />
        </CardContent>
    </Card>
</template>
