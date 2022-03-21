import React from "react";
import { motion } from "framer-motion";

import { BorderLine } from "./gradientStyles";

const gradientVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const GradientLine = () => {
  return (
    <BorderLine
      as={motion.div}
      variants={gradientVariant}
      initial="hidden"
      animate="visible"
    />
  );
};

export default GradientLine;
