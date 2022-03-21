import React from "react";
import { motion } from "framer-motion";

import {
  HeaderContainer,
  FirstHeader,
  SecondHeader,
  ThirdHeader,
} from "./headerStyles";

// ----------------------------Header Motion Variants
const firstVariant = {
  hover: {
    boxShadow:
      " inset -5px -5px 10px rgba(150,150,150, 0.3), inset 5px 5px 10px rgba(10, 10, 10, .4) ",
  },
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const secondVariant = {
  hover: {
    boxShadow:
      " inset -5px -5px 10px rgba(150,150,150, 0.3), inset 5px 5px 10px rgba(10, 10, 10, .4) ",
  },
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const thirdVariant = {
  hover: {
    boxShadow:
      " inset -5px -5px 10px rgba(150,150,150, 0.3), inset 5px 5px 10px rgba(10, 10, 10, .4) ",
  },
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <FirstHeader
          as={motion.div}
          variants={firstVariant}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          drag
        >
          Hello!
        </FirstHeader>
        <SecondHeader
          as={motion.div}
          variants={secondVariant}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          drag
        >
          I'm Jay,
        </SecondHeader>
        <ThirdHeader
          as={motion.div}
          variants={thirdVariant}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          drag
        >
          software developer from California
        </ThirdHeader>
      </HeaderContainer>
    </>
  );
};

export default Header;
