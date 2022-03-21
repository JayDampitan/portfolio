import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import mail from "../../assets/mail.svg";
import {
  ContactContainer,
  ContactTitle,
  ContactContents,
  MailLogo,
  ContactForm,
  Label,
  Input,
  TextArea,
  Button,
} from "./contactStyles";

// -------------About Page Variants

const contactVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      mass: 0.4,
      type: "spring",
      damping: 8,
    },
  },
};

const Contact = () => {
  return (
    <ContactContainer
      as={motion.div}
      variants={contactVariants}
      initial="hidden"
      animate="visible"
    >
      <ContactTitle>Contact</ContactTitle>
      <ContactContents>
        <MailLogo src={mail}></MailLogo>

        <ContactForm>
          <Label>Name</Label>
          <Input />
          <Label>Email</Label>
          <Input />
          <Label>Message</Label>
          <TextArea />
          <Button>Connect</Button>
        </ContactForm>
      </ContactContents>
    </ContactContainer>
  );
};

export default Contact;
