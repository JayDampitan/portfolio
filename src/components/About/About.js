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
  SvgContainer,
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

import {
  Square,
  Circle
} from '../../subComponents/backgroundElements';

import {
  firstLineVariant,
  secondLineVariant,
  aboutImageVariant,
  contentVariant,
} from "./aboutVariants";

import { PageContainer } from "../../subComponents/pageContainer";

const About = () => {
  return (
    <PageContainer>
      {/* -----------About Page Content */}
      <ContentContainer
        as={motion.div}
        variants={contentVariant}
        initial="hidden"
        animate="visible"
      >
        <h2>Something about me</h2>
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

        <SvgContainer>
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
      </ContentContainer>

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
