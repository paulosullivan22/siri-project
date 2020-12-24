import * as React from "react"

const HomePage: any = () => {
    const { useEffect } = React

    console.log('test commit')
    const recordRef = document.getElementsByClassName('record')
    const stopRef = document.getElementsByClassName('stop')
    const soundClips = document.getElementsByClassName('.sound-clips')

    useEffect(() => {
        if (navigator.mediaDevices.getUserMedia) {

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
                    const audioURL = window.URL.createObjectURL(blob);
                    audio.src = audioURL;
                    console.log("recorder stopped");

                    try {
                        let body: any = {
                            "config": {
                                "encoding":"FLAC",
                                "sampleRateHertz": 16000,
                                "languageCode": "en-US",
                                "enableWordTimeOffsets": false
                            },
                            "audio": {
                                "uri":"gs://cloud-samples-tests/speech/brooklyn.flac"
                            }}

                        const res = fetch('https://speech.googleapis.com/v1p1beta1/speech:recognize?key=AIzaSyAPwtEQx1JWpo0XLdm0PWlpabNroCxfLN8', {
                            method: "POST",
                            headers: {
                                'Content-Type': "application/json"
                            },
                            body: JSON.stringify(body)
                        })
                        console.log(res)

                    } catch(err) {
                        console.log(err)
                    }
                }

                mediaRecorder.ondataavailable = function (e) {
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
