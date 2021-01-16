from flask import Flask, request
from flask_cors import CORS, cross_origin
import requests
import os
from dotenv import load_dotenv

from SpeechToTextClient import SpeechToTextClient
from LangProcessingClient import LangProcessingClient

load_dotenv()

# from google.cloud import language_v1

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# WIT_TOKEN = os.getenv("WIT_TOKEN")

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

    # Instantiating clients
    speech_to_text_client = SpeechToTextClient()
    language_processing_client = LangProcessingClient()

    encoded_audio_file = request.data
    transcribed_audio = speech_to_text_client.make_recognize(encoded_audio_file)

    document = language_processing_client.make_document(transcribed_audio)
    sentiment = language_processing_client.make_processing(document)

    return {
        "transcribed_audio": transcribed_audio,
        "sentiment": sentiment
    }

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
