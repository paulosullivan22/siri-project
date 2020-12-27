import * as React from 'react'
import Helmet from 'react-helmet'

const HomePage: any = () => {
  const { useEffect } = React

  const recordRef = document.getElementsByClassName('record')
  const stopRef = document.getElementsByClassName('stop')

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      const constraints = { audio: true }
      let chunks = []

      // Add webworker here
      const workerPath: any = '../../javascripts/audio.worker'
      const worker = new Worker(workerPath)

      worker.postMessage({ command: 'init ' })

      console.log(worker)

      let onSuccess = function (stream) {
        console.log(stream)
        const mediaRecorder = new MediaRecorder(stream)

        // worker.postMessage({ command: 'init', config: { sampleRate: stream } })

        // worker.postMessage({
        //   command: 'record',
        //   buffer: [stream.inputBuffer.getChannelData(0), stream.inputBuffer.getChannelData(1)]
        // })

        recordRef[0].onclick = function () {
          mediaRecorder.start()
          console.log('recorder started')
        }

        stopRef[0].onclick = function () {
          mediaRecorder.stop()
          console.log('recorder stopped')
        }

        mediaRecorder.onstop = async function (e) {
          console.log(chunks)
          const blob = new Blob(chunks, { type: 'audio/wav' })
          chunks = []
          console.log(blob)

          // worker.postMessage({
          //   command: 'exportWAV',
          //   type: 'audio/wav'
          // })

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
              // "encoding":"FLAC",
              // "sampleRateHertz": 16000,
              // "languageCode": "en-US",
              // "enableWordTimeOffsets": false

              enableAutomaticPunctuation: true,
              encoding: 'LINEAR16',
              languageCode: 'en-US',
              model: 'command_and_search',
              sampleRateHertz: 48000
            },
            audio: {
              content: formattedBase64Data
              // "uri": 'gs://siri-project/test_name_1'
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

        mediaRecorder.ondataavailable = function (e) {
          chunks.push(e.data)
        }
      }

      let onError = function (err) {
        console.log('The following error occured: ' + err)
      }

      navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError)
    }
  })
  return (
    <>
      <Helmet></Helmet>
      <button className={'record'}>Record</button>
      <button className={'stop'}>Stop</button>
      <section className={'sound-clips'}></section>
    </>
  )
}

export default HomePage
