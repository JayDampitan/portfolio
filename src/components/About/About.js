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

import { Square, Circle } from "../../subComponents/backgroundElements";

import {
  firstLineVariant,
  secondLineVariant,
  aboutImageVariant,
  contentVariant,
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
      />
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          totam laudantium rerum quia. Culpa expedita tempora provident saepe
          itaque laboriosam autem fugit minima amet hic eligendi unde
          necessitatibus sequi dolores voluptate, neque nesciunt. Rem
          dignissimos laudantium, impedit dolore quis expedita dicta illo
          repellendus, fugiat modi debitis, iusto quos nostrum officiis
          asperiores laborum aspernatur delectus hic. Iusto eligendi
          necessitatibus atque eius architecto hic dicta quo nam totam, natus
          nulla similique.
        </p>
      </ParagraphContainer>

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
      </SvgContainer>

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
