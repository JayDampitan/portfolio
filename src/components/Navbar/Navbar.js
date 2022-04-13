import React, {useState} from "react";
import { motion, useAnimation } from "framer-motion";

import {
  NavContainer,
  Logo,
  NavLinksContainer,
  LinkWrapper,
  NavLinks,
  Hamburger,
} from "./navbarStyles";

const hoverVariants = {
  hoverMe: {
    boxShadow:
      " inset -5px -5px 10px rgba(150,150,150, 0.3), inset 5px 5px 10px rgba(10, 10, 10, .4) ",
  },
};

const linksVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeIn",
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
  
        <Logo
          as={motion.div}
        >
         <h2>JD</h2>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
   

      <NavLinksContainer
        isOpen = {isOpen}
        as={motion.div}
        variants={linksVariant}
        initial="hidden"
        animate="visible"
      >
        <LinkWrapper
         
          as={motion.div}
          variants={hoverVariants}
          whileHover="hoverMe"
        >
          <NavLinks to="/"> Home </NavLinks>
        </LinkWrapper>
        <LinkWrapper
          as={motion.div}
          variants={hoverVariants}
          whileHover="hoverMe"
        >
          <NavLinks to="/about"> About </NavLinks>
        </LinkWrapper>

        <LinkWrapper
          as={motion.div}
          variants={hoverVariants}
          whileHover="hoverMe"
        >
          <NavLinks to="/portfolio"> Work </NavLinks>
        </LinkWrapper>

        <LinkWrapper
          as={motion.div}
          variants={hoverVariants}
          whileHover="hoverMe"
        >
          <NavLinks to="/contact"> Contact </NavLinks>
        </LinkWrapper>
      </NavLinksContainer>
     
    </NavContainer>
  );
};

export default Navbar;
