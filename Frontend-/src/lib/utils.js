import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

/**
 * A simple A/B testing utility for client-side engagement tracking.
 * In a real-world scenario, this would send data to an analytics endpoint.
 */
export const abTest = {
  getVariant: (testName, variants = ["A", "B"]) => {
    const key = `ab_test_${testName}`;
    let variant = localStorage.getItem(key);
    if (!variant) {
      variant = variants[Math.floor(Math.random() * variants.length)];
      localStorage.setItem(key, variant);
    }
    return variant;
  },
  track: (testName, variant, event) => {
    // eslint-disable-next-line no-console
    console.log(`[AB Test] ${testName} | Variant: ${variant} | Event: ${event}`);
    // Here you would typically send data to GA4, Mixpanel, or a custom API
  },
};

