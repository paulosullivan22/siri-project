import urllib.request
from bs4 import BeautifulSoup

class WebScrapingClient:
    def make_request(self, search_content):
        parsed_content = search_content.replace(' ', '+')

        # Perform the request
        request = urllib.request.Request('https://google.com/search?q=' + parsed_content)

        # Set a normal User Agent header, otherwise Google will block the request.
        request.add_header('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36')
        raw_response = urllib.request.urlopen(request).read()

        html = raw_response.decode("utf-8")

        soup = BeautifulSoup(html, 'html.parser')

        links = soup.find_all("div", class_="yuRUbf")

        for link in links:
            a = link.findChildren("a" , href=True)
            print(a)
            print(a[0]['href'])
            print(a[0].get_text())
            print('---')

#         children = question_pair.findChildren("a" , recursive=False)
#         print(question_pair)
#         for child in children:
#             print(child)

#         divs = soup.select("#search div.g")
#         accordions = soup.select("g-accordion-expander")
#
#         for div in divs:
#             results = div.select("h3")
#
#             if (len(results) >= 1):
#                 h3 = results[0]
#                 print(h3.get_text())
