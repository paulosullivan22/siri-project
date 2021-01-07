import { ADD_DIALOG } from "./constants";
import { IAddDialogAction } from './interfaces'

const addDialogAction: IAddDialogAction = (payload: object) => {
    return {
        type: ADD_DIALOG,
        payload
    }
}

export default {
    addDialogAction
}