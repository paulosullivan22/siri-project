import { takeLatest } from 'redux-saga/effects'

import { START_API_CALL } from './constants'

function* startApiCall(payload: any): any {
    console.log("SAGA STARTING")
    console.log(payload)

    // const { transcribed_audio, links } = yield fetch(`${process.env.GATSBY_API_URL}/audio`, {
    //     method: 'POST',
    //     body: payload
    //   }).then((res: Response) => res.json())

    //   console.log(transcribed_audio)
    //   console.log(links)
}

function* watchApiCallStart(): any {
    yield takeLatest(START_API_CALL, startApiCall)
}

export default [watchApiCallStart()]