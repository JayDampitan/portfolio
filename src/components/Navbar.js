import React from "react";
import styled from "styled-components";
import JD from "../assets/JD1.png";
import { motion } from 'framer-motion';

const NavContainer = styled.div`
  max-height: 20%;
  width: 100%;
  display: flex;
`;
const LogoContainer = styled.div`
  width: 150px;
  display: flex;
  margin-left: 5%;
`;

const logoVariants = {
    hidden: {
        y: '-100vh',
    },
    visible: {
        y: 0,
        transition: {
            duration: 1,
            type: 'spring',
            mass: 0.5
        }
    }
}

const Logo = styled.img`
    width: 100%;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer as={motion.div} 
        variants={logoVariants}
        initial='hidden'
        animate='visible'
      >
         <Logo alt="" src={JD} />
      </LogoContainer>  
    </NavContainer>
  );
};

export default Navbar;
