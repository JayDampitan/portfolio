import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  padding: 7rem 0;
  height: 39.5vh;
`;

// -------------About Page Variants

const aboutVariants = {
  hidden: {
    x: '-200vw'
  },
  visible: {
    x: 0,
    transition: {
      duration: 3,
      mass: 0.4,
      type: 'spring'
    }
  }
};

const About = () => {
  return (
    <AboutContainer as = {motion.div}
      variants = {aboutVariants}
      initial = 'hidden'
      animate = 'visible'
    >
      <h2>About</h2>
    </AboutContainer>
  )
}

export default About