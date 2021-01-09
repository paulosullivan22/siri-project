import React, { FC, ReactElement, useEffect, useState } from 'react'
import { Dispatch, SetStateAction } from "react";
import MediaStreamRecorder from 'msr'
import { bindActionCreators, Dispatch as reduxDispatch } from 'redux'
import { connect } from 'react-redux'

import { IState, IAddDialogAction } from "../store/interfaces";
import actions from '../store/actionCreators'
import SpeechBox from "../components/SpeechBox";
import { IMediaConstraints } from './interfaces'
import Buttons from '../components/Buttons'

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

const HomePage: FC<Props> = ({ actions, dialog }: Props): ReactElement => {
  const { addDialogAction } = actions
  const [withDialog, setWithDialog]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false)
  const key: string = withDialog ? 'withDialog' : 'withoutDialog'

  const recordRef: HTMLCollectionOf<Element> = document.getElementsByClassName('record')
  const stopRef: HTMLCollectionOf<Element> = document.getElementsByClassName('stop')

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
          const { content } = await fetch(`${process.env.GATSBY_API_URL}/audio`, {
            method: "POST",
            body: blob
          }).then((res: Response) => res.json())

          setWithDialog(true)
          addDialogAction({ content })
        }
      }

      const onMediaError: (error: Error) => void = (error: Error) => {
        console.error(error)
      }

      navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError)
    }
  })

  return (
    <div className={styles.container} key={key}>
      <SpeechBox dialog={dialog} />
      <div>
        <button className={'record'}>Record</button>
        <button className={'stop'}>Stop</button>
        <Buttons />
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
