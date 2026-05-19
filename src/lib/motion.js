export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

export const sectionViewport = { once: true, amount: 0.18 };

export const spring = {
  type: "spring",
  stiffness: 90,
  damping: 18,
  mass: 0.9,
};
