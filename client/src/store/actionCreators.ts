import { ADD_DIALOG } from "./constants";
import { IAction } from './interfaces'

const addDialogAction: (payload: object) => IAction<object> = (payload: object) => {
    return {
        type: ADD_DIALOG,
        payload
    }
}

export default {
    addDialogAction
}