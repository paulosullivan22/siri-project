import { ADD_DIALOG } from "./constants";

const addDialogAction: any = (payload: any) => {
    return {
        type: ADD_DIALOG,
        payload
    }
}

export default {
    addDialogAction
}