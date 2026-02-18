<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { computed, watch } from 'vue';

interface Props {
    modelValue?: string;
    placeholder?: string;
    disabled?: boolean;
    editable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    placeholder: 'Enter text here...',
    disabled: false,
    editable: true,
});

const emit = defineEmits<{
    'update:modelValue': [value: string];
}>();

const editor = useEditor({
    content: props.modelValue,
    extensions: [
        StarterKit,
        Placeholder.configure({
            placeholder: props.placeholder,
        }),
    ],
    editable: props.editable && !props.disabled,
    onUpdate: ({ editor }) => {
        emit('update:modelValue', editor.getHTML());
    },
});

// Sync editor content when modelValue changes externally
watch(
    () => props.modelValue,
    (newValue) => {
        if (editor.value && editor.value.getHTML() !== newValue) {
            editor.value.commands.setContent(newValue || '', );
        }
    }
);

// Update editable state when props change
watch(
    () => [props.editable, props.disabled],
    () => {
        editor.value?.setEditable(props.editable && !props.disabled);
    }
);

const isBold = computed(() => editor.value?.isActive('bold'));
const isItalic = computed(() => editor.value?.isActive('italic'));
const isStrike = computed(() => editor.value?.isActive('strike'));
const isCode = computed(() => editor.value?.isActive('code'));
const isCodeBlock = computed(() => editor.value?.isActive('codeBlock'));

const toggleBold = () => editor.value?.chain().focus().toggleBold().run();
const toggleItalic = () => editor.value?.chain().focus().toggleItalic().run();
const toggleStrike = () => editor.value?.chain().focus().toggleStrike().run();
const toggleCode = () => editor.value?.chain().focus().toggleCode().run();
const toggleCodeBlock = () => editor.value?.chain().focus().toggleCodeBlock().run();
const toggleHeading1 = () => editor.value?.chain().focus().toggleHeading({ level: 1 }).run();
const toggleHeading2 = () => editor.value?.chain().focus().toggleHeading({ level: 2 }).run();
const toggleHeading3 = () => editor.value?.chain().focus().toggleHeading({ level: 3 }).run();
const toggleBulletList = () => editor.value?.chain().focus().toggleBulletList().run();
const toggleOrderedList = () => editor.value?.chain().focus().toggleOrderedList().run();
const toggleBlockquote = () => editor.value?.chain().focus().toggleBlockquote().run();
const setHorizontalRule = () => editor.value?.chain().focus().setHorizontalRule().run();
const undo = () => editor.value?.chain().focus().undo().run();
const redo = () => editor.value?.chain().focus().redo().run();
</script>

<template>
    <div class="w-full border rounded-md overflow-hidden">
        <!-- Toolbar -->
        <div v-if="editable && !disabled" class="flex flex-wrap gap-1 bg-gray-100 p-2 border-b dark:bg-gray-800">
            <button
                :class="['p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700', isBold && 'bg-gray-200 dark:bg-gray-700']"
                @click="toggleBold"
                type="button"
                title="Bold"
            >
                <strong>B</strong>
            </button>
            <button
                :class="['p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700', isItalic && 'bg-gray-200 dark:bg-gray-700']"
                @click="toggleItalic"
                type="button"
                title="Italic"
            >
                <em>I</em>
            </button>
            <button
                :class="['p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700', isStrike && 'bg-gray-200 dark:bg-gray-700']"
                @click="toggleStrike"
                type="button"
                title="Strike"
            >
                <s>S</s>
            </button>
            <button
                :class="['p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700', isCode && 'bg-gray-200 dark:bg-gray-700']"
                @click="toggleCode"
                type="button"
                title="Code"
            >
                <code>code</code>
            </button>

            <div class="w-px bg-gray-300 dark:bg-gray-600" />

            <button
                @click="toggleHeading1"
                type="button"
                title="Heading 1"
                class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                H1
            </button>
            <button
                @click="toggleHeading2"
                type="button"
                title="Heading 2"
                class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                H2
            </button>
            <button
                @click="toggleHeading3"
                type="button"
                title="Heading 3"
                class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                H3
            </button>

            <div class="w-px bg-gray-300 dark:bg-gray-600" />

            <button
                @click="toggleBulletList"
                type="button"
                title="Bullet List"
                class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                • List
            </button>
            <button
                @click="toggleOrderedList"
                type="button"
                title="Ordered List"
                class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                1. List
            </button>
            <button
                :class="['p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700', isCodeBlock && 'bg-gray-200 dark:bg-gray-700']"
                @click="toggleCodeBlock"
                type="button"
                title="Code Block"
            >
                {"{}"}
            </button>

            <div class="w-px bg-gray-300 dark:bg-gray-600" />

            <button
                @click="toggleBlockquote"
                type="button"
                title="Blockquote"
                class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                "
            </button>
            <button
                @click="setHorizontalRule"
                type="button"
                title="Horizontal Rule"
                class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                —
            </button>

            <div class="w-px bg-gray-300 dark:bg-gray-600" />

            <button
                @click="undo"
                type="button"
                title="Undo"
                class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                ↶
            </button>
            <button
                @click="redo"
                type="button"
                title="Redo"
                class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                ↷
            </button>
        </div>

        <!-- Editor -->
        <EditorContent
            :editor="editor"
            class="prose prose-sm max-w-none p-4 min-h-[200px] focus:outline-none"
        />
    </div>
</template>

<style scoped>
:deep(.ProseMirror) {
    outline: none;
}

:deep(.ProseMirror p.is-editor-empty:first-child::before) {
    content: attr(data-placeholder);
    color: #9ca3af;
    pointer-events: none;
    float: left;
    height: 0;
}

:deep(.ProseMirror h1) {
    font-size: 1.875rem;
    font-weight: bold;
}

:deep(.ProseMirror h2) {
    font-size: 1.25rem;
    font-weight: bold;
}

:deep(.ProseMirror h3) {
    font-size: 1.125rem;
    font-weight: bold;
}

:deep(.ProseMirror ul) {
    list-style-type: disc;
    margin-left: 1.25rem;
}

:deep(.ProseMirror ol) {
    list-style-type: decimal;
    margin-left: 1.25rem;
}

:deep(.ProseMirror code) {
    background-color: #f3f4f6;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-family: monospace;
}

:deep(.ProseMirror pre) {
    background-color: #f3f4f6;
    padding: 1rem;
    border-radius: 0.375rem;
    overflow: auto;
}

:deep(.ProseMirror blockquote) {
    border-left: 0.25rem solid #3b82f6;
    padding-left: 1rem;
    font-style: italic;
}

:deep(.ProseMirror hr) {
    margin: 1rem 0;
    border-top: 1px solid #e5e7eb;
}
</style>
