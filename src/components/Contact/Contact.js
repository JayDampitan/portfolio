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

import {PageContainer} from '../../subComponents/pageContainer'


// -------------About Page Variants

// const contactVariants = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 3,
//       mass: 0.4,
//       type: "spring",
//       damping: 8,
//     },
//   },
// };

const Contact = () => {
  return (
    <PageContainer
      as={motion.div}

    >
      
    </PageContainer>
  );
};

export default Contact;
