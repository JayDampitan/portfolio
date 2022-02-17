import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  height: 180px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  padding: 1rem 5rem;
  color: #ffff;
  text-decoration: none;
  font-weight: 800;
  font-size: 3rem;
  font-family: "Alfa Slab One", sans-serif;
`;

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: centerl
  align-items: center;
`;

const NavLinks = styled(Link)`
  color: #ffff;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.7s ease-in;

  &:hover {
    color: yellow;
  }
`;

const Hamburger = styled.div``;

const logoVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    delay: 2,
    transition: {
      duration: 1,
      type: "spring",
      mass: 0.5,
    },
  },
  hover: {
    rotate: 360,
  },
};

const hoverVariants = {
  hoverMe: {
    scale: 1.3,
  },
};
const linksVariant = {
  hidden: {
    x: "+100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 1,
    transition: {
      duration: 1,
      type: "spring",
      mass: 0.4,
      damping: 8,
    },
  },
};

const Navbar = () => {
  return (
    <NavContainer>
      <Logo
        as={motion.div}
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        JD
      </Logo>

      <NavLinksContainer
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
    </NavContainer>
  );
};

export default Navbar;
