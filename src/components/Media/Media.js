import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Facebook, Github, Twitter, YouTube } from "../AllSvgs";

import {
  Icons,
  IconContainer,
  SwitchButton,
  MediaContainer,
} from "./mediaStyles";
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

const Media = ({ switchActive, setSwitchActive }) => {
  return (
    <MediaContainer>
      <IconContainer
        as={motion.div}
        variants={mediaVariants}
        initial="hidden"
        animate="visible"
      >
        <Icons target='_blank' href='https://github.com/JayDampitan'>
          <Github fill="currentColor" />
        </Icons>
        <Icons target='_blank' href=''>
          <YouTube fill="currentColor" />
        </Icons>
        <Icons target='_blank' href=''>
          <Twitter fill="currentColor" />
        </Icons>
        <Icons target='_blank' href=''>
          <Facebook fill="currentColor" />
        </Icons>
      </IconContainer>

      <SwitchButton
        switchActive={switchActive}
        onClick={() => {
          setSwitchActive(!switchActive);
        }}
        as={motion.div}
      >
        {switchActive ? <Moon fill="#232427" /> : <Sun fill="#E0B418" />}
      </SwitchButton>
    </MediaContainer>
  );
};

export default Media;
