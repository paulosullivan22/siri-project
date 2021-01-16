from google.cloud import speech

# Add speech client here
class SpeechToTextClient():
    def __init__(self):
        self.client = speech.SpeechClient()

    def make_recognize(encoded_audio_file):
        processed_audio = speech.RecognitionAudio(content=encodedAudioFile)

        config = speech.RecognitionConfig(
            encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
            sample_rate_hertz=16000,
            language_code="en-US",
        )

        response = self.client.recognize(config=config, audio=audio)

        return response.results[0].alternatives[0].transcript

