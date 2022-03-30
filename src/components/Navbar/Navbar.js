import React from "react";
import { motion, useAnimation } from "framer-motion";

import {
  NavContainer,
  LogoContainer,
  Logo,
  NavLinksContainer,
  LinkWrapper,
  NavLinks,
  Hamburger,
  SwitchButton,
} from "./navbarStyles";

import { Moon, Sun } from "../AllSvgs";

const logoVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      mass: 0.5,
    },
  },
};

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

const Navbar = ({ switchActive, setSwitchActive }) => {
  const control = useAnimation();

  return (
    <NavContainer>
  
        <Logo
          as={motion.div}
        >
         <h2>JD</h2>
        </Logo>
   

      <NavLinksContainer
        as={motion.div}
        variants={linksVariant}
        initial="hidden"
        animate="visible"
      >
        <LinkWrapper
          onClick={() => {
            control.start({
              boxShadow:
                "inset -5px -5px 10px rgba(150,150,150, 0.3), inset 5px 5px 10px rgba(10, 10, 10, .4)",
            });
          }}
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
          <NavLinks to="/portfolio"> Portfolio </NavLinks>
        </LinkWrapper>

        <LinkWrapper
          as={motion.div}
          variants={hoverVariants}
          whileHover="hoverMe"
        >
          <NavLinks to="/contact"> Contact </NavLinks>
        </LinkWrapper>
      </NavLinksContainer>
      <SwitchButton
        onClick={() => {
          setSwitchActive(!switchActive);
        }}
        as={motion.div}
        variants={hoverVariants}
        whileHover="hoverMe"
      >
        {switchActive ? <Moon fill='#E9E016' /> : <Sun fill='#E9E016'/>}
      </SwitchButton>
    </NavContainer>
  );
};

export default Navbar;
