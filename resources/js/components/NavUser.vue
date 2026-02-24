<script setup lang="ts">
import { ref } from 'vue';
import UserInfo from '@/components/UserInfo.vue';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import { usePage } from '@inertiajs/vue3';
import { ChevronsUpDown } from 'lucide-vue-next';
import { logout } from '@/routes';
import UserMenuContent from './UserMenuContent.vue';

const page = usePage();
const user = page.props.auth.user;
const { isMobile, state } = useSidebar();

const showLogoutDialog = ref(false);

/**
 * handle the logout request
 */
const handleLogoutRequest = () => {
    setTimeout(() => {
        showLogoutDialog.value = true;
    }, 100);
};

/**
 * chek the the storange for the  protect the  user accessing
 */
const confirmLogout = () => {
    showLogoutDialog.value = false;

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = logout.url();

    // Add CSRF token
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    if (csrfToken) {
        const csrfInput = document.createElement('input');
        csrfInput.type = 'hidden';
        csrfInput.name = '_token';
        csrfInput.value = csrfToken;
        form.appendChild(csrfInput);
    }

    document.body.appendChild(form);
    form.submit();
};
</script>

<template>
    <SidebarMenu>
        <SidebarMenuItem>
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <SidebarMenuButton
                        size="lg"
                        class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        data-test="sidebar-menu-button"
                    >
                        <UserInfo :user="user" />
                        <ChevronsUpDown class="ml-auto size-4" />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    class="w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                    :side="
                        isMobile
                            ? 'bottom'
                            : state === 'collapsed'
                              ? 'left'
                              : 'bottom'
                    "
                    align="end"
                    :side-offset="4"
                >
                    <UserMenuContent :user="user" @logout="handleLogoutRequest" />
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
    </SidebarMenu>

    <!-- Logout Confirmation Dialog -->
    <AlertDialog :open="showLogoutDialog" @update:open="showLogoutDialog = $event">
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
                <AlertDialogDescription>
                    Are you sure you want to log out? You will need to sign in again to access your account.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction @click="confirmLogout">
                    Log out
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>
