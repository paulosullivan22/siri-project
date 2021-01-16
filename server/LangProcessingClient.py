# Add language processing client here

from google.cloud import language_v1

class LangProcessingClient:
    def __init__(self):
        self.client = language_v1.LanguageServiceClient()

    def make_document(self, audio):
        return language_v1.Document(content=audio, type_=language_v1.Document.Type.PLAIN_TEXT)

    def make_processing(self, document):
        sentiment = self.client.analyze_sentiment(request={'document': document})

        print(sentiment)
