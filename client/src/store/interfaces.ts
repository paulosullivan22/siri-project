export interface IAction<T> {
  type: string
  payload: T
}

export interface ILink {
  text: string
  href: string
}

export interface IDialogContent {
  audio: string
  links: ILink[]
}

export interface IState {
  dialog: IDialogContent[]
  isSpeechBoxExpanded: boolean
  isProcessing: boolean
}

export interface IActionCreators {
  addDialogAction: IAddDialogAction
  setSpeechBoxExpandedState: ISetSpeechBoxExpandedAction
  startApiCallAction: any
}

export interface IDispatchProps {
  actions: IActionCreators
}

export type IAddDialogAction = (payload: IDialogContent) => IAction<IDialogContent>

export type ISetSpeechBoxExpandedAction = (payload: boolean) => IAction<boolean>
