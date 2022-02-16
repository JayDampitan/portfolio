import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// ----------------------------Header Styled Components

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  padding: 7rem 0;
`;

const FirstHeader = styled.div`
  font-size: 130px;
  font-family: "Alfa Slab One", sans-serif;
`;

const SecondHeader = styled.div`
  font-size: 100px;
  font-family: "Roboto", sans-serif;
`;

const ThirdHeader = styled.div`
  font-size: 50px;
  font-family: "Poppins", sans-serif;
`;

// ----------------------------Header Motion Variants
const firstVariant = {
  hover: {
    scale: 1.1,
  },
  hidden: {
    x: "-200vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 3,
      type: "spring",
      mass: 0.4,
      damping: 8,
    },
  },
};

const secondVariant = {
  hover: {
    scale: 1.1,
  },
  hidden: {
    x: "-200vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 4,
      type: "spring",
      mass: 0.5,
      ease: "easeIn",
    },
  },
};

const thirdVariant = {
  hover: {
    scale: 1.1,
  },
  hidden: {
    x: "-200vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 6,
      type: "spring",
      mass: 0.6,
      ease: "easeIn",
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
        >
          Hello!
        </FirstHeader>
        <SecondHeader
          as={motion.div}
          variants={secondVariant}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          I'm Jay,
        </SecondHeader>
        <ThirdHeader
          as={motion.div}
          variants={thirdVariant}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          I'm a software developer from California
        </ThirdHeader>
      </HeaderContainer>
    </>
  );
};

export default Header;
