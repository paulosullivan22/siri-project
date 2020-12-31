from flask import Flask, request
from flask_cors import CORS, cross_origin
import requests
import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/audio", methods=['POST'])
@cross_origin()
def audio():
    encodedAudioFile = request.data

    uri = 'https://api.wit.ai/speech'

    headers = {
        "Authorization": 'Bearer LTDBCKGPIGINSZQ7HRN2B5ETJOOMTZUH',
        "Content-type": "audio/wav"
    }

    r = requests.post(uri, data=encodedAudioFile, headers=headers)

    print(r.json())

    return { "res": "hello world" }

if __name__ == '__main__':
   app.run()