import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Facebook, Github, Twitter, YouTube } from "../AllSvgs";

import { Icons, IconContainer, SwitchButton, MediaContainer } from "./mediaStyles";
import { Moon, Sun } from "../AllSvgs";
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

const Media = ({ switchActive, setSwitchActive }) => {
  return (
<MediaContainer>
   
    <IconContainer
      as={motion.div}
      variants={mediaVariants}
      initial="hidden"
      animate="visible"
    >
      <Icons
        as={motion.div}
        variants={linksVariants}
        whileHover="hover"
      >
        <Github fill="currentColor" />
      </Icons>
      <Icons
        as={motion.div}
        variants={linksVariants}
        whileHover="hover"
      >
        <YouTube fill="currentColor" />
      </Icons>
      <Icons
        as={motion.div}
        variants={linksVariants}
        whileHover="hover"
      >
        <Twitter fill="currentColor" />
      </Icons>
      <Icons
        as={motion.div}
        variants={linksVariants}
        whileHover="hover"
      >
        <Facebook fill="currentColor" />
      </Icons>
    </IconContainer>

    <SwitchButton
    onClick={() => {
      setSwitchActive(!switchActive);
    }}
    as={motion.div}
    variants={linksVariants}
    whileHover="hover"
  >
    {switchActive ? <Moon fill='#E9E016' /> : <Sun fill='#E9E016'/>}
  </SwitchButton>

    </MediaContainer>
  );
};

export default Media;
