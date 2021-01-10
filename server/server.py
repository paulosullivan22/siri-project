from flask import Flask, request
from flask_cors import CORS, cross_origin
import requests
import os
from dotenv import load_dotenv
load_dotenv()

from google.cloud import speech

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

WIT_TOKEN = os.getenv("WIT_TOKEN")

# Imports the Google Cloud client library
# from google.cloud import language_v1
#
#
# # Instantiates a client
# client = language_v1.LanguageServiceClient()
#
# # The text to analyze
# text = u"Hello, world!"
# document = language_v1.Document(content=text, type_=language_v1.Document.Type.PLAIN_TEXT)
#
# # Detects the sentiment of the text
# sentiment = client.analyze_sentiment(request={'document': document}).document_sentiment
#
# print("Text: {}".format(text))
# print("Sentiment: {}, {}".format(sentiment.score, sentiment.magnitude))

@app.route("/audio", methods=['POST'])
@cross_origin()
def audio():

    # Instantiates a client
    client = speech.SpeechClient()

    # The name of the audio file to transcribe
#     gcs_uri = "gs://cloud-samples-data/speech/brooklyn_bridge.raw"
# {
# //   config: {
# //     enableAutomaticPunctuation: true,
# //     encoding: 'LINEAR16',
# //     languageCode: 'en-US',
# //     model: 'command_and_search'
# //   },
# //   audio: {
# //     content: formattedBase64Data
# //   }


    encodedAudioFile = request.data
    audio = speech.RecognitionAudio(content=encodedAudioFile)

    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=16000,
        language_code="en-US",
    )

    # Detects speech in the audio file
    response = client.recognize(config=config, audio=audio)

    print(response)

    return {}

#     for result in response.results:
#         print("Transcript: {}".format(result.alternatives[0].transcript))
#         return { response: result.alternatives[0].transcript }

#     encodedAudioFile = request.data
#
#     uri = 'https://api.wit.ai/speech'
#
#     headers = {
#         "Authorization": 'Bearer ' + WIT_TOKEN,
#         "Content-type": "audio/wav"
#     }
#
#     r = requests.post(uri, data=encodedAudioFile, headers=headers).json()
#
#     print(r)
#
#     content = r['text']
# #     intent = r['intents'][0]['name']
#
#     print(content)
# #     print(intent)
#
#     return { "content": content, "intent": '' }

if __name__ == '__main__':
   app.run()

# source virtualenv/bin/activate
# FLASK_APP=server.py FLASK_ENV=development flask run