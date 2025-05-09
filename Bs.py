import tkinter as tk
import random

def roll_dice(prediction):
    roll = random.randint(1, 6)
    dice_label.config(text=f"Dice rolled: {roll}")
    if (roll > 3 and prediction == "Big") or (roll <= 3 and prediction == "Small"):
        result_label.config(text="You Win!", fg="green")
    else:
        result_label.config(text="You Lose!", fg="red")

# Set up the main window
root = tk.Tk()
root.title("Big or Small Dice Game")
root.geometry("300x300")
root.resizable(False, False)
root.configure(bg="#f5f5f5")

# Title
title_label = tk.Label(root, text="Predict Big (>3) or Small (<=3)", font=("Arial", 14), bg="#f5f5f5")
title_label.pack(pady=10)

# Dice Roll Label
dice_label = tk.Label(root, text="Roll the dice!", font=("Arial", 20), bg="#f5f5f5")
dice_label.pack(pady=20)

# Result Label
result_label = tk.Label(root, text="", font=("Arial", 16), bg="#f5f5f5")
result_label.pack(pady=10)

# Big and Small Buttons
big_button = tk.Button(root, text="Big", command=lambda: roll_dice("Big"), width=10, font=("Arial", 14), bg="#4CAF50", fg="white")
big_button.pack(pady=5)

small_button = tk.Button(root, text="Small", command=lambda: roll_dice("Small"), width=10, font=("Arial", 14), bg="#2196F3", fg="white")
small_button.pack(pady=5)

# Run the GUI
root.mainloop(
