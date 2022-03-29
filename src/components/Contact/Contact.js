import React from "react";
import { motion } from "framer-motion";

import mail from "../../assets/mail.svg";
import {
  ContactForm,
  ContactInfoContainer,
  Input,
  TextArea,
  SubmitButton,
  ContactImageContainer
} from "./contactStyles";

import { PageContainer } from "../../subComponents/pageContainer";


const Contact = () => {
  return <PageContainer as={motion.div}>
      <ContactForm/>
      <ContactInfoContainer>
        <h2>Get in touch</h2>
      <Input placeholder="Name"/>
      <Input placeholder="Email"/>
      <TextArea placeholder="Message"/>
      <SubmitButton>Submit</SubmitButton>
      </ContactInfoContainer>
      <ContactImageContainer>
        
      </ContactImageContainer>

  </PageContainer>;
};

export default Contact;
