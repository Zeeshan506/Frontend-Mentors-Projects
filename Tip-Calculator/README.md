# 💰 Tip Calculator

---

## ![Screenshot](/images/image.png)

## Overview

This is my solution to the [Frontend Mentor Tip Calculator challenge](#).  
The goal was to build a **responsive tip calculator** that splits a bill based on user input, selected tip percentage, and number of people.  
It was implemented using **HTML**, **CSS/Tailwind**, and **Vanilla JavaScript** for the core calculation logic.

## The Challenge

- Users should be able to:
  - Enter the bill amount.
  - Select a tip percentage (predefined buttons or custom input).
  - Specify the number of people to split the bill.
  - See the calculated tip amount per person and total amount per person.
  - Reset the calculator at any time.
- Handle invalid input (e.g., number of people = 0).
- Keep the UI clean and responsive.

## Built With

- **HTML5** – for input fields and structure.
- **CSS / Tailwind CSS** – for styling and responsive layout.
- **Vanilla JavaScript** – for input handling, tip calculation, and DOM updates.

## Live Demo

- **Live Site:** [Placeholder Link](https://tipcalculator506.netlify.app/)
- **Frontend Mentor Solution Page:** [Placeholder Link](https://www.frontendmentor.io/solutions/tip-calculator-app-tailwind-PBB8vkXZhz)

## Where and What JavaScript Was Used

JavaScript handled all dynamic parts of the calculator:

```js
reset.addEventListener("click", () => {
  bill.value = "";
  customAmount.value = "";
  people.value = "";
  tipAmount.textContent = "$0.00";
  perPerson.textContent = "$0.00";
});
```

- Event Listeners – Added to tip buttons, custom input, people input, and reset button.
- Validation – Checked if number of people was valid, showed/hid error messages.
- Data Attributes – Used on tip buttons (data-tip) to dynamically read the tip percentage.
- DOM Updates – Displayed calculated values (tipAmount, perPerson) in real time.

Example of handling tip percentage selection:

```
tipButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tip = parseFloat(btn.dataset.tip);
    calculateTip(tip);
  });
});

```

## Personal Learning

- This project was more of a revision than learning something new.
- It refreshed my knowledge of:
  - Attaching multiple event listeners.
  - Reading custom data-\* attributes.
  - Dynamically updating the DOM with calculated results.
- It reinforced the importance of input validation and clean UI resets.
