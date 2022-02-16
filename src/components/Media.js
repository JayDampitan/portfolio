import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Facebook, Github, Twitter, YouTube } from "./AllSvgs";

// ----------------Media Styled Components

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 10.3rem;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.7rem 0;
  }
`;

const IconContainer = styled.div`
  width: 25px;
  height: 25px;
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: #fff;
`;

// ----------------Media Animations

const mediaVariants = {
    hidden: {
        opacity: 0,
        y: '+20vh'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5
        }
    }
}


const linksVariants = {
  hover: {
    scale: 1.5,
  },
};

const Media = () => {
  return (
    <Icons 
        as = {motion.div}
        variants = { mediaVariants } 
        initial = 'hidden'
        animate = 'visible'
    >
      <IconContainer
        as = {motion.div}
        variants = {linksVariants}
        whileHover = "hover"
      >
        <Github fill="white" />
      </IconContainer>
      <IconContainer
        as={motion.div}
        variants={linksVariants}
        whileHover="hover"
      >
        <YouTube fill="white" />
      </IconContainer>
      <IconContainer
        as={motion.div}
        variants={linksVariants}
        whileHover="hover"
      >
        <Twitter fill="white" />
      </IconContainer>
      <IconContainer
        as={motion.div}
        variants={linksVariants}
        whileHover="hover"
      >
        <Facebook fill="white" />
      </IconContainer>
      <Line />
    </Icons>
  );
};

export default Media;
