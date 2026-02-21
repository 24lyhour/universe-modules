import type { Role } from './roles';

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at?: string;
    roles?: Role[];
    created_at?: string;
    updated_at?: string;
}

export interface UserWithRoles extends User {
    roles: Role[];
}

export interface UserFormData {
    name: string;
    email: string;
    password?: string;
    password_confirmation?: string;
    roles: number[];
}

export interface UsersIndexProps {
    users: {
        data: UserWithRoles[];
        meta: {
            current_page: number;
            last_page: number;
            per_page: number;
            total: number;
        };
    };
    roles: Role[];
}

export interface UserCreateProps {
    roles: Role[];
}

export interface UserEditProps {
    user: UserWithRoles;
    roles: Role[];
}
