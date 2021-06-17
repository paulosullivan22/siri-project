import { API_CALL_FAILURE, API_CALL_SUCCESS, SET_SPEECH_BOX_EXPANDED_STATE, START_API_CALL } from './constants'
import { IDialogContent, IState } from './interfaces'
import { Action } from './actionCreators'

export const initialState: IState = { dialog: [], isSpeechBoxExpanded: false, isProcessing: false }

export const reducer: (state: IState | undefined, action: Action) => IState = (
  state: IState = initialState,
  action: Action
) => {
  const { type, payload }: Action = action
  switch (type) {
    case START_API_CALL: {
      return {
        ...state,
        isProcessing: true
      }
    }
    case API_CALL_SUCCESS: {
      return {
        ...state,
        isProcessing: false,
        dialog: [...state.dialog, payload as IDialogContent]
      }
    }
    case API_CALL_FAILURE: {
      return {
        ...state,
        isProcessing: false
      }
    }
    case SET_SPEECH_BOX_EXPANDED_STATE: {
      return {
        ...state,
        isSpeechBoxExpanded: payload as boolean
      }
    }

    default:
      return state
  }
}
