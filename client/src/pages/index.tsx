import React, { Dispatch, FC, ReactElement, SetStateAction, useEffect, useState } from 'react'
import MediaStreamRecorder from 'msr'
import { bindActionCreators, Dispatch as reduxDispatch } from 'redux'
import { connect } from 'react-redux'

import actions from '../store/actionCreators'
import { IState, IDispatchProps, IDialogContent } from "../store/interfaces";
import SpeechBox from "../components/SpeechBox";
import { IMediaConstraints } from './interfaces'

import styles from './index.module.scss'

interface IStateProps {
  dialog: IDialogContent[]
}

type Props = IStateProps & IDispatchProps

const HomePage: FC<Props> = ({ actions }: Props): ReactElement => {
  const { addDialogAction } = actions
  // NOTE: check why this hook triggers infinite recording
  const [isRecording, setRecordingState]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false)
  const [withDialog, setWithDialog]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false)
  const key: string = withDialog ? 'withDialog' : 'withoutDialog'

  const recordRef: HTMLCollectionOf<Element> = document.getElementsByClassName('record')
  const stopRef: HTMLCollectionOf<Element> = document.getElementsByClassName('stop')

  // const changeRootCss: () => void = () => {
  //   document.documentElement.classList.toggle(styles.darkMode)
  // }

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia && navigator.getUserMedia) {
      const mediaConstraints: IMediaConstraints = {
        audio: true
      }

      const onMediaSuccess: (stream: MediaStream) => void = (stream: MediaStream) => {
        const mediaRecorder = new MediaStreamRecorder(stream)
        mediaRecorder.audioChannels = 1
        mediaRecorder.mimeType = 'audio/wav'

        recordRef[0].onclick = (): void => {
          mediaRecorder.start(10000)
        }

        stopRef[0].onclick = (): void => {
          mediaRecorder.stop()
        }

        mediaRecorder.ondataavailable = async (blob: Blob): Promise<void> => {
          const { transcribed_audio } = await fetch(`${process.env.GATSBY_API_URL}/audio`, {
            method: "POST",
            body: blob
          }).then((res: Response) => res.json())


          setWithDialog(true)
          addDialogAction({ content: transcribed_audio })
        }
      }

      const onMediaError: (error: MediaStreamError) => void = (error: MediaStreamError) => {
        console.error(error)
      }

      navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError)
    }
  })

  return (
    <div className={styles.container} key={key}>
      {/*<label className={styles.switch}>*/}
      {/*  <input type="checkbox" onClick={changeRootCss}/>*/}
      {/*    <span className={styles.slider}></span>*/}
      {/*</label>*/}
      <SpeechBox isRecording={isRecording} />
    </div>
  )
}

function mapStateToProps(state: IState): Pick<IState, 'dialog'> {
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
