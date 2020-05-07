from bs4 import BeautifulSoup
import requests
import webbrowser
import json
post = 'http://edgemartialarts.sparkuniversity.co/Login.aspx'
after = "http://edgemartialarts.sparkuniversity.co/Courses.aspx"
with open("creds.json") as f:
    load = json.load(f)
payload = load
with requests.Session() as session:
    post = session.post(post, data=payload)
    r = session.get(after)
    soup = BeautifulSoup(r.content, 'html.parser')
    pages= []
    subpages={}
    subsubpages=[]
    for i in soup.find_all("a",attrs={"class":"btn btn-primary"}):
        a =(i['href'])
        pages.append(BeautifulSoup(session.get("http://edgemartialarts.sparkuniversity.co/"+ a).content, 'html.parser'))
    for page in pages:
        links = (page.find_all("tr"))
        for i in links:
            try:
                print(i.td.td)
                subpages[i.td.td.div.text] = (i['onclick'][9:][:-2])
            except:

                pass
    print(subpages)
    # for a in subpages:
        # subsubpages.append(BeautifulSoup(session.get("http://edgemartialarts.sparkuniversity.co/"+ a).content, 'html.parser'))
