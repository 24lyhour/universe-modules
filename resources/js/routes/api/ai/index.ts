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

const ai = {
    editor: Object.assign(editor, editor),
}

export default ai