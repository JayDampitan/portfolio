import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Facebook, Github, Twitter, YouTube } from "../AllSvgs";

import { Icons, IconContainer, Line } from "./mediaStyles";

// ----------------Media Animations

const mediaVariants = {
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

const linksVariants = {
  hover: {
    boxShadow:
      " inset -5px -5px 10px rgba(150,150,150, 0.3), inset 5px 5px 10px rgba(10, 10, 10, .4) ",
  },
};

const Media = () => {
  return (
    <Icons
      as={motion.div}
      variants={mediaVariants}
      initial="hidden"
      animate="visible"
    >
      <IconContainer
        as={motion.div}
        variants={linksVariants}
        whileHover="hover"
      >
        <Github fill="currentColor" />
      </IconContainer>
      <IconContainer
        as={motion.div}
        variants={linksVariants}
        whileHover="hover"
      >
        <YouTube fill="currentColor" />
      </IconContainer>
      <IconContainer
        as={motion.div}
        variants={linksVariants}
        whileHover="hover"
      >
        <Twitter fill="currentColor" />
      </IconContainer>
      <IconContainer
        as={motion.div}
        variants={linksVariants}
        whileHover="hover"
      >
        <Facebook fill="currentColor" />
      </IconContainer>
    </Icons>
  );
};

export default Media;
