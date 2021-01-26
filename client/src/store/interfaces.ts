export interface IAction<T> {
    type: string
    payload: T
}

export interface IState {
    dialog: {  }[]
    isSpeechBoxExpanded: boolean
}

export interface IActionCreators {
    addDialogAction: IAddDialogAction
    setSpeechBoxExpandedState: ISetSpeechBoxExpandedAction
}

export interface IDispatchProps {
    actions: IActionCreators
}

export type IAddDialogAction = (payload: object) => IAction<object>

export type ISetSpeechBoxExpandedAction = (payload: boolean) => IAction<boolean>
