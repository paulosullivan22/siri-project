import * as React from 'react'
import MediaStreamRecorder from 'msr'
import cx from 'classnames'

import styles from './index.module.scss'

const HomePage: any = () => {
  const { useEffect } = React

  const recordRef = document.getElementsByClassName('record')
  const stopRef = document.getElementsByClassName('stop')

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
          fetch(`${process.env.GATSBY_API_URL}/audio`, {
            method: "POST",
            body: blob
          })
        }
      }

      function onMediaError(e) {
        console.error('media error', e)
      }
    }
  })
  return (
    <>
      <button className={cx('record', styles.test)}>Record</button>
      <button className={'stop'}>Stop</button>
      <section className={'sound-clips'}></section>
    </>
  )
}

export default HomePage
