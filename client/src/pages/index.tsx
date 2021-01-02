import * as React from 'react'
import MediaStreamRecorder from 'msr'
import cx from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import actions from '../store/actionCreators'
import SpeechBox from "../components/SpeechBox";

import styles from './index.module.scss'

const HomePage: React.FC = ({ actions, dialog }: any): React.ReactElement => {
  const { useEffect } = React
  const { addDialogAction } = actions

  const recordRef: HTMLCollection = document.getElementsByClassName('record')
  const stopRef: HTMLCollection = document.getElementsByClassName('stop')

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia && navigator.getUserMedia) {
      const mediaConstraints = {
        audio: true
      }

      navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError)

      function onMediaSuccess(stream) {
        const mediaRecorder = new MediaStreamRecorder(stream)
        mediaRecorder.audioChannels = 1
        mediaRecorder.mimeType = 'audio/wav'

        recordRef[0].onclick = function () {
          mediaRecorder.start(10000)
          console.log('recorder started')
        }

        stopRef[0].onclick = function () {
          mediaRecorder.stop()
          console.log('recorder stopped')
        }

        mediaRecorder.ondataavailable = async function (blob) {
          const { content } = await fetch(`${process.env.GATSBY_API_URL}/audio`, {
            method: "POST",
            body: blob
          }).then(res => res.json())

          console.log("CONTENT")
          console.log(content)

          addDialogAction({ content })
        }
      }

      function onMediaError(e) {
        console.error('media error', e)
      }
    }
  })

  console.log("DIALOG")
  console.log(dialog)
  return (
    <div className={styles.container}>
      <SpeechBox dialog={dialog}/>
      <div>
        <button className={cx('record', styles.test)}>Record</button>
        <button className={'stop'}>Stop</button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    dialog: state.dialog
  }
}

function mapDispatchToProps(dispatch: any): { actions: any } {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
