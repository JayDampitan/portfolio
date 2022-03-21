import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  PortfolioContainer,
  PortfolioTitle,
  PortfolioContent,
  ContentContainer,
  TopCircle,
} from "./portfolioStyles";

// -------------About Page Variants

const portfolioVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
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
        <ContentContainer></ContentContainer>

        <ContentContainer></ContentContainer>

        <ContentContainer></ContentContainer>

        <ContentContainer></ContentContainer>
      </PortfolioContent>
    </PortfolioContainer>
  );
};

export default Portfolio;
