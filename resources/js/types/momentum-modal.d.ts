declare module 'momentum-modal' {
    import type { App, Component, ComputedRef, Ref, VNode } from 'vue';

    export const Modal: Component;

    export interface ModalPluginOptions {
        resolve: (name: string) => unknown;
    }

    export const modal: {
        install(app: App, options: ModalPluginOptions): void;
    };

    export function useModal(): {
        show: Ref<boolean>;
        vnode: Ref<VNode | null>;
        close: () => void;
        redirect: () => void;
        props: ComputedRef<Record<string, unknown>>;
    };
}
