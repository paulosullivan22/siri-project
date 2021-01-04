export interface IAction<T> {
    type: string
    payload: T
}

export interface IState {
    dialog: object[]
}