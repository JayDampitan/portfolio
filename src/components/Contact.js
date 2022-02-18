import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import mail from "../assets/mail.svg";

const ContactContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 63vh;
  padding: 0 13rem;
`;

const ContactTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  width: 100%;
  font-size: 2rem;
`;

const ContactContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
`;

const MailLogo = styled.img`
  width: 30%;
  min-height: 40%;
  padding: 5rem 10rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
`;

const Label = styled.label`
  font-size: 1.8rem;
  margin: 0.5rem;
`;

const Input = styled.input`
  height: 2.5rem;
  width: 25rem;
  border-radius: 0.7rem;
`;

const TextArea = styled.textarea`
  width: 30rem;
  height: 10rem;
  border-radius: 0.7rem;
`;

const Button = styled.button`
  width: 10rem;
  height: 3rem;
  background: yellow;
  border-radius: 0.7rem;
  margin: 1rem;
  font-size: 1.3rem;
  color: #160f29;
`;

// -------------About Page Variants

const contactVariants = {
  hidden: {
    x: "-200vw",
  },
  visible: {
    x: 0,
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
