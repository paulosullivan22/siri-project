from flask import Flask, request
from flask_cors import CORS, cross_origin
import requests
import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

WIT_TOKEN = os.getenv("WIT_TOKEN")

@app.route("/audio", methods=['POST'])
@cross_origin()
def audio():
    encodedAudioFile = request.data

    uri = 'https://api.wit.ai/speech'

    headers = {
        "Authorization": 'Bearer ' + WIT_TOKEN,
        "Content-type": "audio/wav"
    }

    r = requests.post(uri, data=encodedAudioFile, headers=headers).json()

    print(r)

    content = r['text']
#     intent = r['intents'][0]['name']

    print(content)
#     print(intent)

    return { "content": content, "intent": '' }

if __name__ == '__main__':
   app.run()