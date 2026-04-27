import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\AiController::editor
* @see app/Http/Controllers/Api/AiController.php:19
* @route '/api/ai/editor'
*/
export const editor = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editor.url(options),
    method: 'post',
})

editor.definition = {
    methods: ["post"],
    url: '/api/ai/editor',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\AiController::editor
* @see app/Http/Controllers/Api/AiController.php:19
* @route '/api/ai/editor'
*/
editor.url = (options?: RouteQueryOptions) => {
    return editor.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\AiController::editor
* @see app/Http/Controllers/Api/AiController.php:19
* @route '/api/ai/editor'
*/
editor.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: editor.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\AiController::editor
* @see app/Http/Controllers/Api/AiController.php:19
* @route '/api/ai/editor'
*/
const editorForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: editor.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\AiController::editor
* @see app/Http/Controllers/Api/AiController.php:19
* @route '/api/ai/editor'
*/
editorForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: editor.url(options),
    method: 'post',
})

editor.form = editorForm

/**
* @see \App\Http\Controllers\Api\AiController::chat
* @see app/Http/Controllers/Api/AiController.php:51
* @route '/api/ai/chat'
*/
export const chat = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: chat.url(options),
    method: 'post',
})

chat.definition = {
    methods: ["post"],
    url: '/api/ai/chat',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\AiController::chat
* @see app/Http/Controllers/Api/AiController.php:51
* @route '/api/ai/chat'
*/
chat.url = (options?: RouteQueryOptions) => {
    return chat.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\AiController::chat
* @see app/Http/Controllers/Api/AiController.php:51
* @route '/api/ai/chat'
*/
chat.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: chat.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\AiController::chat
* @see app/Http/Controllers/Api/AiController.php:51
* @route '/api/ai/chat'
*/
const chatForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: chat.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\AiController::chat
* @see app/Http/Controllers/Api/AiController.php:51
* @route '/api/ai/chat'
*/
chatForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: chat.url(options),
    method: 'post',
})

chat.form = chatForm

const ai = {
    editor: Object.assign(editor, editor),
    chat: Object.assign(chat, chat),
}

export default ai