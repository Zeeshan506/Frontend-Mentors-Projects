# Testimonials Grid Section

---

## Overview

This is my solution to the [Frontend Mentor Testimonials Grid Section challenge](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7).  
The goal was to create a responsive testimonials grid with a clean design, built entirely with Tailwind CSS.

## The Challenge

- Replicate the given Testimonials Grid Section design as closely as possible.
- Ensure the layout adapts responsively from **mobile (single column)** to **desktop (grid layout)**.
- Implement a **mobile-first approach**, stacking cards naturally on smaller devices.
- Use semantic HTML for accessibility and readability.
- Apply consistent colors, spacing, and typography across all testimonial cards.

## Built With

- **HTML5** – semantic structure
- **Tailwind CSS** – styling and responsiveness (via CDN)
- **CSS Grid** – for layout and alignment
- **Google Fonts** – `Barlow Semi Condensed` for typography

## Live Demo

- **Live Site:** [Netlify Site](https://testimonialgird506.netlify.app/)
- **Frontend Mentor Solution Page:** [click here](#)

## What I Learned

- **Using CSS Grid effectively**:  
  Learned how to define grid templates for desktop with `md:grid-cols-4 md:grid-rows-2` and allow auto-sizing on mobile.

- **Mobile-first layout**:  
  Initially struggled to create a single-column auto-height layout. First tried `flex flex-col`, but later realized that simply setting `grid-cols-1` without specifying rows stacks children in a column automatically.

- **Responsive design with Tailwind**:  
  Understood how to swap from `grid-cols-1` on mobile to `grid-cols-4` on larger screens while letting content flow naturally.

- **Shadow and spacing utilities**:  
  Practiced applying custom shadows like `shadow-[30px_45px_30px_#cccdd2]` and consistent paddings/margins for balance.

- **Styling consistency**:  
  Maintained uniform border-radius, typography scale, and spacing across all testimonial cards for a cohesive design.
