import React, { Dispatch, FC, ReactElement, SetStateAction, useEffect, useState } from 'react'
import MediaStreamRecorder from 'msr'
import { bindActionCreators, Dispatch as reduxDispatch } from 'redux'
import { connect } from 'react-redux'
import cx from 'classnames'

import actions from '../store/actionCreators'
import { IState, IDispatchProps } from '../store/interfaces'
import SpeechBox from '../components/SpeechBox'
import { IMediaConstraints } from './interfaces'

import styles from './index.module.scss'

interface IStateProps {
  isSpeechBoxExpanded: boolean
}

type Props = IStateProps & IDispatchProps

const HomePage: FC<Props> = ({ actions, isSpeechBoxExpanded }: Props): ReactElement => {
  const { addDialogAction } = actions
  const [isRecording, setIsRecording]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false)
  const [withDialog, setWithDialog]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false)
  // Can this be removed?
  const key: string = withDialog ? 'withDialog' : 'withoutDialog'

  const recordRef: HTMLCollectionOf<Element> = document.getElementsByClassName('record')
  const stopRef: HTMLCollectionOf<Element> = document.getElementsByClassName('stop')

  // NOTE: dark mode by default
  const changeRootCss: () => void = () => {
    document.documentElement.classList.toggle(styles.darkMode)
  }

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
          actions.startApiCallAction(blob)

          // const { transcribed_audio, links } = await fetch(`${process.env.GATSBY_API_URL}/audio`, {
          //   method: 'POST',
          //   body: blob
          // }).then((res: Response) => res.json())

          setWithDialog(true)
          // addDialogAction({ audio: transcribed_audio, links })
        }
      }

      const onMediaError: (error: MediaStreamError) => void = (error: MediaStreamError) => {
        console.error(error)
      }
      
      navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError)
    }
  })

  return (
    <div className={cx(styles.container, { [styles.speechBoxExpanded]: isSpeechBoxExpanded })} key={key}>
      <label className={styles.switch}>
        <input type="checkbox" onClick={changeRootCss} />
        <span className={styles.slider}></span>
      </label>
      <div className={styles.textContainer}>
        <p className={styles.introText}>Hello World, and welcome to my Siri Emulator.</p>
        <p className={styles.introText}>
          This emulator uses advanced speech-to-text machine learning to serialize audio data.
        </p>
        <p className={styles.introText}>
          Just like Siri, the program uses the web to find answers to whatever you ask.
        </p>
        <p className={styles.introText}>Go ahead, click the box below to start.</p>
      </div>
      <div className={styles.speechBoxContainer}>
        <SpeechBox isRecording={isRecording} />
      </div>
      <div className={styles.footer}>
        <hr />
        <p>Made by Paul O'Sullivan ✋</p>
        <div className={styles.footerLinks}>
          <a href="https://github.com/paulosullivan22">Github</a>
          <a href="https://www.linkedin.com/in/paul-o-sullivan22/">Linkedin</a>
          <a href="mailto: paulosullivan22@outlook.com">Email</a>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state: IState): Pick<IState, 'isSpeechBoxExpanded'> {
  return {
    isSpeechBoxExpanded: state.isSpeechBoxExpanded
  }
}

function mapDispatchToProps(dispatch: reduxDispatch): IDispatchProps {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
