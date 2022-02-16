import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  padding: 7rem 0;
  height: 39.5vh;
`;


// -------------Experience Page Variants

const experienceVariants = {
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


const Experience = () => {
  return (
    <ExperienceContainer as = {motion.div}
      variants = {experienceVariants}
      initial = 'hidden'
      animate = 'visible'
    >
        <h2>Experience</h2>
    </ExperienceContainer>

  )
}

export default Experience;