import React from "react";
import { motion } from "framer-motion";
import HeaderBoxImage from "../../assets/images/headerBoxImage.png";

import {
  HeaderIntro,
  HeaderName,
  HeaderTitle,
  ConnectButton,
  HeaderBox,
  FirstCircleContainer,
  FirstLine,
  SecondLine,
  SquareContainer,
  ThirdLineContainer,
  ThirdLine,
  HeaderImage,
  FourthLineContainer,
  FourthLine,
} from "./headerStyles";

import {
  firstLineVariant,
  firstCircleVariant,
  headerIntroVariant,
  squareContainerVariant,
  thirdContainerVariant,
  secondCircleVariant,
  headerBoxVariant,
} from "./headerVariants";

import { Square, Circle } from "../../subComponents/backgroundElements";

import { PageContainer } from "../../subComponents/pageContainer";

const Header = () => {
  return (
    <PageContainer
      as={motion.div}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderIntro
        as={motion.div}
        variants={headerIntroVariant}
        initial="hidden"
        animate="visible"
      >
        Hello, my name is
      </HeaderIntro>
      <HeaderName
        as={motion.div}
        variants={headerIntroVariant}
        initial="hidden"
        animate="visible"
      >
        Jay Dampitan
      </HeaderName>
      <HeaderTitle
        as={motion.div}
        variants={headerIntroVariant}
        initial="hidden"
        animate="visible"
      >
        software developer from california
      </HeaderTitle>

      <HeaderBox
        as={motion.div}
        variants={headerBoxVariant}
        initial="hidden"
        animate="visible"
      >
        <HeaderImage src={HeaderBoxImage} />
      </HeaderBox>

      <ConnectButton
        to="/contact"
        as={motion.div}
        variants={headerIntroVariant}
        initial="hidden"
        animate="visible"
      >
        connect
      </ConnectButton>

      {/* -----------Background Elements */}

      <FirstCircleContainer>
        <FirstLine
          as={motion.div}
          variants={firstLineVariant}
          initial="hidden"
          animate="visible"
        />
        <Circle
           as={motion.div}
           variants={secondCircleVariant}
           initial="hidden"
           animate="visible"
         
        />
      </FirstCircleContainer>

      <SquareContainer
        as={motion.div}
        variants={squareContainerVariant}
        initial="hidden"
        animate="visible"
      >
        <Square />
        <SecondLine />
        <Square />
      </SquareContainer>

      <ThirdLineContainer>
        <ThirdLine
          as={motion.div}
          variants={thirdContainerVariant}
          initial="hidden"
          animate="visible"
        />
        <Circle
          as={motion.div}
          variants={firstCircleVariant}
          initial="hidden"
          animate="visible"
        />
      </ThirdLineContainer>

      <FourthLineContainer
        as={motion.div}
        variants={headerIntroVariant}
        initial="hidden"
        animate="visible"
      >
        <FourthLine />
        <Square />
      </FourthLineContainer>
    </PageContainer>
  );
};

export default Header;
