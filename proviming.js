from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()

# Go to Instagram
driver.get("https://www.instagram.com/")

# Log in
time.sleep(2)
username_input = driver.find_element(By.NAME, "username")
password_input = driver.find_element(By.NAME, "password")

username_input.send_keys("your_username")
password_input.send_keys("your_password")
password_input.submit()

# Wait for login to complete
time.sleep(5)

# Search for the user
driver.get("https://www.instagram.com/direct/new/")

time.sleep(3)
search_box = driver.find_element(By.NAME, "queryBox")
search_box.send_keys("brt_06_a")
time.sleep(2)

# Select user and send message
user = driver.find_element(By.XPATH, "//div[text()='brt_06_a']")
user.click()

next_button = driver.find_element(By.XPATH, "//div[text()='Next']")
next_button.click()

time.sleep(2)
message_box = driver.find_element(By.TAG_NAME, "textarea")
message_box.send_keys("Hi! 👋 This is an automated message.")
message_box.send_keys("\n")  # Press enter to send

time.sleep(5)
driver.quit()
