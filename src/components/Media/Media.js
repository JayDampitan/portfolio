import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, YouTube, Link } from "../AllSvgs";

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
        <Icons target="_blank" href="https://www.youtube.com/channel/UCu2DsrRQhBXdRq_k6ASNCfQ">
          <YouTube fill="currentColor" />
        </Icons>
        <Icons target="_blank" href="https://twitter.com/home">
          <Twitter fill="currentColor" />
        </Icons>
        <Icons target="_blank" href="https://www.linkedin.com/in/jay-dampitan-568482183/">
          <Linkedin fill="currentColor" />
        </Icons>
      </IconContainer>
    </MediaContainer>
  );
};

export default Media;
