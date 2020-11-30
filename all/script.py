import pyautogui
import time

time.sleep(5)
with open("scr.txt","r") as f:
    all = f.readlines()
# print(all)

for i in all:
    print(i)
    pyautogui.write(i)
    time.sleep(.6)
