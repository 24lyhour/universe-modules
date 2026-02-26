<script setup lang="ts">
import UserInfo from '@/components/UserInfo.vue';
import {
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { edit } from '@/routes/profile';
import type { User } from '@/types';
import { Link } from '@inertiajs/vue3';
import { LogOut, Settings, User as UserIcon } from 'lucide-vue-next';

interface Props {
    user: User;
}

defineProps<Props>();

const emit = defineEmits<{
    logout: [];
}>();

const handleLogoutClick = () => {
    emit('logout');
};
</script>

<template>
    <DropdownMenuLabel class="p-0 font-normal">
        <Link
            :href="edit()"
            class="flex items-center gap-2 px-1 py-1.5 text-left text-sm rounded-sm hover:bg-accent transition-colors"
        >
            <UserInfo :user="user" :show-email="true" />
        </Link>
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
        <!-- Profile -->
        <DropdownMenuItem :as-child="true">
            <Link class="block w-full" :href="edit()" prefetch as="button">
                <UserIcon class="mr-2 h-4 w-4" />
                Profile
            </Link>
        </DropdownMenuItem>
        <!-- Settings -->
        <DropdownMenuItem :as-child="true">
            <Link class="block w-full" :href="edit()" prefetch as="button">
                <Settings class="mr-2 h-4 w-4" />
                Settings
            </Link>
        </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem @click="handleLogoutClick" data-test="logout-button">
        <LogOut class="mr-2 h-4 w-4" />
        Log out
    </DropdownMenuItem>
</template>
