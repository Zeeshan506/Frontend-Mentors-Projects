# Time Tracking Dashboard

---

## ![Screenshot](/images/image.png)

## Overview

This is my solution to the [Frontend Mentor Time Tracking Dashboard challenge](#).  
The goal was to build a **responsive time tracking dashboard** that displays activity data (Work, Play, Study, Exercise, Social, Self Care) across different timeframes (Daily, Weekly, Monthly).  
It was implemented using **HTML**, **Tailwind CSS**, and **Vanilla JavaScript** with **dynamic data fetching** from a JSON file.

## The Challenge

- Replicate the given **Time Tracking Dashboard** design as closely as possible.
- Ensure responsiveness across mobile, tablet, and desktop devices.
- Dynamically load activity data from a `data.json` file using **async/await** and `fetch()`.
- Update the UI based on selected timeframe (Daily, Weekly, Monthly).
- Style exclusively with **Tailwind CSS** utilities.
- Practice semantic HTML and accessibility-friendly structure.

## Built With

- **HTML5** – for semantic structure.
- **Tailwind CSS** – for responsive design and styling.
- **CSS Grid & Flexbox** – for layout management.
- **Google Fonts (Rubik)** – for typography.
- **Vanilla JavaScript** – for data fetching, DOM manipulation, and state management.

## Live Demo

- **Live Site:** [Netlify Site](https://timetracking506.netlify.app/)
- **Frontend Mentor Solution Page:** [click here](https://www.frontendmentor.io/solutions/time-tracking-dashboard-tailwind-css-8oFSibf-CL)

## Where and What JavaScript Was Used

JavaScript was used to **fetch JSON data**, **handle timeframe buttons**, and **dynamically render cards**:

```js
async function loadData() {
  const response = await fetch("./data.json");
  data = await response.json();
  render(currentTimeFrame);
}
```

- Async/Await + Fetch – Learned to fetch and parse JSON data using await response.json().
- State Management – Kept track of the current timeframe (daily, weekly, monthly).
- Data Attributes – Used data-card attributes in HTML to map activities dynamically.
- Event Handling – Added button listeners to switch timeframes and re-render data.
- DOM Updates – Used innerHTML to dynamically inject activity cards with correct hours.

Example of handling timeframe changes:

```
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    resetButtons();
    currentTimeFrame = btn.value;
    btn.classList.add("text-white", "scale-115");
    render(currentTimeFrame);
  });
});

```

## Personal Learning

- I learned how to use async/await with fetch to retrieve and display external JSON data.
- Using data attributes in HTML to link JavaScript logic with UI elements was new to me.
- Handling JavaScript state and DOM updates was challenging at first, but gave me a deeper understanding of how dynamic dashboards work.
