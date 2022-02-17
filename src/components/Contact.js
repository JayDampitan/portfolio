import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  height: 63vh;
`;

// -------------Portfolio Page Variants

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
      <h2>Contact</h2>
    </ContactContainer>
  );
};

export default Contact;
