import React from "react";
import { motion } from "framer-motion";
import {
  CSS,
  Framer,
  StyledComponents,
  HTML,
  JavaScript,
  ReactIcon,
  ReduxIcon,
} from "../AllSvgs";

import JD from "../../assets/portfolio.jpg";
import {
  ContentContainer,
  ImageContainer,
  Image,
  TitleContainer,
  SvgContainer,
  ParagraphContainer,
  TechContainer,
  SvgBox,
  FirstLineContainer,
  FirstLine,
  SecondLineContainer,
  SecondLine,
  ThirdLineContainer,
  ThirdLine,
  FourthAboutLineContainer,
  FourthLine,
} from "./aboutStyles";

import { myInfo } from "../../assets/data";

import { Square, Circle } from "../../subComponents/backgroundElements";

import {
  firstLineVariant,
  secondLineVariant,
  aboutImageVariant,
  contentVariant,
  squareColor,
} from "./aboutVariants";

import { PageContainer } from "../../subComponents/pageContainer";

const About = () => {
  return (
    <PageContainer
      as={motion.div}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* -----------About Page Content */}
      <ContentContainer
        as={motion.div}
        variants={contentVariant}
        initial="hidden"
        animate="visible"
      >
        <TitleContainer
          as={motion.div}
          variants={contentVariant}
          initial="hidden"
          animate="visible"
        >
          <h2>Something About me</h2>
        </TitleContainer>

        <ParagraphContainer
          as={motion.div}
          variants={contentVariant}
          initial="hidden"
          animate="visible"
        >
          <p>{myInfo.story.description}</p>
        </ParagraphContainer>

        <TechContainer>
          <h4>Some of the tech I learned and working on recently:</h4>
          <p>
            <span>-HTML5</span>
            <span>-CSS</span>
            <span>-Javascript</span>
          </p>
          <p>
            <span>-React</span>
            <span>-React Native</span>
            <span>-Redux Toolkit</span>
          </p>
          <p>
            <span>-Styled Components</span>
            <span>-SCSS</span>
            <span>-React Native</span>
          </p>
        </TechContainer>
      </ContentContainer>

      {/* 
      <SvgContainer
        as={motion.div}
        variants={contentVariant}
        initial="hidden"
        animate="visible"
      >
        <SvgBox>
          <HTML fill="currentColor" />
        </SvgBox>
        <SvgBox>
          <CSS fill="currentColor" />
        </SvgBox>
        <SvgBox>
          <JavaScript stroke="currentColor" fill="currentColor" />
        </SvgBox>
        <SvgBox>
          <ReactIcon fill="currentColor" />
        </SvgBox>
        <SvgBox>
          <ReduxIcon fill="currentColor" />
        </SvgBox>
        <SvgBox>
          <Framer fill="currentColor" />
        </SvgBox>
        <SvgBox>
          <StyledComponents fill="currentColor" />
        </SvgBox>
      </SvgContainer> */}

      {/* -----------Profile Image */}
      <ImageContainer
        as={motion.div}
        variants={aboutImageVariant}
        initial="hidden"
        animate="visible"
      >
        <Image src={JD} />
      </ImageContainer>

      {/* -----------Background Lines and Shapes */}
      <FirstLineContainer
        as={motion.div}
        variants={firstLineVariant}
        initial="hidden"
        animate="visible"
      >
        <FirstLine />
      </FirstLineContainer>
      <SecondLineContainer
        as={motion.div}
        variants={secondLineVariant}
        initial="hidden"
        animate="visible"
      >
        <Square />
        <SecondLine />
        <Circle />
      </SecondLineContainer>
      <ThirdLineContainer
        as={motion.div}
        variants={secondLineVariant}
        initial="hidden"
        animate="visible"
      >
        <Circle />
        <ThirdLine />
        <Square
          as={motion.div}
          variants={squareColor}
          initial="hidden"
          animate="visible"
        />
      </ThirdLineContainer>
      <FourthAboutLineContainer
        as={motion.div}
        variants={firstLineVariant}
        initial="hidden"
        animate="visible"
      >
        <FourthLine />
      </FourthAboutLineContainer>
    </PageContainer>
  );
};

export default About;
