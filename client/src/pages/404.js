import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

//
// function getBase64EncodedAudio(blob: any) {
//   return new Promise<any>((resolve: any, reject: any) => {
//     const reader = new FileReader()
//     let base64data: any = null
//     reader.readAsDataURL(blob)
//     reader.onloadend = () => {
//       base64data = reader.result
//       resolve(base64data)
//     }
//     return base64data
//   })
// }
//
// const base64data: any = await getBase64EncodedAudio(blob)
// const formattedBase64Data: any = base64data.split(',')[1]

// let body: any = {
//   config: {
//     enableAutomaticPunctuation: true,
//     encoding: 'LINEAR16',
//     languageCode: 'en-US',
//     model: 'command_and_search'
//   },
//   audio: {
//     content: formattedBase64Data
//   }
// }

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

// const uri = 'https://api.wit.ai/speech'
// const auth = 'Bearer ' + process.env.GATSBY_WIT_TOKEN
// fetch(uri, {
//   method: 'POST',
//   headers: { Authorization: auth, 'Content-type': 'audio/wav' },
//   body: formattedBase64Data
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res))

// const res = fetch('https://api.wit.ai/speech?client=chromium&lang=en-us&output=json', {
//   method: 'GET',
//   headers: {
//     Accept: 'application/vnd.wit.20160202+json',
//     Authorization: `Bearer ${process.env.GATSBY_WIT_TOKEN}`,
//     'Content-Type': 'audio/wav'
//   }
// })