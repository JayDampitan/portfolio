import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";


const PortfolioContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 63vh;
`;

const PortfolioTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  width: 100%;
  font-size: 2rem;
`;

const PortfolioContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 15rem;
`;

const ImageContainer = styled.div`
  height: 16rem;
  width: 16rem;
  border-radius: 50%;
  background-image: linear-gradient(to right, red, yellow);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopCircle = styled.div`
  height: 15.7rem;
  width: 15.7rem;
  border-radius: 50%;
  background: #160f29;
  display: flex;
  align-items: center;
  justify-content: center;
`;



// -------------About Page Variants

const portfolioVariants = {
  hidden: {
    x: "-200vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 3,
      mass: 0.4,
      type: "spring",
      damping: 8,
    },
  },
};

const Portfolio = () => {
  return (
    <PortfolioContainer
      as={motion.div}
      variants={portfolioVariants}
      initial="hidden"
      animate="visible"
      
    >
      <PortfolioTitle>Portfolio</PortfolioTitle>

      <PortfolioContent>
        <ImageContainer>
          <TopCircle>
          </TopCircle>
        </ImageContainer>

        <ImageContainer>
          <TopCircle>
          </TopCircle>
        </ImageContainer>

        <ImageContainer>
          <TopCircle>
          </TopCircle>
        </ImageContainer>

        <ImageContainer>
          <TopCircle>
          </TopCircle>
        </ImageContainer>
      </PortfolioContent>
    </PortfolioContainer>
  );
};

export default Portfolio;
