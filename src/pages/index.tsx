import * as React from 'react'
import MediaStreamRecorder from 'msr'

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
              model: 'command_and_search'
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

          // let speechResponse = null
          // await fetch(`https://speech.googleapis.com/v1p1beta1/speech:recognize`, {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //     Authorization: `Bearer ${process.env.GATSBY_GOOGLE_API_AUTH_TOKEN}`
          //   },
          //   body: JSON.stringify(body)
          // })
          //   .then((res) => res.json())
          //   .then((res) => (speechResponse = res))
          // console.log(speechResponse)
          //
          // const speech = speechResponse.results[0].alternatives[0].transcript
          // const encodedSpeech = encodeURIComponent(speech)
          // const uri = 'https://api.wit.ai/message?v=20200513&q=' + encodedSpeech
          // const auth = 'Bearer ' + process.env.GATSBY_WIT_TOKEN
          // fetch(uri, { headers: { Authorization: auth } })
          //   .then((res) => res.json())
          //   .then((res) => console.log(res))

          const uri = 'https://api.wit.ai/speech'
          const auth = 'Bearer ' + process.env.GATSBY_WIT_TOKEN
          fetch(uri, {
            method: 'POST',
            headers: { Authorization: auth, 'Content-type': 'audio/wav' },
            body: formattedBase64Data
          })
            .then((res) => res.json())
            .then((res) => console.log(res))

          // const res = fetch('https://api.wit.ai/speech?client=chromium&lang=en-us&output=json', {
          //   method: 'GET',
          //   headers: {
          //     Accept: 'application/vnd.wit.20160202+json',
          //     Authorization: `Bearer ${process.env.GATSBY_WIT_TOKEN}`,
          //     'Content-Type': 'audio/wav'
          //   }
          // })
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
