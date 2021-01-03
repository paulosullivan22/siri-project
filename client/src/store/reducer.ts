import { ADD_DIALOG } from "./constants";

export const initialState = { dialog: [] }

export const reducer = (state, action) => {
    const { type, payload } = action
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

        return state
    }
    return state
}