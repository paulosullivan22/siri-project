import { createStore as reduxCreateStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer, initialState } from './reducer'

const createStore = () => reduxCreateStore(reducer, initialState, composeWithDevTools())
export default createStore