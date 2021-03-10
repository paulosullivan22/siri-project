export interface IAction<T> {
    type: string
    payload: T
}

export interface ILink {
    text: string
    href: string
}

export interface IDialogContent {
    links: ILink[]
}

export interface IState {
    dialog: IDialogContent[]
    isSpeechBoxExpanded: boolean
}

export interface IActionCreators {
    addDialogAction: IAddDialogAction
    setSpeechBoxExpandedState: ISetSpeechBoxExpandedAction
}

export interface IDispatchProps {
    actions: IActionCreators
}

export type IAddDialogAction = (payload: IDialogContent) => IAction<IDialogContent>

export type ISetSpeechBoxExpandedAction = (payload: boolean) => IAction<boolean>
