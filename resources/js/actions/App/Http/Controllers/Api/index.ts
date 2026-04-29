import AiController from './AiController'
import AiAssistantController from './AiAssistantController'

const Api = {
    AiController: Object.assign(AiController, AiController),
    AiAssistantController: Object.assign(AiAssistantController, AiAssistantController),
}

export default Api