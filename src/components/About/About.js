import React from "react";
import { motion } from "framer-motion";
import { myInfo, myTech } from "../../assets/data";
import { Square, Circle } from "../../subComponents/backgroundElements";
import { PageContainer } from "../../subComponents/pageContainer";
import JD from "../../assets/images/portfolio.jpg";
import {
  ContentContainer,
  ImageContainer,
  TitleContainer,
  ParagraphContainer,
  TechContainer,
  TechWrapper,
  FirstLineContainer,
  FirstLine,
  SecondLineContainer,
  SecondLine,
  ThirdLineContainer,
  ThirdLine,
  FourthAboutLineContainer,
  FourthLine,
} from "./aboutStyles";
import {
  firstLineVariant,
  secondLineVariant,
  aboutImageVariant,
  contentVariant,
  squareColor,
} from "./aboutVariants";


const About = () => {
  return (
    <PageContainer
      as={motion.div}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* -----------About Page Content */}
      <ContentContainer
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
          {myTech.map((tech, index) => {
            return <TechWrapper key={index}>{tech}</TechWrapper>;
          })}
        </TechContainer>
      </ContentContainer>

      {/* -----------Profile Image */}
      <ImageContainer
        as={motion.div}
        variants={aboutImageVariant}
        initial="hidden"
        animate="visible"
      >
        <img src={JD} alt="Man playing a guitar" />
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
        <Square
          as={motion.div}
          variants={squareColor}
          initial="hidden"
          animate="visible"
        />
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
        <Square />
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
