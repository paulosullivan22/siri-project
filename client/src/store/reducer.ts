import { ADD_DIALOG, SET_SPEECH_BOX_EXPANDED_STATE } from "./constants";
import { IState } from './interfaces'
import { Action } from './actionCreators'

export const initialState: IState = { dialog: [], isSpeechBoxExpanded: false }

export const reducer: (state: IState, action: Action) => IState = (state: IState = initialState, action: Action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_DIALOG: {
            return {
                ...state,
                dialog: [
                    ...state.dialog,
                    payload as object
                ]
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
