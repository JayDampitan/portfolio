import React from "react";
import { motion } from "framer-motion";
import {
  ContactForm,
  ContactInfoContainer,
  Input,
  TextArea,
  SubmitButton,
  ContactImageContainer,
  Square,
  Circle,
  FirstContactContainer,
  FirstContactLine,
  SecondContactContainer,
  SecondContactLine,
  ThirdContactContainer,
  ThirdContactLine,
  FourthContactContainer,
  ContactImage,
} from "./contactStyles";

import {
  firstLineVariant,
  secondLineVariant,
  thirdLineVariant,
  contactFormVariant,
  contactImageVariant,
} from "./contactVariants";

import Phone from "../../assets/phone.png";

import { PageContainer } from "../../subComponents/pageContainer";

const Contact = () => {
  return (
    <PageContainer>
      {/* -----------Contact Form and Animations */}
      <ContactForm
        as={motion.div}
        variants={contactFormVariant}
        initial="hidden"
        animate="visible"
      />
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
      <ContactImageContainer
        as={motion.div}
        variants={contactImageVariant}
        initial="hidden"
        animate="visible"
      >
        <ContactImage src={Phone} alt='Phone'/>
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
        <Square />
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
