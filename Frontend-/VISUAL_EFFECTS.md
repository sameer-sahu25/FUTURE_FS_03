# Visual Effects Implementation Guide

This document outlines the sophisticated parallax and animation system implemented for **The Cake Company** website.

## Overview

The visual effects are designed to provide a premium, immersive experience while maintaining high performance (60fps) and strict accessibility standards (WCAG 2.1).

## Components

### 1. `Parallax`
A GPU-accelerated component that creates smooth vertical motion based on scroll position.
- **Performance**: Uses `will-change: transform` and `translate3d` to ensure animations happen on the compositor thread.
- **Physics**: Implements spring physics (`stiffness: 100`, `damping: 30`) for natural, fluid motion.
- **A11y**: Automatically disables motion when `prefers-reduced-motion` is detected.

### 2. `Reveal`
An intersection-observer based component for clean entrance animations.
- **Configurable**: Supports `up`, `down`, `left`, and `right` directions.
- **Trigger**: Optimized for mobile with a `-10%` viewport margin to trigger slightly before the element enters the screen.

### 3. `PageEntrance`
Provides a smooth fade-in for pages to create a cohesive browsing experience.

## Performance Optimization

- **Lazy Loading**: All images use `loading="lazy"` by default.
- **Compositor Only**: All animations target `opacity` and `transform` properties, avoiding layout shifts and repaints.
- **Reduced Bundle**: Leverages `framer-motion`'s optimized animation engine.

## Accessibility (WCAG 2.1)

- **Motion Sensitivity**: All animations respect system-level "Reduced Motion" settings.
- **Screen Readers**: Interactive elements maintain logical tab order, and decorative parallax elements are marked with `role="presentation"`.
- **Keyboard Nav**: Animations do not interfere with focus management or keyboard interaction.

## Customization

You can adjust the speed and behavior by passing props:

```jsx
<Parallax offset={100} ariaLabel="Floaty cake">
  <img src={cakeImage} />
</Parallax>

<Reveal delay={0.5} direction="left">
  <h2>Premium Ingredients</h2>
</Reveal>
```

## A/B Testing

A simple A/B testing utility is available in `src/lib/utils.js`:
- `abTest.getVariant(testName)`: Assigns a user to a variant (A or B) and persists it in `localStorage`.
- `abTest.track(testName, variant, event)`: Logs interaction events for measurement.

## Device Compatibility

- **Desktop**: Full spring-physics parallax.
- **Mobile**: Touch-friendly, slightly reduced offsets for smaller viewports.
- **Legacy**: Clean fallbacks to static layouts on browsers without CSS Transform/Observer support.
