import { ADD_DIALOG, START_API_CALL, SET_SPEECH_BOX_EXPANDED_STATE } from './constants'
import { IAddDialogAction, IDialogContent, ISetSpeechBoxExpandedAction } from './interfaces'

const startApiCallAction: any = (payload: any) => {
  return {
    type: START_API_CALL,
    payload
  }
}

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
  setSpeechBoxExpandedState,
  startApiCallAction
}
