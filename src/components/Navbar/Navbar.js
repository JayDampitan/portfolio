import React, { useState } from "react";
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
  const [homeActive, setHomeActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [workActive, setWorkActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  return (
    <NavContainer>
      <Logo as={motion.div}>
        <h2>JD</h2>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <NavLinksContainer
        isOpen={isOpen}
        as={motion.div}
        variants={linksVariant}
        initial="hidden"
        animate="visible"
      >
        <LinkWrapper
          onClick={() => {
            setHomeActive(true);
            setAboutActive(false);
            setWorkActive(false);
            setContactActive(false);
          }}
          insetActive={homeActive}
          as={motion.div}
        >
          <NavLinks insetActive={homeActive} to="/">
            {" "}
            Home{" "}
          </NavLinks>
        </LinkWrapper>

        <LinkWrapper
          onClick={() => {
            setHomeActive(false);
            setAboutActive(true);
            setWorkActive(false);
            setContactActive(false);
          }}
          insetActive={aboutActive}
          as={motion.div}
        >
          <NavLinks insetActive={aboutActive} to="/about">
            {" "}
            About{" "}
          </NavLinks>
        </LinkWrapper>

        <LinkWrapper
          onClick={() => {
            setHomeActive(false);
            setAboutActive(false);
            setWorkActive(true);
            setContactActive(false);
          }}
          insetActive={workActive}
          as={motion.div}
        >
          <NavLinks insetActive={workActive} to="/portfolio">
            {" "}
            Work{" "}
          </NavLinks>
        </LinkWrapper>

        <LinkWrapper
          onClick={() => {
            setHomeActive(false);
            setAboutActive(false);
            setWorkActive(false);
            setContactActive(true);
          }}
          insetActive={contactActive}
          as={motion.div}
        >
          <NavLinks insetActive={contactActive} to="/contact">
            {" "}
            Contact{" "}
          </NavLinks>
        </LinkWrapper>
      </NavLinksContainer>
    </NavContainer>
  );
};

export default Navbar;
