# Product Preview Card Component

---

## Overview

This is my solution to the [Frontend Mentor Product Preview Card Component challenge](#).  
The goal was to create a clean, responsive product card with a mobile-first design approach, styled entirely using Tailwind CSS.

## The Challenge

- Replicate the given Product Preview Card design as closely as possible.
- Ensure the layout is responsive for mobile, tablet, and desktop devices.
- Implement a **mobile-first** approach, swapping images at the `md:` breakpoint.
- Use semantic HTML for better accessibility and readability.
- Apply custom colors, typography, and spacing with Tailwind utilities.
- Maintain consistent border radii for both mobile and desktop layouts.

## Built With

- **HTML5** – for semantic structure
- **Tailwind CSS** – for styling and responsiveness (via CDN)
- **Flexbox** – for layout alignment and positioning
- **Google Fonts** – `Fraunces` (headings) and `Montserrat` (body text) for typography

## Live Demo

- **Live Site:** [Netlify Site](#)
- **Frontend Mentor Solution Page:** [click here](#)

## What I Learned

- Implementing **mobile-first responsive image switching** using Tailwind’s arbitrary values and breakpoints:  
  `bg-[url('./images/image-product-mobile.jpg')] md:bg-[url('./images/image-product-desktop.jpg')]`
- Maintaining consistent height on mobile using `min-h` and preventing shrinking with `flex-shrink-0`.
- Applying **custom hex colors** in Tailwind to precisely match the design palette.
- Structuring card layouts using `flex-col` for mobile and `flex-row` for desktop.
- Using utility classes for quick hover effects:  
  Example – `hover:bg-[#1b4133ff]` for button background color change.

## Tailwind Tips Learned

- **Custom Colors:**  
  Example: `bg-[#f3eae3]` for the page background, `text-[#3c8067ff]` for price text.

- **Responsive Image Backgrounds:**  
  Use `bg-[url('path')]` and swap with `md:bg-[url('path')]` for breakpoint-specific images.

- **Rounded Corners:**  
  Example: `rounded-t-2xl` for mobile top corners, switching to `md:rounded-l-2xl md:rounded-tr-none` for desktop layouts.

- **Spacing Utilities:**  
  Use `gap-4`, `px-6`, `py-4`, and `mx-4` for consistent padding and margins.

- **Prevent Shrinking:**  
  Add `flex-shrink-0` or `min-w` classes to keep the image div from collapsing on narrow viewports.
