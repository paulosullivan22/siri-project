import { ADD_DIALOG, SET_SPEECH_BOX_EXPANDED_STATE } from "./constants";
import { IAddDialogAction, ISetSpeechBoxExpandedAction } from './interfaces'

const addDialogAction: IAddDialogAction = (payload: object) => {
    return {
        type: ADD_DIALOG,
        payload
    }
}

const setSpeechBoxExpandedState: ISetSpeechBoxExpandedAction = (payload: boolean) => {
    return {
        type: SET_SPEECH_BOX_EXPANDED_STATE,
        payload
    }
}

export default {
    addDialogAction,
    setSpeechBoxExpandedState
}
