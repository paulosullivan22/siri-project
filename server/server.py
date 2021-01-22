from flask import Flask, request
from flask_cors import CORS, cross_origin
import requests
import os
from dotenv import load_dotenv

from SpeechToTextClient import SpeechToTextClient
from LangProcessingClient import LangProcessingClient

load_dotenv()

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/audio", methods=['POST'])
@cross_origin()
def audio():

    # Instantiating clients
    speech_to_text_client = SpeechToTextClient()
#     language_processing_client = LangProcessingClient()

    encoded_audio_file = request.data
    transcribed_audio = speech_to_text_client.make_recognize(encoded_audio_file)

#     document = language_processing_client.make_document(transcribed_audio)
#     sentiment = language_processing_client.make_processing(document)

    return {
        "transcribed_audio": transcribed_audio,
#         "sentiment": sentiment
    }

if __name__ == '__main__':
   app.run()

# source virtualenv/bin/activate
# FLASK_APP=server.py FLASK_ENV=development flask run
