import React from "react";
import { motion } from "framer-motion";
import {
  ContactForm,
  ContactInfoContainer,
  Input,
  TextArea,
  SubmitButton,
  ContactImageContainer,
  FirstContactContainer,
  FirstContactLine,
  SecondContactContainer,
  SecondContactLine,
  ThirdContactContainer,
  ThirdContactLine,
  FourthContactContainer,
} from "./contactStyles";

import { Square, Circle } from "../../subComponents/backgroundElements";

import {
  firstLineVariant,
  secondLineVariant,
  thirdLineVariant,
  contactFormVariant,
  contactImageVariant,
  squareColor,
  imageHover,
} from "./contactVariants";

import Kovvi from "../../assets/kovvi.png";

import { PageContainer } from "../../subComponents/pageContainer";

const Contact = () => {
  return (
    <PageContainer
      as={motion.div}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* -----------Contact Form and Animations */}
      <ContactForm
        as={motion.div}
        variants={contactFormVariant}
        initial="hidden"
        animate="visible"
      />
      {/* ------------------Contact Info Container */}
      <ContactInfoContainer
        as={motion.div}
        variants={contactFormVariant}
        initial="hidden"
        animate="visible"
      >
        <h2>Get in touch</h2>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <TextArea placeholder="Message" />
        <SubmitButton>Submit</SubmitButton>
      </ContactInfoContainer>
      {/*-------------Contact Image  */}
      <ContactImageContainer
        as={motion.div}
        variants={contactImageVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.img src={Kovvi} alt="Phone" />
      </ContactImageContainer>

      {/* -----------Background Designs and Animations */}
      <FirstContactContainer
        as={motion.div}
        variants={firstLineVariant}
        initial="hidden"
        animate="visible"
      >
        <FirstContactLine />
      </FirstContactContainer>

      <SecondContactContainer
        as={motion.div}
        variants={secondLineVariant}
        initial="hidden"
        animate="visible"
      >
        <Circle />
        <SecondContactLine />
        <Square />
      </SecondContactContainer>

      <ThirdContactContainer
        as={motion.div}
        variants={thirdLineVariant}
        initial="hidden"
        animate="visible"
      >
        <Square  as={motion.div}
          variants={squareColor}
          initial="hidden"
          animate="visible" />
        <ThirdContactLine />
        <Circle />
      </ThirdContactContainer>

      <FourthContactContainer
        as={motion.div}
        variants={firstLineVariant}
        initial="hidden"
        animate="visible"
      >
        <FirstContactLine />
      </FourthContactContainer>
    </PageContainer>
  );
};

export default Contact;
