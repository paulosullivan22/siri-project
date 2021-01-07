import * as React from 'react'
import { Dispatch, SetStateAction } from "react";
import MediaStreamRecorder from 'msr'
import cx from 'classnames'
import { bindActionCreators, Dispatch as reduxDispatch } from 'redux'
import { connect } from 'react-redux'

import { IState, IAddDialogAction } from "../store/interfaces";
import actions from '../store/actionCreators'
import SpeechBox from "../components/SpeechBox";
import { IMediaConstraints } from './interfaces'

import styles from './index.module.scss'

interface IDispatchProps {
  actions: {
    addDialogAction: IAddDialogAction
  }
}

interface IStateProps {
  dialog: object[]
}

type Props = IStateProps & IDispatchProps

const HomePage: React.FC<Props> = ({ actions, dialog }: Props): React.ReactElement => {
  const { useEffect, useState } = React
  const { addDialogAction } = actions
  const [withDialog, setWithDialog]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)
  const key: string = withDialog ? 'withDialog' : 'withoutDialog'

  const recordRef: HTMLCollection = document.getElementsByClassName('record')
  const stopRef: HTMLCollection = document.getElementsByClassName('stop')

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia && navigator.getUserMedia) {
      const mediaConstraints: IMediaConstraints = {
        audio: true
      }

      navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError)

      function onMediaSuccess(stream: MediaStream): void {
        const mediaRecorder = new MediaStreamRecorder(stream)
        mediaRecorder.audioChannels = 1
        mediaRecorder.mimeType = 'audio/wav'

        recordRef[0].onclick = function () {
          mediaRecorder.start(10000)
        }

        stopRef[0].onclick = function () {
          mediaRecorder.stop()
        }

        mediaRecorder.ondataavailable = async function (blob) {
          const { content } = await fetch(`${process.env.GATSBY_API_URL}/audio`, {
            method: "POST",
            body: blob
          }).then(res => res.json())

          setWithDialog(true)
          addDialogAction({ content })
        }
      }

      function onMediaError(e) {
        console.error('media error', e)
      }
    }
  })

  return (
    <div className={styles.container} key={key}>
      <SpeechBox dialog={dialog}/>
      <div>
        <button className={cx('record', styles.test)}>Record</button>
        <button className={'stop'}>Stop</button>
      </div>
    </div>
  )
}

function mapStateToProps(state: IState): IState {
  return {
    dialog: state.dialog
  }
}

function mapDispatchToProps(dispatch: reduxDispatch): IDispatchProps {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
