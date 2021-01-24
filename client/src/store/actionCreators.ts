import { ADD_DIALOG, SET_SPEECH_BOX_EXPANDED_STATE } from "./constants";
import { IAddDialogAction, ISetSpeechBoxExpandedAction } from './interfaces'

const addDialogAction: IAddDialogAction = (payload: object) => {
    return <const>{
        type: ADD_DIALOG,
        payload
    }
}

const setSpeechBoxExpandedState: ISetSpeechBoxExpandedAction = (payload: boolean) => {
    return <const>{
        type: SET_SPEECH_BOX_EXPANDED_STATE,
        payload
    }
}

export type Action = ReturnType<typeof addDialogAction | typeof setSpeechBoxExpandedState>

export default {
    addDialogAction,
    setSpeechBoxExpandedState
}
