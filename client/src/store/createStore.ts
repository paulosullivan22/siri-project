import { createStore as reduxCreateStore, Store, compose, applyMiddleware } from 'redux'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import { all } from 'redux-saga/effects'

import { reducer, initialState } from './reducer'

import sagas from './sagas'

function* rootSaga(): Generator {
  yield all([...sagas])
}

const createStore: () => Store = () => {
  const sagaMiddleware: SagaMiddleware = createSagaMiddleware()

  const store: any = reduxCreateStore(reducer, initialState, compose(applyMiddleware(sagaMiddleware)))

  sagaMiddleware.run(rootSaga)

  return store
}
export default createStore
