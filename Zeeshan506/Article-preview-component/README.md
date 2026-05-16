# Article Preview Component

---

![alt text](/images/image.png)
---
## Overview

This is my solution to the [Frontend Mentor Article Preview Component challenge](#).  
The goal was to build a responsive card layout with a share feature that adapts for **mobile** and **desktop** using HTML, Tailwind CSS, and a small amount of JavaScript.

## The Challenge

- Replicate the given **Article Preview Component** as closely as possible.  
- Ensure responsiveness across mobile, tablet, and desktop devices.  
- Implement two different **share popups**:
  - A bottom bar on **mobile**.
  - A floating popup with arrow on **desktop**.
- Use semantic HTML for structure and accessibility.  
- Style exclusively with **Tailwind CSS** utilities.  
- Add **JavaScript logic** to handle toggle behavior for the share buttons.

## Built With

- **HTML5** – for semantic structure.  
- **Tailwind CSS** – for styling and responsive layout.  
- **Flexbox** – for flexible alignment and positioning.  
- **Google Fonts** – `Manrope` for typography.  
- **Vanilla JavaScript** – for share button toggle and responsive detection.  

## Live Demo

- **Live Site:** [Netlify Site](https://articlepreview506.netlify.app/)  
- **Frontend Mentor Solution Page:** [click here](#)  

## Where and What JavaScript Was Used

JavaScript was used to **toggle visibility** of share popups depending on screen size:

```js
if (window.innerWidth >= 1024) {
  // Show desktop popup
  desktopShare.classList.toggle("hidden");
} else {
  // Show mobile bottom bar
  mobileShare.classList.toggle("hidden");
}
