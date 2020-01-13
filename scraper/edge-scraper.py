from bs4 import BeautifulSoup
import requests
post = 'https://www.edge-ma.com/wp-login.php?action=postpass'
after = 'https://www.edge-ma.com/student-area/'
payload = {"post-password":"DobbsFerry"}
with requests.Session() as session:
    post = session.post(post, data=payload)
    r = session.get(after)
    text = BeautifulSoup(r)
    print(r.text)
