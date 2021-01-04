import { ADD_DIALOG } from "./constants";
import { IAction, IState } from './interfaces'

export const initialState: IState = { dialog: [] }

export const reducer: (state: IState, action: IAction<object[]>) => IState = (state: IState, action: IAction<object[]>) => {
    const { type, payload }: IAction<object[]> = action
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
        default: 
            return state
    }
}