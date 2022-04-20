import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Facebook, Github, Twitter, YouTube } from "../AllSvgs";

import {
  Icons,
  IconContainer,
  MediaContainer,
  Logo,
  LogoWrapper,
} from "./mediaStyles";
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
      <LogoWrapper
        switchActive={switchActive}
        onClick={() => {
          setSwitchActive(!switchActive);
        }}
      >
        <Logo switchActive={switchActive} as={motion.nav}>
          <h2>JD</h2>
        </Logo>
      </LogoWrapper>
      <IconContainer
        as={motion.div}
        variants={mediaVariants}
        initial="hidden"
        animate="visible"
      >
        <Icons target="_blank" href="https://github.com/JayDampitan">
          <Github fill="currentColor" />
        </Icons>
        <Icons target="_blank" href="">
          <YouTube fill="currentColor" />
        </Icons>
        <Icons target="_blank" href="">
          <Twitter fill="currentColor" />
        </Icons>
        <Icons target="_blank" href="">
          <Facebook fill="currentColor" />
        </Icons>
      </IconContainer>
    </MediaContainer>
  );
};

export default Media;
