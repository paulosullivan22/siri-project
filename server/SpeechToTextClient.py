from google.cloud import speech

class SpeechToTextClient:
    def __init__(self):
        self.client = speech.SpeechClient()

    def make_recognize(self, encoded_audio_file):
        processed_audio = speech.RecognitionAudio(content=encoded_audio_file)

        config = speech.RecognitionConfig(
            encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
            sample_rate_hertz=16000,
            language_code="en-US",
        )

        response = self.client.recognize(config=config, audio=processed_audio)

        print(response.results[0].alternatives[0].transcript)
        return response.results[0].alternatives[0].transcript

