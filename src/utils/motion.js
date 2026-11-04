// Shared Framer Motion scroll-reveal presets, reused across sections to avoid repeating the same props everywhere.

export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export const fadeInX = (fromLeft = true, delay = 0) => ({
  initial: { opacity: 0, x: fromLeft ? -40 : 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

// Staggered reveal: a parent orchestrates its children, which each use an item preset below.
export const staggerVariants = (stagger = 0.06, delay = 0, self = {}) => ({
  hidden: self.hidden ?? {},
  visible: {
    ...(self.visible ?? {}),
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const staggerContainer = (stagger, delay, self) => ({
  variants: staggerVariants(stagger, delay, self),
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
});

const itemTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

export const riseItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: itemTransition },
};

export const popItem = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: itemTransition },
};

export const hoverLift = {
  whileHover: { y: -4 },
  transition: { type: "spring", stiffness: 300, damping: 22 },
};

export const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});
