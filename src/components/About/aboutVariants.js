export const firstLineVariant = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
};

export const secondLineVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.6,
    },
  },
};

export const aboutImageVariant = {
  hidden: {
    x: -30,
    opacity: 0,
  },
  visible: {
    x: 20,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.8,
    },
  },
};

export const contentVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 1,
    },
  },
};
