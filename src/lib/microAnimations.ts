// microAnimations.ts
import { Easing } from 'framer-motion';

// cubic-bezier for easeOut
const easeOut: Easing = [0.42, 0, 0.58, 1];

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};

export const lineGrow = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.6, ease: easeOut } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
