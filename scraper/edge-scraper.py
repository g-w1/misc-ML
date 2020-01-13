from bs4 import BeautifulSoup
import requests
post = 'https://www.edge-ma.com/wp-login.php?action=postpass'
after = 'https://www.edge-ma.com/student-area/curriculum/'
payload = {"post_password":"DobbsFerry","Submit":"Enter"}
with requests.Session() as session:
    post = session.post(post, data=payload)
    r = session.get(after)
    soup = BeautifulSoup(r.content, 'html.parser')
    a = soup.find_all("div",class_ = "btn-align-center")
    belts = {}
    for belt in a:
      print(belt.a.text.lower())
      print("https://www.edge-ma.com/student-area/curriculum/"+belt.a["href"])
      print("---------------------")
      belts[belt.a.text.lower()] = "https://www.edge-ma.com/student-area/curriculum/"+belt.a["href"]
def findlink(belts):
  what = input("What belt do you want?:    ")
  try:
    print(belts[what.lower()])
    print("")
    tryagain = input("again y/n:  ")
    if tryagain == "y":
        findlink(belts)
  except:
    print("belt not found")
    print( "try again")
    findlink(belts)
findlink(belts)
