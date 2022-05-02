import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { HomeIcon, AboutIcon, WorkIcon, ContactIcon } from "../AllSvgs";

import { Nav, NavLinksContainer, LinkWrapper, NavLinks } from "./navbarStyles";

import { linksVariant } from "./navbarVariants";

const Navbar = () => {
  const [homeActive, setHomeActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [workActive, setWorkActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  return (
    <Nav>
      <NavLinksContainer
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
            <HomeIcon />
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
            <AboutIcon />
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
            <WorkIcon />
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
            <ContactIcon />
          </NavLinks>
        </LinkWrapper>
      </NavLinksContainer>
    </Nav>
  );
};

export default Navbar;
