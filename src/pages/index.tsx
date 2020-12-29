import * as React from 'react'
import MediaStreamRecorder from 'msr'

const HomePage: any = () => {
  const { useEffect } = React

  const recordRef = document.getElementsByClassName('record')
  const stopRef = document.getElementsByClassName('stop')

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      var mediaConstraints = {
        audio: true
      }

      navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError)

      function onMediaSuccess(stream) {
        var mediaRecorder = new MediaStreamRecorder(stream)
        mediaRecorder.audioChannels = 1
        mediaRecorder.mimeType = 'audio/wav' // check this line for audio/wav

        recordRef[0].onclick = function () {
          mediaRecorder.start()
          console.log('recorder started')
        }

        stopRef[0].onclick = function () {
          mediaRecorder.stop()
          console.log('recorder stopped')
        }

        mediaRecorder.ondataavailable = async function (blob) {
          console.log('DATA AVAILABLE')
          console.log(blob)

          function getBase64EncodedAudio(blob: any) {
            return new Promise<any>((resolve: any, reject: any) => {
              const reader = new FileReader()
              let base64data: any = null
              reader.readAsDataURL(blob)
              reader.onloadend = () => {
                base64data = reader.result
                resolve(base64data)
              }
              return base64data
            })
          }

          const base64data: any = await getBase64EncodedAudio(blob)
          const formattedBase64Data: any = base64data.split(',')[1]

          let body: any = {
            config: {
              enableAutomaticPunctuation: true,
              encoding: 'LINEAR16',
              languageCode: 'en-US',
              model: 'command_and_search',
              sampleRateHertz: 16000
            },
            audio: {
              content: formattedBase64Data
            }
          }

          // const res = fetch(
          //   `https://storage.googleapis.com/upload/storage/v1/b/siri-project/o?uploadType=media&name=test_name_1`,
          //   {
          //     method: 'POST',
          //     headers: {
          //       Authorization: `Bearer ${process.env.GATSBY_GOOGLE_API_AUTH_TOKEN}`,
          //       'Content-Type': 'audio/ogg; codecs=opus'
          //     },
          //     body: blob
          //   }
          // )

          const speechRes = fetch(`https://speech.googleapis.com/v1p1beta1/speech:recognize`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.GATSBY_GOOGLE_API_AUTH_TOKEN}`
            },
            body: JSON.stringify(body)
          })
          console.log(speechRes)
        }
      }

      function onMediaError(e) {
        console.error('media error', e)
      }
    }
  })
  return (
    <>
      <button className={'record'}>Record</button>
      <button className={'stop'}>Stop</button>
      <section className={'sound-clips'}></section>
    </>
  )
}

export default HomePage
