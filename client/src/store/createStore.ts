import { createStore as reduxCreateStore, Store, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import { reducer, initialState } from './reducer'


import sagas from './sagas'

function* rootSaga(): any {
  yield all([...sagas])
}

const createStore: () => Store = () => {
    const sagaMiddleware: any = createSagaMiddleware()

    const store: any = reduxCreateStore(reducer, initialState, compose(applyMiddleware(sagaMiddleware)))

    sagaMiddleware.run(rootSaga)

    return store
}
export default createStore
