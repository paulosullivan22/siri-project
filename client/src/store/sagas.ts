import { takeLatest } from 'redux-saga/effects'

import { START_API_CALL } from './constants'

function* startApiCall(): any {
    console.log("SAGA STARTING")
}

function* watchApiCallStart(): any {
    yield takeLatest(START_API_CALL, startApiCall)
}

export default [watchApiCallStart()]