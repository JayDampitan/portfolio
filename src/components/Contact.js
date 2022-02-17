import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import mail from '../assets/mail.svg';


const ContactContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 63vh;
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
  justify-content: space-between;
  align-items: center; 
  padding: 5rem 15rem;
`

const MailLogo = styled.img`
  width: 40%;
  height: 40%;
`;






// -------------About Page Variants

const contactVariants = {
  hidden: {
    x: '-200vw'
  },
  visible: {
    x: 0,
    transition: {
      duration: 3,
      mass: 0.4,
      type: 'spring',
      damping: 8,
    }
  }
};

const Contact = () => {
  return (
    <ContactContainer as = {motion.div}
      variants = {contactVariants}
      initial = 'hidden'
      animate = 'visible'
    >

      <ContactTitle>Contact</ContactTitle>

        <MailLogo src = {mail}></MailLogo>
      
      <ContactContents>
     

      </ContactContents>
      


     
    </ContactContainer>
  )
}

export default Contact;