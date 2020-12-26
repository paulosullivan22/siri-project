import * as React from "react"


const HomePage: any = () => {
    const { useEffect } = React

    const recordRef = document.getElementsByClassName('record')
    const stopRef = document.getElementsByClassName('stop')
    const soundClips = document.getElementsByClassName('.sound-clips')

    useEffect(() => {
        if (navigator.mediaDevices.getUserMedia) {

            // window.gapi.load('auth2', function() {});
            // console.log(window.gapi?.auth2?.getAuthInstance().signIn())

            const constraints = {audio: true};
            let chunks = [];

            let onSuccess = function (stream) {
                const mediaRecorder = new MediaRecorder(stream);

                recordRef[0].onclick = function() {
                    mediaRecorder.start();
                    console.log("recorder started");
                }

                stopRef[0].onclick = function () {
                    mediaRecorder.stop();
                    console.log("recorder stopped");
                    // mediaRecorder.requestData();
                }

                mediaRecorder.onstop = function async (e) {
                    const clipName = 'unnamed_clip'

                    const clipContainer = document.createElement('article');
                    const clipLabel = document.createElement('p');
                    const audio = document.createElement('audio');
                    const deleteButton = document.createElement('button');

                    clipContainer.classList.add('clip');
                    audio.setAttribute('controls', '');
                    deleteButton.textContent = 'Delete';
                    deleteButton.className = 'delete';

                    if (clipName === null) {
                        clipLabel.textContent = 'My unnamed clip';
                    } else {
                        clipLabel.textContent = clipName;
                    }

                    clipContainer.appendChild(audio);
                    clipContainer.appendChild(clipLabel);
                    clipContainer.appendChild(deleteButton);
                    // soundClips.appendChild(clipContainer);

                    audio.controls = true;
                    const blob = new Blob(chunks, {'type': 'audio/ogg; codecs=opus'});
                    chunks = [];

                    try {
                        let body: any = {
                            "config": {
                                // "encoding":"FLAC",
                                // "sampleRateHertz": 16000,
                                // "languageCode": "en-US",
                                // "enableWordTimeOffsets": false

                                "enableAutomaticPunctuation": true,
                                "encoding": "LINEAR16",
                                "languageCode": "en-US",
                                "model": "command_and_search",
                                "sampleRateHertz": 48000
                            },
                            "audio": {
                                // "content": ""
                                "content": 'gs://siri-project/test_name_1'
                            }}

                        const res = fetch(`https://storage.googleapis.com/upload/storage/v1/b/siri-project/o?uploadType=media&name=test_name_1`, {
                            method: "POST",
                            headers: {
                                "Authorization": `Bearer ${process.env.GATSBY_GOOGLE_API_AUTH_TOKEN}`,
                                'Content-Type': "audio/ogg; codecs=opus"
                            },
                            body: blob
                        })

                        const speechRes = fetch(`https://speech.googleapis.com/v1p1beta1/speech:recognize`, {
                            method: "POST",
                            headers: {
                                'Content-Type': "application/json",
                                "Authorization": `Bearer ${process.env.GATSBY_GOOGLE_API_AUTH_TOKEN}`,

                            },
                            body: JSON.stringify(body)
                        })
                        console.log(res)
                        console.log(speechRes)

                    } catch(err) {
                        console.log(err)
                    }
                }

                mediaRecorder.ondataavailable = function (e) {
                    console.log(e.data)
                    chunks.push(e.data);
                }
            }

            let onError = function (err) {
                console.log('The following error occured: ' + err);
            }

            navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
        }
    })
    return (
        <>
            <button className={'record'}>Record</button>
            <button className={'stop'}>Stop</button>
            <section className={"sound-clips"}>
            </section>
            </>
    )
}

export default HomePage
