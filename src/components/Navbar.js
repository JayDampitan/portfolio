import React from "react";
import styled from "styled-components";
import JD from "../assets/JD1.png";
import { motion } from "framer-motion";

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
  font-family: 'Alfa Slab One', sans-serif;
`;

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const NavLinks = styled.a`
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
    transition: {
      duration: 1,
      type: "spring",
      mass: 0.5,
    },
  },
};

const linksVariant = {
    hidden: {
        x: '+100vw',
        opacity: 0,
    },
    visible: {
        opacity: 1,
        x: 1,
        transition:{
            duration: 1,
            type: "spring",
            mass: 0.4,
            damping: 8,
        }
    }
};

const Navbar = () => {
  return (
    <NavContainer>
      <Logo
        as={motion.div}
        variants={logoVariants}
        initial="hidden"
        animate="visible"
      >
        JD
      </Logo>

      <NavLinksContainer as={motion.div}
        variants={linksVariant}
        initial='hidden'
        animate='visible'
      >
        <NavLinks>Home</NavLinks>
        <NavLinks>About</NavLinks>
        <NavLinks>Skills</NavLinks>
        <NavLinks>Portfolio</NavLinks>
        <NavLinks>Contact</NavLinks>
      </NavLinksContainer>
    </NavContainer>
  );
};

export default Navbar;
