import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  padding: 7rem 0;
  height: 39.5vh;
`;


// -------------Portfolio Page Variants

const portfolioVariants = {
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



const Portfolio = () => {
  return (
    <PortfolioContainer as = {motion.div}
      variants = {portfolioVariants}
      initial = 'hidden'
      animate = 'visible'
    >
        <h2>Portfolio</h2>
    </PortfolioContainer>

  )
}

export default Portfolio;