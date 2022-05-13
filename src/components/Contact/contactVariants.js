// -----------Background Variants
export const firstLineVariant = {
  hidden: {
    x: -10,
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
    y: 30,
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

export const thirdLineVariant = {
  hidden: {
    y: -30,
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

// -----------Contact Form Variants

export const contactFormVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.6,
    },
  },
};

export const contactImageVariant = {
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
export const secondInputVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 1,
    },
  },
};
export const textAreaInputVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 1.2,
    },
  },
};

export const squareColor = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    backgroundColor: "rgba(187, 68, 48, 1)",
    transition: {
      duration: 1,
    },
  },
};
