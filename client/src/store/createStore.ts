import { createStore as reduxCreateStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import { Store } from 'redux'

import { reducer, initialState } from './reducer'

const createStore: () => Store = () => reduxCreateStore(reducer, initialState, composeWithDevTools())
export default createStore
