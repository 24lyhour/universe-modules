<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import { Table, TableRow, TableCell, TableHeader } from '@tiptap/extension-table';
import { computed, watch, ref } from 'vue';
import {
    Bold,
    Italic,
    Underline as UnderlineIcon,
    Strikethrough,
    Code,
    Heading1,
    Heading2,
    Heading3,
    List,
    ListOrdered,
    Quote,
    Minus,
    Undo,
    Redo,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    Link as LinkIcon,
    Highlighter,
    Subscript as SubscriptIcon,
    Superscript as SuperscriptIcon,
    ListTodo,
    Table as TableIcon,
    RemoveFormatting,
    Code2,
    MoreHorizontal,
} from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';

interface Props {
    modelValue?: string;
    placeholder?: string;
    disabled?: boolean;
    editable?: boolean;
    minHeight?: string;
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    placeholder: 'Enter text here...',
    disabled: false,
    editable: true,
    minHeight: '200px',
});

const emit = defineEmits<{
    'update:modelValue': [value: string];
}>();

const linkUrl = ref('');
const showLinkDialog = ref(false);

/**
 * Initialize the editor with the provided props.
 */
const editor = useEditor({
    content: props.modelValue,
    extensions: [
        StarterKit.configure({
            heading: {
                levels: [1, 2, 3],
            },
        }),
        Placeholder.configure({
            placeholder: props.placeholder,
        }),
        Underline,
        Link.configure({
            openOnClick: false,
            HTMLAttributes: {
                class: 'text-primary underline cursor-pointer',
            },
        }),
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        }),
        Highlight.configure({
            multicolor: false,
        }),
        Subscript,
        Superscript,
        TaskList,
        TaskItem.configure({
            nested: true,
        }),
        Table.configure({
            resizable: true,
        }),
        TableRow,
        TableCell,
        TableHeader,
    ],
    editable: props.editable && !props.disabled,
    onUpdate: ({ editor }) => {
        emit('update:modelValue', editor.getHTML());
    },
});

/**
 * Sync editor content when modelValue changes externally.
 */
watch(
    () => props.modelValue,
    (newValue) => {
        if (editor.value && editor.value.getHTML() !== newValue) {
            editor.value.commands.setContent(newValue || '');
        }
    }
);

/**
 * Update editable state when props change.
 */
watch(
    () => [props.editable, props.disabled],
    () => {
        editor.value?.setEditable(props.editable && !props.disabled);
    }
);

/**
 * Active states.
 */
const isBold = computed(() => editor.value?.isActive('bold'));
const isItalic = computed(() => editor.value?.isActive('italic'));
const isUnderline = computed(() => editor.value?.isActive('underline'));
const isStrike = computed(() => editor.value?.isActive('strike'));
const isCode = computed(() => editor.value?.isActive('code'));
const isCodeBlock = computed(() => editor.value?.isActive('codeBlock'));
const isBlockquote = computed(() => editor.value?.isActive('blockquote'));
const isLink = computed(() => editor.value?.isActive('link'));
const isHighlight = computed(() => editor.value?.isActive('highlight'));
const isSubscript = computed(() => editor.value?.isActive('subscript'));
const isSuperscript = computed(() => editor.value?.isActive('superscript'));
const isTaskList = computed(() => editor.value?.isActive('taskList'));
const isAlignLeft = computed(() => editor.value?.isActive({ textAlign: 'left' }));
const isAlignCenter = computed(() => editor.value?.isActive({ textAlign: 'center' }));
const isAlignRight = computed(() => editor.value?.isActive({ textAlign: 'right' }));
const isAlignJustify = computed(() => editor.value?.isActive({ textAlign: 'justify' }));
const isHeading1 = computed(() => editor.value?.isActive('heading', { level: 1 }));
const isHeading2 = computed(() => editor.value?.isActive('heading', { level: 2 }));
const isHeading3 = computed(() => editor.value?.isActive('heading', { level: 3 }));
const isBulletList = computed(() => editor.value?.isActive('bulletList'));
const isOrderedList = computed(() => editor.value?.isActive('orderedList'));

/**
 * Actions.
 */
const toggleBold = () => editor.value?.chain().focus().toggleBold().run();
const toggleItalic = () => editor.value?.chain().focus().toggleItalic().run();
const toggleUnderline = () => editor.value?.chain().focus().toggleUnderline().run();
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
const setAlignLeft = () => editor.value?.chain().focus().setTextAlign('left').run();
const setAlignCenter = () => editor.value?.chain().focus().setTextAlign('center').run();
const setAlignRight = () => editor.value?.chain().focus().setTextAlign('right').run();
const setAlignJustify = () => editor.value?.chain().focus().setTextAlign('justify').run();
const toggleHighlight = () => editor.value?.chain().focus().toggleHighlight().run();
const toggleSubscript = () => editor.value?.chain().focus().toggleSubscript().run();
const toggleSuperscript = () => editor.value?.chain().focus().toggleSuperscript().run();
const toggleTaskList = () => editor.value?.chain().focus().toggleTaskList().run();
const clearFormatting = () => editor.value?.chain().focus().clearNodes().unsetAllMarks().run();

const openLinkDialog = () => {
    const previousUrl = editor.value?.getAttributes('link').href || '';
    linkUrl.value = previousUrl;
    showLinkDialog.value = true;
};

const setLink = () => {
    if (linkUrl.value) {
        editor.value?.chain().focus().extendMarkRange('link').setLink({ href: linkUrl.value }).run();
    } else {
        editor.value?.chain().focus().unsetLink().run();
    }
    showLinkDialog.value = false;
    linkUrl.value = '';
};

const removeLink = () => {
    editor.value?.chain().focus().unsetLink().run();
    showLinkDialog.value = false;
    linkUrl.value = '';
};

const insertTable = () => {
    editor.value?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
};

const canUndo = computed(() => editor.value?.can().undo());
const canRedo = computed(() => editor.value?.can().redo());
</script>

<template>
    <div class="w-full border rounded-md overflow-hidden bg-background">
        <!-- Toolbar -->
        <div v-if="editable && !disabled" class="flex flex-wrap items-center gap-0.5 bg-muted/50 p-1.5 border-b">
            <TooltipProvider :delay-duration="300">
                <!-- Text Formatting -->
                <div class="flex items-center gap-0.5">
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isBold && 'bg-muted']"
                                @click="toggleBold"
                            >
                                <Bold class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Bold (Ctrl+B)</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isItalic && 'bg-muted']"
                                @click="toggleItalic"
                            >
                                <Italic class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Italic (Ctrl+I)</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isUnderline && 'bg-muted']"
                                @click="toggleUnderline"
                            >
                                <UnderlineIcon class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Underline (Ctrl+U)</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isStrike && 'bg-muted']"
                                @click="toggleStrike"
                            >
                                <Strikethrough class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Strikethrough</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isHighlight && 'bg-muted']"
                                @click="toggleHighlight"
                            >
                                <Highlighter class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Highlight</TooltipContent>
                    </Tooltip>
                </div>

                <Separator orientation="vertical" class="mx-1 h-6" />

                <!-- Headings -->
                <div class="flex items-center gap-0.5">
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isHeading1 && 'bg-muted']"
                                @click="toggleHeading1"
                            >
                                <Heading1 class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Heading 1</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isHeading2 && 'bg-muted']"
                                @click="toggleHeading2"
                            >
                                <Heading2 class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Heading 2</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isHeading3 && 'bg-muted']"
                                @click="toggleHeading3"
                            >
                                <Heading3 class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Heading 3</TooltipContent>
                    </Tooltip>
                </div>

                <Separator orientation="vertical" class="mx-1 h-6" />

                <!-- Lists -->
                <div class="flex items-center gap-0.5">
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isBulletList && 'bg-muted']"
                                @click="toggleBulletList"
                            >
                                <List class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Bullet List</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isOrderedList && 'bg-muted']"
                                @click="toggleOrderedList"
                            >
                                <ListOrdered class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Numbered List</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isTaskList && 'bg-muted']"
                                @click="toggleTaskList"
                            >
                                <ListTodo class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Task List</TooltipContent>
                    </Tooltip>
                </div>

                <Separator orientation="vertical" class="mx-1 h-6" />

                <!-- Alignment -->
                <div class="flex items-center gap-0.5">
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isAlignLeft && 'bg-muted']"
                                @click="setAlignLeft"
                            >
                                <AlignLeft class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Align Left</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isAlignCenter && 'bg-muted']"
                                @click="setAlignCenter"
                            >
                                <AlignCenter class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Align Center</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isAlignRight && 'bg-muted']"
                                @click="setAlignRight"
                            >
                                <AlignRight class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Align Right</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isAlignJustify && 'bg-muted']"
                                @click="setAlignJustify"
                            >
                                <AlignJustify class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Justify</TooltipContent>
                    </Tooltip>
                </div>

                <Separator orientation="vertical" class="mx-1 h-6" />

                <!-- Links & Code -->
                <div class="flex items-center gap-0.5">
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isLink && 'bg-muted']"
                                @click="openLinkDialog"
                            >
                                <LinkIcon class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Insert Link</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isCode && 'bg-muted']"
                                @click="toggleCode"
                            >
                                <Code class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Inline Code</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isCodeBlock && 'bg-muted']"
                                @click="toggleCodeBlock"
                            >
                                <Code2 class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Code Block</TooltipContent>
                    </Tooltip>
                </div>

                <Separator orientation="vertical" class="mx-1 h-6" />

                <!-- Blockquote & HR -->
                <div class="flex items-center gap-0.5">
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                :class="['h-8 w-8 p-0', isBlockquote && 'bg-muted']"
                                @click="toggleBlockquote"
                            >
                                <Quote class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Blockquote</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                class="h-8 w-8 p-0"
                                @click="setHorizontalRule"
                            >
                                <Minus class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Horizontal Rule</TooltipContent>
                    </Tooltip>
                </div>

                <Separator orientation="vertical" class="mx-1 h-6" />

                <!-- More Tools -->
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button type="button" variant="ghost" size="sm" class="h-8 w-8 p-0">
                            <MoreHorizontal class="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem @click="toggleSubscript">
                            <SubscriptIcon class="mr-2 h-4 w-4" />
                            Subscript
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="toggleSuperscript">
                            <SuperscriptIcon class="mr-2 h-4 w-4" />
                            Superscript
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="insertTable">
                            <TableIcon class="mr-2 h-4 w-4" />
                            Insert Table
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="clearFormatting">
                            <RemoveFormatting class="mr-2 h-4 w-4" />
                            Clear Formatting
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div class="flex-1" />

                <!-- Undo/Redo -->
                <div class="flex items-center gap-0.5">
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                class="h-8 w-8 p-0"
                                :disabled="!canUndo"
                                @click="undo"
                            >
                                <Undo class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Undo (Ctrl+Z)</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                class="h-8 w-8 p-0"
                                :disabled="!canRedo"
                                @click="redo"
                            >
                                <Redo class="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Redo (Ctrl+Y)</TooltipContent>
                    </Tooltip>
                </div>
            </TooltipProvider>
        </div>

        <!-- Editor -->
        <EditorContent
            :editor="editor"
            class="prose prose-sm dark:prose-invert max-w-none p-4 focus:outline-none"
            :style="{ minHeight }"
        />

        <!-- Link Dialog -->
        <Dialog v-model:open="showLinkDialog">
            <DialogContent class="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Insert Link</DialogTitle>
                </DialogHeader>
                <div class="space-y-4 py-4">
                    <div class="space-y-2">
                        <Label for="link-url">URL</Label>
                        <Input
                            id="link-url"
                            v-model="linkUrl"
                            placeholder="https://example.com"
                            @keyup.enter="setLink"
                        />
                    </div>
                </div>
                <DialogFooter class="gap-2">
                    <Button variant="outline" @click="removeLink">Remove Link</Button>
                    <Button @click="setLink">Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
</template>

<style scoped>
:deep(.ProseMirror) {
    outline: none;
    min-height: v-bind(minHeight);
}

:deep(.ProseMirror p.is-editor-empty:first-child::before) {
    content: attr(data-placeholder);
    color: hsl(var(--muted-foreground));
    pointer-events: none;
    float: left;
    height: 0;
}

:deep(.ProseMirror h1) {
    font-size: 1.875rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
}

:deep(.ProseMirror h2) {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
}

:deep(.ProseMirror h3) {
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
}

:deep(.ProseMirror ul) {
    list-style-type: disc;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

:deep(.ProseMirror ol) {
    list-style-type: decimal;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

:deep(.ProseMirror ul[data-type="taskList"]) {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
}

:deep(.ProseMirror ul[data-type="taskList"] li) {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
}

:deep(.ProseMirror ul[data-type="taskList"] li > label) {
    flex-shrink: 0;
    margin-top: 0.25rem;
}

:deep(.ProseMirror ul[data-type="taskList"] li > div) {
    flex: 1;
}

:deep(.ProseMirror code) {
    background-color: hsl(var(--muted));
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-family: ui-monospace, monospace;
}

:deep(.ProseMirror pre) {
    background-color: hsl(var(--muted));
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 0.5rem 0;
}

:deep(.ProseMirror pre code) {
    background: none;
    padding: 0;
}

:deep(.ProseMirror blockquote) {
    border-left: 4px solid hsl(var(--primary));
    padding-left: 1rem;
    margin-left: 0;
    margin-right: 0;
    font-style: italic;
    color: hsl(var(--muted-foreground));
}

:deep(.ProseMirror hr) {
    margin: 1.5rem 0;
    border: none;
    border-top: 1px solid hsl(var(--border));
}

:deep(.ProseMirror mark) {
    background-color: #fef08a;
    padding: 0.1rem 0.2rem;
    border-radius: 0.125rem;
}

:deep(.ProseMirror a) {
    color: hsl(var(--primary));
    text-decoration: underline;
    cursor: pointer;
}

:deep(.ProseMirror table) {
    border-collapse: collapse;
    width: 100%;
    margin: 1rem 0;
    overflow: hidden;
}

:deep(.ProseMirror table td),
:deep(.ProseMirror table th) {
    border: 1px solid hsl(var(--border));
    padding: 0.5rem 0.75rem;
    min-width: 100px;
    vertical-align: top;
    position: relative;
}

:deep(.ProseMirror table th) {
    background-color: hsl(var(--muted));
    font-weight: 600;
}

:deep(.ProseMirror table .selectedCell) {
    background-color: hsl(var(--primary) / 0.1);
}

:deep(.ProseMirror sub) {
    font-size: 0.75em;
    vertical-align: sub;
}

:deep(.ProseMirror sup) {
    font-size: 0.75em;
    vertical-align: super;
}

:deep(.ProseMirror p) {
    margin: 0.5rem 0;
}

:deep(.ProseMirror p:first-child) {
    margin-top: 0;
}

:deep(.ProseMirror p:last-child) {
    margin-bottom: 0;
}
</style>
