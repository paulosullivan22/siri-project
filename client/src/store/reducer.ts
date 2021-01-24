import { ADD_DIALOG, SET_SPEECH_BOX_EXPANDED_STATE } from "./constants";
import { IAction, IState } from './interfaces'

export const initialState: IState = { dialog: [], isSpeechBoxExpanded: false }

export const reducer: (state: IState, action: IAction<object[] | boolean>) => IState = (state: IState, action: IAction<object[] | boolean>) => {
    // TODO: check this any type
    const { type, payload }: IAction<any> = action
    switch (type) {
        case ADD_DIALOG: {
            return {
                ...state,
                dialog: [
                    ...state.dialog,
                    payload
                ]
            }
        }
        case SET_SPEECH_BOX_EXPANDED_STATE: {
            return {
                ...state,
                isSpeechBoxExpanded: payload
            }
        }

        default: 
            return state
    }
}
