export interface IAction<T> {
    type: string
    payload: T
}

export interface IState {
    dialog: object[]
}

export type IAddDialogAction = (payload: object) => IAction<object>