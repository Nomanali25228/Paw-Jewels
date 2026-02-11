# Premium UK Pet Jewelry E-commerce Website - Implementation

This project is a high-end, animated e-commerce platform for pet jewelry and accessories, built with Next.js (Pages routing), GSAP, and Tailwind 4.

## Features Implemented

### 1. Motion & Aesthetics
- **GSAP ScrollTrigger**: Smooth entrance animations for all sections.
- **Lenis Smooth Scroll**: Premium scrolling experience.
- **Custom Loader**: A full-screen primary colored loader featuring an animated walking cat.
- **Glassmorphism**: Elegant navbar and UI cards with backdrop blur effects.
- **Responsive Design**: Fluid layout for Mobile, Tablet, and Desktop.

### 2. E-commerce Core
- **Global Cart State**: Managed via `CartContext` with local storage persistence.
- **Animated Cart Drawer**: Sliding side panel for quick access.
- **Product Management**: Feature-rich product grid with dynamic filtering (Cat/Dog) and sorting.
- **Product Details**: Detailed view with quantity selection, related products, and informative tabs.

### 3. Content Sections
- **Interactive Home Page**: Parallax hero, featured categories, and trending products.
- **The Pet Journal**: Modern blog layout with featured stories and luxury reading experience.
- **Brand Story**: "About Us" page detailing the London-based artisanal process.
- **Customer Concierge**: Functional contact page with styled form.

## Tech Stack
- **Framework**: Next.js (JavaScript)
- **Styling**: Tailwind CSS 4 + CSS Modules
- **Animation**: GSAP + ScrollTrigger
- **Icons**: Lucide React
- **Smoothness**: Lenis

## Project Structure
- `/src/components`: Reusable UI elements (`Navbar`, `Footer`, `ProductCard`, etc.)
- `/src/pages`: Classic Next.js routing.
- `/src/context`: Global state management.
- `/src/data`: Mock products and blog data.
- `/src/styles`: Tailwind 4 global configurations.
- `/public/images`: Premium pet photography assets.

## How to Run
1. `npm install`
2. `npm run dev`
3. Visit `http://localhost:3000`
