import { ADD_DIALOG, SET_SPEECH_BOX_EXPANDED_STATE } from './constants'
import { IAddDialogAction, IDialogContent, ISetSpeechBoxExpandedAction } from './interfaces'

const addDialogAction: IAddDialogAction = (payload: IDialogContent) => {
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

export type Action = ReturnType<typeof addDialogAction | typeof setSpeechBoxExpandedState>

export default {
  addDialogAction,
  setSpeechBoxExpandedState
}
