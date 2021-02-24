import * as React from "react"
import { Provider } from "react-redux"
import { Store } from 'redux'

import createStore from './src/store/createStore'

interface IProps {
    element: React.ReactElement
}

export default ({ element }: IProps) => {
    const store: Store = createStore()
    return <Provider store={store}>{element}</Provider>
}
