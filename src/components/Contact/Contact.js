import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  ContactForm,
  ContactFormContainer,
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <PageContainer
      as={motion.div}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* -----------Contact Form and Animations */}
      <ContactFormContainer
        as={motion.div}
        variants={contactFormVariant}
        initial="hidden"
        animate="visible"
      />

      {/* ------------------Contact Info Container */}
      <ContactForm
        ref={form}
        onSubmit={sendEmail}
        as={motion.form}
        variants={contactFormVariant}
        initial="hidden"
        animate="visible"
      >
        <h2>Get in touch</h2>
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <TextArea type="text" placeholder="Message" name="message" />
        <SubmitButton type="submit">Send</SubmitButton>
      </ContactForm>

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
        <Square
          as={motion.div}
          variants={squareColor}
          initial="hidden"
          animate="visible"
        />
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
