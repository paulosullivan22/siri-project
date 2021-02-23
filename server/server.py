from flask import Flask, request
from flask_cors import CORS, cross_origin
import requests
import os
from dotenv import load_dotenv

from WebScrapingClient import WebScrapingClient
from SpeechToTextClient import SpeechToTextClient

load_dotenv()

app = Flask(__name__)

# Setting CORS rules
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/audio", methods=['POST'])
@cross_origin()
def audio():

    # Instantiating clients
    speech_to_text_client = SpeechToTextClient()
    web_scraping_client = WebScrapingClient()

    encoded_audio_file = request.data
    transcribed_audio = speech_to_text_client.make_recognize(encoded_audio_file)

    web_scraping_client.make_request(transcribed_audio)

    return {
        "transcribed_audio": transcribed_audio,
    }

if __name__ == '__main__':
   app.run()

# source virtualenv/bin/activate
# export GOOGLE_APPLICATION_CREDENTIALS="key.json"
# FLASK_APP=server.py FLASK_ENV=development flask run
