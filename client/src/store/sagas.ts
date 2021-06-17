import { put, takeLatest } from 'redux-saga/effects'

import { START_API_CALL, API_CALL_SUCCESS, API_CALL_FAILURE } from './constants'

function* startApiCall(payload: any): Generator {
  console.log('SAGA STARTING')
  console.log(payload)

  try {
    const { transcribed_audio, links }: any = yield fetch(`${process.env.GATSBY_API_URL}/audio`, {
      method: 'POST',
      body: payload
    }).then((res: Response) => res.json())

    const response: any = { audio: transcribed_audio, links }

    yield put({ type: API_CALL_SUCCESS, payload: response })

    console.log(transcribed_audio)
    console.log(links)
  } catch (error) {
      yield put({ type: API_CALL_FAILURE })
  }
}

function* watchApiCallStart(): Generator {
  yield takeLatest(START_API_CALL, startApiCall)
}

export default [watchApiCallStart()]
