import { createStore as reduxCreateStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer, initialState } from './reducer'

const createStore: () => Store = () => reduxCreateStore(reducer, initialState, composeWithDevTools())
export default createStore
