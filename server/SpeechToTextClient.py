from google.cloud import speech

class SpeechToTextClient:
    def __init__(self):
        self.client = speech.SpeechClient()

    def make_recognize(self, encoded_audio_file):   
        processed_audio = speech.RecognitionAudio(content=encoded_audio_file)

        print(speech.RecognitionConfig.AudioEncoding)

        config = speech.RecognitionConfig(
            encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
            language_code="en-US"
            # sample_rate_hertz=16000
        )

        print('here')

        response = self.client.recognize(config=config, audio=processed_audio)

        print(response)
        print('here 2')

        if (response.results == []):
            return

        return response.results[0].alternatives[0].transcript

